import { ServiceError, ServiceImpl } from './service';

export class AuthServiceError extends ServiceError {
  constructor(readonly code: string, readonly message: string) {
    super('AuthService', code, message);
  }
}

export interface User {
  id: string;
  name: string;
  age: number;
}

class AuthServiceImpl extends ServiceImpl {
  private isSignedIn = false;

  signIn(login: string, password: string): void {
    if (login !== 'admin' || password !== 'admin') {
      throw new AuthServiceError('user_not_found', 'the user was not found');
    }

    this.isSignedIn = true;
  }

  getCurrentUser(): User {
    if (!this.isSignedIn) {
      throw new AuthServiceError(
        'current_user_not_found',
        'the current user was not found'
      );
    }

    return {
      id: '123',
      name: 'Matheus Michels',
      age: 23,
    };
  }
}

export const AuthService = new AuthServiceImpl();
