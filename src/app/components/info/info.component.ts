import { Component, Input, OnChanges } from '@angular/core'

@Component({
    selector: 'app-info',
    templateUrl: 'info.component.html',
    styleUrls: ['info.component.scss']
})
export class InfoComponent implements OnChanges {

    @Input() entries: number[] = []

    entriesChunks: Array<number[]> = []

    ngOnChanges(): void {
        for(let i = 0; i < this.entries.length; i+= 10)
            this.entriesChunks.push(this.entries.slice(i, i + 10))

        console.log('Números utilizados', this.entries)
    }

}