import { Component, OnInit } from "@angular/core";
import data_scenes from "./scenes.json";

@Component({
  selector: "game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  sante = 100;
  motivation=100;
  temps=100;
  current = 0;
  scenes = data_scenes;

  constructor() {

  }

  update(jumpto:number){
    this.current = jumpto;
  }

  ngOnInit() {}
}
