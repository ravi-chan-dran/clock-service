import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock: Observable<Date>;

  constructor() { 
    
  }


}
