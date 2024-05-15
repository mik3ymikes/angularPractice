import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-servers3',
  standalone: true,
  imports: [],
  templateUrl: './servers3.component.html',
  styleUrl: './servers3.component.css'
})
export class Servers3Component implements OnInit {

  constructor(private accountService:AccountsService){}
  
ngOnInit(): void {

}

  submitForm(name:string, password:string){

  }

}
