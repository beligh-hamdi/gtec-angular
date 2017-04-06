export class Book {
  id: number;
  title: string;
  description?: string;

  /*
  constructor(public id: number,
              public title: string,
              public description?: string){
  }
  */

  createBook(title: string, description?: string) {
    this.title = title;
    this.description = description;
  }

}
