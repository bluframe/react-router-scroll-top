import { componentDidUpdate } from "."
import { spy } from "sinon"

const TOP = 0
const LEFT = 0

describe("ScrollToTop", () => {
  describe("componentDidUpdate", () => {
    it("scrolls window to top on location update", () => {
      global.scrollTo = spy()
      const prevProps = {
        location: "/"
      }
      const props = {
        location: "/about"
      }

      componentDidUpdate.bind({ props })(prevProps)

      expect(global.scrollTo.calledOnce).toBe(true)
      expect(global.scrollTo.calledWith(TOP, LEFT)).toBe(true)
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
  })
})
