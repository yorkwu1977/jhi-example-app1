/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { App1TestModule } from '../../../test.module';
import { RoleDetailComponent } from 'app/entities/role/role-detail.component';
import { Role } from 'app/shared/model/role.model';

describe('Component Tests', () => {
    describe('Role Management Detail Component', () => {
        let comp: RoleDetailComponent;
        let fixture: ComponentFixture<RoleDetailComponent>;
        const route = ({ data: of({ role: new Role(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [App1TestModule],
                declarations: [RoleDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(RoleDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(RoleDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.role).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
