# Certifier · `create_issue_send_credential`

Create, issue, and send one Certifier credential in a single request using a group, recipient, and optional custom attributes.

- **Service**: `certifier`
- **Action**: `create_issue_send_credential`
- **Action id**: `certifier.create_issue_send_credential`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "certifier" --action "create_issue_send_credential"
```

## Run

```bash
oo connector run "certifier" --action "create_issue_send_credential" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Certifier state. Confirm the exact payload and intended effect with the user before running.
