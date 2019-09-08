import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadPdfService {

  constructor(private http: HttpClient) { }

  public downloadPdf(pdfUrl: string): any {
        let url = pdfUrl;
        let headers = new HttpHeaders({'Content-Type': 'application/pdf'});
        return this.http.get(url, { headers: headers, responseType: 'blob' }).pipe(map((data: any)  => {
          let blob = new Blob([data], {
             type: 'application/pdf'
          });
          return blob;
        }));
      }
}