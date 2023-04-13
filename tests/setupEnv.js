const dotenv = require('dotenv');

// Direct dotenv to use .env.test environment variables when Node is running in 'test' environment.
process.env.NODE_ENV === 'test' ? dotenv.config({ path: '.env.test' }) : dotenv.config();