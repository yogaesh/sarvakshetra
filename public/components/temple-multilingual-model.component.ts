export class TempleDetails {

  constructor(
    //public details: LanguageToTempleDetailsMap,
    public images : string[],
    public videos : string[],
    public website : string,
    public avgAnnualVisitorCount : number,
    public status : string,
    public createdBy: string,
    public modifiedBy : string,
    public createdAt: string,
    public modifiedAt : string,
    public approvedBy : string
  ) {  }

}

interface LanguageToTempleDetailsMap {
    //[language: string]: LocalizedTempleDetail;
}
