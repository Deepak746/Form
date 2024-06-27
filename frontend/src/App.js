import React, { useEffect, useState } from 'react';
import './App.css';
import SingleLineFormField from './components/SingleLineFormField';
import MultiLineFormField from './components/MultiLineFormField';
import RadioFormField from './components/RadioFormField';
import SelectFormField from './components/SelectFormField';
import UploadFormField from './components/UploadFormField';
import axios from 'axios';
import headerImage from './assets/qww.jpg';

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [formData, setFormData] = useState({
    1: {
      email: { isMandate: true, fieldType: 'email', label: 'Email', fieldCompType: 'singleLine', value: '', errorLabel: '' },
      firstName: { isMandate: true, fieldType: 'text', label: 'First Name', fieldCompType: 'singleLine', value: '', errorLabel: '' },
      middleName: { isMandate: false, fieldType: 'text', label: 'Middle Name', fieldCompType: 'singleLine', value: '', errorLabel: '' },
      lastName: { isMandate: true, fieldType: 'text', label: 'Last Name', fieldCompType: 'singleLine', value: '', errorLabel: '' },
      dateOfBirth: { isMandate: true, fieldType: 'date', label: 'Date of Birth', fieldCompType: 'singleLine', value: '', errorLabel: '' },
      age: { isMandate: true, fieldType: 'number', label: 'Age', fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      ContactNo: { isMandate: true, fieldType: 'text', label: "Conatct Number", fieldCompType: 'singleLine', description: '', value: '', errorLabel: ''},
      "Alternate ContactNo": { isMandate: true, fieldType: 'text', label: "Alternate Conatct Number", fieldCompType: 'singleLine', description: '', value: '', errorLabel: ''},
      Gender: { isMandate: true, label: 'Gender', fieldCompType: 'radio', description: '', value: '', radioItems: ["Male", "Female", "Prefer not to say"], errorLabel: '' },
      "Marital Status": { isMandate: true, label: 'Marital Status', fieldCompType: 'radio', description: '', value: '', radioItems: ["Married", "Unmarried", "Prefer not to say"], errorLabel: '' },
      "Nationality / Citizen": { isMandate: true, fieldType: 'text', label: 'Nationality / Citizen', fieldCompType: 'singleLine', value: '', errorLabel: '' },
      "Blood Group": { isMandate: true, label: 'Blood Group', fieldCompType: 'select', description: '', value: '', radioItems: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], errorLabel: '' },
      "Upload Documents": { isMandate: false, label: 'Upload Documents', fieldCompType: 'upload', description: '', value: '', accept: "image/png, image/jpeg", errorLabel: '' },
    },
    2: {
      currentAddress: { isMandate: true, fieldCompType: 'textarea', label: 'Current Residential Address', description: 'Enter your current residential address in Full along with City, State, Postal Code.', value: '', errorLabel: '' },
      permanentAddress: { isMandate: true, fieldCompType: 'textarea', label: 'Permanent Residential Address', description: 'Enter your Permanent Residential Address in Full along with City, State, Postal Code.', value: '', errorLabel: '' },
      currentLocation: { isMandate: true, fieldType: 'text', fieldCompType: 'singleLine', label: 'Current Location', description: 'Enter your current city of residence.', value: '', errorLabel: '' },
      preferredLocation: { isMandate: true, fieldType: 'text', fieldCompType: 'singleLine', label: 'Preferred Location', description: 'Enter your preferred city of residence.', value: '', errorLabel: '' },
    },
    3: {
      passport : { isMandate: true, label: 'Do you have a passport?', fieldCompType: 'radio', description: "Select 'Yes' if you have a passport, otherwise select 'No'.", value: '', radioItems: ["Yes", "No"], errorLabel: '' },
      passportnumber : { isMandate: false, label: 'Passport Number', fieldCompType: 'singleLine', description: "If you selected 'Yes' above, enter your passport number.", value: '', errorLabel: '' },
      "passport copy" : { isMandate: false, label: 'Upload Your Passport Copy', fieldCompType: 'upload', description: " If you selected 'Yes' above, Upload a copy of  your passport.", value: '', accept: "image/png, image/jpeg", errorLabel: '' },
      aadhar : { isMandate: true, label: 'Aadhaar Card Number', fieldCompType: 'singleLine', description: " Enter your Aadhaar card number.", value: '', errorLabel: '' },
      "aadhar file" : { isMandate: true, label: 'Upload Your Aadhar Copy', fieldCompType: 'upload', description: " Upload a copy of  your Aadhar.", value: '', accept: "image/png, image/jpeg application/pdf", errorLabel: '' },
      PAN : { isMandate: true, label: 'PAN Card Number', fieldCompType: 'singleLine', description: " Enter your PAN card number.", value: '', errorLabel: '' },
      "PAN file" : { isMandate: true, label: 'Upload Your PAN Copy', fieldCompType: 'upload', description: " Upload a copy of  your PAN.", value: '', accept: "image/png, image/jpeg application/pdf", errorLabel: '' },
      "driving license" : { isMandate: true, label: 'Do you have a Valid Driving License?', fieldCompType: 'radio', description: "Select 'Yes' if you have a DL, otherwise select 'No'.", value: '', radioItems: ["Yes", "No"], errorLabel: '' },
      "DL file" : { isMandate: false, label: 'Upload Your DL Copy', fieldCompType: 'upload', description: " Upload a copy of  your DL.", value: '', accept: "image/png, image/jpeg application/pdf", errorLabel: '' },
      voter : { isMandate: true, label: 'Do you have a VoterID (if applicable)?', fieldCompType: 'radio', description: "Select 'Yes' if you have a VoterID, otherwise select 'No'.", value: '', radioItems: ["Yes", "No"], errorLabel: '' },
      "voter file" : { isMandate: false, label: 'Upload Your VoterID Copy', fieldCompType: 'upload', description: " Upload a copy of  your VoterID.", value: '', accept: "image/png, image/jpeg application/pdf", errorLabel: '' }
    },
    4: {
      photo : { isMandate: true, label: 'Photograph', fieldCompType: 'upload', description: "Upload a recent passport-sized photograph.", value: '', accept: "image/png, image/jpeg", errorLabel: '' },
      linkedin : { isMandate: true, label: 'Work Link/Portfolio (LinkedIn)', fieldCompType: 'singleLine', description: "Provide a link to your LinkedIn profile or online portfolio.", value: '', errorLabel: '' },
      resume : { isMandate: true, label: 'Please attached your updated Resume/CV', fieldCompType: 'upload', description: " Upload your resume and portfolio.", value: '', accept: "image/png, image/jpeg", errorLabel: '' },
      socialmedia : { isMandate: true, label: 'Please share the links of your Social Media Profiles (LinkedIn, Facebook, Instagram, etc.)', fieldCompType: 'singleLine', description: "Provide links to your social media profiles.", value: '', errorLabel: '' },
      othermedia : { isMandate: true, label: 'Please share the links of your Online Portfolio or Website (if applicable) {If none please mention NA}', fieldCompType: 'singleLine', description: "Provide the link to your online portfolio or personal website.", value: '', errorLabel: '' },
      skills: { isMandate: true, fieldType: 'textarea', label: 'Skills', fieldCompType: 'singleLine', value: '',description: 'List down all the Skills you posses', errorLabel: '' },
      languages : { isMandate: true, label: 'Languages', fieldCompType: 'textarea', description: "List the Languages you are Proficient.", value: '', errorLabel: '' }
    },
    5: {
      education : { isMandate: true, label: 'Education: Course', fieldCompType: 'singleLine', description: "Enter the course you have completed.", value: '', errorLabel: '' },
      "education specialization" : { isMandate: true, label: 'Education: Course', fieldCompType: 'singleLine', description: "Enter the course you have completed.", value: '', errorLabel: '' },
      edu_institute: { isMandate: true, label: 'Education: Institution', fieldCompType: 'singleLine', description: " Enter the name of the institution where you completed your course.", value: '', errorLabel: '' },
      yearofcompletion: { isMandate: true, fieldType: 'date', label: 'Year of completion', fieldCompType: 'singleLine', value: '', description: "Enter the date you completed your course.", errorLabel: '' },
      percentage : { isMandate: true, label: 'Education: Pass Percentage', fieldCompType: 'singleLine', description: "Enter the percentage you achieved in your course. Format: 85.6%.", value: '', errorLabel: '' },
      edu_proof : { isMandate: true, label: 'Upload Proof of Education Completion', fieldCompType: 'upload', description: "Description: Upload the proof of your education completion. Please upload your Consolidated MarkSheet or Semester Marksheet, Provisional Degree Certificate, Degree Completion Cetificate.", value: '', accept: "image/png, image/jpeg application/pdf", errorLabel: '' },
      certifications : { isMandate: true, label: 'Any Certifications', fieldCompType: 'radio', description: "Select 'Yes' if you have any certifications, otherwise select 'No'.", value: '', radioItems: ["Yes", "No"], errorLabel: '' },
      certificates : { isMandate: false, label: 'Certifications Obtained', fieldCompType: 'singleLine', description: "List the certifications you have obtained.", value: '', errorLabel: '' },
      certificate_auth : { isMandate: false, label: 'Name of Certification Issuing Authority', fieldCompType: 'singleLine', description: "Enter the name of the authority that issued the certification.", value: '', errorLabel: '' },
      certification_dateofcompletion: { isMandate: false, fieldType: 'date', label: 'Certification Completion Date', fieldCompType: 'singleLine', value: '', description: " Select the date when the certification was issued.", errorLabel: '' },
      proof_of_certificate : { isMandate: false, label: 'Upload Proof of Certification', fieldCompType: 'upload', description: "Upload the proof of your certification.", value: '', accept: "image/png, image/jpeg application/pdf", errorLabel: '' },
      tenative_date: { isMandate: true, fieldType: 'date', label: 'Please Enter a Tentative  Date you are expected to join us incase you are shorlisted/selected', fieldCompType: 'singleLine', value: '', description: " Date", errorLabel: '' },
      fresher : { isMandate: true, label: 'Are you a Fresher?', fieldCompType: 'radio', description: "", value: '', radioItems: ["Yes", "No"], errorLabel: '' },
    },
    6: {
      totalExperience: { isMandate: false,  label: 'Total Experience', fieldCompType: 'singleLine', description: 'Enter your total years & months of experience.', value: '', errorLabel: '' },
      organizationName: { isMandate: false,  label: 'Organization Name', fieldCompType: 'singleLine', description: 'Enter the name of the current organization you have worked for.', value: '', errorLabel: '' },
      designation: { isMandate: false,  label: 'Designation/Job Title', fieldCompType: 'singleLine', description: 'Enter your current designation or job title.', value: '', errorLabel: '' },
      employmentStartDate: { isMandate: false, fieldType: 'date', label: 'Employment Start Date', fieldCompType: 'singleLine', description: 'Select the start date of your employment.', value: '', errorLabel: '' },
      employmentEndDate: { isMandate: false, fieldType: 'date', label: 'Employment End Date', fieldCompType: 'singleLine', description: 'Select the end date of your employment (if applicable).', value: '', errorLabel: '' },
     "Roles And Responsibilities": { isMandate: false, fieldType :'textarea', label: 'Roles and Responsibilities', fieldCompType: 'textarea', description: 'Describe your roles and responsibilities in the organization.', value: '', errorLabel: '' },
      reasonForLeaving: { isMandate: false, fieldType : 'textarea', label: 'Reason for Leaving', fieldCompType: 'textarea', description: 'Provide the reason for leaving your previous or current job.', value: '', errorLabel: '' },
      currentCTC: { isMandate: false,  label: 'Current CTC', fieldCompType: 'singleLine', description: 'Enter your current Cost to Company (CTC). Format: INR 100000 (Annual CTC)', value: '', errorLabel: '' },
      expectedCTC: { isMandate: false,  label: 'Expected CTC', fieldCompType: 'singleLine', description: 'Enter your expected Cost to Company (CTC). Format: INR 100000 (Annual CTC)', value: '', errorLabel: '' },
      noticePeriod: { isMandate: false,  label: 'Notice Period', fieldCompType: 'singleLine', description: 'Enter the number of days in your notice period. Example: 60 Days', value: '', errorLabel: '' }
    },
    7: {
      salarySlips: { isMandate: false, fieldType: 'file', label: 'Please upload your Salary Slips/Payslips (Last 3 Months) for your total experience', fieldCompType: 'upload', description: 'Upload your salary slips or payslips for the last 3 months.', value: '', accept: 'image/png, image/jpeg', errorLabel: '' },
      bankStatements: { isMandate: false, fieldType: 'file', label: 'Please upload your Bank Statements (Last 3 Months) for your total experience', fieldCompType: 'upload', description: 'Upload your bank statements for the last 3 months.', value: '', accept: 'image/png, image/jpeg', errorLabel: '' },
      offerLetter: { isMandate: false, fieldType: 'file', label: 'Upload Offer Letter/Joining Letter/Employment Agreement from organization(s) for your total experience', fieldCompType: 'upload', description: 'Upload your offer letter, joining letter, or employment agreement.', value: '', accept: 'image/png, image/jpeg', errorLabel: '' },
      incrementLetter: { isMandate: false, fieldType: 'file', label: 'Upload increment letter from organization(s) for your total experience', fieldCompType: 'upload', description: 'Upload your increment letter.', value: '', accept: 'image/png, image/jpeg', errorLabel: '' },
      relievingLetter: { isMandate: false, fieldType: 'file', label: 'Upload Relieving Letter/Experience Certificates / Acceptance of resignation from present employment', fieldCompType: 'upload', description: 'Upload your relieving letter, experience certificates, or acceptance of resignation.', value: '', accept: 'image/png, image/jpeg', errorLabel: '' }
    },
    8: {
      servingNotice: { isMandate: false, fieldType: 'radio', label: 'Are you Currently Serving your Notice Period?', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO'], errorLabel: '' },
      lastWorkingDate: { isMandate: false, fieldType: 'date', label: 'Mention your Last working Date', fieldCompType: 'singleLine', description: "If you selected 'Yes' above, enter your last working date in the organization.", value: '', errorLabel: '' },
      existingOffers: { isMandate: true, fieldType: 'radio', label: 'Do you hold any existing offers that we should be aware of?', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO', 'MAYBE'], errorLabel: '' },
      offerOrganizationName: { isMandate: false, fieldType: 'text', label: 'If yes, enter the name of the organization you hold an offer from', fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      offerLetterUpload: { isMandate: false, fieldType: 'file', label: 'Please upload the offer letter or proof of offer you hold', fieldCompType: 'upload', description: '', value: '', accept: 'image/png, image/jpeg, application/pdf', errorLabel: '' },
      acceptedOffer: { isMandate: false, fieldType: 'radio', label: 'Please confirm if you have accepted the offer you hold?', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO', 'MAYBE'], errorLabel: '' },
      offerAcceptanceDate: { isMandate: false, fieldType: 'date', label: 'Please mention the date you have to accept the Offer you hold or the date you have Accepted the Offer', fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      proposedCTC: { isMandate: false, fieldType: 'text', label: 'If no, mention the expected/proposed CTC you are offered', fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' }
    },
    9: {
      referenceName: { isMandate: true, fieldType: 'text', label: 'Please mention One reference contact person name from this organization', fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      referenceDesignation: { isMandate: true, fieldType: 'text', label: "One reference contact person's Designation from this organization", fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      referenceContactNo: { isMandate: true, fieldType: 'text', label: "One reference contact person's Contact No from this organization", fieldCompType: 'singleLine', description: '', value: '', errorLabel: ''},
      referenceEmail: { isMandate: true, fieldType: 'email', label: "One reference contact person's Email ID from this organization", fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      referenceRelationship: { isMandate: true, fieldType: 'text', label: "One reference contact person's - Please state the Professional Relationship with the mentioned reference contact person", fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' },
      referenceCheckDate: { isMandate: true, fieldType: 'date', label: 'Please mention the date we can Reference Check', fieldCompType: 'singleLine', description: '', value: '', errorLabel: '' }
    },
    10: {
      employmentVerificationConsent: { isMandate: true, fieldType: 'radio', label: 'Employment Verification Consent', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO', 'MAYBE'], errorLabel: '' },
      authorizationToContact: { isMandate: true, fieldType: 'radio', label: 'Authorization to contact previous employers and references', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO', 'MAYBE'], errorLabel: '' }
    },
    11: {
      backgroundCheckConsent: { isMandate: true, fieldType: 'radio', label: 'Consent to conduct background checks', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO', 'MAYBE'], errorLabel: '' },
      drugAlcoholTestingConsent: { isMandate: true, fieldType: 'radio', label: 'Consent to Drug/Alcohol Testing Consent', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO', 'MAYBE'], errorLabel: '' },
      disclosureCriminalConvictions: { isMandate: true, fieldType: 'radio', label: 'Disclosure of any Criminal Convictions or Pending Criminal Cases', fieldCompType: 'radio', description: "Select 'Yes' if you have any criminal convictions or pending criminal cases, otherwise select 'No'.", value: '', radioItems: ['YES', 'NO'], errorLabel: '' },
      detailsCriminalConvictions: { isMandate: false, fieldType: 'textarea', label: 'Details of any Criminal Convictions or Pending Criminal Cases', fieldCompType: 'textarea', description: "If you selected 'Yes' above, please provide details of your criminal convictions or pending criminal cases, including charges, dates, and outcomes.", value: '', errorLabel: '' },
      acknowledgement: { isMandate: true, fieldType: 'radio', label: 'By submitting this form, I acknowledge that all the information provided is true and accurate to the best of my knowledge.', fieldCompType: 'radio', description: '', value: '', radioItems: ['YES', 'NO'], errorLabel: '' }
    }    
  });

  const lastPageNum = Object.keys(formData).length;
  console.log(lastPageNum)

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  

  const handleNext = (e) => {
  e.preventDefault();
  const updatedFormData = { ...formData };
  let hasErrors = false;

  for (const key in updatedFormData[pageNum]) {
    const field = updatedFormData[pageNum][key];

    if (field.isMandate && !field.value) {
      field.errorLabel = `${field.label} is required.`;
      hasErrors = true;
    } else {
      // Validate specific field types
      if (key === 'ContactNo' || key === 'Alternate ContactNo' || key === 'referenceContactNo') {
        const isValidPhoneNumber = validatePhoneNumber(field.value);
        field.errorLabel = isValidPhoneNumber ? '' : 'Invalid phone number format';
        if (!isValidPhoneNumber) hasErrors = true;
      } else if (key === 'aadhar') {
        const isValidAadhaar = validateAadhaarNumber(field.value);
        field.errorLabel = isValidAadhaar ? '' : 'Invalid Aadhaar number';
        if (!isValidAadhaar) hasErrors = true;
      } else if (key === 'PAN') {
        const isValidPAN = validatePANNumber(field.value);
        field.errorLabel = isValidPAN ? '' : 'Invalid PAN number FORMAT: ABCDE1234F';
        if (!isValidPAN) hasErrors = true;
      } else if (key === 'percentage') {
        const isValidPercentage = validatePercentage(field.value);
        field.errorLabel = isValidPercentage ? '' : 'Invalid Input FORMAT: 88.56%';
        if (!isValidPercentage) hasErrors = true;
      } else if (key === 'currentCTC' || key === 'expectedCTC' || key === 'proposedCTC') {
        const isValidCTC = validateCTC(field.value);
        field.errorLabel = isValidCTC ? '' : 'Enter numbers only';
        if (!isValidCTC) hasErrors = true;
      } else {
        field.errorLabel = '';
      }
    }
  }

  setFormData(updatedFormData);

  if (hasErrors) {
    return;
  } else {
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setPageNum(pageNum + 1);
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const flattenedFormData = {};
    Object.keys(formData).forEach(page => {
      Object.keys(formData[page]).forEach(field => {
        flattenedFormData[field] = formData[page][field].value;
      });
    });

    submitForm(flattenedFormData)
  };

  // Example using fetch API in React
  const submitForm = async (formData) => {
    try {
      const response = await axios.post('https://form-7nzg.onrender.com/api/form/submit', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert(response.data);
    } catch (error) {
      if (error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert('Error submitting form');
      }
    } finally {
      localStorage.removeItem('formData');
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    try {
      const phoneRegex = /^[+]?[0-9]{1,3}\s?[-]?[0-9]{3,14}\s?[-]?[0-9]{3,14}$/;
      const isValidFormat = phoneRegex.test(phoneNumber);
      const isWithinLength = phoneNumber.length >= 8 && phoneNumber.length <= 15;
      return isValidFormat && isWithinLength;
    } catch (error) {
      console.error('Error validating phone number:', error);
      return false;
    }
  };
  const validatePercentage = (input) => {
    // Regular expression to match percentage format
    const percentageRegex = /^(\d+(\.\d{1,2})?|\.\d{1,2})%$/;

    // Test if the input matches the regex
    return percentageRegex.test(input);
  };
  const validateAadhaarNumber = (aadhaarNumber) => {
    try {
        const aadhaarRegex = /^\d{12}$/;
        const isValidFormat = aadhaarRegex.test(aadhaarNumber);
        return isValidFormat;
    } catch (error) {
        console.error('Error validating Aadhaar number:', error);
        return false;
    }
  };

  const validatePANNumber = (panNumber) => {
      try {
          const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
          const isValidFormat = panRegex.test(panNumber);
          return isValidFormat;
      } catch (error) {
          console.error('Error validating PAN number:', error);
          return false;
      }
    };
  const validateCTC = (value) => {
    const ctcRegex = /^[0-9]*$/; // Regular expression to allow only numeric input
    return ctcRegex.test(value);
  };

  const onChangeText = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    const updatedFormData = { ...formData };

    for (let page in updatedFormData) {
      
      if (updatedFormData[page][name]) {
        updatedFormData[page][name].value = value;
      }
    }
    setFormData(updatedFormData);
  };

  
  const onChangeRadio = (e, value) => {
    const { name } = e.target;
    const updatedFormData = { ...formData };
  
    for (let page in updatedFormData) {
      if (updatedFormData[page][name]) {
        updatedFormData[page][name].value = value;
      }
    }
  
    if (name === 'passport' && value === 'Yes') {
      updatedFormData[3]['passportnumber'].isMandate = true;
      updatedFormData[3]['passport copy'].isMandate = true;
    } else {
      updatedFormData[3]['passportnumber'].isMandate = false;
      updatedFormData[3]['passport copy'].isMandate = false;
    }
    if (name === 'driving license' && value === 'Yes') {
      updatedFormData[3]['DL file'].isMandate = true;
    } else if (name === 'driving license') {
      updatedFormData[3]['DL file'].isMandate = false;
    }
    if (name === 'voter' && value === 'Yes') {
      updatedFormData[3]['voter file'].isMandate = true;
    } else if (name === 'voter') {
      updatedFormData[3]['voter file'].isMandate = false;
    }
    if (name === 'certifications' && value === 'Yes'){
      updatedFormData[pageNum]['certificates'].isMandate = true;
      updatedFormData[pageNum]['certificate_auth'].isMandate = true;
      updatedFormData[pageNum]['certification_dateofcompletion'].isMandate = true;
      updatedFormData[pageNum]['proof_of_certificate'].isMandate = true;
    }
    else if (name === 'certifications'){
      updatedFormData[pageNum]['certificates'].isMandate = false;
      updatedFormData[pageNum]['certificate_auth'].isMandate = false;
      updatedFormData[pageNum]['certification_dateofcompletion'].isMandate = false;
      updatedFormData[pageNum]['proof_of_certificate'].isMandate = false;
    }
    if (name === 'servingNotice' && value === 'Yes'){
      updatedFormData[pageNum]['lastWorkingDate'].isMandate = true;
    }
    else if (name === 'servingNotice'){
      updatedFormData[pageNum]['lastWorkingDate'].isMandate = false;
    }
    if (name === 'existingOffers' && value === 'Yes'){
      updatedFormData[pageNum]['offerOrganizationName'].isMandate = true;
      updatedFormData[pageNum]['offerLetterUpload'].isMandate = true;
      updatedFormData[pageNum]['acceptedOffer'].isMandate = true;
      updatedFormData[pageNum]['offerAcceptanceDate'].isMandate = true;
      updatedFormData[pageNum]['proposedCTC'].isMandate = true;
    }
    else if (name === 'existingOffers'){
      updatedFormData[pageNum]['offerOrganizationName'].isMandate = false;
      updatedFormData[pageNum]['offerLetterUpload'].isMandate = false;
      updatedFormData[pageNum]['acceptedOffer'].isMandate = false;
      updatedFormData[pageNum]['offerAcceptanceDate'].isMandate = false;
      updatedFormData[pageNum]['proposedCTC'].isMandate = false;
    }
    if (name === 'fresher' && value === 'No'){
      updatedFormData[6]['totalExperience'].isMandate = true;
      updatedFormData[6]['organizationName'].isMandate = true;
      updatedFormData[6]['designation'].isMandate = true;
      updatedFormData[6]['employmentStartDate'].isMandate = true;
      updatedFormData[6]['employmentEndDate'].isMandate = true;
      updatedFormData[6]['Roles And Responsibilities'].isMandate = true;
      updatedFormData[6]['reasonForLeaving'].isMandate = true;
      updatedFormData[6]['currentCTC'].isMandate = true;
      updatedFormData[6]['expectedCTC'].isMandate = true;
      updatedFormData[6]['noticePeriod'].isMandate = true;
      updatedFormData[7]['salarySlips'].isMandate = true;
      updatedFormData[7]['bankStatements'].isMandate = true;
      updatedFormData[7]['offerLetter'].isMandate = true;
      updatedFormData[7]['incrementLetter'].isMandate = true;
      updatedFormData[7]['relievingLetter'].isMandate = true;
      updatedFormData[8]['servingNotice'].isMandate = true;
      updatedFormData[8]['lastWorkingDate'].isMandate = true;
    }
    else if (name === 'existingOffers'){
      updatedFormData[6]['totalExperience'].isMandate = false;
      updatedFormData[6]['organizationName'].isMandate = false;
      updatedFormData[6]['designation'].isMandate = false;
      updatedFormData[6]['employmentStartDate'].isMandate = false;
      updatedFormData[6]['employmentEndDate'].isMandate = false;
      updatedFormData[6]['Roles And Responsibilities'].isMandate = false;
      updatedFormData[6]['reasonForLeaving'].isMandate = false;
      updatedFormData[6]['currentCTC'].isMandate = false;
      updatedFormData[6]['expectedCTC'].isMandate = false;
      updatedFormData[6]['noticePeriod'].isMandate = false;
      updatedFormData[7]['salarySlips'].isMandate = false;
      updatedFormData[7]['bankStatements'].isMandate = false;
      updatedFormData[7]['offerLetter'].isMandate = false;
      updatedFormData[7]['incrementLetter'].isMandate = false;
      updatedFormData[7]['relievingLetter'].isMandate = false;
      updatedFormData[8]['servingNotice'].isMandate = false;
      updatedFormData[8]['lastWorkingDate'].isMandate = false;
    }
    else{
      setFormData(updatedFormData);
    }
  };
  

  const handleFileChange = async (event) => {
    const { files, name } = event.target;
    const file = files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      const updatedFormData = { ...formData };
      for (let page in updatedFormData) {
        if (updatedFormData[page][name]) {
          updatedFormData[page][name].value = base64;
        }
      }
      setFormData(updatedFormData);
    }
  };

  

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="App">
      <div className="header">
        <img src={headerImage} alt="Header" className="header-image" />
      {/* Other content of your header */}
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">Candidate Application Form - VYZEN</h2>
          </div>
          <div className="card-body">
            <b>
              <i>
                <h6>Please fill out the following details accurately to apply for the position. Ensure you upload necessary documents where required. Fields marked with an asterisk (*) are mandatory.</h6>
                <hr />
                <h6>The name, email, and photo associated with your Google account will be recorded when you upload files and submit this form.</h6>
              </i>
            </b>
          </div>
        </div>
  
        <div id="page1" className="page">
          <form className="form-background" id="applicationForm" onSubmit={pageNum === lastPageNum ? handleSubmit : handleNext}>
            {Object.keys(formData).map((page) => (
              <React.Fragment key={page}>
                {pageNum.toString() === page &&
                  <>
                    {Object.keys(formData[page]).map((key) => (
                      <React.Fragment key={key}>
                        {formData[page][key].fieldCompType === "singleLine" && (
                          <SingleLineFormField
                            fieldName={key}
                            fieldType={formData[page][key].fieldType}
                            value={formData[page][key].value}
                            isMandate={formData[page][key].isMandate}
                            label={formData[page][key].label}
                            onChange={onChangeText}
                            description={formData[page][key]?.description || ''}
                            errorLabel={formData[page][key]?.errorLabel || ''}
                            pattern={formData[page][key].pattern}
                            className="form-control underlined" // Apply custom class
                            
                          />
                        )}
                        {formData[page][key].fieldCompType === "textarea" && (
                          <MultiLineFormField
                            fieldName={key}
                            description={formData[page][key]?.description || ''}
                            isMandate={formData[page][key].isMandate}
                            label={formData[page][key].label}
                            onChange={onChangeText}
                            value={formData[page][key].value}
                            key={key}
                            errorLabel={formData[page][key]?.errorLabel || ''}
                            className="form-control underlined" // Apply custom class
                          />
                        )}
                        {formData[page][key].fieldCompType === "radio" && (
                          <RadioFormField
                            fieldName={key}
                            label={formData[page][key].label}
                            isMandate={formData[page][key].isMandate}
                            description={formData[page][key]?.description || ''}
                            radioItems={formData[page][key].radioItems}
                            value={formData[page][key].value}
                            onChange={onChangeRadio}
                            key={key}
                            errorLabel={formData[page][key]?.errorLabel || ''}
                          />
                        )}
                        {formData[page][key].fieldCompType === "select" && (
                          <SelectFormField
                            fieldName={key}
                            label={formData[page][key].label}
                            isMandate={formData[page][key].isMandate}
                            description={formData[page][key]?.description || ''}
                            optionItems={formData[page][key].radioItems}
                            value={formData[page][key].value}
                            onChange={onChangeText}
                            key={key}
                            errorLabel={formData[page][key]?.errorLabel || ''}
                            className="form-control underlined" // Apply custom class
                          />
                        )}
                        {formData[page][key].fieldCompType === "upload" && (
                          <UploadFormField
                            fieldName={key}
                            label={formData[page][key].label}
                            isMandate={formData[page][key].isMandate}
                            description={formData[page][key]?.description || ''}
                            value={formData[page][key].value}
                            onChange={handleFileChange}
                            key={key}
                            accept={formData[page][key].accept}
                            errorLabel={formData[page][key]?.errorLabel || ''}
                            className="form-control underlined" // Apply custom class

                          />
                        )}
                      </React.Fragment>
                    ))}
                  </>
                }
              </React.Fragment>
            ))}
  
            <div className="text-center mt-4">
              {pageNum > 1 && <button type="button" className="btn btn-secondary btn-prev mr-2" onClick={() => setPageNum(pageNum - 1)}>Previous</button>}
              <button type="submit" className="btn btn-primary btn-next">{pageNum === lastPageNum ? "Submit" : "Next"}</button>
            </div>
          </form>
  
          <div className="text-center mt-4">
            <p id="page-indicator">Page {pageNum} of {lastPageNum}</p>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;
