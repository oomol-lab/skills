# LinkedIn · `create_reshare`

Create a LinkedIn reshare of an existing post using the Posts API.

- **Service**: `linkedin`
- **Action**: `create_reshare`
- **Action id**: `linkedin.create_reshare`
- **Required scopes**: linkedin.post.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkedin" --action "create_reshare"
```

## Run

```bash
oo connector run "linkedin" --action "create_reshare" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LinkedIn state. Confirm the exact payload and intended effect with the user before running.
