import {Component, Input} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {ControlGroup, Control, FormBuilder, FORM_DIRECTIVES} from 'angular2/common';
@Component({
  selector: 'compound-type',
  templateUrl: '../templates/compound-type.component.html',
  directives: [FORM_DIRECTIVES]
})
export class CompoundTypeComponent {
  @Input() model;
  @Input() type;
  @Input() title;
}
