import bcrypt from 'bcrypt'
import { prisma } from '.'

export const createUser = (userData: {
  name: string
  email: string
  username: string
  password: string
  profileImage: string
}) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }

  return prisma.user.create({
    data: finalUserData
  })
}

export const getUserByUsername = (username: string) => {
  return prisma.user.findUnique({
    where: { username }
  })
}

export const getUserById = (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId }
  })
}
