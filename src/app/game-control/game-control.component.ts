import { Component } from '@angular/core';
import { OddComponent } from '../odd/odd.component';
import { EvenComponent } from '../even/even.component';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [OddComponent,EvenComponent],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  number=0
  interval:any



  start(){

   this.interval=setInterval(()=>{
   this.number+=1
   console.log(this.number)
   }, 1000)

  }



  stop(){
    clearInterval(this.interval)


  }

}
