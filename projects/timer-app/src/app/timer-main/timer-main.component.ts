import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscriber, timer, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-timer-main',
  templateUrl: './timer-main.component.html',
  styleUrls: ['./timer-main.component.css']
})
export class TimerMainComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  isStarted = false;
  stepsSeconds: number = 30;
  stepsMins: number = 10;
  time: Observable<Date>;
  subscription: Subscription;

  currentAudit = new Audio();
  updateSettingSeconds(event: { value: number; }) {
    this.stepsSeconds = event.value;
    console.log("steps = " + this.stepsSeconds);
  }


  updateSettingMinutes(event: { value: number; }) {
    this.stepsMins = event.value;
    console.log("steps = " + this.stepsMins);
  }


  ngOnInit() {




  }

  playAudio() {
    let audio = new Audio();
    //audio.src = "../../../assets/audio/labrador-barking-daniel_simon.mp3";
    audio.src = "../../../assets/audio/analog-watch-alarm_daniel-simion.mp3";
    audio.load();
    audio.play();
    return audio;
  }

  started() {

    //labrador-barking-daniel_simon.mp3


    const steps = (this.stepsMins * 60) + this.stepsSeconds;
    console.log("Started!", steps)
    this.isStarted = true;
    const seconds = timer(1, 1000).pipe(
      tap(() => {
        let audio = new Audio();
        audio.src = "../../../assets/audio/clock-ticking-2.mp3";
        audio.load();
        audio.play();
      }),
      take(steps)
    );
    this.subscription = seconds.subscribe((d) => {
      console.log("seconds timers - ", d);

      if (this.stepsSeconds === 0) {
        this.stepsSeconds = 60;
        this.stepsMins = this.stepsMins - 1;
      }
      this.stepsSeconds = this.stepsSeconds - 1;
    },
      (err) => {
        console.log("error", err);
      },
      () => {
        this.isStarted = false;
        let snackBarRef = this._snackBar.open("Time up! :) ", "Stop", { duration: 3 * 1000 });
        snackBarRef.onAction().subscribe((action) => {
          console.log("OnAction - ", action);
        })

        this.currentAudit = this.playAudio();
      })
  }


  stopped() {

    //clock-with-gears

    console.log("Stopped!")
    this.isStarted = false;
    this.subscription.unsubscribe();
    this._snackBar.open("Timer Stopped :( ", "", { duration: 3 * 1000 });
  }

  moving(event) {
    console.log("event emited - moving")
    let audio = new Audio();
    //audio.src = "../../../assets/audio/labrador-barking-daniel_simon.mp3";
    audio.src = "../../../assets/audio/crank-2.mp3";
    audio.load();
    audio.play();
  }
}
