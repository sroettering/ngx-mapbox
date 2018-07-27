import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    private readonly BASE_URL = 'https://raw.githubusercontent.com/nifty10m/ngx-mapbox/master/src/app/';

    tsFilename: string;
    htmlFilename: string;
    cssFilename: string;

    tsCode: string;
    htmlCode: string;
    cssCode: string;

    constructor(private http: HttpClient,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const path: string = this.route.snapshot.parent.url[0].path;
        if (path !== 'layers' && path !== 'styles' && path !== 'sources') {
            return;
        }
        const component = this.route.snapshot.url[0].path;
        this.tsFilename = `${component}.component.ts`;
        this.htmlFilename = `${component}.component.html`;
        this.cssFilename = `${component}.component.css`;
        forkJoin(
            this.http.get(`${this.BASE_URL}${path}/${component}/${this.tsFilename}`, { responseType: 'text' }),
            this.http.get(`${this.BASE_URL}${path}/${component}/${this.htmlFilename}`, { responseType: 'text' }),
            this.http.get(`${this.BASE_URL}${path}/${component}/${this.cssFilename}`, { responseType: 'text' })
        ).subscribe((result: string[]) => {
            this.tsCode = result[0];
            this.htmlCode = result[1];
            this.cssCode = result[2] || '// empty';
        });
    }

}
