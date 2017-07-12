import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeSharedModule } from '../shared';

import { TEAMTABLE_ROUTE, TeamtableComponent } from './';

@NgModule({
    imports: [
        HomeSharedModule,
        RouterModule.forRoot([ TEAMTABLE_ROUTE ], {useHash: true, enableTracing: true  })
    ],
    declarations: [
        TeamtableComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeTeamtableModule {}
