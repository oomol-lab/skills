# TinyURL · `create_short_url`

Create a TinyURL short link for a destination URL.

- **Service**: `tinyurl`
- **Action**: `create_short_url`
- **Action id**: `tinyurl.create_short_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tinyurl" --action "create_short_url"
```

## Run

```bash
oo connector run "tinyurl" --action "create_short_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TinyURL state. Confirm the exact payload and intended effect with the user before running.
