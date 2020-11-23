import { IdentityObject } from "../../../core/model";
import { Flat } from './flat';
export class House extends IdentityObject{
    number: Number;
    flats : Array<Flat>
}
