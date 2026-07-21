import app from './src/app.js'

// Boot the API on the configured port
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
  console.log(`▲ rishabhv2 API running on http://localhost:${PORT}`),
)

// Fail with a helpful message instead of an unhandled 'error' crash
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `\n✗ Port ${PORT} is already in use — another server is probably still running.\n` +
        `  Fix it by either:\n` +
        `    • stopping the other process, or\n` +
        `    • starting this one on a different port:  PORT=5001 npm run dev\n`,
    )
    process.exit(1)
  }
  throw err
})
