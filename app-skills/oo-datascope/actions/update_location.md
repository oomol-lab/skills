# DataScope · `update_location`

Update one DataScope location by location ID.

- **Service**: `datascope`
- **Action**: `update_location`
- **Action id**: `datascope.update_location`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "update_location"
```

## Run

```bash
oo connector run "datascope" --action "update_location" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DataScope state. Confirm the exact payload and intended effect with the user before running.
