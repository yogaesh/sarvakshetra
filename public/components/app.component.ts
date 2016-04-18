import {Component} from 'angular2/core';
import {MultipleEntryComponent} from './multiple-entry.component'
import {CompoundTypeComponent} from './compound-type.component'
import {PeakTimesComponent} from './peak-times.component';
import * as Models from './model-definitions'

@Component({
    selector: 'my-app',
    templateUrl: 'templates/test.html',
    directives: [MultipleEntryComponent, CompoundTypeComponent, PeakTimesComponent]
})
export class AppComponent {
  shrines = new Array<Models.Shrine>();
  attractions = new Array<Models.Attraction>();
  events = new Array<Models.Event>();
  schedule = new Array<Models.Schedule>();
  address = new Models.Address();
  paymentDetails = new Models.PaymentDetails();
  contactDetails = new Models.ContactDetails();
  peakTime = new Models.PeakTime();
  specialties = new Array<string>();
  name: string;
  otherNames: string;

  onSubmit() {
    let result = {};
    result['shrines'] = this.shrines;
    alert(JSON.stringify(result));
  }
}
