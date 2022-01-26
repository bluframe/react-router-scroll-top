import Enzyme, { shallow } from "enzyme"
import React, { Fragment } from "react"
import Adapter from "enzyme-adapter-react-16"
import ScrollToTop from "./ScrollToTop"

Enzyme.configure({ adapter: new Adapter() })

jest.mock(".", () => ({}))

describe("ScrollToTop", () => {
  it("renders", () => {
    const wrapper = shallow(<ScrollToTop />)

    expect(wrapper).toMatchSnapshot()
  })

  it("renders children", () => {
    const wrapper = shallow(
      <ScrollToTop>
        <></>
      </ScrollToTop>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
