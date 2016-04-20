import {Component} from 'angular2/core';
import {TempleFormComponent} from './temple-form.component';
import * as Models from './model-definitions'

@Component({
    selector: 'sarvakshetra',
    templateUrl: 'templates/home.html',
    directives: [TempleFormComponent]
})
export class SarvakshetraComponent {
  addTemple() {

  }
}
