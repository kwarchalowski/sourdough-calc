export class Ingredients {

    constructor(
        public strongWhiteFlourBakers: number,
        public flourType2Bakers: number,
        public flourType3Bakers: number,
        public waterBakers: number,
        public saltBakers: number,
        public inclusion1Bakers: number,
        public inclusion2Bakers: number,
        public inclusion3Bakers: number,
        public strongWhiteFlourWeight: number,
        public flourType2Weight: number,
        public flourType3Weight: number,
        public waterWeight: number,
        public saltWeight: number,
        public inclusion1Weight: number,
        public inclusion2Weight: number,
        public inclusion3Weight: number,
        public weightTotal: number
    ) { 
        strongWhiteFlourBakers = 100;
        flourType2Bakers = 0;
        flourType3Bakers = 0;
        waterBakers = 70;
        saltBakers = 2;
        inclusion1Bakers = 0;
        inclusion2Bakers = 0;
        inclusion3Bakers = 0;
    }
}
