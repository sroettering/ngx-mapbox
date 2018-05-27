import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMapboxComponent } from './ngx-mapbox.component';

describe('NgxMapboxComponent', () => {
    let component: NgxMapboxComponent;
    let fixture: ComponentFixture<NgxMapboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxMapboxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxMapboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
