import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  phone: string = "+1 (641) 2332-411";
  email: string = "asghimire17@gmail.com";
  address: string = "Chicago Illonis, USA";
  degree: string = "Master";
  workStatus: string = " Open to Work";
  sps: string = "Experienced Software Engineer with 3 years of expertise in web-based software development" +
                ", automation, and enhancing business operations. Skilled in requirement analysis, quality" +
                " assurance, project documentation, and enterprise architecture implementation. Proficient in" +
                " Java, Spring Boot, and React for end-to-end software development.";

  downloadResume() {
    const resumeFileName = 'Ashish_Ghimire-Resume.pdf';
    const resumeFilePath = `/assets/resume/${resumeFileName}`;

    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = resumeFileName;
    link.click();
  }
}
