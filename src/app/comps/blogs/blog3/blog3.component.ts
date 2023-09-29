import { Component, OnInit } from '@angular/core';
import {Blog3Service} from "../../../blogs/blog3.service";

@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})
export class Blog3Component implements OnInit {
  public blog:any;

  constructor(
    private blog3: Blog3Service,
  ) { }

  ngOnInit(): void {
    this.blog=this.blog3.blog;
  }
}
