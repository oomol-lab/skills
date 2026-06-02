# Benzinga · `list_news_channels`

List Benzinga news channels that can be used to filter news feeds.

- **Service**: `benzinga`
- **Action**: `list_news_channels`
- **Action id**: `benzinga.list_news_channels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benzinga" --action "list_news_channels"
```

## Run

```bash
oo connector run "benzinga" --action "list_news_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
