import { Injectable } from '@nestjs/common';
import { CollectionService } from '../collection/collection.service'

@Injectable()
export class AuthService {
  constructor(private collection: CollectionService) {}
  signin() {
    return {
      msg: 'I have signin',
    };
  }

  signup() {
    return 'I have signup';
  }
}
