// const path = require('path');
import app from './app';

require('dotenv').config('../.env');

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});