# SignPath · `list_signing_policies`

List SignPath signing policies visible to the API token, optionally filtered by project and policy slug.

- **Service**: `signpath`
- **Action**: `list_signing_policies`
- **Action id**: `signpath.list_signing_policies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signpath" --action "list_signing_policies"
```

## Run

```bash
oo connector run "signpath" --action "list_signing_policies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
