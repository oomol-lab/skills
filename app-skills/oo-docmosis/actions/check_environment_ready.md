# Docmosis · `check_environment_ready`

Check whether the selected Docmosis environment is currently ready to service render requests.

- **Service**: `docmosis`
- **Action**: `check_environment_ready`
- **Action id**: `docmosis.check_environment_ready`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docmosis" --action "check_environment_ready"
```

## Run

```bash
oo connector run "docmosis" --action "check_environment_ready" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
