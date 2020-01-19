import { Component, OnInit } from "@angular/core";

@Component({
  selector: "game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  sante = 0;
  motivation=0;
  current = 0;
  scenes = [];
  constructor() {
    this.scenes = JSON.parse()

  }

  ngOnInit() {}
}
