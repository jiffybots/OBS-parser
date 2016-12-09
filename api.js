module.exports = (app) => {
  app.post('/convert-xml', (req, res, next) => {
    res.send(req.body.odfbody);
  });
}
