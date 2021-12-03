import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecordsService { 
  constructor(private http: HttpClient) { }

  getData(name: string) { 
    return this.http.get("https://cs4640.cs.virginia.edu/gdd7jh/sprint4/getUser.php?q="+name, {responseType: 'text'})
  }
}
