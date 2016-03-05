# gist-require [![Build Status](https://travis-ci.org/rhiokim/gist-require.svg?branch=master)](https://travis-ci.org/rhiokim/gist-require)

## Install

```
$ npm install gist-require
```

## Usage

### Run example
```js
var gistr = require('gist-require')
var url = 'https://gist.github.com/rhiokim/d4b2a3fa327df4266f1c'
gistr(url).then(function(data) {
	console.log(data);
		// { filename: 'bar.md',
		//    type: 'text/plain',
		//    language: 'Markdown',
		//    raw_url: 'https://gist.githubusercontent.com/rhiokim/d4b2a3fa327df4266f1c/raw/c7fd3b59b8575c8f1f4e0c5bbccfd7efddf6f482/bar.md',
		//    size: 5,
		//    truncated: false,
		//   content: '# bar' },
		// { filename: 'foo.md',
		//   type: 'text/plain',
		//    language: 'Markdown',
		//    raw_url: 'https://gist.githubusercontent.com/rhiokim/d4b2a3fa327df4266f1c/raw/ad96c729e020636f725be6d50f0ab68a6f5a10ff/foo.md',
		//    size: 5,
		//    truncated: false,
		//   content: '# foo' },
		//  { filename: 'zoo.md',
		//    type: 'text/plain',
		//    language: 'Markdown',
		//    raw_url: 'https://gist.githubusercontent.com/rhiokim/d4b2a3fa327df4266f1c/raw/be6b34246b9dbb7a45a7a495ebc3243f90b910d5/zoo.md',
		//    size: 5,
		//    truncated: false,
		//    content: '# zoo' } ]
}).catch(function(err) {
	//error
});
```

## License

MIT © [Nikolay Spiridonov](https://github.com/sohje)
