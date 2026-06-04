export async function onRequestGet(context) {
  const id = context.params.id;
  const html = await context.env.OVERLAYS_KV.get(id);

  if (!html) {
    return new Response("Overlay not found or expired.", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
