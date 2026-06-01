# ReadMe · `ask_owlbot`

Ask ReadMe Owlbot a non-streaming question and return its answer with sources.

- **Service**: `readme`
- **Action**: `ask_owlbot`
- **Action id**: `readme.ask_owlbot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "ask_owlbot"
```

## Run

```bash
oo connector run "readme" --action "ask_owlbot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
