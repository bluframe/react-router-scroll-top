// @flow

import { type Props } from "."
import React from "react"

class ScrollToTop extends React.PureComponent<Props> {
  componentDidUpdate: (prevProps: Props) => void

  props: Props

  render() {
    const { children } = this.props

    return <>{children}</>
  }
}

export default ScrollToTop
