import { IUserSchema } from '@feedstein/api-interfaces';

import EmailService from '../services/email-service';
import Events, { Event, EventType } from './pub-sub';

export class RegisterUserEvent extends Event<IUserSchema> {
  constructor(user: IUserSchema) {
    super(EventType.REGISTER, user);
  }
}

function handleSendActivationEmail(event: RegisterUserEvent) {
  EmailService.sendActivationEmail(event.payload);
}

Events.on(EventType.REGISTER, handleSendActivationEmail);
