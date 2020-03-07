import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {ApiService} from "./api.service";
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService,
    private http: HttpClient
  ) { }

  initUser() {
    const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getMyInfo().toPromise()
            .then(user => {
              this.currentUser = user;
            });
        }
      })
      .catch(() => null);
    return promise;
  }

  resetCredentials() {
    return this.apiService.get(this.config.reset_credentials_url);
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url).pipe(map(user => this.currentUser = user));
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

  uploadMedia(form : FormData) {
    return this.apiService.post(this.config.uploadMedia_url,form)
  }

}
