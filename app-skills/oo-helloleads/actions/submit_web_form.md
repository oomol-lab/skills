# HelloLeads · `submit_web_form`

Submit one HelloLeads web form lead with JSON field values, excluding reCAPTCHA and file-upload workflows.

- **Service**: `helloleads`
- **Action**: `submit_web_form`
- **Action id**: `helloleads.submit_web_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "helloleads" --action "submit_web_form"
```

## Run

```bash
oo connector run "helloleads" --action "submit_web_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HelloLeads state. Confirm the exact payload and intended effect with the user before running.
