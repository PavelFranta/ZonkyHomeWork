import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorButtonNameService {

  private _colorsNames = ['aaaaaa', 'aaaaa', 'aaaa', 'aaa', 'aae', 'aa', 'ae', 'a', 'b', 'c', 'd'];
  get colorsNames(): string[] {
    return this._colorsNames.map(v => 'rating-' + v + '-button');
  }
}
