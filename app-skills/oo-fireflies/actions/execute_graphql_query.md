# Fireflies · `execute_graphql_query`

Execute a raw read-only Fireflies GraphQL query and return the raw response.

- **Service**: `fireflies`
- **Action**: `execute_graphql_query`
- **Action id**: `fireflies.execute_graphql_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "execute_graphql_query"
```

## Run

```bash
oo connector run "fireflies" --action "execute_graphql_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
