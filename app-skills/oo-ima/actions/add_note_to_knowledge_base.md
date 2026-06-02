# ima · `add_note_to_knowledge_base`

Add an existing IMA note into one IMA knowledge base.

- **Service**: `ima`
- **Action**: `add_note_to_knowledge_base`
- **Action id**: `ima.add_note_to_knowledge_base`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "add_note_to_knowledge_base"
```

## Run

```bash
oo connector run "ima" --action "add_note_to_knowledge_base" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ima state. Confirm the exact payload and intended effect with the user before running.
