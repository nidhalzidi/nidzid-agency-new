#!/bin/bash

# 🚀 سكريبت نشر NidZid Agency على Vercel

echo "═══════════════════════════════════════════════════════"
echo "   🕌 NidZid Agency - Deployment Script"
echo "═══════════════════════════════════════════════════════"
echo ""

# Check if user is logged in
echo "📡 Checking Vercel authentication..."
npx vercel whoami 2>/dev/null

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ You are not logged in to Vercel"
    echo ""
    echo "Please run: npx vercel login"
    echo "Then run this script again"
    exit 1
fi

echo ""
echo "✅ Authenticated!"
echo ""

# Deploy to production
echo "🚀 Deploying to production..."
npx vercel --prod --yes

echo ""
echo "═══════════════════════════════════════════════════════"
echo "   ✅ Deployment Complete!"
echo "═══════════════════════════════════════════════════════"
