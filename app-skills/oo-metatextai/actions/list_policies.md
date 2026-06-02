# MetatextAI · `list_policies`

List all guardrail policies configured for the connected MetatextAI application.

- **Service**: `metatextai`
- **Action**: `list_policies`
- **Action id**: `metatextai.list_policies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metatextai" --action "list_policies"
```

## Run

```bash
oo connector run "metatextai" --action "list_policies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
