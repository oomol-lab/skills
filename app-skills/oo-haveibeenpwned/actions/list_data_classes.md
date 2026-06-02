# Have I Been Pwned · `list_data_classes`

List all data classes currently used by breaches in Have I Been Pwned.

- **Service**: `haveibeenpwned`
- **Action**: `list_data_classes`
- **Action id**: `haveibeenpwned.list_data_classes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "list_data_classes"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "list_data_classes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
