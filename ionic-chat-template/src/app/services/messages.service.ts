import { inject, Injectable } from '@angular/core';
import { Database, list, orderByChild, push, query, ref } from '@angular/fire/database';
import { map, Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private readonly db = inject(Database);
  private readonly messagesRef = ref(this.db, 'messages');

  getMessages(): Observable<Message[]> {
    const orderedQuery = query(this.messagesRef, orderByChild('date'));
    return list(orderedQuery).pipe(
      map((changes) => changes.map(({ snapshot }) => snapshot.val() as Message)),
    );
  }

  addMessage(message: Message): Promise<void> {
    return push(this.messagesRef, message);
  }
}
