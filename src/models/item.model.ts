export class Items {
  public id?: string;
  constructor(
    public author: string,
    public description: string,
    public download_url: string = "",
    public height: string = "",
    public url: string = "",
    public width: string = "",
  ) {}
}
