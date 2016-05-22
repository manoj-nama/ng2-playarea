import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  moduleId: module.id,
	selector: "mk-playlist",
	templateUrl: 'playlist.component.html',
	styleUrls: ['playlist.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class PlaylistComponent {
	query:string;
}