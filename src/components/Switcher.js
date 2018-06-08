import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import { injectGlobal } from 'emotion'
import { FourOhFour } from './FourOhFour'

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
`

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
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
