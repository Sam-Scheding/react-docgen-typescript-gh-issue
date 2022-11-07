const fs = require('fs');

const docgen = require("react-docgen-typescript");

const options = {
  savePropValueAsString: true,
};

const docs = docgen.parse("./src/TestComponent.tsx", options);

fs.writeFile('./docs.json', JSON.stringify(docs, null, 2), err => {
  if (err) {
    console.error(err);
  }
});