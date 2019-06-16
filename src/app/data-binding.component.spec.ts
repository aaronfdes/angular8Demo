import { TestBed } from "@angular/core/testing";
import { DataBinding } from './data-binding.component';
import { FormsModule } from '@angular/forms';

describe('DataBindingComponent', () => {

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [DataBinding],
            imports: [FormsModule],
            providers: []
        }).compileComponents();
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(DataBinding);
        const debugElement = fixture.debugElement;
        const componentInstance = debugElement.componentInstance;
        expect(componentInstance).toBeTruthy();
    });

    it('should increment the count by 1', () => {
        const fixture = TestBed.createComponent(DataBinding);
        const instance = fixture.debugElement.componentInstance;
        expect(instance.count).toBe(10);
        instance.increment();
        expect(instance.count).toBe(11);
    });

    it('should set the name in the template', () => {
        const fixture = TestBed.createComponent(DataBinding);
        fixture.detectChanges();
        const text = fixture.debugElement.nativeElement.querySelector('div>span').textContent;
        expect(text).toContain('Aaron Fernandes')
    });
});