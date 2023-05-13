import { Test, TestingModule } from '@nestjs/testing';
import { DimensionsService } from './dimensions.service';
import {
  fixtureDimension,
  mockResponse,
  mockResponseWithNotes,
} from '../../test/fixture';
describe('DimensionsService', () => {
  let dimensionsService: DimensionsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimensionsService],
    }).compile();
    dimensionsService = module.get<DimensionsService>(DimensionsService);
  });

  describe('DimensionsService', () => {
    it('should return an array of dimensions with number of notes for ANote and BNote', () => {
      // Act
      const response = dimensionsService.calculatePostItNotes();
      // Assertion
      expect(response).toMatchObject(mockResponseWithNotes());
    });

    it('should append a new dimension and return with default object', () => {
      // Act
      const response = dimensionsService.update(fixtureDimension());
      // Assertion
      expect(response).toMatchObject(mockResponse());
    });
  });
});
