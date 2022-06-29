import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'

@Component({
    selector: 'app-head-random',
    templateUrl: 'head-random.component.html',
    styleUrls: ['head-random.component.scss']
})
export class HeadRandomComponent {

    @Output() generate: EventEmitter<number[]>

    form: FormGroup

    constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
        this.generate = new EventEmitter<number[]>()

        this.form = this.formBuilder.group({
            qty: [50, [Validators.required, Validators.min(0)]],
            min: [1, [Validators.required, Validators.min(1)]],
            max: [100, [Validators.required, Validators.min(2)]]
        })
    }

    submit(): void {
        const {qty, min, max} = this.form.value
        const entries = []

        for(let i = 0; i < qty; i++) {
            const randomNum = (Math.random() * (max - min + 1) + min).toFixed(2)
            entries.push(parseFloat(randomNum))
        }

        this.generate.emit(entries)
        this.dialog.closeAll()
    }

}