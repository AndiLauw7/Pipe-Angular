// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Biodatas } from '../biodata';

@Component({
  selector: 'app-biodata-header',
  templateUrl: './biodata-header.component.html',
  styleUrls: ['./biodata-header.component.css'],
})
export class BiodataHeaderComponent implements OnInit {
  biodata: Biodatas = {
    id: 1,
    name: 'andi safariansyah',
    gender: 'male',
    birthday: new Date(),
    assets: 100000000,
    phone: '9203599430',
    limit: 0.0267,
  };
  constructor() {}

  ngOnInit(): void {}
}
