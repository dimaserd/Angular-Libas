import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlobCreateService {

  constructor(private http: HttpClient) {}

  getBlob(link: string): Observable<Blob> {
    return this.http.get(link, { responseType: 'blob' })
  }
}