import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { UserDataComponent } from './user-data/user-data.component';
import { RecordsService } from './records.service';
import { HttpClient } from '@angular/common/http';

interface userData {
  array: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('usercontainer', { read: ViewContainerRef })
  entry!: ViewContainerRef;

  title = 'Pet Pals';
  author = "Grant Dong and Hunter Vaccaro";
  name: string = ""; 

  records: any = [];

  constructor(private recordsService: RecordsService, private resolver: ComponentFactoryResolver) {}

  createComponent(name : string) {
    this.entry.clear();  
    const componentRef = this.entry.createComponent(UserDataComponent); 
    this.recordsService.getData(name).subscribe(result => { this.records = result.array});
    componentRef.instance.showUsers(this.records);  
  } 

   
}