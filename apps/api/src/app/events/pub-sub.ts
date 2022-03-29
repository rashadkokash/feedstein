import { EventEmitter } from 'events';

export enum EventType {
  REGISTER = 'REGISTER',
}

export abstract class Event<T> {
  constructor(readonly type: EventType, readonly payload: T) {}
}

class CEventEmitter extends EventEmitter {
  emit<T>(eventType: EventType, payload: Event<T>): boolean {
    return super.emit(eventType, payload);
  }
}

const Events = new CEventEmitter();

export default Events;
