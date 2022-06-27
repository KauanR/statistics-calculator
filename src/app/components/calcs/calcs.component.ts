import { Component, Input, OnChanges } from '@angular/core'
import * as ss from 'simple-statistics'
import { Calculations } from './interface/calculations'

const EMPTY_CALCS: Calculations = {
    avg: '-',
    geoAvg: '-',
    median: '-',
    mode: '-'
}

@Component({
    selector: 'app-calcs',
    templateUrl: 'calcs.component.html',
    styleUrls: ['calcs.component.scss']
})
export class CalcsComponent implements OnChanges {

    @Input() entries: number[] = []

    calcs: any = EMPTY_CALCS

    ngOnChanges(): void {
        this.calcs = {
            avg: ss.average(this.entries),
            geoAvg: ss.geometricMean(this.entries),
            median: ss.median(this.entries),
            mode: ss.mode(this.entries)
        }

        console.log(this.calcs)
    }


}