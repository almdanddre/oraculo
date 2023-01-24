const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');
const { Client } = require('pg');

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("CONNECTED!")
  }
});

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if( !email || !password ) {
      return res.status(400).render('login', {
        message: 'Por favor, forneça e-mail e senha.'
      })
    }

    db.query('SELECT * FROM users WHERE email = $1', [email], async (error, results) => {
      //console.log(results.rows[0].password);
      if( !results || !(await bcrypt.compare(password, results.rows[0].password)) ) {
        res.status(401).render('login', {
          message: 'E-mail ou Senha incorretos.'
        })
      } else {
        const id = results.rows[0].id;

        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN
        });

        //console.log("The token is: " + token);

        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        }

        res.cookie('jwt', token, cookieOptions );
        res.status(200).redirect("/");
        
      }
      
    });

  } catch (error) {
    console.log(error);
  }
}

exports.register = (req, res) => {
  //console.log(req.body);

  const { name, email, password, passwordConfirm } = req.body;

  db.query('SELECT email FROM users WHERE email = $1', [email], async (error, results) => {
    //console.log(results);
    if(error) {
      console.log(error);
    }

    if( results.rows.length > 0 ) {
      return res.render('register', {
        message: 'Este e-mail já está sendo utilizado.'
      })
    } else if( password !== passwordConfirm ) {
      return res.render('register', {
        message: 'Senhas não conferem.'
      });
    }

    let hashedPassword = await bcrypt.hash(password, 8);
    //console.log(hashedPassword);

    db.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)', [name, email, hashedPassword ], (error, results) => {
      if(error) {
        console.log(error);
      } else {
        //console.log(results);
        return res.render('register', {
          message: 'Usuário cadastrado.'
        });
      }
    })

    
  });
  

}

exports.isLoggedIn = async (req, res, next) => {
  // console.log(req.cookies);
  if( req.cookies.jwt) {
    try {
      //1) verify the token
      const decoded = await promisify(jwt.verify)(req.cookies.jwt,
      process.env.JWT_SECRET
      );

      console.log(decoded.id);

      //2) Check if the user still exists
      db.query('SELECT * FROM users WHERE id = $1', [decoded.id], (error, result) => {
        console.log(result);

        if(!result) {
          return next();
        }

        req.user = result.rows[0];
        console.log("user is")
        console.log(req.user);
        
        return next();
        
      });
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    next();
  }
}

exports.logout = async (req, res) => {
  res.cookie('jwt', 'logout', {
    expires: new Date(Date.now() + 2*1000),
    httpOnly: true
  });
  res.status(200).redirect('/logout');
  
}