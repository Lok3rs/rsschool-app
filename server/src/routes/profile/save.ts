import { OK, BAD_REQUEST } from 'http-status-codes';
import Router from '@koa/router';
import { getRepository } from 'typeorm';
import { ILogger } from '../../logger';
import { ProfilePermissions, User } from '../../models';
import { SaveProfileInfo } from '../../../../common/models/profile';
import { IUserSession } from '../../models/session';
import { setResponse } from '../utils';

export const updateProfile = (_: ILogger) => async (ctx: Router.RouterContext) => {
  const { id: userId } = ctx.state!.user as IUserSession;
  const profileInfo: SaveProfileInfo = ctx.request.body;

  if (!profileInfo) {
    setResponse(ctx, BAD_REQUEST);
    return;
  }

  const {
    isPermissionsSettingsChanged,
    isProfileSettingsChanged,
    permissionsSettings,
    contacts,
    generalInfo,
  } = profileInfo;

  if (isPermissionsSettingsChanged) {
    const profileRepository = await getRepository(ProfilePermissions);
    const userPermissions = await profileRepository.findOne({ where: { userId } });

    await profileRepository.save({
      id: userPermissions ? userPermissions.id : undefined,
      userId,
      ...permissionsSettings,
    });
  }

  if (isProfileSettingsChanged) {
    const [firstName, lastName = ''] = generalInfo.name.split(' ');
    const { locationId, aboutMyself, locationName, educationHistory, englishLevel } = generalInfo;
    const { skype, phone, email, telegram, notes, linkedIn } = contacts;
    await getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({
        firstName,
        lastName,
        locationName,
        locationId,
        educationHistory,
        englishLevel: englishLevel || 'a0',
        aboutMyself: aboutMyself || '',
        contactsTelegram: telegram || '',
        contactsPhone: phone || '',
        contactsEmail: email || '',
        contactsNotes: notes || '',
        contactsSkype: skype || '',
        contactsLinkedIn: linkedIn || '',
      })
      .where('id = :id', { id: userId })
      .execute();
  }

  setResponse(ctx, OK);
};
