import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) {}

  // ...
}