import { Component, Input } from '@angular/core';
import { PostItem } from 'src/interfaces/youtube';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  post?: PostItem;

  setCardColorIndicator(): string {
    const dateNow = new Date();
    const dateOfPublish = new Date(this.post!.snippet.publishedAt);
    const timeDifference = Math.floor(
      (dateNow.getTime() - dateOfPublish.getTime()) / 86400000
    );

    if (timeDifference < 7) {
      return 'blue';
    }

    if (timeDifference < 30) {
      return 'green';
    }

    if (timeDifference < 180) {
      return 'yellow';
    }

    return 'default';
  }
}
