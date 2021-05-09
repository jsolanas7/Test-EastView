import { Task } from "./task.model";

export class CitizenDto{
    id: number;
    dni: number;
    firstName: string;
    surName: string;
    tasks: Task[];
    show: boolean = false;
}