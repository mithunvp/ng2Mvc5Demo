import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `    
    <h2>My favorite skill is: {{myskills}}</h2>
    <p>Skill:</p>
    <ul>
      <li *ngFor="let skl of skills">
        {{ skl }}
      </li>
    </ul>
  `
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[1];
}