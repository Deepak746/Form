import React from 'react'

const RadioFormField = ({ fieldName, value, description, isMandate, label, onChange, radioItems, errorLabel }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{label} {isMandate && <span className="text-danger">*</span>}</h5>
                {description && <p className="card-text">Description: {description}.</p>}
                {radioItems.map((item, i) => (
                    <div key={i}>
                        <input type="radio" onChange={(e) => onChange(e, item)} checked={value === item ? true : false} name={fieldName} />
                        <label htmlFor="married">{item}</label>
                    </div>
                ))}
                {errorLabel && <p className="card-text"><i>{errorLabel}!</i></p>}
            </div>
        </div>
    )
}

export default RadioFormField