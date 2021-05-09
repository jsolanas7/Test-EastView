import { Citizen } from "./citizen.model";
import { Task } from "./task.model";

export class CitizenTask{
    citizenID: number;
    taskID: number;
    task : Task;
    citizen : Citizen;
}