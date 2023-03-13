export class Ingredients {

    constructor(
        public strongWhiteFlourBakers: number,
        public waterBakers: number,
        public saltBakers: number,
        public flourType2Bakers?: number,
        public flourType3Bakers?: number,
        public inclusion1Bakers?: number,
        public inclusion2Bakers?: number,
        public inclusion3Bakers?: number,
    ) { }

    totalBakers() {
        return 172;
    }

}
