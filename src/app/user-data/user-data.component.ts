import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { UserDataDirective } from '../user-data.directive';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit, OnDestroy {
  @Input() user: string = "";

  @ViewChild(UserDataDirective, {static: true}) appUserData!: UserDataDirective;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  showUsers(a: any) {    
    this.user = a; 
  }  

}
