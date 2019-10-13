import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZonkyRealDataService {

  averageLoanAmount$ = new Subject();
  ratingButtonClicked$ = new Subject();

  httpOptions = {
    headers: new HttpHeaders({
      'X-Size': '1000'
    })
  };

  constructor(private http: HttpClient) {
  }

  getLoansAverageAccordingToRating(rating, value) {
    // Its time to show label about
    this.ratingButtonClicked$.next(value);
    // Reset previous average loan value before new value arrive.
    this.averageLoanAmount$.next(null);
    // Get values from API and return calculated average amount.
    const result = this.http.get(`/api/?rating__eq=${rating}&fields=amount`, this.httpOptions)
      .pipe(map(e => {
        const loansAmountArray = (e as Array<any>).map(loan => loan.amount);
        const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
        return arrAvg(loansAmountArray);
      })).subscribe(
        e => this.averageLoanAmount$.next(e),
        () => alert('ERROR\nUuuup, něco se pokazilo'));
  }
}
