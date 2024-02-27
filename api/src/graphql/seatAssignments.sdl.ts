export const schema = gql`
  type SeatAssignment {
    id: Int!
    assignedWorkingHours: Float
    insertedAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    assignedAt: DateTime
    assignedUserId: Int
    assignedApplicantId: Int
    seatId: Int!
    seat: Seat!
    description: String
  }

  type Query {
    seatAssignments: [SeatAssignment!]! @requireAuth
    seatAssignment(id: Int!): SeatAssignment @requireAuth
  }

  input CreateSeatAssignmentInput {
    assignedWorkingHours: Float
    insertedAt: DateTime!
    deletedAt: DateTime
    assignedAt: DateTime
    assignedUserId: Int
    assignedApplicantId: Int
    seatId: Int!
    description: String
  }

  input UpdateSeatAssignmentInput {
    assignedWorkingHours: Float
    insertedAt: DateTime
    deletedAt: DateTime
    assignedAt: DateTime
    assignedUserId: Int
    assignedApplicantId: Int
    seatId: Int
    description: String
  }

  type Mutation {
    createSeatAssignment(input: CreateSeatAssignmentInput!): SeatAssignment!
      @requireAuth
    updateSeatAssignment(
      id: Int!
      input: UpdateSeatAssignmentInput!
    ): SeatAssignment! @requireAuth
    deleteSeatAssignment(id: Int!): SeatAssignment! @requireAuth
  }
`
