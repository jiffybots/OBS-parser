const parseString = require('xml2js').parseString;

const parse = (xml) => {
  return parseString(xml, (err, result) => {
    if (err) return new Error('Error parsing XML string');

    console.log(result);

    const json = JSON.stringify(result);
    return json;
  });
};

module.exports = parse;
