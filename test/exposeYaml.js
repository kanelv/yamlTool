const yaml = require('js-yaml');
const fs = require('fs');
let doc = yaml.load(fs.readFileSync('./nginx-deployment.yaml', 'utf8'));
// doc.General.Greeting = newGreet;
fs.writeFile('./nginx-deployment-expose.yaml', yaml.dump(doc), (err) => {
    if (err) {
        console.log(err);
    }
});