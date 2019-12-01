<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%-- jstl-1.2.jar 파일 필요 --%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-signin-client_id"
	content="340799321505-6lanerfsq5qav29coerhn9b03ksaqkdh.apps.googleusercontent.com">

<title></title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<style>
div#input:hover, div#output:hover {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0
		rgba(0, 0, 0, 0.19);
}
</style>

<!-- Google Map API -->
<script src="https://maps.googleapis.com/maps/api/js"></script>

<!-- jQuery library -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script src="https://apis.google.com/js/platform.js" async defer></script>

<script>
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

	}

	function init() {

		console.log("init");
		gapi.load('auth2', function() {
			console.log("auth2");
			var ggauth = gapi.auth2.init({
				client_id : '340799321505-6lanerfsq5qav29coerhn9b03ksaqkdh.apps.googleusercontent.com'
				
			});
			
			ggauth.then(function(){
				console.log("gooleAuth success~");
				
				
			},function (){
				console.log("gooleAuth fail~");		
			});
		});
	}
</script>
</head>
<body>

	<div class="container">
		<div class="g-signin2" data-onsuccess="onSignIn"></div>
	</div>

	<script src="https://apis.google.com/js/platform.js?onload=init" async
		defer></script>
</body>
</html>