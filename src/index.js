// @flow

import ScrollToTop from "./ScrollToTop"
import { withRouter } from "react-router-dom"

const TOP = 0
const LEFT = 0

type Location = {
  +key: string,
  +pathname: string,
  +search: string,
  +hash: string,
  +state: {
    +[string]: boolean
  }
}

export type Props = {
  children?: React$Node,
  location: Location,
  delay: number
}

export const componentDidUpdate = function componentDidUpdate(
  prevProps: Props
) {
  const { location, delay }: Props = this.props

  if (location !== prevProps.location) {
    setTimeout(() => window.scrollTo(LEFT, TOP), delay)
  }
}

ScrollToTop.prototype.componentDidUpdate = componentDidUpdate

export default withRouter(ScrollToTop)
