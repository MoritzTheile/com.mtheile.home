import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { ContactComponent } from './';

export const CONTACT_ROUTE: Route = {
    path: 'contact',
    component: ContactComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
