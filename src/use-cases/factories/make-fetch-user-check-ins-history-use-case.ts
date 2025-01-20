import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository"
import { FetchUserCheckInsHistoryUseCase } from "../fetch-user-check-ins-history"

export function makefetchUserCheckInsHistoryUseCase() {
  const checkInsRepository= new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

  return useCase
}