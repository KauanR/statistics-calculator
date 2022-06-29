import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { MatDialog } from '@angular/material/dialog'

@Component({
    selector: 'app-head',
    templateUrl: 'head.component.html',
    styleUrls: ['head.component.scss']
})
export class HeadComponent {

    @ViewChild('entriesInput') entriesInput: ElementRef

    @Output() confirmEntries: EventEmitter<number[]>

    separators: number[]
    entries: number[]

    constructor(public dialog: MatDialog) {
        this.entriesInput = {} as ElementRef
        this.confirmEntries = new EventEmitter<number[]>()
        this.separators = [ENTER, COMMA]
        this.entries = []
    }

    addEntry(value: string): void {
        if(value) this.entries.push(parseFloat(value))

        this.entriesInput.nativeElement.value = ''
    }

    removeEntry(index: number): void {
        this.entries.splice(index, 1)
    }

    submit(customEntries?: number[]): void {
        if(customEntries)
            this.entries = customEntries

        if(this.entriesInput.nativeElement.value && !customEntries) 
            this.addEntry(this.entriesInput.nativeElement.value)

        this.confirmEntries.emit(this.entries)
        this.entriesInput.nativeElement.value = ''
        this.entries = []
    }

}