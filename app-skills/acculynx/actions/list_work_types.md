# AccuLynx · `list_work_types`

List the active AccuLynx work types configured for the company.

- **Service**: `acculynx`
- **Action**: `list_work_types`
- **Action id**: `acculynx.list_work_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "list_work_types"
```

## Run

```bash
oo connector run "acculynx" --action "list_work_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
