#!/bin/bash

echo "🚀 AI Special Education Thesis - Deployment Script"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin <your-github-repo-url>"
    echo "   git push -u origin main"
    exit 1
fi

# Check if changes are committed
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for deployment'"
    echo "   git push"
    exit 1
fi

echo "✅ Git repository is ready"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. 🎯 Deploy Frontend to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Sign up with GitHub"
echo "   - Click 'New Project'"
echo "   - Import your repository"
echo "   - Set root directory to 'client' (frontend)"
echo "   - Add environment variable: NEXT_PUBLIC_API_URL=https://your-railway-backend-url.railway.app"
echo ""
echo "2. 🚂 Deploy Backend to Railway:"
echo "   - Go to https://railway.app"
echo "   - Sign up with GitHub"
echo "   - Click 'New Project' → 'Deploy from GitHub repo'"
echo "   - Select your repository"
echo "   - Set root directory to 'server' (backend)"
echo "   - Add PostgreSQL database from Railway dashboard"
echo "   - Set environment variables:"
echo "     DATABASE_URL=your-railway-postgresql-url"
echo "     JWT_SECRET=your-super-secret-jwt-key"
echo "     NODE_ENV=production"
echo "     CORS_ORIGIN=https://your-vercel-frontend-url.vercel.app"
echo ""
echo "3. 🗄️  Run Database Migrations:"
echo "   - In Railway dashboard, go to your backend service"
echo "   - Add custom command: npx prisma migrate deploy"
echo "   - Redeploy"
echo ""
echo "4. 🔗 Update Frontend API URL:"
echo "   - Go back to Vercel"
echo "   - Update NEXT_PUBLIC_API_URL with your Railway backend URL"
echo ""
echo "📖 For detailed instructions, see: deploy.md"
echo ""
echo "🎉 Your app will be live at your Vercel URL!" 