import { EventEmitter, Injectable } from '@angular/core';
import { Account } from './testy/account';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
accountsChanged=new EventEmitter<Account[]>()

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


viewAccounts(): Observable <Account[]> {
  // return of (this.accountsChanged.emit(this.accounts.slice()))
 return of (this.accounts)
}


}
