# AccuLynx · `create_contact`

Create one new contact in AccuLynx.

- **Service**: `acculynx`
- **Action**: `create_contact`
- **Action id**: `acculynx.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "create_contact"
```

## Run

```bash
oo connector run "acculynx" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AccuLynx state. Confirm the exact payload and intended effect with the user before running.
