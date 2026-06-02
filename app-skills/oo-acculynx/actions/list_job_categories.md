# AccuLynx · `list_job_categories`

List the active AccuLynx job categories configured for the company.

- **Service**: `acculynx`
- **Action**: `list_job_categories`
- **Action id**: `acculynx.list_job_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "list_job_categories"
```

## Run

```bash
oo connector run "acculynx" --action "list_job_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
