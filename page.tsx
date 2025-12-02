export default function FreelancingPage() {
  return (
    <main className="container section">
      <h1>Freelancing</h1>
      <p style={{ color: 'var(--muted)' }}>Specialists available for short-term consulting or project delivery.</p>
      <div className="grid cols-2" style={{ marginTop: 20 }}>
        <div className="card pad">
          <h3>Hire Experts</h3>
          <p style={{ color: 'var(--muted)' }}>Define scope, timeline, and budget. Get matched quickly.</p>
        </div>
        <div className="card pad">
          <h3>Submit Request</h3>
          <p style={{ color: 'var(--muted)' }}>Use the contact page to describe your need.</p>
        </div>
      </div>
    </main>
  )
}
