import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { ISubscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  subscription: ISubscription;
  message: string = '';

  constructor (private appService: AppService) {}

  public ngOnInit (): void {
    this.subscription = this.appService.getMessage().subscribe((res: string) => this.message = res);
  }

  public ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }
}
