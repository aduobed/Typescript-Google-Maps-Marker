import { faker } from '@faker-js/faker';
import { Mapper } from './Map';

export class Company implements Mapper {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    mapperContent(): string {
        return `
        <div>
          <h1>Company is ${this.name}<h1>
          <h3>Company catch phrase is : ${this.catchPhrase}</h3
        </div>
        `;
    }
}
