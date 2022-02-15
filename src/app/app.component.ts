import { Component, OnInit } from '@angular/core';
import { PostItem } from 'src/interfaces/youtube';
import data from '../response.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'youtube-client-angular';

  posts: PostItem[] = data.items;

  ngOnInit(): void {
    console.log(this.posts);
  }
}
