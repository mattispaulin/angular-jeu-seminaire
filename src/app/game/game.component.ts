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
  retard=0;
  current = 0;
  scenes = data_scenes;

  constructor() {

  }

  update(link){
    this.current = link.jumpto;
    this.sante = this.sante - link.drop_sante;
    this.motivation = this.motivation - link.drop_motivation;
    this.retard = this.retard + link.retard;
  }

  ngOnInit() {}
}
