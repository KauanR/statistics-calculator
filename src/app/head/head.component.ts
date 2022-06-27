import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { COMMA, ENTER } from '@angular/cdk/keycodes'

@Component({
    selector: 'app-head',
    templateUrl: 'head.component.html',
    styleUrls: ['head.component.scss']
})
export class AppHeadComponent {

    @ViewChild('entriesInput') entriesInput: ElementRef

    @Output() confirmEntries: EventEmitter<number[]>

    separators: number[]
    entries: number[]

    constructor() {
        this.confirmEntries = new EventEmitter<number[]>()
        this.separators = [ENTER, COMMA]
        this.entries = []

        this.entriesInput = {} as ElementRef
    }

    addEntry(value: string): void {
        if(value)
            this.entries.push(parseInt(value))

            this.entriesInput.nativeElement.value = ''
    }

    removeEntry(index: number): void {
        this.entries.splice(index, 1)
    }

    clearEntries(): void {
        this.entriesInput.nativeElement.value = ''
        this.entries = []
    }

    submit(): void {
        this.confirmEntries.emit(this.entries)
    }

}