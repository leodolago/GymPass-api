import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest"
import { app } from "../../../app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";

describe('Search Gym (e2e)', () => {
  beforeAll( async () => {
    await app.ready()
  })

  afterAll(() => {
    app.close
  })

  it('should be able to search a gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some description',
        phone: '11999999999',
        latitude: -23.6541827,
        longitude: -46.6353288,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'TypeScript Gym',
        description: 'Some description',
        phone: '11999999999',
        latitude: -23.6541827,
        longitude: -46.6353288,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        q: 'JavaScript Gym',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'JavaScript Gym'
      })
    ])
  })
})