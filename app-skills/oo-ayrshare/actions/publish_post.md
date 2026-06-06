# Ayrshare · `publish_post`

Publish or schedule a social media post through Ayrshare using a JSON-friendly first-pass field set.

- **Service**: `ayrshare`
- **Action**: `publish_post`
- **Action id**: `ayrshare.publish_post`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ayrshare" --action "publish_post"
```

## Run

```bash
oo connector run "ayrshare" --action "publish_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ayrshare state. Confirm the exact payload and intended effect with the user before running.
