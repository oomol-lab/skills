# Coda · `create_page`

Create a new page in a Coda doc, with optional subtitle, icon, image, parent page, and structured page content.

- **Service**: `coda`
- **Action**: `create_page`
- **Action id**: `coda.create_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "create_page"
```

## Run

```bash
oo connector run "coda" --action "create_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Coda state. Confirm the exact payload and intended effect with the user before running.
