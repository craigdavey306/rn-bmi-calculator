import { EMAIL, PASSWORD } from '../constants';

export function login(email: string, password: string) {
  email = email.trim();
  password = password.trim();

  if (!email || !password) {
    return false;
  }

  return email === EMAIL && password === PASSWORD;
}
