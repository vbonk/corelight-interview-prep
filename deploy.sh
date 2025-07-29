#!/bin/bash

# Deployment script for Corelight Interview Prep Website
# Run this after creating the GitHub repository

echo "🚀 Corelight Interview Prep - GitHub Deployment Script"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

# Prompt for GitHub repository URL
echo ""
echo "📝 Please enter your GitHub repository URL:"
echo "   Example: https://github.com/vbonk/corelight-interview-prep.git"
echo "   Or SSH: git@github.com:vbonk/corelight-interview-prep.git"
echo ""
read -p "Repository URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Error: Repository URL cannot be empty"
    exit 1
fi

echo ""
echo "🔗 Adding remote origin: $REPO_URL"
git remote add origin "$REPO_URL" 2>/dev/null || {
    echo "⚠️  Remote origin already exists, updating..."
    git remote set-url origin "$REPO_URL"
}

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎯 Next Steps:"
    echo "1. Go to your Coolify dashboard"
    echo "2. Create new application from: $REPO_URL"
    echo "3. Coolify will auto-detect Vite and deploy"
    echo ""
    echo "📚 Your interview prep website is ready for deployment!"
else
    echo ""
    echo "❌ Failed to push to GitHub"
    echo "💡 Make sure:"
    echo "   - Repository exists on GitHub"
    echo "   - You have push permissions"
    echo "   - Your Git credentials are configured"
    echo ""
    echo "🔧 Manual commands:"
    echo "   git remote add origin $REPO_URL"
    echo "   git push -u origin main"
fi

