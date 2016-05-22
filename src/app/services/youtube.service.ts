import {
  Injectable
} from "@angular/core";

import {
	Http,
  Response,
  URLSearchParams
} from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class YoutubeService {
  
  constructor(private http: Http) {}
  
  private url:string = "https://www.googleapis.com/youtube/v3/search";
  
  fetchData(query:string) {
    
    let params = new URLSearchParams();
    params.set("q", "");
    params.set("part", "snippet,id");
    params.set("key", "API_KEY");
    params.set("maxResults", "50");
    params.set("type", "video");
    
    return this.http.get(this.url, {search: params})
      .map(this.pickData)
      .catch(this.handleError);      
  }
  
  pickData(res: Response) {
    if(res.status < 200 || res.status >= 300) {
      throw new Error("Bad response status" + res.status);
    }
    let body = res.json();
    return body.data || {};
  }
  
  handleError(error: any) {
    let msg = error.message || "Server error";
    console.error(msg);
    return Observable.throw(msg);
  }
  
}