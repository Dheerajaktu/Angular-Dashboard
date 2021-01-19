import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { HttpGetModel } from '../Models/httpGetModel';
import { finalize } from 'rxjs/internal/operators/finalize';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API_URL: string = 'https://jsonplaceholder.typicode.com/posts/1/comments';


  constructor(private http: HttpClient) { }

  httpGetData(): Observable<HttpGetModel[]> {
    return this.http.get<HttpGetModel[]>(this.API_URL);
    // ).catch(this.errorHandler);

  }
  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Server Error");

  // }

}
