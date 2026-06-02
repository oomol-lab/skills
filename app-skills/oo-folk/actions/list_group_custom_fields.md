# folk · `list_group_custom_fields`

List Folk custom fields for one group and entity type.

- **Service**: `folk`
- **Action**: `list_group_custom_fields`
- **Action id**: `folk.list_group_custom_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "list_group_custom_fields"
```

## Run

```bash
oo connector run "folk" --action "list_group_custom_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
