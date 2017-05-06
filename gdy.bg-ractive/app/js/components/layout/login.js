import Ractive from 'ractive';
import Template from '../../../views/login.html';
import * as router from '../../plugins/router';

var Login = Ractive.components.Login = Ractive.extend({
	template: Template,

	oninit() {
		this.on('login', (rEvent) => {
			rEvent.original.preventDefault();
			router.navTo(`/login`);
		});
	},

	oncomplete() {

		// This is called with the results from from FB.getLoginStatus().
		var statusChangeCallback = function (response) {
			// The response object is returned with a status field that lets the
			// app know the current login status of the person.
			// Full docs on the response object can be found in the documentation
			// for FB.getLoginStatus().
			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				testAPI();
			} else {
				// The person is not logged into your app or we are unable to tell.
				document.getElementById('status').innerHTML = 'Please log ' +
					'into this app.';
			}
		}

		// This function is called when someone finishes with the Login
		// Button.  See the onlogin handler attached to it in the sample
		// code below.
		window.checkLoginState = function () {
			FB.getLoginStatus(function (response) {
				statusChangeCallback(response);
			});
		}

		window.fbAsyncInit = function () {
			
			FB.init({
				appId: '809916329143027',
				cookie: false,  // enable cookies to allow the server to access 
				// the session
				xfbml: true,  // parse social plugins on this page
				version: 'v2.8' // use graph api version 2.8
			});

			// Now that we've initialized the JavaScript SDK, we call 
			// FB.getLoginStatus().  This function gets the state of the
			// person visiting this page and can return one of three states to
			// the callback you provide.  They can be:
			//
			// 1. Logged into your app ('connected')
			// 2. Logged into Facebook, but not your app ('not_authorized')
			// 3. Not logged into Facebook and can't tell if they are logged into
			//    your app or not.
			//
			// These three cases are handled in the callback function.

			FB.getLoginStatus(function (response) {
				statusChangeCallback(response);
			});
		};
		// Here we run a very simple test of the Graph API after login is
		// successful.  See statusChangeCallback() for when this call is made.

		var testAPI = function () {
			console.log('Welcome!  Fetching your information.... ');

			FB.api('/me', function (response) {
				console.log('Successful login for: ' + JSON.stringify(response));
				
				//here I want to navigate back to index.html and display name in the header  
				
				router.navTo(`/`, { userName: response.name });

			});

		};


	}

});

Login._name = 'Login';
export default Login;
