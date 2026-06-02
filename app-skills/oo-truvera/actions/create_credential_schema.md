# Truvera · `create_credential_schema`

Create a credential schema in Truvera and return the background job handle for polling blockchain completion.

- **Service**: `truvera`
- **Action**: `create_credential_schema`
- **Action id**: `truvera.create_credential_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "create_credential_schema"
```

## Run

```bash
oo connector run "truvera" --action "create_credential_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Truvera state. Confirm the exact payload and intended effect with the user before running.
