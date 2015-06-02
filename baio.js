(function(hello) {
	var base = 'http://localhost:3000/'
	hello.init({

		baio: {

			name: 'BAIO',

      response_type: 'token',

			oauth: {
				version: "2.0",
				auth: base + 'oauth/authorize',
				grant: 'authorization_code'
			},

			base: base + 'api/v2/',

			get: {
				me: 'users/me',
				'me': 'users/me'
			},

			wrap: {
				me: function(o) {
					return o;
				}
			},

		}
	})
})(hello);