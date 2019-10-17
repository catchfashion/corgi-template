export class Health {
  // Mock methods
  public static async findByDate(date: string) {
    return (await this.findAll()).find(h => h.date.toString() === date);
  }

  public static async findAll() {
    return [
      new this(new Date("2019-09-01"), [
        { name: "Good Service", status: "Good" },
        { name: "Bad Service", status: "Bad" },
        { name: "Soso Service", status: "Soso" },
      ]),
      new this(new Date("2019-09-02"), [
        { name: "Good Service", status: "Good" },
        { name: "Bad Service", status: "Good" },
        { name: "Soso Service", status: "Good" },
      ]),
      new this(new Date("2019-09-03"), [
        { name: "Good Service", status: "Bad" },
        { name: "Bad Service", status: "Bad" },
        { name: "Soso Service", status: "Bad" },
      ]),
    ];
  }

  constructor(
    public date: Date,
    public services: Array<{
      name: string,
      status: "Good" | "Bad" | "Soso",
    }>
  ) {
  }
}
