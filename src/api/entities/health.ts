import { DataLayout, PaginatedDataLayout } from "./layout";

export class Health {
  constructor(
    public date: string, // YYYYMMDD
    public services: Array<{
      name: string,
      status: "Good" | "Bad" | "Soso",
    }>
  ) {}
}

export class HealthShow extends DataLayout<Health> {}
export class HealthList extends PaginatedDataLayout<Health> {}
