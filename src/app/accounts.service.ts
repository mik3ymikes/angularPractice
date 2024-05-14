import { Injectable } from '@angular/core';
import { Account } from './testy/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {


  constructor() { }

  accounts:Account[]=[ {
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



addAccount(newAccount: { name: string, password: string }) {
  this.accounts.push(newAccount);
}


}
