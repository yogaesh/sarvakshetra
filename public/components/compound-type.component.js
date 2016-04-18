System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var CompoundTypeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CompoundTypeComponent = (function () {
                function CompoundTypeComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CompoundTypeComponent.prototype, "model", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CompoundTypeComponent.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CompoundTypeComponent.prototype, "title", void 0);
                CompoundTypeComponent = __decorate([
                    core_1.Component({
                        selector: 'compound-type',
                        templateUrl: '../templates/compound-type.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CompoundTypeComponent);
                return CompoundTypeComponent;
            }());
            exports_1("CompoundTypeComponent", CompoundTypeComponent);
        }
    }
});
//# sourceMappingURL=compound-type.component.js.map