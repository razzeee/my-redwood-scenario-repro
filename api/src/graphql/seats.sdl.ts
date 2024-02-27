export const schema = gql`
  type Seat {
    id: Int!
    insertedAt: DateTime!
    updatedAt: DateTime!
    neededWorkingHours: Float!
    startingFrom: DateTime!
    endingAt: DateTime
    positionProjectId: Int!
    seatAssignment: [SeatAssignment]!
    seatAssignmentHistorical: [SeatAssignment]!
  }

  type Query {
    seat(id: Int!): Seat @requireAuth
    seats(positionProjectId: Int!): [Seat!] @requireAuth
  }

  input CreateSeatInput {
    neededWorkingHours: Float!
    startingFrom: DateTime!
    endingAt: DateTime
    positionProjectId: Int!
  }

  type Mutation {
    createSeat(input: CreateSeatInput!): Seat!
    deleteSeat(id: Int!): Seat
  }
`
