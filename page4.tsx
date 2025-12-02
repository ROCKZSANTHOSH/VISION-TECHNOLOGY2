"use client"
import useSWR from 'swr'
import { useState } from 'react'

const fetcher = (url: string, token?: string) => fetch(url, { headers: token ? { 'x-admin-token': token } : undefined }).then(r => r.json())

export default function CoursesPage() {
  const [token, setToken] = useState('')
  const { data, mutate } = useSWR(['/api/courses', token], ([url, t]) => fetcher(url, t as string))
  const [form, setForm] = useState({ title: '', category: '', description: '', imageUrl: '', price: '' })

  async function createCourse() {
    const res = await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
      body: JSON.stringify({ ...form, price: form.price ? Number(form.price) : null })
    })
    if (res.ok) { setForm({ title: '', category: '', description: '', imageUrl: '', price: '' }); mutate() }
  }

  async function removeCourse(id: number) {
    const res = await fetch(`/api/courses/${id}`, { method: 'DELETE', headers: { 'x-admin-token': token } })
    if (res.ok) mutate()
  }

  async function editCourse(c: any) {
    const title = prompt('Title', c.title) ?? c.title
    const category = prompt('Category', c.category) ?? c.category
    const description = prompt('Description', c.description) ?? c.description
    const imageUrl = prompt('Image URL', c.imageUrl || '') || null
    const priceStr = prompt('Price', c.price?.toString() || '') || ''
    const price = priceStr ? Number(priceStr) : null
    const res = await fetch(`/api/courses/${c.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
      body: JSON.stringify({ title, category, description, imageUrl, price })
    })
    if (res.ok) mutate()
  }

  return (
    <main className="container section">
      <h1>Courses</h1>
      <p style={{ color: 'var(--muted)' }}>Robotics, Python, Networking (CCNA), Ethical Hacking, AI/ML.</p>
      <div className="card pad" style={{ marginTop: 16 }}>
        <h3>Admin</h3>
        <label>Admin Token</label>
        <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Enter token to manage" />
        <div className="grid cols-2" style={{ marginTop: 12 }}>
          <div>
            <label>Title</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </div>
          <div>
            <label>Category</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="">Select</option>
              <option>Robotics</option>
              <option>Python</option>
              <option>Networking (CCNA)</option>
              <option>Ethical Hacking</option>
              <option>AI/ML</option>
            </select>
          </div>
        </div>
        <label>Description</label>
        <textarea rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="grid cols-2">
          <div>
            <label>Image URL</label>
            <input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
          </div>
          <div>
            <label>Price</label>
            <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          </div>
        </div>
        <div className="actions">
          <button className="btn" onClick={createCourse}>Create</button>
        </div>
      </div>

      <div className="grid cols-3" style={{ marginTop: 20 }}>
        {data?.courses?.map((c: any) => (
          <div key={c.id} className="card">
            {c.imageUrl ? <img src={c.imageUrl} alt={c.title} /> : null}
            <div className="pad">
              <div className="badge">{c.category}</div>
              <h3>{c.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{c.description}</p>
              <div className="actions">
                <button className="btn" onClick={() => editCourse(c)}>Edit</button>
                <button className="btn secondary" onClick={() => removeCourse(c.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
