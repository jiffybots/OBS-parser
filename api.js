
module.exports = (app) => {
  app.post('/receive-xml', (req, res, next) => {
    res.send(req.body.odfbody);
  });
}
