import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

declare global {
    interface Window {
        initMap: () => void;
    }
}

window['initMap'] = function () {
    const map = new Map('map');
    const user = new User();
    const company = new Company();
    map.addMarker(user);
    map.addMarker(company);
};
