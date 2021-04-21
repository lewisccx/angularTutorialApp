import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) {

   }

   getRequest(url: string):Observable<any>{
     return this.client.get(url).pipe(
       catchError(this.handleError)
     )
   }

   postRequst(url: string, data:any, option?: any): Observable<any>{
     return this.client.post(url, data, option).pipe(
      catchError(this.handleError)
    );
   }

   updateRequst(url: string, data:any, option?: any): Observable<any>{
    return this.client.put(url, data, option).pipe(
      catchError(this.handleError)
    );
  }

   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

