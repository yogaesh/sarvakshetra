import {Component} from 'angular2/core';
import {MultipleEntryComponent} from './multiple-entry.component'
import * as Models from './model-definitions'

@Component({
    selector: 'my-app',
    templateUrl: 'templates/test.html',
    directives: [MultipleEntryComponent]
})
export class AppComponent {
  shrines = new Array<Models.Shrine>();
  attractions = new Array<Models.Attraction>();
}
