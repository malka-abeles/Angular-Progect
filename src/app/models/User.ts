
import { JobField } from "./jobField";

export interface User {
    id: string,
    name: string,
    password: string,
    fields: JobField,
}
