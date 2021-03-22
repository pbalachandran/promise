import { Component } from '@angular/core';
import {SlowServiceService} from './slow-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'promise';

  constructor(private slowServiceService: SlowServiceService) {
    this.tryPromise();
  }


  public tryPromise(): void {
    this.slowServiceService.slow().then(
      (resolvedValue) => console.log('++++++++++++++++ ' + resolvedValue),
      (rejectedValue) => console.log('---------------- ' + rejectedValue)
    );
  }
}
