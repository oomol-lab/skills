---
name: oo-twitter
description: "Twitter (x.com). Use this skill for ANY Twitter request — reading, creating, updating, and deleting data. Whenever a task involves Twitter, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Twitter"
  author: "OOMOL"
  version: "1.0.0"
  service: "twitter"
  categories: "Social, Marketing"
  homepage: "https://x.com"
  icon: "https://static.oomol.com/logo/third-party/Twitter.svg"
---

# Twitter

Operate **Twitter** through your OOMOL-connected account. This skill calls the `twitter` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Marketing. Exposes 71 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Twitter. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "twitter" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "twitter" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_list_member`](actions/add_list_member.md) — Add a user account as a member of an X List.
- [`add_post_to_bookmarks`](actions/add_post_to_bookmarks.md) — Add a Tweet to bookmarks for the authenticated user account.
- [`bookmarks_by_user`](actions/bookmarks_by_user.md) — Get bookmarked Tweets for a user account.
- [`create_compliance_job`](actions/create_compliance_job.md) — Create a compliance job using app-only auth.
- [`create_dm_conversation`](actions/create_dm_conversation.md) — Create a new group Direct Message conversation with an initial message.
- [`create_list`](actions/create_list.md) — Create a new X List for the authenticated user account.
- [`creation_of_a_post`](actions/creation_of_a_post.md) — Create a Tweet for the authenticated X user.
- [`delete_dm`](actions/delete_dm.md) — Delete a Direct Message event from the authenticated user account.
- [`delete_list`](actions/delete_list.md) — Delete a List owned by the authenticated user account.
- [`follow_list`](actions/follow_list.md) — Follow an X List from the authenticated user account.
- [`follow_user`](actions/follow_user.md) — Follow a target user from the authenticated user account.
- [`followers_by_user_id`](actions/followers_by_user_id.md) — Get followers for a user account.
- [`following_by_user_id`](actions/following_by_user_id.md) — Get followed accounts for a user account.
- [`full_archive_search`](actions/full_archive_search.md) — Search the full public Tweet archive using app-only auth.
- [`get_compliance_job`](actions/get_compliance_job.md) — Get a compliance job by job ID using app-only auth.
- [`get_compliance_jobs`](actions/get_compliance_jobs.md) — List compliance jobs using app-only auth.
- [`get_dm_conversation_events`](actions/get_dm_conversation_events.md) — Get Direct Message events for a one-to-one conversation with a participant.
- [`get_dm_event`](actions/get_dm_event.md) — Get a Direct Message event by event ID and optional expanded objects.
- [`get_list`](actions/get_list.md) — Get a List by List ID and optional expanded owner objects.
- [`get_list_followers`](actions/get_list_followers.md) — Get users who follow a given X List.
- [`get_list_members`](actions/get_list_members.md) — Get users who are members of a given X List.
- [`get_media_upload_status`](actions/get_media_upload_status.md) — Get the processing status for a chunked X media upload.
- [`get_muted_users`](actions/get_muted_users.md) — Get muted accounts for a user account.
- [`get_post_retweeters_action`](actions/get_post_retweeters_action.md) — Get users who retweeted a given Tweet ID.
- [`get_post_retweets`](actions/get_post_retweets.md) — Get Tweet objects that retweeted a given Tweet ID.
- [`get_recent_dm_events`](actions/get_recent_dm_events.md) — Get recent Direct Message events for the authenticated user account.
- [`get_space_by_id`](actions/get_space_by_id.md) — Get a Space by Space ID and optional expanded objects.
- [`get_space_posts`](actions/get_space_posts.md) — Get Tweets that were shared in a given X Space.
- [`get_space_ticket_buyers`](actions/get_space_ticket_buyers.md) — Get ticket buyers for a ticketed X Space.
- [`get_spaces_by_creators`](actions/get_spaces_by_creators.md) — Get Spaces created by up to 100 user accounts.
- [`get_spaces_by_ids`](actions/get_spaces_by_ids.md) — Get up to 100 Spaces by Space ID and optional expanded objects.
- [`get_user_by_id`](actions/get_user_by_id.md) — Get a public X user profile by user ID and optional expanded objects.
- [`get_user_followed_lists`](actions/get_user_followed_lists.md) — Get Lists followed by a user account.
- [`get_user_list_memberships`](actions/get_user_list_memberships.md) — Get Lists that include a given user as a member.
- [`get_user_owned_lists`](actions/get_user_owned_lists.md) — Get Lists owned by a given user account.
- [`get_user_pinned_lists`](actions/get_user_pinned_lists.md) — Get Lists pinned by a given user account.
- [`get_users_by_ids`](actions/get_users_by_ids.md) — Get up to 100 public X user profiles by user ID and optional expanded objects.
- [`hide_replies`](actions/hide_replies.md) — Hide or unhide replies for a Tweet authored by the authenticated X user.
- [`list_post_likers`](actions/list_post_likers.md) — Get users who liked a given Tweet ID.
- [`list_posts_timeline_by_list_id`](actions/list_posts_timeline_by_list_id.md) — Get Tweets from a given X List timeline.
- [`mute_user`](actions/mute_user.md) — Mute a target user from the authenticated user account.
- [`pin_list`](actions/pin_list.md) — Pin an X List for the authenticated user account.
- [`post_delete_by_post_id`](actions/post_delete_by_post_id.md) — Delete a Tweet authored by the authenticated X user.
- [`post_lookup_by_post_id`](actions/post_lookup_by_post_id.md) — Get a public Tweet by Tweet ID and optional expanded objects.
- [`post_lookup_by_post_ids`](actions/post_lookup_by_post_ids.md) — Get up to 100 public Tweets by Tweet ID and optional expanded objects.
- [`recent_search`](actions/recent_search.md) — Search recent Tweets from the last seven days using X search syntax.
- [`remove_list_member`](actions/remove_list_member.md) — Remove a user account from an X List.
- [`remove_post_from_bookmarks`](actions/remove_post_from_bookmarks.md) — Remove a Tweet from bookmarks for the authenticated user account.
- [`retrieve_dm_conversation_events`](actions/retrieve_dm_conversation_events.md) — Get Direct Message events for a Direct Message conversation ID.
- [`retrieve_posts_that_quote_a_post`](actions/retrieve_posts_that_quote_a_post.md) — Get Tweets that quote a given Tweet ID.
- [`returns_post_objects_liked_by_the_provided_user_id`](actions/returns_post_objects_liked_by_the_provided_user_id.md) — Get Tweets liked by a user account.
- [`retweet_post`](actions/retweet_post.md) — Retweet a Tweet from the authenticated user account.
- [`search_full_archive_counts`](actions/search_full_archive_counts.md) — Count Tweets over the full public archive using app-only auth.
- [`search_recent_counts`](actions/search_recent_counts.md) — Count recent Tweets from the last seven days using X search syntax.
- [`search_spaces`](actions/search_spaces.md) — Search X Spaces by query text and optional Space filters.
- [`send_a_new_message_to_a_user`](actions/send_a_new_message_to_a_user.md) — Send a new Direct Message to a user account.
- [`send_dm_to_conversation`](actions/send_dm_to_conversation.md) — Send a new Direct Message to an existing conversation.
- [`unfollow_list`](actions/unfollow_list.md) — Unfollow an X List from the authenticated user account.
- [`unfollow_user`](actions/unfollow_user.md) — Unfollow a target user from the authenticated user account.
- [`unlike_post`](actions/unlike_post.md) — Unlike a Tweet from the authenticated user account.
- [`unmute_user`](actions/unmute_user.md) — Unmute a target user from the authenticated user account.
- [`unpin_list`](actions/unpin_list.md) — Unpin an X List for the authenticated user account.
- [`unretweet_post`](actions/unretweet_post.md) — Undo a Retweet from the authenticated user account.
- [`update_list`](actions/update_list.md) — Update List attributes for a List owned by the authenticated user account.
- [`upload_large_media`](actions/upload_large_media.md) — Upload a video or other large media file to X from a temporary HTTP URL using chunked media upload.
- [`upload_media`](actions/upload_media.md) — Upload a single image to X and return the created media identifiers.
- [`user_home_timeline_by_user_id`](actions/user_home_timeline_by_user_id.md) — Get the reverse chronological home timeline for a user account.
- [`user_like_post`](actions/user_like_post.md) — Like a Tweet from the authenticated user account.
- [`user_lookup_by_username`](actions/user_lookup_by_username.md) — Get a public X user profile by username and optional expanded objects.
- [`user_lookup_by_usernames`](actions/user_lookup_by_usernames.md) — Get up to 100 public X user profiles by username and optional expanded objects.
- [`user_lookup_me`](actions/user_lookup_me.md) — Get the currently authenticated X user profile and optional expanded objects.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Twitter state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Twitter is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=twitter
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Twitter homepage: https://x.com
