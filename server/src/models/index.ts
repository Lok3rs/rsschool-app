import { Certificate } from './certificate';
import { Course } from './course';
import { CourseEvent } from './courseEvent';
import { CourseManager } from './courseManager';
import { CourseTask } from './courseTask';
import { CourseUser } from './courseUser';
import { Event } from './event';
import { Feedback } from './feedback';
import { Mentor } from './mentor';
import { MentorRegistry } from './mentorRegistry';
import { PrivateFeedback } from './privateFeedback';
import { Registry } from './registry';
import { Stage } from './stage';
import { StageInterview } from './stageInterview';
import { StageInterviewFeedback } from './stageInterviewFeedback';
import { Student } from './student';
import { StudentFeedback } from './studentFeedback';
import { Task } from './task';
import { TaskArtefact } from './taskArtefact';
import { TaskChecker } from './taskChecker';
import { TaskInterviewResult } from './taskInterviewResult';
import { TaskResult } from './taskResult';
import { TaskSolution } from './taskSolution';
import { TaskSolutionChecker } from './taskSolutionChecker';
import { TaskSolutionResult } from './taskSolutionResult';
import { TaskVerification } from './taskVerification';
import { User, ExternalAccount } from './user';
import { ProfilePermissions } from './profilePermissions';

export * from './session';

export {
  Certificate,
  Course,
  CourseEvent,
  CourseManager,
  CourseTask,
  CourseUser,
  Event,
  ExternalAccount,
  Feedback,
  Mentor,
  MentorRegistry,
  PrivateFeedback,
  Registry,
  Stage,
  StageInterview,
  StageInterviewFeedback,
  Student,
  StudentFeedback,
  Task,
  TaskArtefact,
  TaskChecker,
  TaskInterviewResult,
  TaskResult,
  TaskSolution,
  TaskSolutionChecker,
  TaskSolutionResult,
  TaskVerification,
  User,
  ProfilePermissions,
};

export const models = [
  Certificate,
  Course,
  CourseEvent,
  CourseManager,
  CourseTask,
  CourseUser,
  Event,
  Feedback,
  Mentor,
  MentorRegistry,
  PrivateFeedback,
  Registry,
  Stage,
  StageInterview,
  StageInterviewFeedback,
  Student,
  StudentFeedback,
  Task,
  TaskArtefact,
  TaskChecker,
  TaskInterviewResult,
  TaskResult,
  TaskSolution,
  TaskSolutionChecker,
  TaskSolutionResult,
  TaskVerification,
  User,
  ProfilePermissions,
];

export interface IApiResponse<T> {
  data: T | T[] | null;
  error?: {
    message: string;
  };
}
