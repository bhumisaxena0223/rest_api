import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return {
      msg: 'I have signin',
    };
  }

  signup() {
    return 'I have signup';
  }
}
