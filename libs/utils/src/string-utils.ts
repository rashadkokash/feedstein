import * as bcrypt from 'bcryptjs';
import * as uuid from 'uuid';

export function getRandomString() {
  return uuid.v4();
}

export async function hashString(rawString: string): Promise<string> {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(rawString, salt);
  return hash;
}
