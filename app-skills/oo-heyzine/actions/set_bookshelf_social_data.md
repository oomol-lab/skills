# Heyzine · `set_bookshelf_social_data`

Set the social sharing metadata for a specific Heyzine bookshelf.

- **Service**: `heyzine`
- **Action**: `set_bookshelf_social_data`
- **Action id**: `heyzine.set_bookshelf_social_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "set_bookshelf_social_data"
```

## Run

```bash
oo connector run "heyzine" --action "set_bookshelf_social_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Heyzine state. Confirm the exact payload and intended effect with the user before running.
