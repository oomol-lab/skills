# ReadMe · `get_version`

Get one ReadMe project version by semver identifier.

- **Service**: `readme`
- **Action**: `get_version`
- **Action id**: `readme.get_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_version"
```

## Run

```bash
oo connector run "readme" --action "get_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
