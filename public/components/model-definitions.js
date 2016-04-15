System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ModelFactory, LocalizedTempleDetail, Shrine, Address, Attraction, PaymentDetails, ContactDetails, PeakTime, Event, Schedule;
    return {
        setters:[],
        execute: function() {
            ModelFactory = (function () {
                function ModelFactory() {
                }
                ModelFactory.prototype.getInstance = function (type) {
                    var proto = eval(type).prototype;
                    if (proto) {
                        return Object.create(proto);
                    }
                    else {
                        throw new EvalError('Invalid type');
                    }
                };
                return ModelFactory;
            }());
            exports_1("ModelFactory", ModelFactory);
            LocalizedTempleDetail = (function () {
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
            exports_1("LocalizedTempleDetail", LocalizedTempleDetail);
            Shrine = (function () {
                function Shrine(nameOfDeity, typeOfDeity) {
                    this.nameOfDeity = nameOfDeity;
                    this.typeOfDeity = typeOfDeity;
                }
                return Shrine;
            }());
            exports_1("Shrine", Shrine);
            Address = (function () {
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
            exports_1("Address", Address);
            Attraction = (function () {
                function Attraction(title, description) {
                    this.title = title;
                    this.description = description;
                }
                return Attraction;
            }());
            exports_1("Attraction", Attraction);
            PaymentDetails = (function () {
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
            exports_1("PaymentDetails", PaymentDetails);
            ContactDetails = (function () {
                function ContactDetails(addressee, phone, mobile, fax) {
                    this.addressee = addressee;
                    this.phone = phone;
                    this.mobile = mobile;
                    this.fax = fax;
                }
                return ContactDetails;
            }());
            exports_1("ContactDetails", ContactDetails);
            PeakTime = (function () {
                function PeakTime(daysOfWeek, occasions, monthsOfYear) {
                    this.daysOfWeek = daysOfWeek;
                    this.occasions = occasions;
                    this.monthsOfYear = monthsOfYear;
                }
                return PeakTime;
            }());
            exports_1("PeakTime", PeakTime);
            Event = (function (_super) {
                __extends(Event, _super);
                function Event(title, description, timeOfYear) {
                    _super.call(this, title, description);
                    this.timeOfYear = timeOfYear;
                }
                return Event;
            }(Attraction));
            exports_1("Event", Event);
            Schedule = (function () {
                function Schedule(time, event) {
                    this.time = time;
                    this.event = event;
                }
                return Schedule;
            }());
            exports_1("Schedule", Schedule);
        }
    }
});
//# sourceMappingURL=model-definitions.js.map