import Component, { tracked } from "@glimmer/component";

export default class GlimmerApp extends Component {
  @tracked email: string;
  @tracked name: string;
  @tracked size: number = 300;

  emailUpdated(evt: KeyboardEvent) {
    this.email = (evt.target as HTMLInputElement).value;
  }

  nameUpdated(evt: KeyboardEvent) {
    this.name = (evt.target as HTMLInputElement).value;
  }

  sizeUpdated(evt: KeyboardEvent) {
    this.size = Number((evt.target as HTMLInputElement).value);
  }
}
