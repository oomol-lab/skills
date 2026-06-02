# Netlify · `notify_build_start`

Notify Netlify that one build has started.

- **Service**: `netlify`
- **Action**: `notify_build_start`
- **Action id**: `netlify.notify_build_start`
- **Required scopes**: netlify.site.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "notify_build_start"
```

## Run

```bash
oo connector run "netlify" --action "notify_build_start" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
