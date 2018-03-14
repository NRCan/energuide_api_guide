import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="uci">
          UCI
          <div>
            <Field
              id="uci"
              name="uci"
              component="input"
              type="text"
              placeholder="Your account ID"
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="reason">
          Reason
          <div>
            <Field
              id="reason"
              name="reason"
              component="textarea"
              placeholder="Please describe your the reason you won't be able to attend on this date"
            />
          </div>
        </label>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

SimpleForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'simple',
  destroyOnUnmount: false,
})(SimpleForm)
