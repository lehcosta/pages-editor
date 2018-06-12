import React from 'react'
import PropTypes from 'prop-types'

Label = ({ id, label, required }) =>
  <label className="control-label f6 db gray" htmlFor={id}>
    {label}
    {required && <span className="required">*</span>}
  </label>

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

export default function FieldTemplate(props) {
  const {
    children,
    classNames,
    description,
    help,
    hidden,
    id,
    label,
    required,
    schema,
  } = props

  if (hidden) {
    return children
  }

  return (
    <div className={`${classNames} w-100`}>
      {schema.type === 'object' && label && <Label id={id} label={label} required={required} />}
      {schema.type === 'object' && description}
      {children}
      {help}
    </div>
  )
}

FieldTemplate.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.element,
  description: PropTypes.element,
  help: PropTypes.element,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  schema: PropTypes.object.isRequired,
}
