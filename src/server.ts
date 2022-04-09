import app from './app';

import dotenv from 'dotenv';

dotenv.config(process.env.NODE_ENV === 'test' ? { path: '.env.test' } : { path: '.env' });

console.log(process.env.NODE_ENV);

const port = process.env.SERVER_PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});