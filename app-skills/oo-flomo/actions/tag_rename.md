# flomo · `tag_rename`

Rename flomo tags through the flomo Max MCP server and update associated memos.

- **Service**: `flomo`
- **Action**: `tag_rename`
- **Action id**: `flomo.tag_rename`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "tag_rename"
```

## Run

```bash
oo connector run "flomo" --action "tag_rename" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes flomo state. Confirm the exact payload and intended effect with the user before running.
