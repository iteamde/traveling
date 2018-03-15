import {Inject, Injectable} from '@angular/core';

export const TOKEN_NAME = 'currentUser';

@Injectable()
export class AuthHelper {

  constructor( ) {
  }

  /**
   * Returns authentication token stored at local storage
   * @return {string|null}
   */
  public getAuthToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  /**
   * Stores authentication token
   * @param token
   */
  public setAuthToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
  }


  public clearAuthToken(){
    localStorage.removeItem(TOKEN_NAME);
  }
}
