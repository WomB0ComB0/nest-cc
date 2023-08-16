import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  // defined here first
  findUserComments(userId: string) {
    return 'this is the comments of the user';
  }
}
