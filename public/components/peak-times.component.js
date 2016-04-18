System.register(['angular2/core', 'angular2/common', './model-definitions'], function(exports_1, context_1) {
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
    var core_1, common_1, model_definitions_1;
    var PeakTimesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (model_definitions_1_1) {
                model_definitions_1 = model_definitions_1_1;
            }],
        execute: function() {
            PeakTimesComponent = (function () {
                function PeakTimesComponent() {
                    //TODO: Add logic to pull this info from service
                    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', model_definitions_1.PeakTime)
                ], PeakTimesComponent.prototype, "model", void 0);
                PeakTimesComponent = __decorate([
                    core_1.Component({
                        selector: 'peak-times',
                        templateUrl: '../templates/peak-times.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeakTimesComponent);
                return PeakTimesComponent;
            }());
            exports_1("PeakTimesComponent", PeakTimesComponent);
        }
    }
});
//# sourceMappingURL=peak-times.component.js.map