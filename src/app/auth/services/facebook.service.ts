import { Injectable, NgZone } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromPromise';
import { never } from 'rxjs/observable/never';
import {PlatformService} from '../../core/services/platform.service';

/// TEMP
declare var FB: any;

let JSScript: HTMLScriptElement;

@Injectable()
export class FacebookService {
  /**
   * Handler that will unsubscribe all registered subscription
   * @type {Subject<void>}
   */
  unsubscribe = new Subject<void>();



  // Shows if FB SDK is laoded or not
  // Can be used outside the module to draw Loading status of button
  public FBLoadStatus$ = (): Observable<any> => {
    if (this.platformService.isServer()) { return never(); }
    const fn = (d: any, s: any, id: any): Promise<any> => {
      return new Promise((resolve, reject) => {
        if (JSScript) { return resolve({loaded: true, loading: false, error: undefined}); }
        let js: HTMLScriptElement;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/all.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = (ev) => this.zone.run(() => {
          JSScript = js;
          this.initFB().then(
            () => resolve({ loaded: true, loading: false, error: undefined })
          );
        });
        js.onerror = (err) => resolve({ loaded: false, loading: false, error: err});
      });
    };
    const promise = fn(document, 'script', 'facebook-jssdk');
    return fromPromise(promise);
  }

  private initFB() {

    return new Promise( (resolve, reject) => {
      window['fbAsyncInit'] = () => {
        window['FB'].init({
          appId: '171887576639276', // App ID
          version: 'v2.9'
        });

        resolve();
        // Additional initialization code here
      };
    }
  );

}

  /**
   * Default constructor
   */
  constructor(private zone: NgZone, private platformService: PlatformService) {
  }

  /**
   * Log in using facebook
   */



  login() {
    return new Promise( (resolve, reject) => {
      this.FBLoadStatus$().takeUntil(this.unsubscribe).subscribe( e =>
        FB.login(function(response) {
          if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me?fields=id,first_name,email,last_name', function (res) {
              console.log('Good to see you', res, res.email);
              resolve({ fbuid: res.id, email: res.email });
            });
          }/* else {
            reject(response);
          }*/
        }, {scope: 'email'}));

    });

  }
}
