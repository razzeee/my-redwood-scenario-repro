import type {
  MutationResolvers,
  QueryResolvers,
  SeatRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const seat: QueryResolvers['seat'] = ({ id }) => {
  return db.seat.findUnique({
    where: { id },
    include: {
      seatAssignment: { where: { deletedAt: null } },
    },
  })
}

export const seats: QueryResolvers['seats'] = async ({ positionProjectId }) => {
  return db.seat.findMany({
    where: {
      positionProjectId: positionProjectId,
    },
    include: {
      seatAssignment: { where: { deletedAt: null } },
    },
  })
}

export const createSeat: MutationResolvers['createSeat'] = ({ input }) => {
  return db.seat.create({
    data: input,
  })
}

export const deleteSeat: MutationResolvers['deleteSeat'] = async ({ id }) => {
  console.log(await db.seat.findMany({ include: { seatAssignment: true } }))

  const hasHistory = await db.seat.findFirst({
    where: {
      id: id,
      startingFrom: { lte: new Date() },
      seatAssignment: { some: {} },
    },
  })

  if (hasHistory) {
    throw new Error("Seat can't be deleted as it has history")
  }

  return db.seat.delete({
    where: { id: id },
  })
}

export const Seat: SeatRelationResolvers = {
  seatAssignment: (_obj, { root }) => {
    return db.seat.findUnique({ where: { id: root?.id } }).seatAssignment({
      where: { deletedAt: null },
    })
  },
  seatAssignmentHistorical: (_obj, { root }) => {
    return db.seat.findUnique({ where: { id: root?.id } }).seatAssignment({})
  },
}
