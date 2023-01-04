import { IBoard, ITask, IUser, TASK_STATUS } from '../models/active-sprint-base-models.models';

export const USER_MOCK: IUser = {
  email: 'kjm@kjm.pl',
  password: 'kjmkjm',
  firstName: 'kjm',
  lastName: 'kjm',
};
export const TASKS_MOCK: ITask[] = [
  {
    name: 'Zrobić coś 1',
    description: 'asd',
    children: [
      {
        name: 'dziecko 1',
        description: 'opis',
      },
    ],
  },
];
export const BOARD_MOCK: IBoard = {
  id: '1',
  tasks: TASKS_MOCK,
  users: [
    {
      user: USER_MOCK,
      role: 'manager',
    },
  ],
  name: 'kjm',
};
