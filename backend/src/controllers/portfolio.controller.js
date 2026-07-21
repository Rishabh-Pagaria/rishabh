import { profile, services, process, projects, skills, contact } from '../data/portfolio.js'

// In-memory store for contact messages (swap for a database later)
const messages = []

export const getProfile = (_req, res) => res.json(profile)

export const getServices = (_req, res) => res.json(services)

export const getProcess = (_req, res) => res.json(process)

export const getProjects = (_req, res) => res.json(projects)

export const getSkills = (_req, res) => res.json(skills)

export const getContact = (_req, res) => res.json(contact)

// Validate and record a project inquiry from the contact form
export const createMessage = (req, res) => {
  const { name, email, message } = req.body ?? {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' })
  }
  const record = { id: messages.length + 1, name, email, message, createdAt: new Date().toISOString() }
  messages.push(record)
  res.status(201).json({ confirmation: `Thanks, ${name} — your brief reached Rishabh. I'll be in touch soon.`, message: record })
}
