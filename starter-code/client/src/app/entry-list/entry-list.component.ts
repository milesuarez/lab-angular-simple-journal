import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import IJournal from '../interfaces/IJournal';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  allJournal: Array<IJournal>;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getAllPost()
    .then((journalPayload: Array<IJournal>) => this.allJournal = journalPayload);
  }

}
