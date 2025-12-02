import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <section className="hero container">
        <span className="badge">Education • Outsourcing • Freelancing</span>
        <h1>Learn and build with Vision Technology</h1>
        <p>Training in Robotics, Python, Networking with CCNA, Ethical Hacking with EC-Council, and AI/ML. Professional services for companies and projects.</p>
        <div className="actions">
          <Link href="/courses"><button className="btn">Explore Courses</button></Link>
          <Link href="/outsourcing"><button className="btn secondary">Our Services</button></Link>
        </div>
      </section>

      <section className="section container grid cols-3">
        {[
          { title: 'Robotics', img: 'https://images.unsplash.com/photo-1581094477862-7c61a3d5f0a4?q=80&w=1200&auto=format&fit=crop' },
          { title: 'Python', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
          { title: 'Networking (CCNA)', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
          { title: 'Ethical Hacking', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop' },
          { title: 'AI / ML', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
          { title: 'Data Science', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop' },
        ].map((c) => (
          <div key={c.title} className="card">
            <Image src={c.img} alt={c.title} width={1200} height={800} />
            <div className="pad">
              <h3>{c.title}</h3>
              <p style={{ color: 'var(--muted)' }}>Structured curriculum, hands-on labs, and mentorship.</p>
            </div>
          </div>
        ))}
      </section>

      <section className="section container grid cols-2">
        <div className="card pad">
          <h3>Outsourcing</h3>
          <p style={{ color: 'var(--muted)' }}>Engineering teams for robotics, network automation, security testing, AI/ML pipelines, and Python platforms.</p>
          <Link href="/outsourcing"><button className="btn">Explore</button></Link>
        </div>
        <div className="card pad">
          <h3>Freelancing</h3>
          <p style={{ color: 'var(--muted)' }}>Project-based delivery and consultants you can hire for short-term engagements.</p>
          <Link href="/freelancing"><button className="btn">Learn more</button></Link>
        </div>
      </section>
    </main>
  )
}
