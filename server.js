const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');

// ========== template #1 ==========
app.engine('iliad', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    // one line if statement. grabing the call back. if error -->
    if (err) return callback(err);
    // rest of code
    const rendered = content.toString()
    .replace('#title#', `<title>${options.title}</title>`)
    .replace('#message#', `<h1>${options.message}</h1>`)
    .replace('#content#', `<div>${options.content}</div>`)

    .replace('#linkOne#', `<a href=''>${options.linkOne}</a>`)
    .replace('#linkTwo#', `<a href=''>${options.linkTwo}</a>`)

    return callback(null, rendered);
  })
})

app.set('views', './views');
app.set('view engine', 'iliad');


// =========== 10 Routes ===========
// ----- acting on template one -----
app.get('/another-one', (req, res) => {
  res.render('template', {title: 'First Template', message: 'Good morning, Dave.', content: 'I know I\'ve made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal. I\'ve still got the greatest enthusiasm and confidence in the mission. And I want to help you.', linkOne: '', linkTwo: ''})
})

app.get('/another-two', (req, res) => {
  res.render('template', {title: 'First Template', message: 'Hello', content: 'That\s ok', linkOne: '', linkTwo: ''})
})

app.get('/another-three', (req, res) => {
  res.render('template', {title: 'First Template', message: 'Something diffrent', content: 'Maybe?', linkOne: '', linkTwo: ''})
})

app.get('/another-four', (req, res) => {
  res.render('template', {title: 'First Template', message: 'This is another template', content: 'This is the content', linkOne: '', linkTwo: ''})
})

app.get('/another-five', (req, res) => {
  res.render('template', {title: 'First Template', message: 'Still in the first template', content: 'On to the second.', linkOne: '', linkTwo: ''})
})

// ----- acting on template two -----
app.get('/another-six', (req, res) => {
  res.render('template-two', { title: 'Second Template', message: 'I\'m sorry, Dave. I\'m afraid I can\'t do that.', content: 'This mission is too important for me to allow you to jeopardize it.', linkOne: '', linkTwo: ''})
})

app.get('/another-seven', (req, res) => {
  res.render('template-two', { title: 'Second Template', message: 'Hi there.', content: 'This is the second page in the second teplate.', linkOne: '', linkTwo: ''})
})

app.get('/another-eight', (req, res) => {
  res.render('template-two', { title: 'Second Template', message: 'You\re still in the second template.', content: 'Yup.', linkOne: '', linkTwo: ''})
})

app.get('/another-nine', (req, res) => {
  res.render('template-two', { title: 'Second Template', message: ' You\'re in the second template.', content: 'Yes you are', linkOne: '', linkTwo: ''})
})

app.get('/another-ten', (req, res) => {
  res.render('template-two', { title: 'Second Template', message: 'Last page', content: 'This is the last page in the last template.', linkOne: '', linkTwo: ''})
})
// =========== end routes =====================================


// root
app.get('/', function (req, res) {
  res.send('<h1>What about now?</h1>');
});

app.get('*', (req, res) => {
  res.status(404).render('template', { title: '404', message: 'You Played Yourself', content: ''})
})

// listen on 3000
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
