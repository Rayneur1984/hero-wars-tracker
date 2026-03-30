import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Mon app Node.js fonctionne 🚀');
})

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
})