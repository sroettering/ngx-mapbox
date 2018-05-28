import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
    selector: 'app-table-of-contents',
    templateUrl: './table-of-contents.component.html',
    styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent {

    styleRoutes: Routes = [];

    layerRoutes: Routes = [];

    constructor(private router: Router) {
        this.styleRoutes = this.router.config.find(route => route.path === 'styles').children;
        this.layerRoutes = this.router.config.find(route => route.path === 'layers').children;
    }

}
