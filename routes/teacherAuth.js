const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const prisma = require('./prisma');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET must be defined in environment variables.');
}

function errorResponse(res, status, message) {
  return res.status(status).json({ error: true, message });
}

router.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return errorResponse(res, 400, 'Name, email, and password are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = await prisma.teacher.create({
      data: { name, email, hashedPassword }
    });
    res.status(201).json({ id: teacher.id, name: teacher.name, email: teacher.email });
  } catch (err) {
    if (err.code === 'P2002') {
      return errorResponse(res, 409, 'Email already in use');
    }
    console.error(err);
    return errorResponse(res, 500, 'Internal server error');
  }
});

router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 400, 'Email and password are required');
    }

    const teacher = await prisma.teacher.findUnique({ where: { email } });
    if (!teacher) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    const valid = await bcrypt.compare(password, teacher.hashedPassword);
    if (!valid) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    const token = jwt.sign(
      { teacherId: teacher.id, name: teacher.name, email: teacher.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    return errorResponse(res, 500, 'Internal server error');
  }
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return errorResponse(res, 401, 'No token provided');
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.teacher = decoded;
    next();
  } catch (err) {
    return errorResponse(res, 401, 'Invalid token');
  }
}

module.exports = { router, authMiddleware };
