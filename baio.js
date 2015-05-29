(function(hello) {
	var base = 'http://localhost:3000/'
	hello.init({

		baio: {

			name: 'BAIO',

			oauth: {
				version: "2.0",
				auth: base + 'oauth/authorize',
				grant: 'authorization_code'
			},

			// scope: {
			// 	basic: 'users/me'
			// },
			base: base + 'api/v2/',

			get: {
				me: 'users/me',
				'me': 'users/me'
			},

			wrap: {
				me: function(o) {
					if (o.id) {
						o.last_name = o.last_name || (o.name ? o.name.last_name : null);
						o.first_name = o.first_name || (o.name ? o.name.first_name : null);

						if (o.email) {
							o.email = o.email;
						}
					}

					return o;
				}
			},

			

			// Don't even try submitting via form.
			// This means no POST operations in <=IE9

			//jsonp: false
		}
	})
})(hello);