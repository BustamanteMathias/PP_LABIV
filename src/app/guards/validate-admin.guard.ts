import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateAdminGuard implements CanActivate {
  constructor(private firebase: FirebaseService) {}
  canActivate(): boolean {
    if (this.firebase.admin) {
      return true;
    }
    return false;
  }
}
