const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const app = express();
app.set('view engine', 'ejs');
// const https = require('https');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
items = [];
workItems = [];


// Get date
app.get('/', function(req,res) {
    var today = new Date();
    var options = {
        day: "numeric",
        weekday: "long",
        month: "long" 
    };
    var day = today.toLocaleDateString('en-US', options);
    res.render('list', {
        listTitle: day, newListItems: items
    });
});


// Passing new items to the todolist array
app.post('/', function(req, res) {
    item = req.body.newItem
    items.push(item);

    res.redirect('/');
})


// Rendering my todo list items to the home page with ejs
app.get('/work', function(req,res) {
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
}) 


app.post('/work', function(req,res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
})

// Setting up my server
app.listen(3000, function(req,res) {
    console.log('Server is running on port 3000');
})