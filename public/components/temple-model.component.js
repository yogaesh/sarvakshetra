var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LocalizedTempleDetail = (function () {
    function LocalizedTempleDetail(id, name, otherNames, descriptionShort, descriptionLong, sthalaPurana, established, mainDeity, renownForDeity, shrines, address, specialty, attractions, paymentDetails, contactDetails, directions, travelTips, peakTimes, events, dailySchedule) {
        this.id = id;
        this.name = name;
        this.otherNames = otherNames;
        this.descriptionShort = descriptionShort;
        this.descriptionLong = descriptionLong;
        this.sthalaPurana = sthalaPurana;
        this.established = established;
        this.mainDeity = mainDeity;
        this.renownForDeity = renownForDeity;
        this.shrines = shrines;
        this.address = address;
        this.specialty = specialty;
        this.attractions = attractions;
        this.paymentDetails = paymentDetails;
        this.contactDetails = contactDetails;
        this.directions = directions;
        this.travelTips = travelTips;
        this.peakTimes = peakTimes;
        this.events = events;
        this.dailySchedule = dailySchedule;
    }
    return LocalizedTempleDetail;
}());
var Shrine = (function () {
    function Shrine(nameOfDeity, typeOfDeity) {
        this.nameOfDeity = nameOfDeity;
        this.typeOfDeity = typeOfDeity;
    }
    return Shrine;
}());
var Address = (function () {
    function Address(addressee, line1, line2, city, district, state, country, zip) {
        this.addressee = addressee;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.district = district;
        this.state = state;
        this.country = country;
        this.zip = zip;
    }
    return Address;
}());
var Attraction = (function () {
    function Attraction(title, description) {
        this.title = title;
        this.description = description;
    }
    return Attraction;
}());
var PaymentDetails = (function () {
    function PaymentDetails(accountNumber, bankName, branch, city, state, country) {
        this.accountNumber = accountNumber;
        this.bankName = bankName;
        this.branch = branch;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    return PaymentDetails;
}());
var ContactDetails = (function () {
    function ContactDetails(addressee, phone, mobile, fax) {
        this.addressee = addressee;
        this.phone = phone;
        this.mobile = mobile;
        this.fax = fax;
    }
    return ContactDetails;
}());
var PeakTime = (function () {
    function PeakTime(daysOfWeek, occasions, monthsOfYear) {
        this.daysOfWeek = daysOfWeek;
        this.occasions = occasions;
        this.monthsOfYear = monthsOfYear;
    }
    return PeakTime;
}());
var Event = (function (_super) {
    __extends(Event, _super);
    function Event(title, description, timeOfYear) {
        _super.call(this, title, description);
        this.timeOfYear = timeOfYear;
    }
    return Event;
}(Attraction));
var Schedule = (function () {
    function Schedule(time, event) {
        this.time = time;
        this.event = event;
    }
    return Schedule;
}());
//# sourceMappingURL=temple-model.component.js.map