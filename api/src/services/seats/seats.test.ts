import { deleteSeat } from './seats'
import type { StandardScenario } from './seats.scenarios'

describe('seats', () => {
  scenario(
    'deleteSeat - empty seat - can be deleted',
    async (scenario: StandardScenario) => {
      expect(deleteSeat({ id: scenario.seat.empty.id })).resolves.toBeDefined()
    }
  )

  scenario(
    'deleteSeat - empty seat in past - can be deleted',
    async (scenario: StandardScenario) => {
      expect(
        deleteSeat({ id: scenario.seat.emptyPast.id })
      ).resolves.toBeDefined()
    }
  )

  scenario(
    'deleteSeat - planned in future - can be deleted',
    async (scenario: StandardScenario) => {
      expect(
        deleteSeat({ id: scenario.seat.plannedInFuture.id })
      ).resolves.toBeDefined()
    }
  )

  scenario(
    'deleteSeat - still active - do not delete',
    async (scenario: StandardScenario) => {
      expect(deleteSeat({ id: scenario.seat.stillActive.id })).rejects.toThrow(
        "Seat can't be deleted as it has history"
      )
    }
  )

  scenario(
    'deleteSeat - has history - do not delete',
    async (scenario: StandardScenario) => {
      expect(deleteSeat({ id: scenario.seat.hasHistory.id })).rejects.toThrow(
        "Seat can't be deleted as it has history"
      )
    }
  )
})
