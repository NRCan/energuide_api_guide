import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css } from 'react-emotion'

const Section = styled.section`
  background-color: #f4f4f4;
  padding: 1em;
  border-left-width: 1.2em;
  border-left-style: solid;
  ${props => {
    switch (props.priority) {
      case 'error':
        return css`
          border-left-color: #d0021b;
        `
      case 'notice':
        return css`
          border-left-color: #1177dd;
        `
      case 'warn':
        return css`
          border-left-color: #fdd262;
        `
    }
  }};
`

export class Flash extends Component {
  render() {
    const { priority, message } = this.props
    if (priority && message) {
      return <Section {...this.props}>{message}</Section>
    } else {
      return null
    }
  }
}

const mapStateToProps = state => ({
  message: state.flash.message,
  priority: state.flash.priority,
})

Flash.propTypes = {
  message: PropTypes.node,
  priority: PropTypes.string,
}

export default connect(mapStateToProps)(Flash)
