import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPiece } from './piece.model';

@Injectable({providedIn: 'root'})
export class PieceService {

    // TASK:03: use HTTPClient to get data from API
    // use the nodejs server in Backend

    constructor(private httpClient: HttpClient) {
      
    }

   
    GetPieces(): Observable<IPiece[]>{
      return this.httpClient.get<any>('http://localhost:1300/api/pieces').pipe(
        map(res => res.data)
      );
      };

    GetPiece(id: string): Observable<IPiece> {
      return this.httpClient.get<any>('http://localhost:1300/api/pieces/' + id).pipe(
        map(res => res.data)
      );
    }
}
