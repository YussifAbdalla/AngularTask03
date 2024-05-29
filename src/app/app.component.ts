import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GreetingPartial } from './components/common/greeting.partial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, GreetingPartial],
  templateUrl: './app.component.html'
})
export class AppComponent {


}
