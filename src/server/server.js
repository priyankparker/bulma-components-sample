const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('./.env.js'); //TODO: move to .env

// An object to store the users
// const users = {};

// remove
const users = {
  john: {
    // whatever
    password: '$2a$10$T7B2B5yiV.JGf4w9cpn/3uKH9R8VQHoBICxKiDhwpRTXZBBgR5EGm',
  },
  jim: {
    // hello world
    password: '$2a$10$1SaMi817cjMJlHA.aNQ1juwPVpx/gFxVf/uVJL98YexnZXX6i8wqu',
  },
};

// Default error
const defaultError = {
  error: true,
  msg: 'An unexpected error occured',
};

// Returns the user object
const getUser = username => (userExists(username) ? users[username] : false);

// Returns the token
function getToken(username) {
  const token = jwt.sign({ userId: username }, APP_SECRET);

  return {
    token,
  };
}

// Checks if the user exists
function userExists(username, _users = users) {
  return typeof _users[username] === 'undefined' ? false : true;
}

// Adds a new user
function addUser({ username = null, passwordHashed: password }) {
  // Return an error if no username is provided
  if (!username) {
    throw {
      error: true,
      msg: 'Username is undefined',
    };
  }

  // If the user doesn't exist, add one otherwise return an error
  if (!userExists(username)) {
    users[username] = {
      password,
    };

    return getToken();
  } else {
    throw {
      error: true,
      msg: 'User already exists',
    };
  }
}

// Signup
async function signup({ username, password }) {
  // create a new password
  const passwordHashed = await bcrypt.hash(password, 10);

  try {
    // add the user
    return addUser({
      username,
      passwordHashed,
    });
  } catch (e) {
    // if there is an error returned from addUser, return the error as is
    if (e.error === true) {
      return {
        error: e.error,
        msg: e.msg,
      };
    } else {
      //otherwise return a defualt error
      return defaultError;
    }
  }
}

// Login
async function login({ username, password }) {
  // check if the user exists
  const user = getUser(username);

  // return an error if the user doesn't exist
  if (!user) {
    return {
      error: true,
      msg: 'No such user found',
    };
  }

  // check if the password is correct
  const valid = await bcrypt.compare(password, user.password);

  //if not, return an error
  if (!valid) {
    return {
      error: true,
      msg: 'Invalid password',
    };
  }

  // password is valid, return a token
  return getToken(username);
}

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())
// app.use(express.json())

var http = require('http');

http
  .createServer(function(req, res) {
    console.log('listening on port 3001');
    res.writeHead(200, {
      'Content-Type': 'application/json',
      // cors
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      // cors
      'Access-Control-Allow-Headers':
        'Authorization, Content-Type, Cache-Control, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers',
    });

    req.on('end', () => console.log('There will be no more data.'));

    let body;
    if (req.url === '/checkUsername') {
      req.on('data', chunk => {
        console.log(`Received ${chunk.length} bytes of data.`);
        console.log(`Type of chunk is ${typeof chunk}.`);
        console.log('stringified: ' + chunk.toString());

        body = JSON.parse(chunk.toString());

        if (typeof body === 'object') {
          let { userExists } = checkIfDuplicate(body);
          body = { userExists };
        }
        body = JSON.stringify(body);
        console.log('body: ', body);
        res.write(body);
      });

      req.on('end', () => {
        res.end();
        console.log('Data from the stream has ended.');
      });
    }
  })
  .listen(3001);

function checkIfDuplicate(body) {
  let result;
  
  if (typeof body.username === 'undefined') {
    result = {
      error: true,
      msg: 'No username is provided',
    };
  } else if (typeof users[body.username] !== 'undefined') {
    result = {
      userExists: true,
    };
  } else {
    result = {
      userExists: false,
    };
  }
  return result;
}

module.exports = {
  getToken,
};
