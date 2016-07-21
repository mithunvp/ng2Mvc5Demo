import {Component} from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
@Component({
    selector: 'my-app',
    template: `<md-list>
   <md-list-item> MVC 5 </md-list-item>
   <md-list-item> Angular 2 </md-list-item>
   <md-list-item> Visual Studio 2015 </md-list-item>
</md-list>`,
    directives: [
        MD_LIST_DIRECTIVES,
    ],
})
export class AppComponent { }