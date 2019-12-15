import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersInfo = { name: 'Player', Team: 'Status' };
  players = [
    { name: 'Zubair Bhai', Team: 'Lions' },
    { name: 'Zulfi Bhai', Team: 'Lions' },
    { name: 'Asim', Team: 'Lions' },
    { name: 'Nunu', Team: 'Port' },
    { name: 'Ali', Team: 'Port' },
  ];

  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
