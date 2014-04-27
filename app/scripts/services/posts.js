'use strict';

app.factory('Post', function($resource) {
	return $resource('https://burning-fire-5114.firebaseio.com/posts/:id.json');
});