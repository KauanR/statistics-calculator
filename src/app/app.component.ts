import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    entries: number[] = []

    updateEntries(entries: number[]): void {
        this.entries = entries.sort()
    }

}
