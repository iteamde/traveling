import {Inject, Injectable} from '@angular/core';

export const TOKEN_NAME = 'currentUser';
export const ABOUT_USER = 'aboutUser';

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
  public setAuthToken(token: string, user: object) {
    localStorage.setItem(TOKEN_NAME, token);
    localStorage.setItem(ABOUT_USER, JSON.stringify(user)); // ave user info TODO: just for now because auth is not completed
  }


  public clearAuthToken() {
    localStorage.removeItem(TOKEN_NAME);
  }
}
