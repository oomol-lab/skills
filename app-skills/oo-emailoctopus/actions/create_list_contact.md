# EmailOctopus · `create_list_contact`

Create a contact in an EmailOctopus mailing list.

- **Service**: `emailoctopus`
- **Action**: `create_list_contact`
- **Action id**: `emailoctopus.create_list_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "create_list_contact"
```

## Run

```bash
oo connector run "emailoctopus" --action "create_list_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes EmailOctopus state. Confirm the exact payload and intended effect with the user before running.
