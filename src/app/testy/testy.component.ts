import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

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
    

  }

}

