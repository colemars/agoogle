import { TestBed, inject } from '@angular/core/testing';

import { ElementPhysicsService } from './element-physics.service';

describe('ElementPhysicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementPhysicsService]
    });
  });

  it('should be created', inject([ElementPhysicsService], (service: ElementPhysicsService) => {
    expect(service).toBeTruthy();
  }));
});
