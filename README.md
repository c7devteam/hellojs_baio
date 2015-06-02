# BAIO module for Hello.js
This is a small module for hello.js OAuth
##Included files:
1. hello.all.js - hello.js library
2. baio.js - BAIO module for hello.js
3. test.html.erb - html code with main features for testing.

##Supported routes
1. .api("me") - for getting user's info

##How to use
1. Require hello.all.js and baio.js code.
```javascript
  //= require hello.all
  //= require baio
```
2. Register your application by visiting this link
`/oauth/applications/`
3. Set keys
```javascript
      hello.init({ 
        baio : "client_id"
      }
      );
```
4. For login use
```javascript
    hello('baio').login({
      response_type: 'token'
    })
```
You can add some callbacks this way
```javascript
      hello('baio').login().then(function() {
          console.log('You are signed in to BAIO');
          console.log(hello('baio').getAuthResponse());
      }, function(e) {
          console.log('Signin error: ' + e.error.message + " " +e.error.code);
      });
  ```
  Or this way
```javascript  
    hello.on('auth.login', function(auth) {
        // Call user information, for the given network
        hello(auth.network).api('/me').then(function(r) {
            
            $("div#baio").html('Signed in as ' + r.email + ' ' + r.first_name + ' ' + r.last_name);
        });
    });
  ```
  
  5. To call 'me'
  ```javascript

      hello('baio').api('me').then(function(json) {
       //your code here. Json variable you can use like json.first_name etc.
      });
  ```
