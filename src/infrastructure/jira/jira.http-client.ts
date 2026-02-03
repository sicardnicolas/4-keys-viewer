export type Truc = { toto: string }

export class JiraHttpClient {
  constructor() {
    /* define http client from parent class */
  }

  public async getData(
    projectName: string,
    startMonth: number,
    startYear: number,
    endMonth: number,
    endYear: number,
  ): Promise<Array<Truc>> {
    console.log(projectName, startMonth, startYear, endMonth, endYear)

    return [{ toto: 'tutu' }]
  }
}
