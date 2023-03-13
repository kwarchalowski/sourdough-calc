import { Levain } from "./levain";
import { RipeStarter } from "./ripe-starter";

export class Ferments {

    constructor(
        public ripeStarter: RipeStarter,
        public levain: Levain
    ) { }
    
}
