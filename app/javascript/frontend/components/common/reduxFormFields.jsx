import React from 'react'
import {Col, FormGroup,FormControl,ControlLabel} from 'react-bootstrap'

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

export const renderHorizontalCheckbox = ({input, label, title, meta: {touched, error, warning}}) => {
  const offset = label ? {} : {smOffset: 2};
  return <FormGroup controlId={'form' + capitalize(input.name)}
                    validationState={touched ? (error ? 'error' : 'success') : null}>
    {label && <Col componentClass={ControlLabel} sm={2}>{label}</Col>}
    <Col {...offset} sm={10}>
      <Checkbox {...input} placeholder={label}>{title}</Checkbox>
      {touched &&
      ((error && <HelpBlock>{error}</HelpBlock>) ||
        (warning && <HelpBlock>{warning}</HelpBlock>))
      }
    </Col>
  </FormGroup>;
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
            return <option key={index} value={option.id}>{option.name}</option>
          })}
        </FormControl>
        {invalid && error && <span className="text-danger">{error}</span>}
      </FormGroup>
    </td>
  </tr>
);
