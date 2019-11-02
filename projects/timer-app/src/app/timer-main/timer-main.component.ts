import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-timer-main',
  templateUrl: './timer-main.component.html',
  styleUrls: ['./timer-main.component.css']
})
export class TimerMainComponent implements OnInit {

  constructor() { }

  time: Observable<Date>;

  ngOnInit() {


    this.time = new Observable<Date>(subscriber => {
      this.triggerTimerAndSchedule(subscriber);
    });


  }

  triggerTimerAndSchedule(subscriber: Subscriber<Date>) {
    const date = new Date();
    console.log("Inside triggerTimerAndSchedule ", date);
    subscriber.next(date);
    setTimeout(() => {
      this.triggerTimerAndSchedule(subscriber);
    }, 1000);

  }

}
