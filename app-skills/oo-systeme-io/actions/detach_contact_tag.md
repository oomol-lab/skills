# Systeme.io · `detach_contact_tag`

Detach a tag from a contact in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `detach_contact_tag`
- **Action id**: `systeme_io.detach_contact_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "detach_contact_tag"
```

## Run

```bash
oo connector run "systeme_io" --action "detach_contact_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
