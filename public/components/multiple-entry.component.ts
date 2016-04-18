import {Component, Input} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {ControlGroup, Control, FormBuilder, FORM_DIRECTIVES} from 'angular2/common';
import {ModelFactory} from './model-definitions'
@Component({
  selector: 'multiple-entry',
  templateUrl: '../templates/multiple-entry.component.html',
  directives: [FORM_DIRECTIVES]
})
export class MultipleEntryComponent {
  @Input() type;
  @Input() entries;
  @Input() title;
  factory = new ModelFactory();

  addBtnClicked(){
    let entry = this.factory.getInstance(this.type);
    this.entries.push(entry);
  }
  removeBtnClicked(index: number){
    if(index >= this.entries.length){
      alert('Not a valid index');
    }else if(confirm(`Remove this ${this.type}?`)){
        this.entries.splice(index, 1);
    }
  }
}
