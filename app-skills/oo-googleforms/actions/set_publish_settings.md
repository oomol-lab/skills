# Google Forms · `set_publish_settings`

Update whether a Google Form is published and whether it is accepting responses.

- **Service**: `googleforms`
- **Action**: `set_publish_settings`
- **Action id**: `googleforms.set_publish_settings`
- **Required scopes**: googleforms.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "set_publish_settings"
```

## Run

```bash
oo connector run "googleforms" --action "set_publish_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Forms state. Confirm the exact payload and intended effect with the user before running.
