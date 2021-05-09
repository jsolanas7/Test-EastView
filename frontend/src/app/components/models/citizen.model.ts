import { CitizenTask } from "./citizentask.model";

export class Citizen{
    id: number;
    dni: number;
    firstName: string;
    surName: string;
    citizenTasks: CitizenTask[];
}