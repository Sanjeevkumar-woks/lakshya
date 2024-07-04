import { TaskPriorityEnum } from "../enums/tasks";
import { fetcher } from "../utils/featcher";
import { queryFetcher } from "../utils/queryFeatchetr";
import config from "config";
const TASK_SERVICE = "http://localhost:8080/task-service";

export class TasksService {
  static GET_TASKS = `${TASK_SERVICE}/tasks/getTasks`;
  static ADD_TASK = `${TASK_SERVICE}/tasks/addTask`;
  static UPDATE_TASK = `${TASK_SERVICE}/tasks/updateTask`;
  static DELETE_TASK = `${TASK_SERVICE}/tasks/deleteTask`;

  static async getTask(payload: {
    page: number;
    size: number;
    taskIds?: string[];
    taskStatus?: string;
    createdByIds?: string;
    appliedFilters?: {};
    searchKeyword?: string;
  }) {
    return await queryFetcher({
      method: "GET",
      url: TasksService.GET_TASKS,
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
      url: TasksService.ADD_TASK,
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
      url: TasksService.UPDATE_TASK,
      data: payload,
    });
  }

  static async deleteTask(payload: { taskIds: string[] }) {
    return await fetcher({
      method: "DELETE",
      url: TasksService.DELETE_TASK,
      data: payload,
    });
  }
}
