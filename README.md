# NidZid Agency - Complete Deployment Package

## 🚀 Quick Deploy Instructions

### Total Cost: $0 (FREE) - Only domain costs ~$1-2/year

---

## Step 1: Create Free Database (2 min)

1. Go to **https://supabase.com**
2. Click "Start your project" → Sign up with GitHub
3. Create project:
   - Name: `nidzid-agency`
   - Password: **[SAVE THIS!]**
   - Region: Choose closest to you
4. Wait ~2 minutes
5. Go to: **Project Settings → Database**
6. Copy **Connection string** (URI format)
7. Replace `[YOUR-PASSWORD]` with your password

**Your URL looks like:**
```
postgresql://postgres.xxxxx:PASSWORD@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

---

## Step 2: Create GitHub Repo (1 min)

1. Go to **https://github.com/new**
2. Name: `nidzid-agency`
3. Click **Create repository**

In terminal:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nidzid-agency.git
git push -u origin main
```

---

## Step 3: Deploy to Vercel (2 min)

1. Go to **https://vercel.com**
2. Sign up with **GitHub**
3. Click **"Add New" → "Project"**
4. Import `nidzid-agency`
5. Add Environment Variable:
   - Name: `DATABASE_URL`
   - Value: `[Your Supabase connection string]`
6. Click **Deploy**
7. Wait 2-3 minutes
8. **Done!** 🎉

Your site: `https://nidzid-agency.vercel.app`

---

## Step 4: Run Database Migration

In Vercel dashboard:
1. Go to **Storage** tab
2. Click **Execute Query**
3. Run:
```sql
CREATE TABLE "Contact" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "company" TEXT,
  "industry" TEXT,
  "budget" TEXT,
  "message" TEXT NOT NULL,
  "status" TEXT DEFAULT 'new',
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Influencer" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "platform" TEXT DEFAULT 'Instagram',
  "handle" TEXT DEFAULT '',
  "followers" INTEGER,
  "niche" TEXT,
  "country" TEXT,
  "status" TEXT DEFAULT 'to_research',
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Company" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "industry" TEXT DEFAULT 'General',
  "country" TEXT DEFAULT 'Unknown',
  "priority" TEXT DEFAULT 'medium',
  "status" TEXT DEFAULT 'to_contact',
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NOW()
);
```

---

## Your URLs

| Page | URL |
|------|-----|
| **Website** | `https://your-site.vercel.app` |
| **Admin** | `https://your-site.vercel.app/admin` |
| **API Contacts** | `https://your-site.vercel.app/api/contact` |

---

## Optional: Custom Domain

1. Buy domain from **Namecheap** (~$1-2/year)
2. In Vercel: **Settings → Domains → Add domain**
3. Add DNS records in Namecheap:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Wait 5-30 minutes
5. Site live at your domain!

---

## Features Included

✅ Professional landing page
✅ Contact form (saves to database)
✅ Admin dashboard at `/admin`
✅ Influencer database
✅ Company CRM
✅ Mobile responsive
✅ SEO optimized

---

## Need Help?

- Vercel Docs: vercel.com/docs
- Supabase Docs: supabase.com/docs
- Next.js Docs: nextjs.org/docs
