import React from 'react'

const SelectFormField = ({ fieldName, value, description, isMandate, label, onChange, optionItems, errorLabel }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{label} {isMandate && <span className="text-danger">*</span>}</h5>
                {description && <p className="card-text">Description: {description}.</p>}
                <select className="form-control underlined" onChange={onChange} value={value} name={fieldName} required={isMandate ? true : false}>
                    <option value=''>Select {label}</option>
                    {optionItems.map((item, i) => (
                        <option value={item} key={i}>{item}</option>
                    ))}
                </select>
                {errorLabel && <p className="card-text"><i>{errorLabel}!</i></p>}
            </div>
        </div>
    )
}

export default SelectFormField