// Thin API client. The site renders fully from local data, so the backend is
// only required for the contact form — everything else has a static fallback.

const BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api'

export interface MessagePayload {
  name: string
  email: string
  message: string
}

export async function sendMessage(payload: MessagePayload): Promise<string> {
  const res = await fetch(`${BASE}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
  return data.confirmation ?? 'Message sent.'
}
