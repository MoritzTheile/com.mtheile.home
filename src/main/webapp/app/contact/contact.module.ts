import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeSharedModule } from '../shared';

import { CONTACT_ROUTE, ContactComponent } from './';

@NgModule({
    imports: [
        HomeSharedModule,
        RouterModule.forRoot([ CONTACT_ROUTE ], {useHash: true, enableTracing: true  })
    ],
    declarations: [
        ContactComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeContactModule {}
