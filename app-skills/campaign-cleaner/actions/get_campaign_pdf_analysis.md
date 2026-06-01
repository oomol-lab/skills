# Campaign Cleaner · `get_campaign_pdf_analysis`

Download a Campaign Cleaner PDF analysis report and return it as a transit file.

- **Service**: `campaign_cleaner`
- **Action**: `get_campaign_pdf_analysis`
- **Action id**: `campaign_cleaner.get_campaign_pdf_analysis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "get_campaign_pdf_analysis"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "get_campaign_pdf_analysis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
