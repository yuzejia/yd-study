import { handleRequest } from './handler'
import getBTC from './request'
import router from './routes'
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request))
})

addEventListener('scheduled', async (event) => {
  console.log('scheduled ----')
  await MY_KV.put('MY_KV', `${Math.random()}`)

  event.waitUntil(handleScheduled(event))
})
function handleScheduled(event: ScheduledEvent): Promise<void> {
  console.log(event.scheduledTime)

  return Promise.resolve()
}
