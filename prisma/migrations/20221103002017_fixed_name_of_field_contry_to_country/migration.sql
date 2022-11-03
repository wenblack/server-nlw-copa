/*
  Warnings:

  - You are about to drop the column `contryCodeFirstTeam` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `contryCodeSecondTeam` on the `Game` table. All the data in the column will be lost.
  - Added the required column `countryCodeFirstTeam` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryCodeSecondTeam` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "countryCodeFirstTeam" TEXT NOT NULL,
    "countryCodeSecondTeam" TEXT NOT NULL
);
INSERT INTO "new_Game" ("date", "id") SELECT "date", "id" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
