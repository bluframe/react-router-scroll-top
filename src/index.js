// @flow

import { type Element } from "react"
import ScrollToTop from "./ScrollToTop"
import { withRouter } from "react-router-dom"

const TOP = 0
const LEFT = 0

export type Props = {
  children?: Element<*>
}

export const componentDidUpdate = function componentDidUpdate(prevProps: Props) {
  const { location } = this.props

  if (location !== prevProps.location) {
    window.scrollTo(LEFT, TOP)
  }
}

ScrollToTop.prototype.componentDidUpdate = componentDidUpdate

export default withRouter(ScrollToTop)
