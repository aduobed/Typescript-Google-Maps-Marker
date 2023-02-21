import { faker } from '@faker-js/faker';
import { Mapper } from './Map';

export class User implements Mapper {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude()),
        };
    }

    mapperContent(): string {
        return `Name is ${this.name}`;
    }
}
