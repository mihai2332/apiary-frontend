import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar,
              private zone: NgZone) {
  }

  notify(message: string) {
    this.zone.run(() => {
      this.snackBar.open(message, 'Dismiss', {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        duration: 1400
      });
    });
  }
}
