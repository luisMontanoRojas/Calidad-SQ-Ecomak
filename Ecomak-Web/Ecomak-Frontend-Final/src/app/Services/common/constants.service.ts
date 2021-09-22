import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly baseAppUrl: string = 'http://localhost:4200/';
  readonly apiUrl: string = 'https://api.ecomak-bolivia.com/';

  constructor() { }
}
