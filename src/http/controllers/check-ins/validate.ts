import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { makeValidateCheckInUseCase } from "@/use-cases/factories/make-validate-check-in-use-case"

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateChckInParamsSchema = z.object({
    checkInId: z.string().uuid()
  })

  const { checkInId } = validateChckInParamsSchema.parse(request.params)

  const validateCheckInUseCase = makeValidateCheckInUseCase()

  await validateCheckInUseCase.execute({
      checkInId
    })

  return reply.status(204).send()
}