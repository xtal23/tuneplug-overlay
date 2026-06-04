TunePlug Cloudflare URL Version

This version changes the customizer from:
Download OBS HTML
to:
Generate TikTok URL

How it works:
1. Open your Cloudflare Pages URL.
2. Customize the overlay.
3. Click Generate TikTok URL.
4. It saves the customized overlay into Cloudflare KV.
5. It gives you a link like:
   https://your-site.pages.dev/view/abc12345
6. Paste that link into TikTok Live Studio Link Source.

Cloudflare setup:
1. Upload this whole folder to GitHub.
2. Connect the GitHub repo to Cloudflare Pages.
3. In Cloudflare Dashboard, create a KV namespace:
   Workers & Pages > KV > Create namespace
   Name it:
   OVERLAYS_KV
4. Go to your Pages project:
   Settings > Functions > KV namespace bindings
5. Add binding:
   Variable name: OVERLAYS_KV
   KV namespace: OVERLAYS_KV
6. Redeploy your Pages project.

Important:
- The binding name must be exactly OVERLAYS_KV.
- The generated overlay links last 1 year by default.
