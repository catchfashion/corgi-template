export class DataLayout<T> {
  public data!: T;
}

export class PaginatedDataLayout<T> {
  public data!: T[];
  public paging!: {
    after?: string;
    before?: string;
  };
}
