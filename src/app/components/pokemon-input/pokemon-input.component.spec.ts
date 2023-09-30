import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInputComponent } from './pokemon-input.component';

describe('PokemonInputComponent', () => {
  let component: PokemonInputComponent;
  let fixture: ComponentFixture<PokemonInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonInputComponent]
    });
    fixture = TestBed.createComponent(PokemonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
