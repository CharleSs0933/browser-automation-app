import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"

config({ path: ".env" })

const databaseUrl =
  process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error("DATABASE_URL / DATABASE_URL_UNPOOLED is not set in .env")
}

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
  casing: "snake_case",
  verbose: true,
  strict: true,
})
