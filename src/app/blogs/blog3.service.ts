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
      "Здравствуйте мои бессмысленные читатели. Сегодня Аркадий подошёл ко мне с просьбой о рекомендации книги Николаю Петровичу Кирсанову. Я сразу же припомнил книгу, которую недавно дочел, и счет ее подходящей, чтобы порекомендовать Николаю Петровичу:",
      "<i> -- Что бы ему дать? -- спросил Аркадий.<br>-- Да, я думаю, Бюхнерово \"Stoff und Kraft\" на первый случай.</i>",
      "Но видимо напрасно я утруждался, так как староверское представление о мире Николая Петрович не позволяет ему понять это произведение:",
      "<i>-- Гм! -- промычал он. -- Аркадий Николаевич заботится о твоем воспитании. Что ж, ты пробовал читать?<br>-- Пробовал.<br>-- Ну и что же?<br>-- Либо я глуп, либо это все -- вздор. Должно быть, я глуп.</i>",
      "Но если Вам, мои читатели, не под силу такой вызов для ума и интеллекта я крайне рекомендую Вам прочесть эту книгу. \"Stoff und Kraft\" - книга немецкого физика Людвига Бюхнера, где он в форме кратких эссе, приводя цитаты и развивая тезисы, Л. Бюхнер рассуждает о таких свойствах и понятиях, как неуничтожимость материи, неизменность и общность законов природы, человек с его душой и мозгом, идея Бога.",
      "Это книга про новое и не походит для умов, не способных принять новые идеи и идеологии общества, поэтому и не подошла, и, наверное, не подойдёт никому из \"старичков Кирсановых\".",
      "Так что если Вам придет мысль найти себе книгу, чтобы прочесть, очень советую.",
    ]
  }

  constructor() { }
}
