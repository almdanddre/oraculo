const express = require('express');
//const authController = require('../controllers/auth');
//const problemController = require('../controllers/problem')
const {spawn} = require('child_process');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  //console.log(req.user);
  if( req.user ) {
    res.render('profile', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
  
})

router.get('/problems', (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('problems')
  } else {
    //res.redirect('/login');
  }
  
});

router.get('/links', (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('links')
  } else {
    //res.redirect('/login');
  }
  
});

router.post('/problems', (req, res) => {  // guarda a rotina de enviar as entradas-saídas e verificar junto a solução de referência
  var dataToSend;
  var id = parseInt(req.body.id);
  if (id % 2 != 0) {
    // spawn new child process to call the python script
    const python = spawn('python', [req.body.question, req.body.entrada1, req.body.entrada2, req.body.saida]);
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.send(dataToSend);
    });
  } else {
    // spawn new child process to call the python script
    const python = spawn('python', [req.body.question, req.body.entrada1, req.body.saida]);
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
      console.log(dataToSend);
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.send(dataToSend);
    });
  }
  
});

/*router.get('/logout', (req, res) => {
  res.render('login', {
    user: req.user
  });
});*/

router.get('/about', (req, res) => {
  res.render('sobre')
});


module.exports = router;