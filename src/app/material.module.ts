// Angular imports
import { NgModule } from '@angular/core';

// Angular Material imports
import { MatSidenavModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [],
    imports: [
        // Material modules
        MatSidenavModule,
        MatButtonModule,
        MatExpansionModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        MatDividerModule,
        MatDialogModule,

    ],
    exports: [
        // Material modules
        MatSidenavModule,
        MatButtonModule,
        MatExpansionModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        MatDividerModule,
        MatDialogModule,

    ]
})
export class MaterialModule { }
