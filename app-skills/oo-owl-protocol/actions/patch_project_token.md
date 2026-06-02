# Owl Protocol · `patch_project_token`

Patch one Owl Protocol token metadata record with a JSON metadata object only.

- **Service**: `owl_protocol`
- **Action**: `patch_project_token`
- **Action id**: `owl_protocol.patch_project_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "owl_protocol" --action "patch_project_token"
```

## Run

```bash
oo connector run "owl_protocol" --action "patch_project_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Owl Protocol state. Confirm the exact payload and intended effect with the user before running.
