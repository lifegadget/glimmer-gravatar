import Component, { tracked } from "@glimmer/component";

export default class GlimmerApp extends Component {
  @tracked email: string;
  @tracked name: string;

  emailUpdated(evt: KeyboardEvent) {
    console.log('email updated: ', evt.target.value);
    
    this.email = evt.target.value;
  }

  nameUpdated(evt: KeyboardEvent) {
    this.name = evt.target.value;
  }
}
