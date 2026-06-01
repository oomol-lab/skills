# Affinity · `list_person_list_entries`

List all Affinity list entries for one person across lists.

- **Service**: `affinity`
- **Action**: `list_person_list_entries`
- **Action id**: `affinity.list_person_list_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_person_list_entries"
```

## Run

```bash
oo connector run "affinity" --action "list_person_list_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
