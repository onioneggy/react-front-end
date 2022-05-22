export type Employee = {
    id: number,
    name: string,
    salary: number,
    department: Department
}

export enum Department {
    HR = "HR",
    PS = "PS"
}