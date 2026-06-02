# Pushover · `get_app_icon_image`

Download a Pushover application icon PNG by icon identifier and return its binary content as base64.

- **Service**: `pushover`
- **Action**: `get_app_icon_image`
- **Action id**: `pushover.get_app_icon_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "get_app_icon_image"
```

## Run

```bash
oo connector run "pushover" --action "get_app_icon_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
