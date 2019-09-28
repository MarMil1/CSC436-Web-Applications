import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  res: string;

  constructor() { }

  likeImage(like: boolean) {
    this.res = 'Image is liked == ' + like.toString();
    return this.res;
  }
}
