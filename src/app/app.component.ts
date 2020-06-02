import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  columns: any[] = [
    { id: 1, image: "https://picsum.photos/300/200" },
    { id: 2, image: "https://picsum.photos/300/200" },
    { id: 3, image: "https://picsum.photos/300/200" },
    { id: 4, image: "https://picsum.photos/300/200" },
    { id: 5, image: "https://picsum.photos/300/200" },
    { id: 6, image: "https://picsum.photos/300/200" },
    { id: 7, image: "https://picsum.photos/300/200" },
    { id: 8, image: "https://picsum.photos/300/200" },
    { id: 9, image: "https://picsum.photos/300/200" },
    { id: 10, image: "https://picsum.photos/300/200" },
    { id: 11, image: "https://picsum.photos/300/200" },
    { id: 12, image: "https://picsum.photos/300/200" },
    { id: 13, image: "https://picsum.photos/300/200" },
    { id: 14, image: "https://picsum.photos/300/200" },
  ];
}
