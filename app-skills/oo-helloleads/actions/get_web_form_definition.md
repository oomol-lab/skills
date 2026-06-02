# HelloLeads · `get_web_form_definition`

Fetch the visible HelloLeads web form definition for the connected Web Form Key and report whether reCAPTCHA v2 is enabled.

- **Service**: `helloleads`
- **Action**: `get_web_form_definition`
- **Action id**: `helloleads.get_web_form_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "helloleads" --action "get_web_form_definition"
```

## Run

```bash
oo connector run "helloleads" --action "get_web_form_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
