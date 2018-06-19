import { Injectable} from '@angular/core';
import Task from './task.model';

@Injectable()
export class TaskService {

  tasks: Task[] = [];

  constructor() {
    this.tasks = [...TASKS_MOCK];
  }

  deleteTask(targetTask: Task) {
    this.tasks = this.tasks.filter(task => {
      return task.id !== targetTask.id;
    });
  }
}

const TASKS_MOCK: Task[] = [
  {
    name: 'taks 1',
    id: 1,
    isClosed: true
  },
  {
    name: 'task 2',
    id: 2
  }
];


