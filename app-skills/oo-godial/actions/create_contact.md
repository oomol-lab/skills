# GoDial · `create_contact`

Create one GoDial contact in a target list using the official external API form fields.

- **Service**: `godial`
- **Action**: `create_contact`
- **Action id**: `godial.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "godial" --action "create_contact"
```

## Run

```bash
oo connector run "godial" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GoDial state. Confirm the exact payload and intended effect with the user before running.
