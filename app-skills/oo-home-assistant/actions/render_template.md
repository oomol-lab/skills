# Home Assistant · `render_template`

Render a Home Assistant template against the connected instance.

- **Service**: `home_assistant`
- **Action**: `render_template`
- **Action id**: `home_assistant.render_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "home_assistant" --action "render_template"
```

## Run

```bash
oo connector run "home_assistant" --action "render_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
