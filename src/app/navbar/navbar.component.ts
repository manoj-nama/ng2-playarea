import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: "mk-nav",
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
	query:string;
}