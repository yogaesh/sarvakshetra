import {Component, Input} from 'angular2/core';
import {MultipleEntryComponent} from './multiple-entry.component'
import {CompoundTypeComponent} from './compound-type.component'
import {PeakTimesComponent} from './peak-times.component';
import * as Models from './model-definitions'

@Component({
    selector: 'localized-temple-detail',
    templateUrl: 'templates/localized-temple-detail.component.html',
    directives: [MultipleEntryComponent, CompoundTypeComponent, PeakTimesComponent]
})
export class LocalizedTempleDetailComponent {
  @Input()
  model;
}
