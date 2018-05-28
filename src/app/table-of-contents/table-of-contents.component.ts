import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
    selector: 'app-table-of-contents',
    templateUrl: './table-of-contents.component.html',
    styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent {

    routes: Routes = [];

    constructor(private router: Router) {
        this.routes = this.router.config.filter(route => route.path !== '');
    }

}
