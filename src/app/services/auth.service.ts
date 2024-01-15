import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {}
 
  public signOutExternal = () => {
    this.cookieService.delete('authCookie');
    console.log('Token cookie deleted');
  };

  saveUser(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'text/plain;charset=UTF-8');
    
    return this.httpClient.post(
      this.path + 'saveUser',
      credentials,
      { headers: header }
    );
  }

  getToken(): string | null {
    return this.cookieService.get('authCookie');
  }

  setToken(tokenPayload:string): void {
    this.cookieService.set('authCookie', tokenPayload, { expires: 1 });
  }

  isTokenPresent(): boolean {
    return this.cookieService.check('authCookie');
  }
}
