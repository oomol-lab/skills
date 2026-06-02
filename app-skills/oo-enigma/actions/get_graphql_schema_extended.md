# Enigma · `get_graphql_schema_extended`

Retrieve Enigma's extended GraphQL schema metadata, including types, projections, and data-asset descriptors.

- **Service**: `enigma`
- **Action**: `get_graphql_schema_extended`
- **Action id**: `enigma.get_graphql_schema_extended`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "get_graphql_schema_extended"
```

## Run

```bash
oo connector run "enigma" --action "get_graphql_schema_extended" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
