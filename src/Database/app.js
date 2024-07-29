app.get('/api/buses', (req, res) => {
    connection.query('SELECT * FROM buses', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        console.log('Query results:', results);
        res.json(results);
    });
});