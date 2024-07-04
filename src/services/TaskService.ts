import { TaskPriorityEnum } from "../enums/tasks";
import { fetcher } from "../utils/featcher";
import { queryFetcher } from "../utils/queryFeatchetr";
import config from "config";
const TASK_SERVICE = config.get("BACKEND_URL");

export class TaskService {
  static GET_TASKS = `${TASK_SERVICE}/tasks/getTasks`;
  static ADD_TASK = `${TASK_SERVICE}/tasks/addTask`;
  static UPDATE_TASK = `${TASK_SERVICE}/tasks/updateTask`;
  static DELETE_TASK = `${TASK_SERVICE}/tasks/deleteTask`;

  static async getTask(payload: {
    page: number;
    size: number;
    taskStatus: string;
    createdByIds: string;
    search: string;
  }) {
    return await queryFetcher({
      method: "GET",
      url: TaskService.GET_TASKS,
      params: payload,
    });
  }

  static async createTask(payload: {
    title: string;
    assignedTo?: string;
    dueDate?: string;
    status?: string;
    priority?: TaskPriorityEnum | undefined;
    reminderStartDate?: string;
  }) {
    return await fetcher({
      method: "POST",
      url: TaskService.ADD_TASK,
      data: payload,
    });
  }

  static async updateTask(payload: {
    taskId: string;
    title?: string;
    assignedTo?: string;
    dueDate?: string;
    priority?: TaskPriorityEnum | undefined;
    reminderStartDate?: string;
    status?: string;
  }) {
    return await fetcher({
      method: "PUT",
      url: TaskService.UPDATE_TASK,
      data: payload,
    });
  }

  static async deleteTask(payload: { taskIds: string[] }) {
    return await fetcher({
      method: "DELETE",
      url: TaskService.DELETE_TASK,
      data: payload,
    });
  }
}
