import { Injectable } from '@angular/core';

export interface Blog {
  header?: string;
  date?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Blog2Service {
  blog: Blog = {
    header: "О красоте: Размышления Павла Петровича Кирсанова.",
    date: "27.09.2023",
    author: "Кирсанов П.П.",
  }

  constructor() { }
}
