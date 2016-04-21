System.register(['angular2/core', './localized-temple-detail.component', './multiple-entry.component', './model-definitions', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, localized_temple_detail_component_1, multiple_entry_component_1, Models, Rx_1;
    var TempleFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localized_temple_detail_component_1_1) {
                localized_temple_detail_component_1 = localized_temple_detail_component_1_1;
            },
            function (multiple_entry_component_1_1) {
                multiple_entry_component_1 = multiple_entry_component_1_1;
            },
            function (Models_1) {
                Models = Models_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            TempleFormComponent = (function () {
                function TempleFormComponent() {
                    this.modelFactory = new Models.ModelFactory();
                    this.templeDetails = this.modelFactory.getInstance('TempleDetail');
                    this.templeDetails.constructor();
                }
                TempleFormComponent.prototype.saveTemple = function () {
                    Rx_1.Observable.of(this.templeDetails).map(function (x) { return console.log(JSON.stringify(x)); }).subscribe();
                };
                TempleFormComponent.prototype.addTempleDetail = function () {
                    var templeDetail = this.modelFactory.getInstance('LocalizedTempleDetail');
                    templeDetail.constructor();
                    this.templeDetails.localizedDetails.push(templeDetail);
                };
                TempleFormComponent.prototype.removeTempleDetail = function (index) {
                    this.templeDetails.localizedDetails.splice(index, 1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TempleFormComponent.prototype, "operation", void 0);
                TempleFormComponent = __decorate([
                    core_1.Component({
                        selector: 'temple-form',
                        templateUrl: 'templates/temple-form.component.html',
                        directives: [localized_temple_detail_component_1.LocalizedTempleDetailComponent, multiple_entry_component_1.MultipleEntryComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TempleFormComponent);
                return TempleFormComponent;
            }());
            exports_1("TempleFormComponent", TempleFormComponent);
        }
    }
});
//# sourceMappingURL=temple-form.component.js.map