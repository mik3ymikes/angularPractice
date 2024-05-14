import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
import { Account } from './account';

@Component({
  selector: 'app-testy',
  standalone: true,
  imports: [],
  templateUrl: './testy.component.html',
  styleUrl: './testy.component.css'
})
export class TestyComponent implements OnInit {
 allAccounts=[]



  constructor(private loggingService:LoggingService,
    private accountService:AccountsService
  ){}

  ngOnInit(): void {
    this.loggingService.logStatusChage()
    this. accountsload()


  }


  accountsload():void {
    this.accountService.viewAccounts().subscribe({
      next: (accounts:any) =>{
   
        this.allAccounts=accounts
      },
      error: (error) =>{
        console.error(error)
      }
    })
  }

}

