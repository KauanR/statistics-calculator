import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    entries: number[] = []

    ngOnInit(): void {
        this.updateEntries(this.generateRandomEntries())
    }

    private generateRandomEntries(): number[] {
        const entries = []

        for(let i = 0; i < Math.floor(Math.random() * 50); i++)
            entries.push(Math.floor(Math.random() * 100))

        return entries
    }

    updateEntries(entries: number[]): void {
        this.entries = entries.sort()
    }

}
