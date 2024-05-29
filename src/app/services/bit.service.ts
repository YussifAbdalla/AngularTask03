import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBit } from './bit.model';


@Injectable({providedIn: 'root'})
export class BitService {

    // TASK:03: use HTTPClient to get data from API
    // use the nodejs server in Backend

    constructor(private httpClient: HttpClient) {
      
    }

   
    GetBits(): Observable<IBit[]>{
      return this.httpClient.get<any>('http://localhost:1300/api/bits').pipe(
        map(res => res.data)
      );
      };

    GetBit(id: string): Observable<IBit> {
      return this.httpClient.get<any>('http://localhost:1300/api/bits/' + id).pipe(
        map(res => res.data)
      );
    };
}
