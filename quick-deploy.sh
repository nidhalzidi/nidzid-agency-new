#!/bin/bash
# ═══════════════════════════════════════════════════════════
# 🚀 NidZid Agency - Quick Deploy Script
# ═══════════════════════════════════════════════════════════

echo "🕌 NidZid Agency - Quick Deploy"
echo ""

# Step 1: Login to Vercel (one-time)
echo "Step 1: Login to Vercel..."
npx vercel login

# Step 2: Deploy to production
echo ""
echo "Step 2: Deploying to production..."
npx vercel --prod --yes

echo ""
echo "✅ Done! Your site is live!"
