# Repository Instructions

## Generated app skills

`app-skills/` is generated and synchronized from [`oomol/oomol-connector`](https://github.com/oomol/oomol-connector). Do not create, edit, restore, or delete files under `app-skills/` in this repository.

Make provider-specific skill changes in `oomol/oomol-connector` under `scripts/skills/overlays/<service>/`. Put supporting files in that overlay's `references/` directory. Merge the connector PR, then run its `Publish App Skills` workflow. The workflow opens or updates this repository's `bot/sync-app-skills` PR.

Only the synchronization PR created by `oomol-bot` from this repository's `bot/sync-app-skills` branch may modify `app-skills/`. The required `Protect generated app-skills` check rejects every other PR that changes the generated tree.

Files outside `app-skills/`, including publishing workflows and `contrib/`, remain maintained in this repository.
