// import { RipeStarter } from "./ripe-starter";

export class Levain {
    constructor (
        public strongWhiteFlourBakers: number,
        public waterBakers: number,
        public ripeStarterBakers: number,
        public strongWhiteFlourWeight: number,
        public waterWeight: number,
        public ripeStarterWeight: number,
        public weightTotal: number
    ) { 
        strongWhiteFlourBakers = 100;
        waterBakers = 100;
        ripeStarterBakers = 10;
    }
}
