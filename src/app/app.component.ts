import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { Servers2Component } from './servers2/servers2.component';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServersComponent, FormsModule, Servers2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPractice';
  counted:number=10



clock(){
  console.log("hey")
}


}
// mopre practice


