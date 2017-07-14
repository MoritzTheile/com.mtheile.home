import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeSharedModule } from '../shared';

import { IMPRESSUM_ROUTE, ImpressumComponent } from './';

@NgModule({
    imports: [
        HomeSharedModule,
        RouterModule.forRoot([ IMPRESSUM_ROUTE ], {useHash: true, enableTracing: true  })
    ],
    declarations: [
        ImpressumComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeImpressumModule {}
