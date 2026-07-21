import { Router } from 'express'
import {
  getProfile,
  getServices,
  getProcess,
  getProjects,
  getSkills,
  getContact,
  createMessage,
} from '../controllers/portfolio.controller.js'

// Map each section of the site to its API endpoint
const router = Router()

router.get('/profile', getProfile)
router.get('/services', getServices)
router.get('/process', getProcess)
router.get('/projects', getProjects)
router.get('/skills', getSkills)
router.get('/contact', getContact)
router.post('/messages', createMessage)

export default router
