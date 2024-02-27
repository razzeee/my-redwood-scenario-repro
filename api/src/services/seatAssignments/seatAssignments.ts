import type {
  QueryResolvers,
  MutationResolvers,
  SeatAssignmentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const seatAssignments: QueryResolvers['seatAssignments'] = () => {
  return db.seatAssignment.findMany()
}

export const seatAssignment: QueryResolvers['seatAssignment'] = ({ id }) => {
  return db.seatAssignment.findUnique({
    where: { id },
  })
}

export const createSeatAssignment: MutationResolvers['createSeatAssignment'] =
  ({ input }) => {
    return db.seatAssignment.create({
      data: input,
    })
  }

export const updateSeatAssignment: MutationResolvers['updateSeatAssignment'] =
  ({ id, input }) => {
    return db.seatAssignment.update({
      data: input,
      where: { id },
    })
  }

export const deleteSeatAssignment: MutationResolvers['deleteSeatAssignment'] =
  ({ id }) => {
    return db.seatAssignment.delete({
      where: { id },
    })
  }

export const SeatAssignment: SeatAssignmentRelationResolvers = {
  seat: (_obj, { root }) => {
    return db.seatAssignment.findUnique({ where: { id: root?.id } }).seat()
  },
}
