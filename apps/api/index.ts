import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('🔮 API is alive'))
app.post('/api/deploy', async (c) => {
  const { code } = await c.req.json()
  return c.json({
    logs: [`Deploying program...`, `Code length: ${code.length}`, `✅ Success`]
  })
})

export default app
