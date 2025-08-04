# 🚀 Deployment Guide

## Free Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) - RECOMMENDED

#### Frontend Deployment (Vercel)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Set root directory to `client` (frontend)
   - Add environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-railway-backend-url.railway.app/api
     ```
   - Deploy!

#### Backend Deployment (Railway)

1. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Set root directory to `server` (backend)
   - Railway will auto-detect it's a Node.js app

2. **Set up PostgreSQL Database**
   - In Railway dashboard, click "New" → "Database" → "PostgreSQL"
   - Copy the DATABASE_URL from the database service
   - Go to your backend service and add environment variables:
     ```
     DATABASE_URL=your-railway-postgresql-url
     JWT_SECRET=your-super-secret-jwt-key
     NODE_ENV=production
     CORS_ORIGIN=https://your-vercel-frontend-url.vercel.app
     ```

3. **Run Database Migrations**
   - In Railway dashboard, go to your backend service
   - Click "Deployments" → "Latest" → "View Logs"
   - Add a custom command: `npx prisma migrate deploy`
   - Redeploy

4. **Update Frontend API URL**
   - Go back to Vercel
   - Update `NEXT_PUBLIC_API_URL` with your Railway backend URL

### Option 2: Render (All-in-one)

1. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New" → "Web Service"
   - Connect your repository
   - Set build command: `npm install && npm run build`
   - Set start command: `npm start`
   - Add PostgreSQL database from Render dashboard

### Option 3: Netlify + Fly.io

#### Frontend (Netlify)
- Deploy `client` folder to Netlify
- Set build command: `npm run build`
- Set publish directory: `.next`

#### Backend (Fly.io)
- Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
- Run: `fly launch`
- Set up PostgreSQL: `fly postgres create`

## Environment Variables Checklist

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
NEXT_PUBLIC_APP_URL=https://your-frontend-url.com
```

### Backend
```
PORT=4000
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://your-frontend-url.com
```

## Post-Deployment Checklist

1. ✅ Database migrations run successfully
2. ✅ Frontend can connect to backend API
3. ✅ Authentication works
4. ✅ File uploads work (if any)
5. ✅ Environment variables are set correctly
6. ✅ CORS is configured properly

## Troubleshooting

### Common Issues:
- **CORS errors**: Check CORS_ORIGIN in backend
- **Database connection**: Verify DATABASE_URL format
- **Build failures**: Check Node.js version compatibility
- **API 404s**: Ensure API routes are correct

### Debug Commands:
```bash
# Check Railway logs
railway logs

# Check Vercel logs
vercel logs

# Test database connection
npx prisma db push
``` 