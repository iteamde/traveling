import {Inject, Injectable} from '@angular/core';
import {TokenStorage} from './token.storage';
import * as jwtDecode from 'jwt-decode';

export const TOKEN_NAME = 'token';

@Injectable()
export class AuthHelper {

  constructor(@Inject('TokenStorage') private storage: TokenStorage) {
  }

  /**
   * Returns authentication token stored at local storage
   * @return {string|null}
   */
  public getAuthToken() {
    return this.storage.getItem(TOKEN_NAME);
  }

  /**
   * Stores authentication token
   * @param token
   */
  public setAuthToken(token: string) {
    this.storage.setItem(TOKEN_NAME, token);
  }

  /**
   * Returns audience encoded in token
   * @param token
   * @return {string|string|any|string}
   */
  public getTokenAudience(token: string) {
    return jwtDecode(token).aud;
  }

  /**
   * Returns if audience is private
   * @param audience
   */
  public isPrivateAudience(audience: string) {
    return audience.indexOf('private') == 0;
  }

  public clearAuthToken(){
    this.storage.removeItem(TOKEN_NAME);
  }
}
