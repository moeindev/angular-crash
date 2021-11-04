import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task tracker';
  
  constructor() { }

  ngOnInit(): void {
    //run code here at component runtime
  }

  toggleAddTask() {
    console.log('Toggle add')
  }
}
