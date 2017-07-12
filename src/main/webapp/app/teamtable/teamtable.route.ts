import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { TeamtableComponent } from './';

export const TEAMTABLE_ROUTE: Route = {
    path: 'teamtable',
    component: TeamtableComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
