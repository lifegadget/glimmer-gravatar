import Component, { tracked } from "@glimmer/component";

export default class GlimmerApp extends Component {
  @tracked email: string;
  @tracked name: string;
  @tracked size: number = 300;
  @tracked provider: string = 'gravatar';

  emailUpdated(evt: KeyboardEvent) {
    this.email = (evt.target as HTMLInputElement).value;
  }

  changeProvider(value: string) {
    this.provider = value;
  } 

  sizeUpdated(evt: KeyboardEvent) {
    this.size = Number((evt.target as HTMLInputElement).value);
  }

  @tracked('provider')
  get isGravatar() {
    return this.provider === 'gravatar';
  }
}
