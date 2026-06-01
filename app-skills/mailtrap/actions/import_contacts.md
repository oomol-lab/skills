# Mailtrap · `import_contacts`

Create one Mailtrap contact import job.

- **Service**: `mailtrap`
- **Action**: `import_contacts`
- **Action id**: `mailtrap.import_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "import_contacts"
```

## Run

```bash
oo connector run "mailtrap" --action "import_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.
