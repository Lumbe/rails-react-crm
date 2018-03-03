import React from 'react'
import {FormGroup, FormControl, Checkbox} from 'react-bootstrap'

export const renderTextField = ({ input, label, type, meta: { submitFailed, error, invalid } }) => {
  return (
    <tr>
      <th>{label}</th>
      <td>
        <FormGroup
          controlId={input.name + 'Form'}
          validationState={submitFailed ? (error ? 'error' : 'success') : null}
        >
          <FormControl {...input} placeholder={label} type={type} bsSize="sm" />
          {invalid && error && <span className="text-danger">{error}</span>}
        </FormGroup>
      </td>
    </tr>
  )
};

export const renderHorizontalCheckbox = ({input, label, meta: {submitFailed, error, invalid}}) => {
  return (
      <Checkbox
        checked={input.value}
        {...input}
        inline
      >
        {label}
        {invalid && error && <span className="text-danger">{error}</span>}
      </Checkbox>
  )
};

export const renderSelectFieldComponent = ({ input, label, meta: {  submitFailed, error, invalid }, optionsForSelect }) => (
  <tr>
    <th>{label}</th>
    <td>
      <FormGroup
        controlId={input.name + 'Form'}
        validationState={submitFailed ? (error ? 'error' : 'success') : null}
      >
        <FormControl
          {...input}
          bsSize="sm"
          componentClass="select"
        >
          <option value="" disabled>Выберите из списка</option>
          {optionsForSelect.map((option, index) => {
            return <option key={index} value={option.value}>{option.key}</option>
          })}
        </FormControl>
        {invalid && error && <span className="text-danger">{error}</span>}
      </FormGroup>
    </td>
  </tr>
);
