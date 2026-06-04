export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    if (!body.html || typeof body.html !== "string") {
      return Response.json({ error: "Missing HTML" }, { status: 400 });
    }

    const id = crypto.randomUUID().slice(0, 8);

    await context.env.OVERLAYS_KV.put(id, body.html, {
      expirationTtl: 60 * 60 * 24 * 365
    });

    return Response.json({
      id,
      url: `/view/${id}`
    });

  } catch (error) {
    return Response.json({
      error: "Could not save overlay"
    }, { status: 500 });
  }
}
