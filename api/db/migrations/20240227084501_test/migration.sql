-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Seat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "insertedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "neededWorkingHours" DECIMAL NOT NULL,
    "startingFrom" DATETIME NOT NULL,
    "endingAt" DATETIME,
    "positionProjectId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SeatAssignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assignedWorkingHours" DECIMAL,
    "insertedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "assignedAt" DATETIME,
    "assignedUserId" INTEGER,
    "assignedApplicantId" INTEGER,
    "seatId" INTEGER NOT NULL,
    "description" TEXT,
    CONSTRAINT "SeatAssignment_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");
