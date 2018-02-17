# react-router-scroll-top

[![npm Version](https://img.shields.io/npm/v/react-router-scroll-top.svg?style=flat-square)](https://www.npmjs.com/package/react-router-scroll-top)
[![Build Status](https://img.shields.io/travis/bluframe/react-router-scroll-top/master.svg?style=flat-square)](https://travis-ci.org/bluframe/react-router-scroll-top)

An easy and short-hand component based on the [React Router Scroll Restoration Example](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md).

## Usage

```jsx
import ScrollToTop from 'react-router-scroll-top'

const App = () => (
  <Router>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>
)

// or just render it bare anywhere you want, but just one :)
<ScrollToTop/>
```

## How to install

If you use `yarn`

```shell
yarn add react-router-scroll-top
```

And if you use `npm`

```shell
npm install react-router-scroll-top --save
```
