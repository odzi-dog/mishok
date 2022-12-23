import { Controller } from '@nestjs/common';
import {
  CreateTokenRequest,
  GetTokenRequest,
  Token,
  TokensController,
  TokensControllerMethods,
  Token_Type,
} from 'packages/generated/typescript/v1/tokens';
import { Observable } from 'rxjs';

@Controller('Token')
@TokensControllerMethods()
export class TokenServiceController implements TokensController {
  getToken(request: GetTokenRequest): Token {
    return {
      id: 'test',
      type: Token_Type.USER,
    };
  }

  createToken(request: CreateTokenRequest): Token {
    throw new Error('Method not implemented.');
  }
}
