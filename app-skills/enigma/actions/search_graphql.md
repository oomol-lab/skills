# Enigma · `search_graphql`

Search Enigma entities through the official GraphQL `search` query, supporting direct lookups, structured filters, natural-language prompts, and asynchronous output generation.

- **Service**: `enigma`
- **Action**: `search_graphql`
- **Action id**: `enigma.search_graphql`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "search_graphql"
```

## Run

```bash
oo connector run "enigma" --action "search_graphql" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
