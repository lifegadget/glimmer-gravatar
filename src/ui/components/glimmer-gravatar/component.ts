import Component, { tracked } from '@glimmer/component';

export default class GlimmerGravatar extends Component {

  @tracked('args')
  get isValidEmail() {
    console.log('checking');
    
    return this.args.email.indexOf('@') !== -1 && this.args.email.indexOf('.') !== -1
      ? true
      : false;
  }
};
