import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {
url: string = 'http://localhost:3000/send';
constructor(private http: HttpClient) { }

sendMessage(messageContent: any) {
  console.log("In post message");
  console.log(JSON.stringify(messageContent));
  return this.http.post(this.url,
  JSON.stringify(messageContent),
  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' }).pipe(
    map(
      (response: any) => {
        console.log(response);
        return response;
      },
      (error: any) => {
        return error;
      }
    )
  )
  }
}

