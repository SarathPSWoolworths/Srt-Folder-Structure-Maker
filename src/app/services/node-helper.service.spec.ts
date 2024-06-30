import { TestBed } from '@angular/core/testing';

import { NodeHelperService } from './node-helper.service';

describe('NodeHelperService', () => {
  let service: NodeHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUniqueId() should return an unique number', () => {
    expect(service.getUniqueId()).toEqual(jasmine.any(Number));
  });
});
