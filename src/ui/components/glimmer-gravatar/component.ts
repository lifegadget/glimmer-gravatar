import Component, { tracked } from '@glimmer/component';
import { Md5 } from 'ts-md5/dist/md5';

export default class GlimmerGravatar extends Component {
  public defaultImage: string = 'mm';
  @tracked size: number = 300;

  @tracked('size')
  get fontSize(): number {
    return Math.round(this.size * 10 / 16) / 100;
  }

  @tracked('args')
  get isValidEmail() {
    const email: string = this.args.email || '';

    return email.indexOf('@') !== -1 && email.indexOf('.') !== -1
      ? true
      : false;
  }

  @tracked('args')
  get emailHashValue() {
    const email: string = this.args.email || '';
    return this.isValidEmail
      ? Md5.hashStr(email.toLowerCase().trim())
      : undefined;
  }

  @tracked('isValidEmail')
  get emailClassname() {
    return this.isValidEmail ? 'valid' : 'invalid';
  }

  @tracked('emailHashValue', 'provider')
  get avatar() {
    const provider = this.args.provider || 'gravatar';
    return provider === 'gravatar'
      ? `https://www.gravatar.com/avatar/${this.emailHashValue}?s=${this.args.size}+&d=${this.defaultImage}`
      : `https://api.adorable.io/avatars/${this.args.size}/${this.args.email}`
  }
};

