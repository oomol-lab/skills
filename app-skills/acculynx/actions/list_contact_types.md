# AccuLynx · `list_contact_types`

List the contact types configured for the current AccuLynx company.

- **Service**: `acculynx`
- **Action**: `list_contact_types`
- **Action id**: `acculynx.list_contact_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "list_contact_types"
```

## Run

```bash
oo connector run "acculynx" --action "list_contact_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
