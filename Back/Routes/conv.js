const connection = require('../Express/Config/Conf');

module.exports = app => {

  app.get('/api/conversation', (req, res) => {
    connection.query('SELECT * from conversation', (err, results) => {
      if (err) {
        res.status(500).send('Erreur');
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/convstatus', (req, res) => {
    connection.query('SELECT * from conversation WHERE status = "live"', (err, results) => {
      if (err) {
        res.status(500).send('Erreur');
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/convstatusclose', (req, res) => {
    connection.query('SELECT * from conversation WHERE status = "close"', (err, results) => {
      if (err) {
        res.status(500).send('Erreur');
      } else {
        res.json(results);
      }
    });
  });

  app.post('/api/newconversations', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO conversation SET ?', formData, (err) => {
      if (err) {
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/putstatus', (req, res, ) => {
    const { id, status } = req.body;
    const putQuery = `UPDATE conversation SET status = "${status}" WHERE id = ${id}`;
    connection.query(putQuery, err => {
      if (err) {
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/putname', (req, res, ) => {
    const { id, name } = req.body;
    const putQuery = `UPDATE conversation SET name = "${name}" WHERE id = ${id}`;
    connection.query(putQuery, err => {
      if (err) {
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/putgame', (req, res, ) => {
    const { id, game } = req.body;
    const putQuery = `UPDATE conversation SET game = "${game}" WHERE id = ${id}`;
    connection.query(putQuery, err => {
      if (err) {
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/putlv', (req, res, ) => {
    const { id, lv } = req.body
    const putQuery = `UPDATE conversation SET lv = "${lv}" WHERE id = ${id}`;
    connection.query(putQuery, err => {
      if (err) {
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/putpseudo', (req, res, ) => {
    const { id, pseudo } = req.body;
    const putQuery = `UPDATE conversation SET pseudo = "${pseudo}" WHERE id = ${id}`;
    connection.query(putQuery, err => {
      if (err) {
        res.status(500).send("Erreur");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.delete('/api/deleteconversations', (req, res, ) => {
    const { id } = req.body;
    const deleteQuery = `DELETE from conversation WHERE id = ${id}`;
    connection.query(deleteQuery, err => {
      if (err) {
        res.status(500).send("Erreur lors de la modification des users");
      } else {
        res.sendStatus(200);
      }
    });
  });
};


