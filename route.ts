import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  await prisma.contactMessage.create({ data: {
    name: body.name,
    email: body.email,
    phone: body.phone || null,
    message: body.message,
  } })
  return new Response(null, { status: 204 })
}
