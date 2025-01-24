import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest"
import { app } from "../../../app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";

describe('Create Gym (e2e)', () => {
  beforeAll( async () => {
    await app.ready()
  })

  afterAll(() => {
    app.close
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const profileResponse = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some description',
        phone: '11999999999',
        latitude: -23.6541827,
        longitude: -46.6353288,
      })

    expect(profileResponse.statusCode).toEqual(201)
  })
})