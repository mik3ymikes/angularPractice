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



  constructor(private loggingService:LoggingService){}

  ngOnInit(): void {

  }

}

