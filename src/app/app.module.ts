import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// Componentes internos
import { AppComponent } from './app.component'
import { HeadComponent } from './head/head.component'
import { InfoComponent } from './info/info.component'
import { FrequencyDistComponent } from './frequency-dist/frequency-dist.component'
import { CalcsComponent } from './calcs/calcs.component'
// Imports
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    declarations: [
        AppComponent,
        HeadComponent,
        InfoComponent,
        FrequencyDistComponent,
        CalcsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatChipsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
