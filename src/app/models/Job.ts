import { JobField } from "./jobField";

export interface Job {
    fields: JobField,
    name: string,
    area: string,
    requirement: string[],
    fromHome: boolean,
    numHours: number
}
