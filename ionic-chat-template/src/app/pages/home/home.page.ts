import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: []
})
export class HomePage {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  async login(): Promise<void> {
    const userCredential = await this.authService.loginWithGoogle();
    if (!userCredential.user) return;

    await this.router.navigate(['/chat']);
  }
}
