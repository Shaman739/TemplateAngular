import { IdentityObject } from "../../../core/model";
import { Flat } from '../../flat/model';
export class House extends IdentityObject{
    constructor()
    {
        super();
        if(!this.flats)
             this.flats = new Array<Flat>();
    }
    number: Number;
    flats : Array<Flat>
}
