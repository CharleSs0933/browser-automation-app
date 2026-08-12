import { TaskChooseOrganization } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function ChooseOrganizationPage() {
  await auth.protect()
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <TaskChooseOrganization redirectUrlComplete="/" />
    </div>
  )
}
