import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import { injectGlobal } from 'emotion'
import { FourOhFour } from './FourOhFour'
import { Loading } from './Loading'

injectGlobal`

.switcher {
  position: relative;
  margin: 0 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.switcher > div {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  background: #fff;
  box-sizing: border-box;
}

/* NOT FOUND */

.notFound {
  background: #141414;
  box-sizing: border-box;
  padding: 10px;
  color: #000 !important;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}

.loader {
  color: #d2d2d2;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
`

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  minDelay: 500,

  // eslint-disable-next-line react/display-name
  loading: () => <Loading />,
  // eslint-disable-next-line react/display-name
  error: () => <FourOhFour />,
})

const Switcher = ({ page }) => (
  <div>
    <UniversalComponent page={page} />
  </div>
)

Switcher.propTypes = {
  page: PropTypes.node,
}

const mapStateToProps = state => ({
  page: state.page,
})

export default connect(mapStateToProps)(Switcher)
