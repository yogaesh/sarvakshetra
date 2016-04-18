import {Component, Input} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {ControlGroup, Control, FormBuilder, FORM_DIRECTIVES} from 'angular2/common';
import {PeakTime} from './model-definitions'
@Component({
  selector: 'peak-times',
  templateUrl: '../templates/peak-times.component.html',
  directives: [FORM_DIRECTIVES]
})
export class PeakTimesComponent {
  //TODO: Add logic to pull this info from service
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  @Input()
  model : PeakTime;
}
