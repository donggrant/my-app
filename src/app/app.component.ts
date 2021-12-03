import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pet Pals';
  author = "Grant Dong and Hunter Vaccaro";
  name  = ""; 

  showUsers(a: string) {   
    var xmlhttp = new XMLHttpRequest();
    this.name = a;
    console.log(a);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        window.name = this.responseText; 
      }
    };  
    console.log(this.name);
    xmlhttp.open("GET","getUser.php?q="+a,true);
    xmlhttp.send(); 
  }
}