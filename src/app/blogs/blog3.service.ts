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
export class Blog3Service {
  blog: Blog = {
    header: "Книга которую Базаров рекомендует",
    date: "29.09.2023",
    author: "Базаров Е.В.",
    text: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]
  }

  constructor() { }
}
