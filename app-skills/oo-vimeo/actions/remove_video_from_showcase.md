# Vimeo · `remove_video_from_showcase`

Remove a Vimeo video from a showcase.

- **Service**: `vimeo`
- **Action**: `remove_video_from_showcase`
- **Action id**: `vimeo.remove_video_from_showcase`
- **Required scopes**: vimeo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "remove_video_from_showcase"
```

## Run

```bash
oo connector run "vimeo" --action "remove_video_from_showcase" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vimeo data. Always confirm the target and get explicit user approval before running.
