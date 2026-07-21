import express from 'express'
import cors from 'cors'
import portfolioRoutes from './routes/portfolio.routes.js'

// Assemble the Express app with shared middleware and routes
const app = express()

app.use(cors())
app.use(express.json())

// Liveness probe
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'rishabhv2' }))

app.use('/api', portfolioRoutes)

// Fallback for unknown routes
app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

export default app
