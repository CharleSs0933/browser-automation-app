import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <p className="text-sm font-medium text-muted-foreground">
        Workflow: {id}
      </p>
    </div>
  )
}
