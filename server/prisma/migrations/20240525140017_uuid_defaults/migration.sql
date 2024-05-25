CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();

-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
