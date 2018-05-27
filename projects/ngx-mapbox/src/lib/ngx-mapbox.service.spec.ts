import { inject, TestBed } from '@angular/core/testing';

import { NgxMapboxService } from './ngx-mapbox.service';

describe('NgxMapboxService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NgxMapboxService]
        });
    });

    it('should be created', inject([NgxMapboxService], (service: NgxMapboxService) => {
        expect(service).toBeTruthy();
    }));
});
