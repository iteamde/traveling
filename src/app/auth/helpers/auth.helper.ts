import { Injectable } from '@angular/core';

export const TOKEN_NAME = 'currentUser';
export const ABOUT_USER = 'aboutUser';

/**
 * Auth helper service
 */
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

  /**
   * Delete auth token from local storage
   */
  public clearAuthToken() {
    localStorage.removeItem(TOKEN_NAME);
  }
}
