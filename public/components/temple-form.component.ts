import {Component, Input} from 'angular2/core';
import {LocalizedTempleDetailComponent} from './localized-temple-detail.component'
import {MultipleEntryComponent} from './multiple-entry.component'
import * as Models from './model-definitions'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'temple-form',
    templateUrl: 'templates/temple-form.component.html',
    directives: [LocalizedTempleDetailComponent, MultipleEntryComponent]
})
export class TempleFormComponent {
  @Input()
  operation;
  modelFactory = new Models.ModelFactory();
  templeDetails;
  localizedDetails = new Array<Models.LocalizedTempleDetail>();
  images = new Array<Models.Media>();
  videos = new Array<Models.Media>();

  constructor(){
    this.templeDetails = this.modelFactory.getInstance('TempleDetail');
    this.templeDetails.localizedDetails = this.localizedDetails;
    this.templeDetails.images = this.images;
    this.templeDetails.videos = this.videos;
  }

  saveTemple(){
    Observable.of(this.templeDetails).map(x => console.log(JSON.stringify(x))).subscribe();
  }
  addTempleDetail(){
    let templeDetail = this.modelFactory.getInstance('LocalizedTempleDetail');
    templeDetail.constructor();
    this.localizedDetails.push(templeDetail);
  }
  removeTempleDetail(index){
    this.localizedDetails.splice(index, 1);
  }
}
