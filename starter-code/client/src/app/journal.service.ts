import { Injectable } from '@angular/core';
import IJournal from './interfaces/IJournal';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class JournalService {

  URL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Promise<Array<IJournal>> {
    return this.httpClient.get(this.URL + '/journal-entries')
    .toPromise()
    .then((journalPayload: Array<IJournal>) => journalPayload);
  }
}
