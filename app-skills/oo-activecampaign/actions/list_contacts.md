# ActiveCampaign · `list_contacts`

List ActiveCampaign contacts with pagination, search, and filtering support.

- **Service**: `activecampaign`
- **Action**: `list_contacts`
- **Action id**: `activecampaign.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "activecampaign" --action "list_contacts"
```

## Run

```bash
oo connector run "activecampaign" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
