# AccuLynx · `list_lead_sources`

List the active lead sources configured for the current AccuLynx company.

- **Service**: `acculynx`
- **Action**: `list_lead_sources`
- **Action id**: `acculynx.list_lead_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "list_lead_sources"
```

## Run

```bash
oo connector run "acculynx" --action "list_lead_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
