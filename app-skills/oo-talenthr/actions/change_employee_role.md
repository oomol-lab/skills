# TalentHR · `change_employee_role`

Change a TalentHR employee's user role to Employee or HR-Manager using the official employee role endpoints.

- **Service**: `talenthr`
- **Action**: `change_employee_role`
- **Action id**: `talenthr.change_employee_role`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "talenthr" --action "change_employee_role"
```

## Run

```bash
oo connector run "talenthr" --action "change_employee_role" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
