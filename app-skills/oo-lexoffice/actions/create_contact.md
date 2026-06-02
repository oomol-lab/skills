# lexoffice · `create_contact`

Create one Lexoffice contact using either a company or person payload.

- **Service**: `lexoffice`
- **Action**: `create_contact`
- **Action id**: `lexoffice.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "create_contact"
```

## Run

```bash
oo connector run "lexoffice" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes lexoffice state. Confirm the exact payload and intended effect with the user before running.
