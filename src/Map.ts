import { Company } from './Company';
import { User } from './User';

//Create an interface Mapper which is generic
export interface Mapper {
    location: {
        lat: number;
        lng: number;
    };
    mapperContent(): string;
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            }
        );
    }

    addMarker(mapper: Mapper): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapper.location.lat,
                lng: mapper.location.lng,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mapper.mapperContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
