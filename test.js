import test from 'ava';
import gistr from './index.js';

// test(t => {
//     t.throws(gistr)
// })

test('baic request', t => {
    let url = 'https://gist.github.com/rhiokim/d4b2a3fa327df4266f1c'
    gistr(url).then(data => {
        if (data) {
            t.ok(data);
            t.notThrows(data);
            t.is(data.length, 3);
            t.is(data[0].filename, 'bar.md');
        }
    }).catch(err => {
        // Github API rate limiting for travis servers...
        if (err) t.ifError(err);
        t.end();
    });
})
