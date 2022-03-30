import * as moment from 'moment';

export const ACTIVATION_EMAIL_TTL = moment.duration(1, 'days').asMilliseconds();
