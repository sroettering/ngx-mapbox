import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.css']
})
export class CodeComponent {

    @Input()
    filename: string;

    @Input()
    code: string;

    constructor() {
    }

}
