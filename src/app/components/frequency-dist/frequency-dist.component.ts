import { Component, Input, OnChanges } from '@angular/core'
import * as ss from 'simple-statistics'
import { FrequencyDistRow } from './interfaces/fd-row'

@Component({
    selector: 'app-frequency-dist',
    templateUrl: 'frequency-dist.component.html',
    styleUrls: ['frequency-dist.component.scss']
})
export class FrequencyDistComponent implements OnChanges {

    @Input() entries: number[] = []

    table: FrequencyDistRow[] = []
    xiFiSum: number = 0
    facSum: number = 0

    ngOnChanges(): void {
        this.table = []
        this.xiFiSum = 0
        this.facSum = 0

        const R = ss.max(this.entries) - ss.min(this.entries)
        const K = Math.round(1 + 3.22 * Math.log10(this.entries.length))
        const H = parseInt((R / K).toString()) + 1

        let aux = ss.min(this.entries)

        for(let i = 0; i < K; i++) {
            const min = Math.round(aux)
            const max = Math.round(aux + H)

            const fi = this.entries.reduce((acc, cur) => {
                if(cur >= min && cur < max) acc++
                return acc
            }, 0)

            const xi = (min + max) / 2

            this.table.push({
                name: `${min} ├ ${max}`,
                fi,
                xi,
                fac: this.facSum,
                fiPercent: (fi * 100) / this.entries.length,
                xiFi: xi * fi
            })

            aux += H
            this.xiFiSum += xi * fi
            this.facSum += fi
        }

        console.log('Distribuição de Frequências', this.table)
    }

}