# Example: Angular with Angular Material and Flex-Layout

This is just a very basic layout that sizes to different viewports by splitting the flex-items appropriately. It pulls images from [Lorem Picsum](https://picsum.photos/).

## Running

```
git clone --depth 1 git@github.com:hlesesne/example-flex-layout.git
cd example-flex-layout
npm install
ng serve --ssl
```

## Interesting bits

### [app.component.html - use of fxFlex.{responsive} to render for different viewports](https://github.com/hlesesne/example-flex-layout/blob/master/src/app/app.component.html#L3)

```html
    <div class="flex-item" fxFlex.gt-lg="20" fxFlex.gt-sm="25" fxFlex.gt-xs="50" fxFlex.xs="100">
```
    if viewPortSize greater than large, segment by 20 units (per 100 units)
    else if viewPortSize greater than small, segment by 25 units
    else if viewPortSize greater than extra small, segment by 50 units
    else if viewPortSize extrasmall, segment by 100 units (full width)    

### [app.component.css - make img responsive inside the mat-card](https://github.com/hlesesne/example-flex-layout/blob/master/src/app/app.component.css#L28)

```css
.mat-card img {
    width: 100%;
    height: auto;
}
```

### [app.module.ts - since this is just an example, import all angular material modules to make life easier (avoid in production)]()

```typescript
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

// ... other stuff

//imports: [ 
// commented out because there are other items. The uncommented
// modules should just be added to your existing imports array.
//    BrowserModule,
//    AppRoutingModule,
//    FlexLayoutModule,
//    BrowserAnimationsModule,
// all angular material modules
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
//  ],
```

### [Cache bust the image by column.id](https://github.com/hlesesne/example-flex-layout/blob/master/src/app/app.component.html#L10)

```html
<img [src]="column.image + '?cachebreaker=' + column.id" />
```


