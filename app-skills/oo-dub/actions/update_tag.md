# Dub · `update_tag`

Update a tag in the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `update_tag`
- **Action id**: `dub.update_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "update_tag"
```

## Run

```bash
oo connector run "dub" --action "update_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dub state. Confirm the exact payload and intended effect with the user before running.
