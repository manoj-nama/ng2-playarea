import { 
	Component, 
	ViewEncapsulation, 
	OnInit, 
} from "@angular/core";

import { HTTP_PROVIDERS } from '@angular/http';

import { YoutubeService } from "../services/youtube.service";

@Component({
	moduleId: module.id,
	selector: "mk-list",
	templateUrl: 'list.component.html',
	styleUrls: ['list.component.css'],
	providers: [YoutubeService, HTTP_PROVIDERS],
	encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
	items:string[];
	
	ngOnInit() {
		this.items = [
			"one",
			"two",
			"three"
		]
	}
}