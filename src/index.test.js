import { componentDidUpdate } from "."
import { spy } from "sinon"

const TOP = 0
const LEFT = 0

const TIMEOUTS = 1
const NO_DELAY = 0
const DELAY = 1000

jest.useFakeTimers()

describe("ScrollToTop", () => {
  describe("componentDidUpdate", () => {
    it("scrolls window to top on location update", () => {
      global.scrollTo = spy()
      const prevProps = {
        location: "/",
      }
      const props = {
        location: "/about",
      }

      componentDidUpdate.bind({ props })(prevProps)

      setTimeout(() => {
        expect(setTimeout).toHaveBeenCalledTimes(TIMEOUTS)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), NO_DELAY)

        expect(global.scrollTo.calledOnce).toBe(true)
        expect(global.scrollTo.calledWith(TOP, LEFT)).toBe(true)
      }, NO_DELAY)
    })

    it("does not scroll window to top on same location", () => {
      global.scrollTo = spy()

      const prevProps = {
        location: "/"
      }
      const props = {
        location: "/"
      }

      componentDidUpdate.bind({ props })(prevProps)

      expect(global.scrollTo.calledOnce).toBe(false)
    })

    it("scrolls window after given delay", () => {
      global.scrollTo = spy()

      const prevProps = {
        location: "/"
      }
      const props = {
        delay: DELAY,
        location: "/about"
      }

      componentDidUpdate.bind({ props })(prevProps)

      setTimeout(() => {
        expect(setTimeout).toHaveBeenCalledTimes(TIMEOUTS)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), DELAY)

        expect(global.scrollTo.calledOnce).toBe(true)
        expect(global.scrollTo.calledWith(TOP, LEFT)).toBe(true)
      }, DELAY)
    })

    it("does not scroll window immediately if given delay", () => {
      global.scrollTo = spy()

      const prevProps = {
        location: "/"
      }
      const props = {
        delay: DELAY,
        location: "/about"
      }

      componentDidUpdate.bind({ props })(prevProps)

      setTimeout(() => {
        expect(global.scrollTo.calledOnce).toBe(false)
      }, NO_DELAY)
    })
  })
})
