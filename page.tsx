"use client"
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [ok, setOk] = useState(false)
  async function submit() {
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setOk(res.ok)
    if (res.ok) setForm({ name: '', email: '', phone: '', message: '' })
  }
  return (
    <main className="container section">
      <h1>Contact</h1>
      <p style={{ color: 'var(--muted)' }}>Send a message for admissions or services.</p>
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
        <label>Phone</label>
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <label>Message</label>
        <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <div className="actions">
          <button className="btn" onClick={submit}>Send</button>
        </div>
        {ok ? <div className="badge" style={{ marginTop: 10 }}>Sent</div> : null}
      </div>
    </main>
  )
}
