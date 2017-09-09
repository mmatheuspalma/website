import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTerminalComponent } from './block-terminal.component';

describe('BlockTerminalComponent', () => {
  let component: BlockTerminalComponent;
  let fixture: ComponentFixture<BlockTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
