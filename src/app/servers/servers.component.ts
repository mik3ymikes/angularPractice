import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

//   serverStatus:string="offline"
//   serverOn:boolean=false
//   server:string=""


// username=''



// reset(){
//   this.username=''
// }

hide=true



display(){
this.hide=!this.hide
console.log(this.hide)

}






}




