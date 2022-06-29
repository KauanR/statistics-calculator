import { Component, Input, OnChanges } from '@angular/core'
import * as ss from 'simple-statistics'
import { Calculations } from './interface/calculations'


@Component({
    selector: 'app-calcs',
    templateUrl: 'calcs.component.html',
    styleUrls: ['calcs.component.scss']
})
export class CalcsComponent implements OnChanges {

    @Input() entries: number[]

    calcs: Calculations

    constructor() {
        this.entries = []
        this.calcs = {} as Calculations
    }

    ngOnChanges(): void {
        this.calcs = {
            mean: ss.mean(this.entries),
            geometricMean: ss.geometricMean(this.entries),
            mode: ss.mode(this.entries),
            median: ss.median(this.entries),
            sampleStandardDeviation: ss.sampleStandardDeviation(this.entries),
            standardDeviation: ss.standardDeviation(this.entries),
            sampleVariance: ss.sampleVariance(this.entries),
            variance: ss.variance(this.entries),
            coefficientOfVariation: (100 * ss.sampleStandardDeviation(this.entries)) /ss.mean(this.entries)
        }

        console.log('Estatísticas descritivas', this.calcs)
    }


}