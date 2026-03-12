import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { MessagesService } from '../../services/messages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, NgFor, NgIf]
})
export class ChatPage {
  private readonly messagesService = inject(MessagesService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly messages$ = this.messagesService.getMessages();
  readonly messageInput = new FormControl('', Validators.required);

  async logout(): Promise<void> {
    await this.authService.logout();
    await this.router.navigate(['/']);
  }

  async sendMessage(): Promise<void> {
    if (!this.messageInput.valid) return;

    const currentUser = await firstValueFrom(this.authService.currentUser$);

    await this.messagesService.addMessage({
      user: currentUser?.displayName ?? 'Anónimo',
      text: this.messageInput.value as string,
      date: Date.now(),
    });

    this.messageInput.reset();
  }
}
