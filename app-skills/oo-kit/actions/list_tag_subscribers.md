# Kit · `list_tag_subscribers`

List Kit subscribers who have a specific tag.

- **Service**: `kit`
- **Action**: `list_tag_subscribers`
- **Action id**: `kit.list_tag_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "list_tag_subscribers"
```

## Run

```bash
oo connector run "kit" --action "list_tag_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
