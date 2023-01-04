export enum TASK_STATUS {
  TO_DO = 'ToDo',
  IN_PROGRESS = 'InProgress',
  IN_REVIEW = 'InReview',
  PASSED_REVIEW = 'PassedReview',
  QA = 'Qa',
  DONE = 'Done',
}

export interface IBoardUser {
  user: IUser;
  role: string;
}

export interface IBoard {
  id?: string;
  tasks: ITask[];
  users: IBoardUser[];
  name: string;
}

export interface IUser {
  email: string;
  password: string;
  createdAt?: Date;
  firstName: string;
  lastName: string;
  keys?: string[];
}

export interface ITask {
  name: string;
  description: string;
  status?: TASK_STATUS;
  children?: ITask[];
  board?: IBoard;
  assignee?: IUser;
  version?: string;
}

export interface TaskPostDTO {
  name: string;
  description: string;
  board: {
    id: string;
  };
  parent: {
    id: string;
  };
}
