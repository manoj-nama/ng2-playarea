import { Component, ViewEncapsulation } from "@angular/core";
import { MdButton } from "@angular2-material/button";

@Component({
  moduleId: module.id,
  selector: "mk-player",
  templateUrl: 'player.component.html',
	styleUrls: ['player.component.css'],
  directives: [MdButton],
	encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {

}
