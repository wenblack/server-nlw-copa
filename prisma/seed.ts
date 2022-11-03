import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      emai: "example@example.com",
      avatarUrl: "https:github.com/wenblack.png"
    }
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool ",
      code: "Bol123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T00:15:52.610Z",
      countryCodeFirstTeam: "DE",
      countryCodeSecondTeam: "BR"
    }
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T00:15:52.610Z",
      countryCodeFirstTeam: "BR",
      countryCodeSecondTeam: "AR",

      guesses: {
        create: {
          firsTeamPoints: 2,
          secondTeamPoints: 0,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  });
}
main();
