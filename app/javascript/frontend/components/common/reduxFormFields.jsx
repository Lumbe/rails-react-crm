import React from 'react'
import {Col, FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import {capitalize} from 'lodash'


export const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return <FormGroup
    controlId={'form' + capitalize(input.name)}
    validationState={touched ? (error ? 'error' : 'success') : null}
  >
    <Col componentClass={ControlLabel} sm={2}>{label}</Col>
    <Col sm={10}>
      <FormControl
        {...input}
        placeholder={label}
        type={type}
        bsSize="sm"
      />
      {touched && error && <span className="error">{error}</span>}
    </Col>
  </FormGroup>
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

export const renderSelectFieldComponent = ({ input, label, children, hint, meta: { touched, error, warning }, classes }) => (
  <label>
    <strong>{label}</strong>
    <select {...input} className={classes.select}>
      {children}
    </select>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    {hint && <p className="hint">{hint}</p>}
  </label>
);