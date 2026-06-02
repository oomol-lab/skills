# Amara · `list_languages`

List the languages supported by the Amara API.

- **Service**: `amara`
- **Action**: `list_languages`
- **Action id**: `amara.list_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_languages"
```

## Run

```bash
oo connector run "amara" --action "list_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
