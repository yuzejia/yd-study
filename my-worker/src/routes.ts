import { Router } from 'itty-router'

const router = Router()

/*
Our index route, a simple hello world.
*/
router.get('/', async () => {
  return new Response(
    'Hello, world! This is the root page of your Worker template.',
  )
})

/*
This route demonstrates path parameters, allowing you to extract fragments from the request
URL.

Try visit /example/hello and see the response.
*/
router.get('/getData', async () => {
  const val = await MY_KV.get('MY_KV')
  // Return the HTML with the string to the client
  return new Response(JSON.stringify({ name: 'yuzejia', kv: `${val}` }), {
    status: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
})

export default router
