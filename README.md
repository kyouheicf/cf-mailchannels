# cf-mailchannels

```
# Clone GitHub Repo
git clone https://github.com/kyouheicf/cf-mailchannels && cd $(basename $_ .git)

# Set To (RECEIVER_EMAIL) & From (SENDER_EMAIL) email address
wrangler secret put RECEIVER_EMAIL # test@example.com
wrangler secret put SENDER_EMAIL # sender@example.com

# Deploy Cloudflare Workers
wrangler publish src/index.js

# Open your working page
open https://cf-mailchannels.YOUR_WORKERS_SUBDOMAIN.workers.dev
```

