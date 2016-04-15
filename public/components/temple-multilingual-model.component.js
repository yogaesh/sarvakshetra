System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TempleDetails;
    return {
        setters:[],
        execute: function() {
            TempleDetails = (function () {
                function TempleDetails(
                    //public details: LanguageToTempleDetailsMap,
                    images, videos, website, avgAnnualVisitorCount, status, createdBy, modifiedBy, createdAt, modifiedAt, approvedBy) {
                    this.images = images;
                    this.videos = videos;
                    this.website = website;
                    this.avgAnnualVisitorCount = avgAnnualVisitorCount;
                    this.status = status;
                    this.createdBy = createdBy;
                    this.modifiedBy = modifiedBy;
                    this.createdAt = createdAt;
                    this.modifiedAt = modifiedAt;
                    this.approvedBy = approvedBy;
                }
                return TempleDetails;
            }());
            exports_1("TempleDetails", TempleDetails);
        }
    }
});
//# sourceMappingURL=temple-multilingual-model.component.js.map