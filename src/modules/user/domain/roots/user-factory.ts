import { v4 as uuidv4 } from 'uuid';

import { EmailVO } from '../value-objets/email.vo';
import { FullnameVO } from '../value-objets/fullname.vo';
import { IdVO } from '../value-objets/id.vo';
import { RefreshTokenVO } from '../value-objets/refresh-token.vo';
import { RolesVO } from '../value-objets/roles.vo';
import { User, UserProperties } from './user';

export class UserFactory {
  static create(props: UserProperties) {
    IdVO.create(props.id);
    RefreshTokenVO.create(props.refreshToken);
    RolesVO.create(props.roles);
    FullnameVO.create(props.fullname);
    EmailVO.create(props.email);

    props.refreshToken = uuidv4();

    return new User(props);
  }
}
