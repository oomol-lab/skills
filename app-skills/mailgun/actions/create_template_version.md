# Mailgun · `create_template_version`

Create a new version for a Mailgun template.

- **Service**: `mailgun`
- **Action**: `create_template_version`
- **Action id**: `mailgun.create_template_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "create_template_version"
```

## Run

```bash
oo connector run "mailgun" --action "create_template_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailgun state. Confirm the exact payload and intended effect with the user before running.
