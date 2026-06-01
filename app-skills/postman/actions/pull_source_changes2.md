# Postman · `pull_source_changes2`

Tool to pull changes from a parent (source) collection into a forked collection. Use when you need to sync a forked collection with its parent.

- **Service**: `postman`
- **Action**: `pull_source_changes2`
- **Action id**: `postman.pull_source_changes2`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "pull_source_changes2"
```

## Run

```bash
oo connector run "postman" --action "pull_source_changes2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
