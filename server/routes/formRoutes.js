// const express = require('express');
// const router = express.Router();
// const FormData = require('../models/FormData');

// // Route to handle form submission
// router.post('/submit', async (req, res) => {
//     const formData = req.body;

//     try {
//         // Check if email already exists
//         const existingFormData = await FormData.findOne({ email: formData.email });
//         if (existingFormData) {
//             return res.status(400).json({ error: 'Email already exists in the database' });
//         }

//         // If email does not exist, save the new form data
//         const newFormData = new FormData(formData);
//         await newFormData.save();
//         res.json('Form data submitted successfully');
//     } catch (err) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

// Route to handle form submission
router.post('/submit', async (req, res) => {
    const formData = req.body;

    try {
        // Validate form data - Example: Check if required fields are present
        // Check if email already exists
        const existingFormData = await FormData.findOne({ email: formData.email });
        if (existingFormData) {
            return res.status(400).json({ error: 'Email already exists in the database' });
        }

        // Save the new form data
        const newFormData = new FormData(formData);
        await newFormData.save();
        
        // Respond with success message
        res.json({ message: 'Form data submitted successfully', data: newFormData });
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
