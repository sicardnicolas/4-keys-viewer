export type Truc = { toto: string }

export class JiraImporter {
  public async getData(
    uploadedFile: File,
  ): Promise<Array<Truc>> {
    console.log(uploadedFile);

    const reader = new FileReader();
    let csvContent;

    if (!uploadedFile.name.includes(".csv")) {
      throw Error("incorrect file type. Must be a CSV file.")
    }

    reader.onload = (res) => {
      csvContent = res.target?.result;
    }
    reader.onerror = (err) => console.log(err);
    reader.readAsText(uploadedFile);

    console.log(csvContent);

    return [{ toto: 'tutu' }]
  }
}
