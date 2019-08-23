export class Character {
    public id: number;
    public name: string;
    public bloodStatus: string;
    public deathEater: number;
    public dumbledoresArmy: boolean;
    public house: string;
    public ministryOfMagic: string;
    public orderOfThePhoenix: boolean;
    public role: string;
    public school: string;
    public species: string;

    constructor(
      id: number,
      name: string,
      bloodStatus: string,
      deathEater: number,
      dumbledoresArmy: boolean,
      house: string,
      ministryOfMagic: string,
      orderOfThePhoenix: boolean,
      role: string,
      school: string,
      species: string,
    ) {
      this.id = id;
      this.name = name;
      this.bloodStatus = bloodStatus;
      this.deathEater = deathEater;
      this.dumbledoresArmy = dumbledoresArmy;
      this.house = house;
      this.ministryOfMagic = ministryOfMagic;
      this.orderOfThePhoenix = orderOfThePhoenix;
      this.role = role;
      this.school = school;
      this.species = species;
    }
  }