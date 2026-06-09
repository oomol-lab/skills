# DocuSeal · `create_submission`

Create a DocuSeal signature request from an existing template and return the created submitters.

- **Service**: `docuseal`
- **Action**: `create_submission`
- **Action id**: `docuseal.create_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docuseal" --action "create_submission"
```

## Run

```bash
oo connector run "docuseal" --action "create_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DocuSeal state. Confirm the exact payload and intended effect with the user before running.
