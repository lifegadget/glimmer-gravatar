import Component, { tracked } from "@glimmer/component";

export default class GlimmerApp extends Component {
  @tracked email: string;
  @tracked name: string;
  @tracked size: number = 300;
  @tracked provider: string = 'gravatar';

  emailUpdated(evt: KeyboardEvent) {
    this.email = (evt.target as HTMLInputElement).value;
  }

  nameUpdated(evt: KeyboardEvent) {
    this.name = (evt.target as HTMLInputElement).value;
  }

  changeProvider(value: string, evt: Event) {
    this.provider = value;
  } 

  sizeUpdated(evt: KeyboardEvent) {
    this.size = Number((evt.target as HTMLInputElement).value);
  }

  @tracked('name')
  get initials() {
    const name = this.name || '';
    return name.split(' ').map(n => n.slice(0,1).toUpperCase()).join('');
  }

  @tracked('provider')
  get isGravatar() {
    return this.provider === 'gravatar';
  }
}
