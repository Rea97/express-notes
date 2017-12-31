var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  let data = ''
  require('http').get('http://readeveloper.test/api/posts/1', response => {
    response.on('data', chunk => data += chunk)

    response.on('end', () => {
      res.json(JSON.parse(data), 200)
    })
  })
});

router.get('/home', (req, res, next) => {
  let tasks = [
    {title: 'random task', content: 'random content', difficulty: 4, due_at: '2017-12-31 00:00:00'},
    {title: 'random task', content: 'random content', difficulty: 4, due_at: '2017-12-31 00:00:00'},
    {title: 'random task', content: 'random content', difficulty: 4, due_at: '2017-12-31 00:00:00'},
    {title: 'random task', content: 'random content', difficulty: 4, due_at: '2017-12-31 00:00:00'},
  ];

  res.render('home', {tasks});
});

module.exports = router;
