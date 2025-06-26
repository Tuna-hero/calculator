import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorApiService {
  private baseUrl = 'http://s1.divlop.com:5001';
  private headers = new HttpHeaders({
    'Authorization': 'Bearer XVdPpQU6TrGBvqS2Vf4jhVfxpQfimsxIwt8Rp4Sq3Soh2pRvvDTu40i27ZtdhRJ5' 
  });

  constructor(private http: HttpClient) {}

  add(a: number, b: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/calculator/add`, { parameter1: a, parameter2: b }, { headers: this.headers });
  }

  subtract(a: number, b: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/calculator/subtract`, { parameter1: a, parameter2: b }, { headers: this.headers });
  }

  multiply(a: number, b: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/calculator/multiply`, { parameter1: a, parameter2: b }, { headers: this.headers });
  }

  divide(a: number, b: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/calculator/divide`, { parameter1: a, parameter2: b }, { headers: this.headers });
  }

  squareRoot(a: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/calculator/squareRoot`, { parameter1: a }, { headers: this.headers });
  }

  power(a: number, b: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/calculator/power`, { parameter1: a, parameter2: b }, { headers: this.headers });
  }

  getHistory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/history/getHistory`, { headers: this.headers });
  }

  clearHistory(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/history/clearHistory`, { headers: this.headers });
  }
}
