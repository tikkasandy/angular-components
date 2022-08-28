import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] =[
    {title: 'Third', text: 'Angular', id: 3},
    {title: 'Second', text: 'TypeScript', id: 2},
    {title: 'First', text: 'JavaScript', id: 1}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts=this.posts.filter(p => p.id !== id)
  }
}
