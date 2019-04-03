const express = require('express');
const app = express();

const db = require('./config/keys').mongoURI;

const mongoose = require('mongoose');
mongoose.connect(db).then(
    () => console.log('MongoDB connected...')
).catch(
    (err) => console.log(err)
)

const port = process.env.PORT || 5000;
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (req, res) => res.send('Hello - Hey There'));

app.listen(port, () => console.log(`Server running at port ${port}`));

