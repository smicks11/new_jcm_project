import { Component, OnInit } from '@angular/core';
import { ImageDisplayClass } from '@app/image-display-class.model';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})
export class GallerySectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  imageBuild: ImageDisplayClass[] = [
    new ImageDisplayClass(300, 300, "He is a teacher", "67567211_2257958410976423_7612797037132119489_n.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a boy", "img_2.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a girl", "img_4.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is mix gender", "img_4.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is gay", "67567211_2257958410976423_7612797037132119489_n.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a teacher", "img_4.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a boy", "img_2.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a girl", "img_3.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is mix gender", "img_4.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is gay", "67567211_2257958410976423_7612797037132119489_n.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a teacher", "67567211_2257958410976423_7612797037132119489_n.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a boy", "img_2.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is a girl", "img_3.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is mix gender", "img_4.jpg", "This is the alt text"),
    new ImageDisplayClass(300, 300, "He is gay", "67567211_2257958410976423_7612797037132119489_n.jpg", "This is the alt text"),
  ];

}
