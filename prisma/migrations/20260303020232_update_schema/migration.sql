-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "industry" TEXT,
    "budget" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Influencer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "followers" INTEGER,
    "niche" TEXT,
    "country" TEXT,
    "language" TEXT,
    "engagementRate" REAL,
    "email" TEXT,
    "phone" TEXT,
    "notes" TEXT,
    "rating" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'to_research',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL DEFAULT 'General',
    "country" TEXT NOT NULL DEFAULT 'Unknown',
    "website" TEXT,
    "linkedin" TEXT,
    "contactEmail" TEXT,
    "decisionMaker" TEXT,
    "decisionMakerLinkedin" TEXT,
    "priority" TEXT NOT NULL DEFAULT 'medium',
    "status" TEXT NOT NULL DEFAULT 'to_contact',
    "notes" TEXT,
    "lastContact" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "budget" REAL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'planning',
    "results" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Campaign_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
