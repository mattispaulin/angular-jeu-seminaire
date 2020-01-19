import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

export interface Scene{
  img:string;
}

@Component({
  selector: "game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
@Injectable()
export class GameComponent implements OnInit {
  sante = 0;
  motivation=0;
  current = 0;
  scenes;
  ref_img;

  constructor(private http: HttpClient, private sanitizer :DomSanitizer) {
    const my_url = 'https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_5d19c69d33abca6f6271d75f371d4241c0d6b2d1.600x338.jpg?t=1573759171';
    this.ref_img = this.sanitizer.bypassSecurityTrustStyle("{'background-image': 'url("+my_url+")'}")

    this.scenes = this.http.get<Array<Scene>>("https://github.com/mattispaulin/angular-jeu-seminaire/raw/master/assets/scenes.json");
  }

  ngOnInit() {}
}
