# DataScope · `create_location`

Create a DataScope location using the official locations endpoint.

- **Service**: `datascope`
- **Action**: `create_location`
- **Action id**: `datascope.create_location`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "create_location"
```

## Run

```bash
oo connector run "datascope" --action "create_location" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DataScope state. Confirm the exact payload and intended effect with the user before running.
