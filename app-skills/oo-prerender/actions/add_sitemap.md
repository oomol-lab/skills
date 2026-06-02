# Prerender · `add_sitemap`

Submit a sitemap XML URL to Prerender so it can discover and cache new URLs from that sitemap.

- **Service**: `prerender`
- **Action**: `add_sitemap`
- **Action id**: `prerender.add_sitemap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "prerender" --action "add_sitemap"
```

## Run

```bash
oo connector run "prerender" --action "add_sitemap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Prerender state. Confirm the exact payload and intended effect with the user before running.
