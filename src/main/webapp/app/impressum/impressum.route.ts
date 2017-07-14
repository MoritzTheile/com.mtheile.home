import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { ImpressumComponent } from './';

export const IMPRESSUM_ROUTE: Route = {
    path: 'impressum',
    component: ImpressumComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
