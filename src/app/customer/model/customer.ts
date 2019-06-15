export class Customer {
    constructor(public id?: number, public name?: string, public location?: string) { }

    isValid(): boolean {
        return null != this.id && null != this.name && null != this.location;
    }

}
