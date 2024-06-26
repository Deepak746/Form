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

const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: function() { return this.isMandate; },
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    firstName: { type: String, required: function() { return this.isMandate; } },
    middleName: { type: String },
    lastName: { type: String, required: function() { return this.isMandate; } },
    dateOfBirth: { type: Date, required: function() { return this.isMandate; } },
    age: { 
        type: Number, 
        required: function() { return this.isMandate; },
        validate: {
            validator: function(v) {
                return v >= 0 && v <= 120;
            },
            message: props => `${props.value} is not a valid age! Age should be between 0 and 120.`
        }
    },
    Gender: { type: String, required: function() { return this.isMandate; } },
    ContactNo: {
        type: String,
        required: function() { return this.isMandate; },
        validate: {
            validator: function(v) {
                return /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,14}([-.\s]?[0-9]{1,13})?$/.test(v);
            },
            message: props => `${props.value} is not a valid contact number!`
        }
    },
    "Alternate ContactNo": {
        type: String,
        required: function() { return this.isMandate; },
        validate: {
            validator: function(v) {
                return /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,14}([-.\s]?[0-9]{1,13})?$/.test(v);
            },
            message: props => `${props.value} is not a valid alternate contact number!`
        }
    },
    "Marital Status": { type: String, required: function() { return this.isMandate; } },
    "Nationality / Citizen": { type: String, required: function() { return this.isMandate; } },
    "Blood Group": { type: String, required: function() { return this.isMandate; } },
    "Upload Documents": { type: String },
    currentAddress: { type: String, required: function() { return this.isMandate; } },
    permanentAddress: { type: String, required: function() { return this.isMandate; } },
    currentLocation: { type: String, required: function() { return this.isMandate; } },
    preferredLocation: { type: String, required: function() { return this.isMandate; } },
    passport: { type: String, required: function() { return this.isMandate; } },
    passportnumber: { type: String },
    "passport copy": { type: String },
    aadhar: { type: String, required: function() { return this.isMandate; } },
    "aadhar file": { type: String },
    PAN: { type: String, required: function() { return this.isMandate; } },
    "PAN file": { type: String },
    "driving license": { type: String, required: function() { return this.isMandate; } },
    "DL file": { type: String },
    voter: { type: String, required: function() { return this.isMandate; } },
    "voter file": { type: String },
    photo: { type: String, required: function() { return this.isMandate; } },
    linkedin: { type: String, required: function() { return this.isMandate; } },
    resume: { type: String, required: function() { return this.isMandate; } },
    socialmedia: { type: String, required: function() { return this.isMandate; } },
    othermedia: { type: String, required: function() { return this.isMandate; } },
    skills: { type: String, required: function() { return this.isMandate; } },
    languages: { type: String, required: function() { return this.isMandate; } },
    education: { type: String, required: function() { return this.isMandate; } },
    "education specialization": { type: String, required: function() { return this.isMandate; } },
    edu_institute: { type: String, required: function() { return this.isMandate; } },
    yearofcompletion: { type: Date, required: function() { return this.isMandate; } },
    percentage: { type: String, required: function() { return this.isMandate; } },
    edu_proof: { type: String, required: function() { return this.isMandate; } },
    certifications: { type: String, required: function() { return this.isMandate; } },
    certificates: { type: String },
    certificate_auth: { type: String },
    certification_dateofcompletion: { type: Date },
    proof_of_certificate: { type: String, required: function() { return this.isMandate; } },
    tenative_date: { type: Date, required: function() { return this.isMandate; } },
    fresher: { type: String, required: function() { return this.isMandate; } },
    totalExperience: { type: String, required: function() { return this.isMandate; } },
    organizationName: { type: String, required: function() { return this.isMandate; } },
    designation: { type: String, required: function() { return this.isMandate; } },
    employmentStartDate: { type: Date, required: function() { return this.isMandate; } },
    employmentEndDate: { type: Date },
    "Roles And Responsibilities": { type: String, required: function() { return this.isMandate; } },
    reasonForLeaving: { type: String, required: function() { return this.isMandate; } },
    currentCTC: { type: String, required: function() { return this.isMandate; } },
    expectedCTC: { type: String, required: function() { return this.isMandate; } },
    noticePeriod: { type: String, required: function() { return this.isMandate; } },
    salarySlips: { type: String, required: function() { return this.isMandate; } },
    bankStatements: { type: String, required: function() { return this.isMandate; } },
    offerLetter: { type: String, required: function() { return this.isMandate; } },
    incrementLetter: { type: String, required: function() { return this.isMandate; } },
    relievingLetter: { type: String, required: function() { return this.isMandate; } },
    servingNotice: { type: String, required: function() { return this.isMandate; } },
    lastWorkingDate: { type: Date, required: function() { return this.isMandate; } },
    existingOffers: { type: String, required: function() { return this.isMandate; } },
    offerOrganizationName: { type: String },
    offerLetterUpload: { type: String },
    acceptedOffer: { type: String, required: function() { return this.isMandate; } },
    offerAcceptanceDate: { type: Date },
    proposedCTC: { type: String },
    referenceName: { type: String, required: function() { return this.isMandate; } },
    referenceDesignation: { type: String, required: function() { return this.isMandate; } },
    referenceContactNo: { type: String, required: function() { return this.isMandate; } },
    referenceEmail: { type: String, required: function() { return this.isMandate; } },
    referenceRelationship: { type: String, required: function() { return this.isMandate; } },
    referenceCheckDate: { type: Date, required: function() { return this.isMandate; } },
    employmentVerificationConsent: { type: String, required: function() { return this.isMandate; } },
    authorizationToContact: { type: String, required: function() { return this.isMandate; } },
    backgroundCheckConsent: { type: String, required: function() { return this.isMandate; } },
    drugAlcoholTestingConsent: { type: String, required: function() { return this.isMandate; } },
    disclosureCriminalConvictions: { type: String, required: function() { return this.isMandate; } },
    detailsCriminalConvictions: { type: String },
    acknowledgement: { type: String, required: function() { return this.isMandate; } }
});

module.exports = mongoose.model('FormData', FormDataSchema);
