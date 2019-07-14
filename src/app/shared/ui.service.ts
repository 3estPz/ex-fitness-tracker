import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

export class UIService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) {}

  showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, {
      duration
    });
  }
}
