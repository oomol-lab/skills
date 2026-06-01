# ActiveCampaign · `list_lists`

List ActiveCampaign mailing lists with pagination and optional name filtering.

- **Service**: `activecampaign`
- **Action**: `list_lists`
- **Action id**: `activecampaign.list_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "activecampaign" --action "list_lists"
```

## Run

```bash
oo connector run "activecampaign" --action "list_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
