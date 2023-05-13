import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { Dimension } from '../src/dimensions/dimension.model';
import { fixtureDimension } from './fixture';

describe('DimensionsController (e2e)', () => {
  let app;
  let createDimensionDto;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    createDimensionDto = fixtureDimension();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/dimensions (GET)', () => {
    it('should return an array of dimensions with number of notes for ANote and BNote', async () => {
      // Mock and Assertion
      const response = await request(app.getHttpServer())
        .get('/dimensions')
        .expect(HttpStatus.OK);
      // Assertion
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);

      // Make sure that all returned dimensions have the correct format
      response.body.forEach((dimension: Dimension) => {
        expect(typeof dimension.a4Width).toBe('number');
        expect(typeof dimension.a4Height).toBe('number');
        expect(typeof dimension.typeAWidth).toBe('number');
        expect(typeof dimension.typeAHeight).toBe('number');
        expect(typeof dimension.typeBWidth).toBe('number');
        expect(typeof dimension.typeBHeight).toBe('number');
        expect(typeof dimension.numberOfTypeANote).toBe('string');
        expect(typeof dimension.numberOfTypeBNote).toBe('string');
        expect(dimension.numberOfTypeANote).toBe('6 pieces');
        expect(dimension.numberOfTypeBNote).toBe('25 pieces');
      });
    });
  });

  describe('/dimensions (POST)', () => {
    it('should create a new dimension and return it', async () => {
      // Mock and Assertion
      const response = await request(app.getHttpServer())
        .post('/dimensions')
        .send(createDimensionDto)
        .expect(HttpStatus.CREATED);

      // Assertion
      expect(response.body.a4Width).toBe(createDimensionDto.a4Width);
      expect(response.body.a4Height).toBe(createDimensionDto.a4Height);
      expect(response.body.typeAWidth).toBe(createDimensionDto.typeAWidth);
      expect(response.body.typeAHeight).toBe(createDimensionDto.typeAHeight);
      expect(response.body.typeBWidth).toBe(createDimensionDto.typeBWidth);
      expect(response.body.typeBHeight).toBe(createDimensionDto.typeBHeight);
    });
  });
});
