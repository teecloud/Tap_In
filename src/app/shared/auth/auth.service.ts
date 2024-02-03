import { Injectable } from '@angular/core';
import { AuthenticateModel, TokenAuthService } from '../api-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenAuthService: TokenAuthService) { }

  authenticate(authenticateModel: AuthenticateModel){
    return this.tokenAuthService.apiTokenAuthAuthenticatePost(authenticateModel);
  }
}
