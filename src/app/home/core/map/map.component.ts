import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent implements OnInit {
  v:string = 'Map';
  
  constructor() { }

  ngOnInit() {
  }

  change(va:string){
    console.log("hello---")
    if(va == 'Map'){
      this.v = 'Map'
    }
    else if(va == 'Sum'){
      this.v = 'Sum'
    }
    if(va == 'Send'){
      this.v = 'Send'
    }
  }
}
