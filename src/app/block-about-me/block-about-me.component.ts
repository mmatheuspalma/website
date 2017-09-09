import { Component } from '@angular/core';

@Component({
  selector: 'app-block-about-me',
  templateUrl: './block-about-me.component.html',
  styleUrls: ['./block-about-me.component.css']
})
export class BlockAboutMeComponent {

  front_end_skills: string[];

  back_end_skills: string[]; 

  constructor() { 
      this.front_end_skills = [
        'HTML5', 
        'CSS3', 
        'JS', 
        'Typescript', 
        'Jquery',
        'Angular'
      ];

      this.back_end_skills = [
        'PHP',
        'SQL',
        'Kohana PHP',
        'Laravel PHP',
      ];
  }

}
