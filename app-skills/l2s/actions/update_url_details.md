# L2S · `update_url_details`

Update the stored details for one shortened URL in L2S.

- **Service**: `l2s`
- **Action**: `update_url_details`
- **Action id**: `l2s.update_url_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "l2s" --action "update_url_details"
```

## Run

```bash
oo connector run "l2s" --action "update_url_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes L2S state. Confirm the exact payload and intended effect with the user before running.
