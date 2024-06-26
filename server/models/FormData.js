// const mongoose = require('mongoose');

// const FormDataSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     firstName: { type: String, required: true },
//     middleName: { type: String },
//     lastName: { type: String, required: true },
//     dateOfBirth: { type: Date, required: true },
//     age: { type: Number, required: true },
//     Gender: { type: String, required: true },
//     "Marital Status": { type: String, required: true },
//     "Nationality / Citizen": { type: String, required: true },
//     "Blood Group": { type: String, required: true },
//     "Upload Documents": { type: String },
// });

// module.exports = mongoose.model('FormData', FormDataSchema);

const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    age: { 
        type: Number, 
        required: true,
        validate: {
            validator: function(v) {
                return v >= 0 && v <= 120;
            },
            message: props => `${props.value} is not a valid age! Age should be between 0 and 120.`
        }
    },
    Gender: { type: String, required: true },
    ContactNo: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,14}([-.\s]?[0-9]{1,13})?$/.test(v);
            },
            message: props => `${props.value} is not a valid contact number!`
        }
    },
    "Alternate ContactNo": {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,14}([-.\s]?[0-9]{1,13})?$/.test(v);
            },
            message: props => `${props.value} is not a valid alternate contact number!`
        }
    },
    "Marital Status": { type: String, required: true },
    "Nationality / Citizen": { type: String, required: true },
    "Blood Group": { type: String, required: true },
    "Upload Documents": { type: String },
    "Nationality / Citizen": { type: String, required: true },
    "Blood Group": { type: String, required: true },
    "Upload Documents": { type: String },

    currentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    currentLocation: { type: String, required: true },
    preferredLocation: { type: String, required: true },

    passport: { type: String, required: true },
    passportnumber: { type: String },
    "passport copy": { type: String },
    aadhar: { type: String, required: true },
    "aadhar file": { type: String },
    PAN: { type: String, required: true },
    "PAN file": { type: String },
    "driving license": { type: String, required: true },
    "DL file": { type: String },
    voter: { type: String, required: true },
    "voter file": { type: String },

    photo: { type: String, required: true },
    linkedin: { type: String, required: true },
    resume: { type: String, required: true },
    socialmedia: { type: String, required: true },
    othermedia: { type: String, required: true },
    skills: { type: String, required: true },
    languages: { type: String, required: true },

    education: { type: String, required: true },
    "education specialization": { type: String, required: true },
    edu_institute: { type: String, required: true },
    yearofcompletion: { type: Date, required: true },
    percentage: { type: String, required: true },
    edu_proof: { type: String, required: true },
    certifications: { type: String, required: true },
    certificates: { type: String },
    certificate_auth: { type: String },
    certification_dateofcompletion: { type: Date },
    proof_of_certificate: { type: String, required: true },
    tenative_date: { type: Date },
    fresher: { type: String, required: true },

    totalExperience: { type: String, required: true },
    organizationName: { type: String, required: true },
    designation: { type: String, required: true },
    employmentStartDate: { type: Date, required: true },
    employmentEndDate: { type: Date },
    "Roles And Responsibilities": { type: String, required: true },
    reasonForLeaving: { type: String, required: true },
    currentCTC: { type: String, required: true },
    expectedCTC: { type: String, required: true },
    noticePeriod: { type: String, required: true },

    salarySlips: { type: String, required: true },
    bankStatements: { type: String, required: true },
    offerLetter: { type: String, required: true },
    incrementLetter: { type: String, required: true },
    relievingLetter: { type: String, required: true },

    servingNotice: { type: String, required: true },
    lastWorkingDate: { type: Date, required: true },
    existingOffers: { type: String, required: true },
    offerOrganizationName: { type: String },
    offerLetterUpload: { type: String },
    acceptedOffer: { type: String, required: true },
    offerAcceptanceDate: { type: Date },
    proposedCTC: { type: String },

    referenceName: { type: String, required: true },
    referenceDesignation: { type: String, required: true },
    referenceContactNo: { type: String, required: true },
    referenceEmail: { type: String, required: true },
    referenceRelationship: { type: String, required: true },
    referenceCheckDate: { type: Date, required: true },

    employmentVerificationConsent: { type: String, required: true },
    authorizationToContact: { type: String, required: true },

    backgroundCheckConsent: { type: String, required: true },
    drugAlcoholTestingConsent: { type: String, required: true },
    disclosureCriminalConvictions: { type: String, required: true },
    detailsCriminalConvictions: { type: String },
    acknowledgement: { type: String, required: true }
});

module.exports = mongoose.model('FormData', FormDataSchema);
