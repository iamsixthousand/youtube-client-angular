import { Pipe, PipeTransform } from '@angular/core';
import { PostItem } from 'src/interfaces/youtube';

@Pipe({
  name: 'sortByCriteria',
})
export class SortByCriteriaPipe implements PipeTransform {
  transform(
    posts: PostItem[],
    filterType: string,
    order?: string,
    wordOrSentance?: string
  ): PostItem[] {
    if (filterType === 'date') {
      return [...posts].sort((a, b) =>
        order === 'decrease'
          ? new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime()
          : new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()
      );
    }

    if (filterType === 'views') {
      return [...posts].sort((a, b) =>
        order === 'decrease'
          ? Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
          : Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    }

    if (filterType === 'word' && wordOrSentance) {
      return posts.filter((post) =>
        post.snippet.title.toLowerCase().includes(wordOrSentance.toLowerCase())
      );
    }

    return posts;
  }
}
