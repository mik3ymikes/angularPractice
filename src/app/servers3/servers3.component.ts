import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { TestyComponent } from '../testy/testy.component';

@Component({
  selector: 'app-servers3',
  standalone: true,
  imports: [TestyComponent],
  templateUrl: './servers3.component.html',
  styleUrl: './servers3.component.css'
})
export class Servers3Component implements OnInit {

  constructor(private accountService:AccountsService){}

ngOnInit(): void {

}

  submitForm(name:string, password:string){
    this.accountService.addAccount({ name, password });

  }

}
