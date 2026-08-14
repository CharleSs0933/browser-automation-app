import { pgTable, text, timestamp, jsonb } from "drizzle-orm/pg-core"

export const workflows = pgTable("workflows", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  definition: jsonb("definition"),
  status: text("status").default("draft").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
})

export const workflowExecutions = pgTable("workflow_executions", {
  id: text("id").primaryKey(),
  workflowId: text("workflow_id")
    .references(() => workflows.id, { onDelete: "cascade" })
    .notNull(),
  status: text("status").default("pending").notNull(),
  result: jsonb("result"),
  error: text("error"),
  startedAt: timestamp("started_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
})

export type Workflow = typeof workflows.$inferSelect
export type NewWorkflow = typeof workflows.$inferInsert
export type WorkflowExecution = typeof workflowExecutions.$inferSelect
export type NewWorkflowExecution = typeof workflowExecutions.$inferInsert
