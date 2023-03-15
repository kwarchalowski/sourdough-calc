export class Ingredients {

    constructor(
        public strongWhiteFlourBakers: number,
        public waterBakers: number,
        public saltBakers: number,
        public flourType2Bakers: number,
        public flourType3Bakers: number,
        public inclusion1Bakers: number,
        public inclusion2Bakers: number,
        public inclusion3Bakers: number,
    ) { }

    public ingredientsBakers = [this.strongWhiteFlourBakers, this.waterBakers, this.saltBakers, this.flourType2Bakers, this.flourType3Bakers, this.inclusion1Bakers, this.inclusion2Bakers, this.inclusion3Bakers];

    totalBakers() {
        return this.strongWhiteFlourBakers + this.waterBakers + this.saltBakers + this.flourType2Bakers + this.flourType3Bakers + this.inclusion1Bakers + this.inclusion2Bakers + this.inclusion3Bakers;
    }

}
