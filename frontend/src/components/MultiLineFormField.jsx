import React from 'react'

const MultiLineFormField = ({ fieldName, value, isMandate, description, label, onChange, errorLabel }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{label} {isMandate && <span className="text-danger">*</span>}</h5>
                {description && <p className="card-text">Description: {description}.</p>}
                <textarea className="form-control underlined" onChange={onChange} value={value} name={fieldName} required={isMandate ? true : false}></textarea>
                {errorLabel && <p className="card-text"><i>{errorLabel}!</i></p>}
            </div>
        </div>
    )
}

export default MultiLineFormField