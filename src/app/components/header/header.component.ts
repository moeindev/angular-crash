import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task tracker';
  showAddTask: Boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value);
   }

  ngOnInit(): void {
    //run code here at component runtime
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
