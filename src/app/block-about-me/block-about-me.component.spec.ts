import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAboutMeComponent } from './block-about-me.component';

describe('BlockAboutMeComponent', () => {
  let component: BlockAboutMeComponent;
  let fixture: ComponentFixture<BlockAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
