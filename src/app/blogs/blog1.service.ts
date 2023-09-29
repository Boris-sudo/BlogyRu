import { Injectable } from '@angular/core';

export interface Blog {
  header?: string;
  date?: string;
  author?: string;
  text?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class Blog1Service {
  blog: Blog = {
    header: "Отношение Базарова к литературе и к искусству",
    date: "25.09.2023",
    author: "Базаров Е.В.",
    text: [
      " ",
      "",
      "",
    ]
  }

  constructor() { }
}
