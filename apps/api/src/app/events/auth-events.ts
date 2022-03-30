import { IUserSchema } from '@feedstein/api-interfaces';

import EmailService from '../services/email-service';
import logger from '../infra/logger';
import Events, { Event, EventType } from './pub-sub';

export class RegisterUserEvent extends Event<IUserSchema> {
  constructor(user: IUserSchema) {
    super(EventType.REGISTER, user);
  }
}

async function handleSendActivationEmail(event: RegisterUserEvent) {
  try {
    await EmailService.sendActivationEmail(event.payload);
  } catch (e) {
    logger.error(e);
  }
}

Events.on(EventType.REGISTER, handleSendActivationEmail);
