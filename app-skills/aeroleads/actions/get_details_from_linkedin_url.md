# AeroLeads · `get_details_from_linkedin_url`

Retrieve prospect details, emails, phone numbers, company, education, skills, and related profile data from a public LinkedIn profile URL using AeroLeads.

- **Service**: `aeroleads`
- **Action**: `get_details_from_linkedin_url`
- **Action id**: `aeroleads.get_details_from_linkedin_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aeroleads" --action "get_details_from_linkedin_url"
```

## Run

```bash
oo connector run "aeroleads" --action "get_details_from_linkedin_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
