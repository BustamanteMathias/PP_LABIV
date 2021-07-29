import { TestBed } from '@angular/core/testing';

import { ValidateAdminGuard } from './validate-admin.guard';

describe('ValidateAdminGuard', () => {
  let guard: ValidateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
