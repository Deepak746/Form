import React from 'react'

const SingleLineFormField = ({ fieldName, value, isMandate, fieldType, description, label, onChange, errorLabel }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{label} {isMandate && <span className="text-danger">*</span>}</h5>
                {description && <p className="card-text">Description: {description}.</p>}
                <input type={fieldType} onChange={onChange} value={value} className="form-control underlined" name={fieldName} required={isMandate ? true : false} />
                {errorLabel && <p className="card-text"><i>{errorLabel}!</i></p>}
            </div>
        </div>
    )
}

export default SingleLineFormField