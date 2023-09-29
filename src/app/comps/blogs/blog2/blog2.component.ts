import { Component, OnInit } from '@angular/core';
import {Blog2Service} from "../../../blogs/blog2.service";

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})
export class Blog2Component implements OnInit {
  public blog:any;

  constructor(
    private blog2: Blog2Service,
  ) { }

  ngOnInit(): void {
    document.getElementById('main-title')!.innerText='Blog 2';
    this.blog=this.blog2.blog;
  }
}
