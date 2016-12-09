# OBS-parser

### Installation
```
git clone https://github.com/jiffybots/OBS-parser.git
cd OBS-parser
npm install
```

### To parse raw XML to JSON via an API
- Start the server `npm start`
- Hit the endpoint `http://localhost:3000/api/convert-xml` with raw XML. You will receive a parsed JSON response of the file body.


### To parse raw XML to JSON locally
- Import the `parseXMLtoJSON` module into your file
- Pass in the XML into the module and it will return the parsed XML formatted as JSON.

```javascript
const parse = require('parseXMLtoJSON');
parse(xml);
```
