const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/connect', (req, res) => {
    const { ip, port, server } = req.query;
    
    const serverData = {
        ip: ip || '127.0.0.1',
        port: port || '30120',
        serverName: server || 'FiveM Server',
        countdown: 5
    };
    
    res.render('connect', serverData);
});

app.get('/', (req, res) => {
    res.redirect('/connect?ip=46.203.182.30&port=30120&server=GUID');
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Connect at: http://localhost:${PORT}/connect?ip=46.203.182.30&port=30120&server=GUID`);
});
