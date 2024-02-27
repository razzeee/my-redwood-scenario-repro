import { faker } from '@faker-js/faker'
import type { Prisma } from '@prisma/client'
import { Seat } from 'types/graphql'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SeatCreateArgs>({
  seat: {
    empty: (scenario) => ({
      data: {
        neededWorkingHours: 40,
        startingFrom: faker.date.soon(),
        endingAt: faker.date.future(),
        positionProjectId: 1,
      },
    }),
    emptyPast: (scenario) => ({
      data: {
        neededWorkingHours: 40,
        startingFrom: faker.date.past(),
        endingAt: faker.date.recent(),
        positionProjectId: 1,
      },
    }),
    plannedInFuture: (scenario) => ({
      data: {
        neededWorkingHours: 18,
        startingFrom: faker.date.soon(),
        endingAt: faker.date.future(),
        positionProjectId: 1,
        seatAssignment: {
          // sometimes these don't exist when testing
          create: {
            deletedAt: new Date(),
            assignedWorkingHours: 40,
          },
        },
      },
    }),
    stillActive: (scenario) => ({
      data: {
        neededWorkingHours: 32,
        startingFrom: faker.date.past(),
        endingAt: faker.date.soon(),
        positionProjectId: 1,
        seatAssignment: {
          // sometimes these don't exist when testing
          create: {
            deletedAt: new Date(),
            assignedWorkingHours: 40,
          },
        },
      },
    }),
    hasHistory: (scenario) => ({
      data: {
        neededWorkingHours: 38,
        startingFrom: faker.date.past(),
        endingAt: faker.date.recent(),
        positionProjectId: 1,
        seatAssignment: {
          // sometimes these don't exist when testing
          create: {
            deletedAt: new Date(),
            assignedWorkingHours: 40,
          },
        },
      },
    }),
  },
})

export type StandardScenario = ScenarioData<Seat, 'seat'>
