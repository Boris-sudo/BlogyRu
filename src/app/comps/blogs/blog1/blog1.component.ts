import { Component, OnInit } from '@angular/core';
import {Blog1Service} from "../../../blogs/blog1.service";

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
  public blog:any;

  constructor(
    private blog2: Blog1Service,
  ) { }

  ngOnInit(): void {
    document.getElementById('main-title')!.innerText='Blog 1';
    this.blog=this.blog2.blog;
  }
}
