# Vapi · `create_provider_resource`

Create a pronunciation dictionary provider resource in Vapi, defaulting to the 11labs pronunciation-dictionary route used by the upstream toolkit.

- **Service**: `vapi`
- **Action**: `create_provider_resource`
- **Action id**: `vapi.create_provider_resource`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_provider_resource"
```

## Run

```bash
oo connector run "vapi" --action "create_provider_resource" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
