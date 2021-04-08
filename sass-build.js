fs = require('fs');

function fixKey(key) {
    return key.replace(/[,-]/g, '').replace(/#.{3,6}/g, '').replace().replace(/\//g, '-').replace(/\s/g, '-');
}
function buildSass(obj) {
    const sass = Object.entries(obj).reduce((prev, [key, value]) => {
        prev += `$${fixKey(key)}: ${value}; \n`;
        return prev;
    }, '');
    fs.writeFile('colors.scss', sass, function (err) {
    if (err) return console.log(err);
        console.log('Sass File Build');
    });

}

module.exports = buildSass;