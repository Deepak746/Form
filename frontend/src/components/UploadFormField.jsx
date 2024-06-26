import React from 'react'

const UploadFormField = ({ fieldName, value, isMandate, description, label, onChange, accept, errorLabel }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{label} {isMandate && <span className="text-danger">*</span>}</h5>
                {description && <p className="card-text">Description: {description}.</p>}
                <input type="file" className="form-control-file underlined" onChange={onChange} name={fieldName} required={isMandate ? true : false} accept={accept} />
                {errorLabel && <p className="card-text"><i>{errorLabel}!</i></p>}
            </div>
        </div>
    )
}

export default UploadFormField