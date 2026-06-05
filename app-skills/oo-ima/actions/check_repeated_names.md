# ima · `check_repeated_names`

Check whether file names already exist in an IMA knowledge-base folder.

- **Service**: `ima`
- **Action**: `check_repeated_names`
- **Action id**: `ima.check_repeated_names`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "check_repeated_names"
```

## Run

```bash
oo connector run "ima" --action "check_repeated_names" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
