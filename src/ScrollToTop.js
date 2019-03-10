// @flow

import React, { Fragment } from "react"
import { type Props } from "."

class ScrollToTop extends React.PureComponent<Props> {
  componentDidUpdate: (prevProps: Props) => void

  props: Props

  render() {
    const { children } = this.props

    return <Fragment>
      {children}
    </Fragment>
  }
}

export default ScrollToTop
