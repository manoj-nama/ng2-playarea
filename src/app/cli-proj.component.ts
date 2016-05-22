import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ListComponent } from "./list/list.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { PlayerComponent } from "./player/player.component";

@Component({
  moduleId: module.id,
  selector: 'cli-proj-app',
  templateUrl: 'cli-proj.component.html',
  styleUrls: ['cli-proj.component.css'],
  directives: [
    NavbarComponent, 
    ListComponent, 
    PlaylistComponent,
    PlayerComponent
  ]
})
export class CliProjAppComponent {
  title = 'ng-cli is awesome!';
}
