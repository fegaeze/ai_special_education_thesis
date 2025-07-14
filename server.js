const express = require('express');
const cors = require('cors');

const { router: teacherAuthRoutes, authMiddleware } = require('./routes/teacherAuth');

const app = express();
app.use(cors());
app.use(express.json());

app.use(teacherAuthRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, authMiddleware };