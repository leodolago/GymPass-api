import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest"
import { app } from "../../../app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";
import { prisma } from "@/lib/prisma";

describe('History Gym (e2e)', () => {
  beforeAll( async () => {
    await app.ready()
  })

  afterAll(() => {
    app.close
  })

  it('should be able to list the history of check-ins', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const user = await prisma.user.findFirstOrThrow()

    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -23.6541827,
        longitude: -46.6353288,
      }
    })

    const checkIns = await prisma.checkIn.createMany({
      data: [
        {
          gym_id: gym.id,
          user_id: user.id,
        },
        {
          gym_id: gym.id,
          user_id: user.id,
        },
      ],
    })

    const response = await request(app.server)
      .get('/check-ins/history')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.checkIns).toEqual([
      expect.objectContaining({
        gym_id: gym.id,
        user_id: user.id,
      }),
      expect.objectContaining({
        gym_id: gym.id,
        user_id: user.id,
      }),
    ])
  })
})