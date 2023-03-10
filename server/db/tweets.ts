import { Prisma, Tweet } from '@prisma/client'
import { prisma } from '.'

export type TweetData = Pick<Tweet, 'authorId' | 'text'>

export const createTweet = (
  tweetData: TweetData & { providerPublicId: string }
) => {
  return prisma.tweet.create({
    data: tweetData
  })
}

export const getTweets = (params: Prisma.TweetFindManyArgs = {}) => {
  return prisma.tweet.findMany({
    ...params
  })
}

export const getTweetById = (
  tweetId: string,
  params?: Partial<Prisma.TweetFindUniqueArgs>
) => {
  return prisma.tweet.findUnique({
    ...params,
    where: {
      ...params?.where,
      id: tweetId
    }
  })
}
