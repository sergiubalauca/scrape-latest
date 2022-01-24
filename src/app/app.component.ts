import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './domain/Auth/_services';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isOffline: boolean;
  private isOfflineSubscription: Subscription;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private authenticationService: AuthenticationService
  ) {
    // this.subscribeToNetworkStatus();
  }

  async logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  // private subscribeToNetworkStatus() {
  //   this.isOfflineSubscription = this.connectivityStateService.connectivity$
  //     .pipe(map((status) => status.isConnected !== true))
  //     // tslint:disable-next-line: deprecation
  //     .subscribe((isOffline) => {
  //       this.isOffline = isOffline;
  //       if (isOffline) {
  //         this.document.body.classList.add('offline-device');
  //       } else {
  //         this.document.body.classList.remove('offline-device');
  //       }
  //     });
  // }
}
