const express = require('express');
const db = require('./src/model/db');
const cors = require('cors');


const app = express();
const port = 8000;

// Queries
const SELECT_POSTS = 'SELECT title, content, username as author, created_timestamp FROM Posts JOIN Users ON Posts.author = Users.id';
const SELECT_POST_BY_ID = 'SELECT title, content, username as author, created_timestamp FROM Posts JOIN Users ON Posts.author = Users.id WHERE Posts.id = @id';

// Define CORS rule
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Define your routes here

app.get('/api/posts/:id', async (req, res) => {
    try {
        const pool = await db.poolPromise;

        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid post ID' });
        }

        const result = await pool.request()
            .input('id', db.sql.Int, id)
            .query(SELECT_POST_BY_ID);
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error occurred', error: err });
    }
});

app.get('/api/posts', async (req, res) => {
    try {
        const pool = await db.poolPromise;
        const result = await pool.request()
            .query(SELECT_POSTS);

        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error occurred', error: err });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});