import { INestApplication, ValidationPipe } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../app/app.module'
import * as module from 'node:module'
import * as request from 'supertest'
import { AuthGuard } from '../custom.guard'

describe('FlowersController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleMixture:TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    })
      .overrideGuard(AuthGuard)
      .useValue({ canActivate: () => true })  // Ігноруємо AuthGuard

      .compile()

    app = moduleMixture.createNestApplication()
    app.useGlobalPipes(new ValidationPipe())
    await app.init()

  })

  afterAll(async () => {
    app.close()
  })

  it('/flowers (GET)',async () => {
    // return request(app).get('/flowers').expect(200)
    return request(app.getHttpServer())
      .get('/flowers?pageNumber=1') // додайте pageNumber
      .expect(200).expect(
        [`This action returns all flowers`]
      )
  })

  it('/flowers/:id (GET)',async () => {
    const id = 1
    return request(app.getHttpServer())
      .get(`/flowers/${id}`)  // передаємо id в URL
      .expect(200).expect(
      `This action returns a #${id} flower`
      )
  })

})