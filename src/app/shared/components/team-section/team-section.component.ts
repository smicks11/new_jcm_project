import { Component, OnInit } from '@angular/core';
import { CardClass } from '@app/card-class.model';
import { ImageDisplayClass } from '@app/image-display-class.model';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {
  isFlipped = false;
  // index : any;
  constructor() { }

  ngOnInit(): void { }

  flipCard(index: number) {
      this.isFlipped = !this.isFlipped;
      console.error("isFlipped", this.isFlipped);
      console.error(index);

  }

  cardBuild: CardClass[] = [
    new CardClass("Jeff King", "Founder & Director", "#", "#", "#", "#", "team_1.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning.", false),
    new CardClass("Juliet Badmus", "General Secretary", "#", "#", "#", "#", "team_2.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning", false),
    new CardClass("Jeff King", "IT Head", "#", "#", "#", "#", "team_1.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning", false),
    new CardClass("Jolade Oni", "Treasurer", "#", "#", "#", "#", "team_2.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning", false),
  ];

}
