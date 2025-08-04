# AI Special Education Thesis

A full-stack application for AI-powered special education thesis research, featuring an Express.js backend and Next.js frontend.

## 🏗️ Project Structure

```
ai_special_education_thesis/
├── client/                 # Next.js frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── server/                 # Express.js backend
│   ├── routes/            # API routes
│   ├── config/            # Configuration
│   ├── middleware/        # Express middleware
│   ├── prisma/           # Database schema & migrations
│   ├── scripts/          # Database seeding scripts
│   ├── package.json
│   └── ...
├── ai_evaluator/          # AI evaluation tools
├── package.json           # Root package.json (monorepo)
└── deploy.md             # Deployment guide
```

## 🚀 Quick Start

### Development

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**
   ```bash
   # Copy example files
   cp server/env.example server/.env
   cp client/env.example client/.env.local
   ```

3. **Set up database:**
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run seed:problems
   ```

4. **Start development servers:**
   ```bash
   npm run dev
   ```
   This starts both frontend (port 3000) and backend (port 4000)

### Production Deployment

See [deploy.md](./deploy.md) for detailed deployment instructions.

**Quick deployment:**
```bash
./deploy.sh
```

## 📦 Available Scripts

### Root (Monorepo)
- `npm run dev` - Start both frontend and backend in development
- `npm run build` - Build both frontend and backend
- `npm run install:all` - Install dependencies for all packages
- `npm run lint` - Lint both frontend and backend

### Backend (server/)
- `npm run dev` - Start Express server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm run seed:problems` - Seed database with problems

### Frontend (client/)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js application
- `npm start` - Start production Next.js server

## 🗄️ Database

The project uses PostgreSQL with Prisma ORM. The database schema includes:

- **Teachers** - User authentication and management
- **Classes** - Class management for teachers
- **Students** - Student management within classes
- **Problems** - Math word problems with AI evaluation
- **Quiz Sessions** - Quiz management and tracking
- **Model Evaluations** - AI model performance tracking

## 🔧 Environment Variables

### Backend (server/.env)
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.com
```

### Frontend (client/.env.local)
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
NEXT_PUBLIC_APP_URL=https://your-frontend-url.com
```

## 🚀 Deployment

### Free Deployment Options

1. **Vercel (Frontend) + Railway (Backend)** - Recommended
2. **Render (All-in-one)** - Simple
3. **Netlify (Frontend) + Fly.io (Backend)** - Most generous

See [deploy.md](./deploy.md) for detailed instructions.

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **React Hook Form** - Form handling
- **Zustand** - State management

### AI/ML
- **OpenAI API** - AI model integration
- **LangChain** - AI framework
- **Custom evaluation metrics**

## 📚 Features

- **Teacher Dashboard** - Class and student management
- **Quiz System** - Interactive math problem quizzes
- **AI Evaluation** - Automated problem analysis
- **Student Progress Tracking** - Performance analytics
- **Model Evaluation** - AI model performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

ISC License 