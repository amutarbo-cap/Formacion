import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import type { User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(Auth);

  readonly currentUser$: Observable<User | null> = user(this.auth);

  loginWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
