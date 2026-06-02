# ActiveCampaign · `list_fields`

List ActiveCampaign custom contact fields.

- **Service**: `activecampaign`
- **Action**: `list_fields`
- **Action id**: `activecampaign.list_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "activecampaign" --action "list_fields"
```

## Run

```bash
oo connector run "activecampaign" --action "list_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
