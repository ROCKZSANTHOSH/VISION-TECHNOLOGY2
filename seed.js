const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  const courses = [
    { title: 'Foundations of Robotics', category: 'Robotics', description: 'Mechanics, control, sensors, and ROS with hands-on labs.', imageUrl: 'https://images.unsplash.com/photo-1581094477862-7c61a3d5f0a4?q=80&w=1200&auto=format&fit=crop', price: 25000 },
    { title: 'Python Professional', category: 'Python', description: 'Core Python, APIs, automation and data engineering.', imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', price: 18000 },
    { title: 'Networking with CCNA', category: 'Networking (CCNA)', description: 'Cisco concepts, routing, switching, security and labs.', imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', price: 22000 },
    { title: 'Ethical Hacking (EC-Council)', category: 'Ethical Hacking', description: 'Pentesting methodology, tools, reporting and best practices.', imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop', price: 24000 },
    { title: 'AI / ML Practitioner', category: 'AI/ML', description: 'ML algorithms, deep learning, MLOps and deployment.', imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', price: 26000 },
  ]

  for (const c of courses) {
    const existing = await prisma.course.findFirst({ where: { title: c.title } })
    if (existing) {
      await prisma.course.update({ where: { id: existing.id }, data: c })
    } else {
      await prisma.course.create({ data: c })
    }
  }
}

run()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); return prisma.$disconnect() })
