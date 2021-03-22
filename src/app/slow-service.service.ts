import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlowServiceService {

  constructor() {
  }


  hasError = true;

  public slow(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.hasError) {
          reject();
        } else {
          resolve();
        }
      }, 100000);
    });
    return promise;
  }
}
