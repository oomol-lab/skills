# Postman · `transfer_folders`

Tool to copy or move folders into a collection or folder. Use when you need to reorganize collections by transferring folders between collections or into other folders.

- **Service**: `postman`
- **Action**: `transfer_folders`
- **Action id**: `postman.transfer_folders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "transfer_folders"
```

## Run

```bash
oo connector run "postman" --action "transfer_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
