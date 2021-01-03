
export class IdentityObject
{
    constructor()
    {
        this.id = -Math.floor((Math.random() * 10000));
        this.customIdentity = 'cl_uuid'+(-Math.floor((Math.random() * 10000))).toString();
    }
    id:number;
    customIdentity:string;
}