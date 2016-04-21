export class ModelFactory{
  public getInstance(type: string){
    let proto = eval(type).prototype;
    if(proto){
      return Object.create(proto);
    }else{
      throw new EvalError('Invalid type');
    }
  }
}

export class LocalizedTempleDetail {

  constructor(
    public name?: string,
    public otherNames?: string[],
    public descriptionShort?: string,
    public descriptionLong?: string,
    public sthalaPurana? : string,
    public established? : string,
    public mainDeity? : string,
    public renownForDeity?: string,
    public shrines?: Shrine[],
    public address?: Address,
    public specialty?: string,
    public attractions?: Attraction[],
    public paymentDetails?: PaymentDetails,
    public contactDetails?: ContactDetails,
    public directions?: string,
    public travelTips?: string,
    public peakTimes?: PeakTime,
    public events?: Event[],
    public dailySchedule?: Schedule[]
  ) {
    this.shrines = new Array<Shrine>();
    this.attractions = new Array<Attraction>();
    this.events = new Array<Event>();
    this.dailySchedule = new Array<Schedule>();
    this.address = new Address();
    this.paymentDetails = new PaymentDetails();
    this.contactDetails = new ContactDetails();
    this.peakTimes = new PeakTime();
  }
}

export class Shrine{
  constructor(
    public nameOfDeity: string,
    public typeOfDeity: string
  ){}
}

export class Address{
  constructor(
    public addressee?: string,
    public line1?: string,
    public line2?: string,
    public city?: string,
    public district?: string,
    public state?: string,
    public country?: string,
    public zip?: string
  ){}
}

export class Attraction{
  constructor(
    public title: string,
    public description: string
  ){}
}

export class PaymentDetails{
  constructor(
    public accountNumber?: string,
    public bankName?: string,
    public branch?: string,
    public city?: string,
    public state?: string,
    public country?: string
  ){}
}

export class ContactDetails{
  constructor(
    public addressee?: string,
    public phone?: string,
    public mobile?: string,
    public fax?: string,
    public email? : string
  ){}
}

export class PeakTime{
  constructor(
    public daysOfWeek?: string[],
    public occasions?: string,
    public monthsOfYear?: string[]
  ){}
}

export class Event{
  constructor(
    public title? : string,
    public description? : string,
    public timeOfYear? : string
  ){}
}

export class Schedule{
  constructor(
    public time?: string,
    public event?: string
  ){}
}

export class TempleDetail{
  constructor(
    public id? : string,
    public localizedDetails? : LocalizedTempleDetail[],
    public images? : Media[],
    public videos? : Media[],
    public website? : string,
    public averageAnnualVisitorCount? : number,
    public status? : string,
    public createdBy? : string,
    public createdDate? : string,
    public lastModifiedBy? : string,
    public lastModifiedDate? : string,
    public lastApprovedBy? : string,
    public lastApprovedDate? : string
  ){
    this.localizedDetails = new Array<LocalizedTempleDetail>();
    this.images = new Array<Media>();
    this.videos = new Array<Media>();
  }
}

export class Media{
  constructor(
    public url? : string,
    public title? : string,
    public description? : string
  ){}
}
