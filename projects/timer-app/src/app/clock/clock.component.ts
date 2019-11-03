import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

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
