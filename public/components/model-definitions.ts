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
    public id: number,
    public name: string,
    public otherNames: string[],
    public descriptionShort: string,
    public descriptionLong: string,
    public sthalaPurana : string,
    public established: string,
    public mainDeity: string,
    public renownForDeity: string,
    public shrines: Shrine[],
    public address: Address,
    public specialty: string[],
    public attractions: Attraction[],
    public paymentDetails: PaymentDetails,
    public contactDetails: ContactDetails,
    public directions: string,
    public travelTips: string,
    public peakTimes: PeakTime[],
    public events: Event[],
    public dailySchedule: Schedule[]
  ) {  }
}

export class Shrine{
  constructor(
    public nameOfDeity: string,
    public typeOfDeity: string
  ){}
}

export class Address{
  constructor(
    public addressee: string,
    public line1: string,
    public line2: string,
    public city: string,
    public district: string,
    public state: string,
    public country: string,
    public zip: string
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
    public accountNumber: string,
    public bankName: string,
    public branch: string,
    public city: string,
    public state: string,
    public country: string
  ){}
}

export class ContactDetails{
  constructor(
    public addressee: string,
    public phone: string,
    public mobile: string,
    public fax: string
  ){}
}

export class PeakTime{
  constructor(
    public daysOfWeek: string[],
    public occasions: string[],
    public monthsOfYear: string
  ){}
}

export class Event extends Attraction{
  constructor(
    title,
    description,
    public timeOfYear : string
  ){
    super(title, description);
  }
}

export class Schedule{
  constructor(
    public time: string,
    public event: string
  ){}
}
