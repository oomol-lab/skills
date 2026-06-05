# ima · `upload_file_to_knowledge_base`

Upload a file from an HTTP URL into one IMA knowledge base, including duplicate checks, COS upload, and add_knowledge.

- **Service**: `ima`
- **Action**: `upload_file_to_knowledge_base`
- **Action id**: `ima.upload_file_to_knowledge_base`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "upload_file_to_knowledge_base"
```

## Run

```bash
oo connector run "ima" --action "upload_file_to_knowledge_base" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ima state. Confirm the exact payload and intended effect with the user before running.
