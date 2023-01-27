// Node.js script to open a JSON file and iterate through a list of objects and save each object as a JSON file

const fs = require('fs');
const path = require('path');

apiFiles = [
    './-api-products.json',
    './-api-orders.json',
    './-api-customers.json'
]
apiFiles.forEach((file) => {
    var data = require(file);
    var basename = path.basename(file, '.json');
    data.forEach((item) => {
        const file = `${basename}-${item.id}.json`;
        fs.writeFileSync(file, JSON.stringify(item, null, 2));
    });
});
