import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumModel } from '../Models/albumModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private URL_ALBUM = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  httpGetAlbum(): Observable<AlbumModel[]> {
    return this.http.get<AlbumModel[]>(this.URL_ALBUM);
  }
}
