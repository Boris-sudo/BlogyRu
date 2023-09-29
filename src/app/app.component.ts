import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front';
  constructor(
    private router: Router,
  ) {
  }
  ngOnInit() {
    if(window.innerWidth<900) this.router.navigate(['not-found-1'])
  }

  check_window_size():boolean{
    return window.innerWidth>800;
  }
}
