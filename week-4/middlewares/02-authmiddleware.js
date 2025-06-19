
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key = header value
const HEADER_KEY_NAME = '100xdevs-api-key'; // key = header name

// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    const apiKey = req.get(HEADER_KEY_NAME);
    
    if (apiKey === VALID_API_KEY) {
        next(); // Proceed to the route
    } else {
        res.status(401).json({ message:'Invalid or missing API key' });
    }
}
app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

module.exports = app;


