# Netlify · `create_site_build`

Start a Netlify build for one site without uploading binary files.

- **Service**: `netlify`
- **Action**: `create_site_build`
- **Action id**: `netlify.create_site_build`
- **Required scopes**: netlify.site.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "create_site_build"
```

## Run

```bash
oo connector run "netlify" --action "create_site_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Netlify state. Confirm the exact payload and intended effect with the user before running.
