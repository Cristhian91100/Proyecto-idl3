// app.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
