# Affinity · `list_person_lists`

List the Affinity lists that contain one person.

- **Service**: `affinity`
- **Action**: `list_person_lists`
- **Action id**: `affinity.list_person_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_person_lists"
```

## Run

```bash
oo connector run "affinity" --action "list_person_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
