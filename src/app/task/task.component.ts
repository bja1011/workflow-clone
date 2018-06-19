import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Task from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {

  @Input() onTaskDelete: any;
  @Input() taskData: Task;
  @ViewChild('descriptionElement') descriptionElement: ElementRef;

  constructor(public ts: TaskService,) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.descriptionElement && console.log(this.descriptionElement.nativeElement);
    //
    // if(this.descriptionElement) {
    //   this.descriptionElement.nativeElement.
    // }
  }

  onKeyDown(event) {
    if(event.key === 'Enter' && event.shiftKey) {
      this.descriptionElement.nativeElement.focus();
    }
  }

}
