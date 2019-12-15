import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctcl',
  templateUrl: './ctcl.component.html',
  styleUrls: ['./ctcl.component.css']
})
export class CtclComponent implements OnInit {
  ctclInfo = { info: 'Match Summary', teamsName: 'Batting Card' };
  batsmansScores = [
    { name: 'Majid Zubair', team: 'Tigers pro', match: 11, score: 90 },
    { name: 'Ali Haider', team: 'Launcher', match: 12, score: 50},
    { name: 'Hasan', team: 'Launcher', match: 11, score: 124 },
   
  ];


  constructor() { }


  ngOnInit() { }

}