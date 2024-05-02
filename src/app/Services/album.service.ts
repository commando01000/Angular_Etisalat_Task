import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private _http: HttpClient) {}
  post: Subject<any> = new Subject();
  getAlbumDetails(id: number) {
    return this._http.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }
  getAlbums(id: number) {
    return this._http.get(
      `https://jsonplaceholder.typicode.com/users/${id}/albums`
    );
  }
  updateAlbum(album: any) {
    return this._http.put(
      `https://jsonplaceholder.typicode.com/albums/${album.id}`,
      album
    );
  }
  deleteAlbum(id: number) {
    return this._http.delete(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }
}
