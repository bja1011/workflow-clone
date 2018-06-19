export default interface Task {
  name: string;
  id: number;
  description?: string;
  subTasks?: Task[];
  isClosed?: boolean;
}
