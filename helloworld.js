addEventListener("fetch", (event) => {
  console.log(`Request received at ${new Date().toISOString()}`)
  console.time('Response in')
  event.respondWith(
    new Response("Hello world!", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    }),
  );
  console.timeLog('Response in')
});