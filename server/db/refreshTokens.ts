import { RefreshToken } from '@prisma/client'
import { prisma } from '.'

export const createRefreshToken = (
  refreshToken: Pick<RefreshToken, 'token' | 'userId'>
) => {
  return prisma.refreshToken.create({
    data: refreshToken
  })
}

export const getRefreshTokenByToken = (token: string) => {
  return prisma.refreshToken.findUnique({
    where: {
      token
    }
  })
}

export const removeRefreshToken = (token: string) => {
  return prisma.refreshToken.delete({
    where: {
      token
    }
  })
}
