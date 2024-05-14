import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-testy',
  standalone: true,
  imports: [],
  templateUrl: './testy.component.html',
  styleUrl: './testy.component.css'
})
export class TestyComponent implements OnInit {


  accounts=[ {
    name:"blah",
    password:"rah"
  },
  {
    name:"mike",
    password:"miere"
  },
  {
    name:"nick",
    password:"mnidsfdfafdfas"
  },
  {
    name:"josh",
    password:"zelda"
  }
]


  constructor(private loggingService:LoggingService){}

  ngOnInit(): void {
    this.loggingService.logStatusChage()

  }

}

