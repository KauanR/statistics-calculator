import { Component, Input, OnChanges } from '@angular/core'

@Component({
    selector: 'app-frequency-dist',
    templateUrl: 'frequency-dist.component.html',
    styleUrls: ['frequency-dist.component.scss']
})
export class FrequencyDistComponent implements OnChanges {

    @Input() entries: number[] = []

    ngOnChanges(): void {
        console.log(this.entries)
    }

}