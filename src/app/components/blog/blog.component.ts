import {Component} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  post = {
    title: '"Mastering Java Best Practices": Elevate Your Code Quality',
    excerpt:'In the vast world of software development, following best practices is like building a solid foundation for a tall building. Java, well-known for its flexibility and popularity, requires a careful approach to make sure your code is easy to read, maintain, and grow. In this article, we’ll explore the ins and outs of Java best practices, uncovering tips and tricks to improve your coding skills.',
    url: 'https://medium.com/@ghimireera/mastering-java-best-practices-elevate-your-code-quality-328aba36bb58'
  };
  openPost(url: string) {
    window.open(url, 'name', 'width=600,height=400');
  }
}
