"use client"
import { useState } from 'react'

export default function DemoPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', preferred: '' })
  const [ok, setOk] = useState(false)
  async function submit() {
    const res = await fetch('/api/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, preferred: form.preferred, courseId: undefined }) })
    setOk(res.ok)
    if (res.ok) setForm({ name: '', email: '', phone: '', course: '', preferred: '' })
  }
  return (
    <main className="container section">
      <h1>Book a Free Demo</h1>
      <p style={{ color: 'var(--muted)' }}>Experience a live session for any course.</p>
      <div className="card pad" style={{ marginTop: 16 }}>
        <div className="grid cols-2">
          <div>
            <label>Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label>Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
        </div>
        <div className="grid cols-2">
          <div>
            <label>Phone</label>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <label>Preferred Date/Time</label>
            <input value={form.preferred} onChange={(e) => setForm({ ...form, preferred: e.target.value })} />
          </div>
        </div>
        <div className="actions">
          <button className="btn" onClick={submit}>Request Demo</button>
        </div>
        {ok ? <div className="badge" style={{ marginTop: 10 }}>Requested</div> : null}
      </div>
    </main>
  )
}
