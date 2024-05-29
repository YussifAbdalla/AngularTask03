import { ChangeDetectionStrategy, Component } from '@angular/core';


interface IGreeting {
  message: string;
  isMorning: boolean;
}

@Component({
  selector: 'dm-greeting',
  templateUrl: './greeting.partial.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
})
export class GreetingPartial  {

  // if time is less than 12pm, show good morning, else good afternoon
  // TASK:02 create a child common component that displays the greeting message

  private _isMorning: boolean = new Date().getHours() < 12;
  greeting: IGreeting = {
    message: this._isMorning ? 'Good Morning' : 'Good Afternoon',
    isMorning: this._isMorning
  };

}
