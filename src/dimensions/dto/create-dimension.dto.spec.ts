import { validate } from 'class-validator';
import { CreateDimensionDto } from './create-dimension.dto';

describe('CreateDimensionDto', () => {
  describe('CreateDimensionDto', () => {
    it('should FAIL on invalid CreateDimensionDto', async () => {
      const dto = new CreateDimensionDto();
      dto.paperWidth = 10;
      const errors = await validate(dto);
      expect(errors.length).not.toBe(0);
    });
  });
});
