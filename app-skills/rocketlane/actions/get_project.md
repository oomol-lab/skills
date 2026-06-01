# Rocketlane · `get_project`

Get one Rocketlane project by numeric project ID.

- **Service**: `rocketlane`
- **Action**: `get_project`
- **Action id**: `rocketlane.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocketlane" --action "get_project"
```

## Run

```bash
oo connector run "rocketlane" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
