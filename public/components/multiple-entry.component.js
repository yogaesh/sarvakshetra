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
    var MultipleEntryComponent;
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
            MultipleEntryComponent = (function () {
                function MultipleEntryComponent() {
                    this.factory = new model_definitions_1.ModelFactory();
                }
                MultipleEntryComponent.prototype.addBtnClicked = function () {
                    var entry = this.factory.getInstance(this.type);
                    //let shrine = new Shrine('', '');
                    this.entries.push(entry);
                };
                MultipleEntryComponent.prototype.removeBtnClicked = function (index) {
                    if (index >= this.entries.length) {
                        alert('Not a valid index');
                    }
                    else if (confirm("Remove this " + this.type + "?")) {
                        this.entries.splice(index, 1);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MultipleEntryComponent.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MultipleEntryComponent.prototype, "entries", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MultipleEntryComponent.prototype, "title", void 0);
                MultipleEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'multiple-entry',
                        templateUrl: '../templates/multiple-entry.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MultipleEntryComponent);
                return MultipleEntryComponent;
            }());
            exports_1("MultipleEntryComponent", MultipleEntryComponent);
        }
    }
});
//# sourceMappingURL=multiple-entry.component.js.map