import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import Task from '../task.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  deleteTaskCallback: any;

  constructor(public taskService: TaskService,) {
  }

  ngOnInit() {
  }



}
