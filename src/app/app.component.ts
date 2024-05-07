import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { Servers2Component } from './servers2/servers2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServersComponent, FormsModule, Servers2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPractice';
  counted: number;

  constructor() {
      this.counted = 0; // Initialize it to some default value

      if(this.counted==1){
        alert("hello")
      }
    }



}
