import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-info',
    templateUrl: 'info.component.html',
    styleUrls: ['info.component.scss']
})
export class InfoComponent implements OnInit {

    @Input() entries: number[] = []

    entriesChunks: Array<number[]> = []

    ngOnInit(): void {
        for(let i = 0; i < this.entries.length; i+= 10)
            this.entriesChunks.push(this.entries.slice(i, i + 10))
    }

}