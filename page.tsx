export default function OutsourcingPage() {
  return (
    <main className="container section">
      <h1>Outsourcing</h1>
      <p style={{ color: 'var(--muted)' }}>Engineering teams for robotics integration, Python platforms, network automation, penetration testing, and AI/ML pipelines.</p>
      <div className="grid cols-2" style={{ marginTop: 20 }}>
        <div className="card pad">
          <h3>Robotics</h3>
          <p style={{ color: 'var(--muted)' }}>Control systems, ROS, embedded and hardware integration.</p>
        </div>
        <div className="card pad">
          <h3>Python</h3>
          <p style={{ color: 'var(--muted)' }}>APIs, automation, data engineering, and backend development.</p>
        </div>
        <div className="card pad">
          <h3>Networking</h3>
          <p style={{ color: 'var(--muted)' }}>Cisco CCNA network design, deployment, and operations.</p>
        </div>
        <div className="card pad">
          <h3>Ethical Hacking</h3>
          <p style={{ color: 'var(--muted)' }}>Security audits, vulnerability assessment, and compliance.</p>
        </div>
        <div className="card pad">
          <h3>AI / ML</h3>
          <p style={{ color: 'var(--muted)' }}>Model development, MLOps, inference optimization.</p>
        </div>
      </div>
    </main>
  )
}
