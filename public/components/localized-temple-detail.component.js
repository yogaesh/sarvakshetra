System.register(['angular2/core', './multiple-entry.component', './compound-type.component', './peak-times.component'], function(exports_1, context_1) {
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
    var core_1, multiple_entry_component_1, compound_type_component_1, peak_times_component_1;
    var LocalizedTempleDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (multiple_entry_component_1_1) {
                multiple_entry_component_1 = multiple_entry_component_1_1;
            },
            function (compound_type_component_1_1) {
                compound_type_component_1 = compound_type_component_1_1;
            },
            function (peak_times_component_1_1) {
                peak_times_component_1 = peak_times_component_1_1;
            }],
        execute: function() {
            LocalizedTempleDetailComponent = (function () {
                function LocalizedTempleDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LocalizedTempleDetailComponent.prototype, "model", void 0);
                LocalizedTempleDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'localized-temple-detail',
                        templateUrl: 'templates/localized-temple-detail.component.html',
                        directives: [multiple_entry_component_1.MultipleEntryComponent, compound_type_component_1.CompoundTypeComponent, peak_times_component_1.PeakTimesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LocalizedTempleDetailComponent);
                return LocalizedTempleDetailComponent;
            }());
            exports_1("LocalizedTempleDetailComponent", LocalizedTempleDetailComponent);
        }
    }
});
//# sourceMappingURL=localized-temple-detail.component.js.map