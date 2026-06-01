# Agenty · `add_list_rows`

Insert one or more rows into one Agenty list.

- **Service**: `agenty`
- **Action**: `add_list_rows`
- **Action id**: `agenty.add_list_rows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "add_list_rows"
```

## Run

```bash
oo connector run "agenty" --action "add_list_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Agenty state. Confirm the exact payload and intended effect with the user before running.
