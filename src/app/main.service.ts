import { TOKEN1 } from './token';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class MainService {

  constructor(@Inject(TOKEN1) private api: string) {
       console.log(this.api);
  }

  getEndpoint(){
    return this.api;
  }
}

