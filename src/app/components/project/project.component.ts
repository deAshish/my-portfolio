import {Component, OnInit} from '@angular/core';
import {Project, PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project!: Project[];
  

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.project = this.portfolioService.getProject();
  }
}
