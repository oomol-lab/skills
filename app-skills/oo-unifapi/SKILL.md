---
name: oo-unifapi
description: "UnifAPI (unifapi.com). Use this skill for ANY UnifAPI request — reading, creating, and updating data. Whenever a task involves UnifAPI, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "UnifAPI"
  author: "OOMOL"
  version: "1.0.0"
  services: ["unifapi"]
  icon: "https://static.oomol.com/logo/third-party/unifapi.svg"
---

# UnifAPI

Operate **UnifAPI** through your OOMOL-connected account. This skill calls the `unifapi` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected UnifAPI. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "unifapi" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "unifapi" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `aggregate_geo_mentions` — Aggregate LLM mention metrics by dimension.
- `batch_get_tiktok_videos` — Batch-fetch TikTok videos by ID.
- `browse_instagram_explore` — Browse Instagram's Explore feed.
- `browse_instagram_recommended_reels` — Browse Instagram's recommended Reels feed.
- `browse_reddit_feed_home` — Browse Reddit's anonymous home feed.
- `browse_reddit_feed_news` — Browse Reddit's news feed.
- `browse_reddit_feed_popular` — Browse Reddit's popular feed.
- `browse_youtube_trending` — Browse YouTube's trending videos.
- `capture_screenshot` — Capture a page screenshot.
- `check_x_friendship` — Check whether one X user follows another.
- `classify_seo_keyword_intent` — Classify keyword search intent.
- `collect_seo_keyword_autocomplete` — Collect autocomplete keyword suggestions.
- `collect_seo_serp` — Collect organic SERP SEO evidence.
- `compare_geo_mention_groups` — Compare LLM mentions across labeled groups.
- `convert_instagram_media_id` — Convert an Instagram post shortcode into its numeric media_id.
- `convert_instagram_shortcode_from_media` — Convert an Instagram numeric media_id into its shortcode.
- `convert_instagram_user_id` — Convert an Instagram username into its numeric user_id (pk).
- `count_seo_bulk_backlinks` — Count backlinks for many targets.
- `count_seo_bulk_new_lost_backlinks` — Count new and lost backlinks for many targets.
- `count_seo_bulk_new_lost_referring_domains` — Count new and lost referring domains for many targets.
- `count_seo_bulk_referring_domains` — Count referring domains for many targets.
- `discover_seo_keyword_ideas` — Discover keyword ideas.
- `estimate_seo_bulk_traffic` — Estimate organic traffic for domains.
- `estimate_seo_historical_bulk_traffic` — Estimate historical traffic for domains.
- `extract_instagram_shortcode` — Extract a post shortcode from an Instagram URL.
- `extract_links` — Extract links from a page.
- `find_seo_backlink_competitors` — Find competitors by shared referring domains.
- `find_seo_backlink_domain_intersection` — Find domains linking to multiple targets.
- `find_seo_backlink_page_intersection` — Find pages linking to multiple targets.
- `find_seo_domain_competitors` — Find a domain's organic competitors.
- `find_seo_domain_keyword_intersection` — Find keywords two domains both rank for.
- `find_seo_keyword_suggestions` — Find keyword suggestions.
- `find_seo_page_keyword_intersection` — Find keywords specific pages rank for.
- `find_seo_ranked_keywords` — Find the keywords a domain ranks for.
- `find_seo_related_keywords` — Find related keywords.
- `find_seo_serp_competitors` — Find domains competing for keywords.
- `find_seo_site_keywords` — Find keywords a domain ranks for.
- `get_geo_keyword_search_volume` — Get AI search volume for keywords.
- `get_hacker_news_item` — Get Hacker News item by ID.
- `get_hacker_news_max_item` — Get largest Hacker News item ID.
- `get_hacker_news_updates` — Get changed Hacker News items and profiles.
- `get_hacker_news_user` — Get Hacker News user by ID.
- `get_hotel_info` — Get Hotels detail.
- `get_instagram_location` — Get an Instagram location by id.
- `get_instagram_post` — Get an Instagram post (photo / video / carousel / reel) by shortcode. [write]
- `get_instagram_user` — Get an Instagram user profile by username.
- `get_linkedin_ad` — Get a LinkedIn Ad Library entry by ID.
- `get_linkedin_company` — Get a LinkedIn company profile by URL slug.
- `get_linkedin_company_job_count` — Get the number of active jobs at a LinkedIn company.
- `get_linkedin_company_member_insights` — Get a LinkedIn company's aggregated member insights.
- `get_linkedin_group` — Get a LinkedIn group by ID.
- `get_linkedin_job` — Get a LinkedIn job posting by ID.
- `get_linkedin_post` — Get a LinkedIn post by ID. [write]
- `get_linkedin_user` — Get a LinkedIn user profile by URL slug.
- `get_linkedin_user_about` — Get a LinkedIn profile's 'about' metadata.
- `get_linkedin_user_contact` — Get a LinkedIn user's public contact info.
- `get_linkedin_user_follower_count` — Get a LinkedIn user's follower & connection counts.
- `get_reddit_post` — Get a Reddit post by id. [write]
- `get_reddit_subreddit` — Get a Reddit subreddit by name.
- `get_reddit_user` — Get a Reddit user profile by username.
- `get_seo_backlink_history` — Get historical backlink metrics for a target.
- `get_seo_backlink_summary` — Get the backlink profile summary for a target.
- `get_seo_backlink_timeseries` — Get backlink metrics over time.
- `get_seo_bulk_backlink_ranks` — Get backlink ranks for many targets.
- `get_seo_bulk_spam_scores` — Get spam scores for many targets.
- `get_seo_domain_rank_overview` — Get a domain's ranking and traffic overview.
- `get_seo_historical_rank_overview` — Get a domain's historical ranking overview.
- `get_seo_historical_serps` — Get historical SERP snapshots for a keyword.
- `get_seo_keyword_history` — Get historical keyword data.
- `get_seo_keyword_overview` — Look up keyword metrics.
- `get_seo_new_lost_backlinks_timeseries` — Get new and lost backlinks over time.
- `get_threads_user` — Get a Threads user profile by username.
- `get_tiktok_hashtag` — Get a TikTok hashtag by ID.
- `get_tiktok_music` — Get a TikTok music track by ID.
- `get_tiktok_recommended_feed` — Get TikTok recommendation videos.
- `get_tiktok_user` — Get a TikTok user profile.
- `get_tiktok_video` — Get a TikTok video by ID.
- `get_x_autocomplete` — Autocomplete X users, topics, hashtags, and cashtags.
- `get_x_community` — Get X Community by ID.
- `get_x_community_about` — Get an X Community about timeline.
- `get_x_trends_by_woeid` — Get X trends by WOEID.
- `get_x_tweet` — Get X Post by ID.
- `get_x_tweet_article` — Get the article-style payload for an X Post.
- `get_x_tweets` — Get X Posts by IDs.
- `get_x_user` — Get X user by ID.
- `get_x_user_by_username` — Get X user by username.
- `get_x_users` — Get X users by IDs.
- `get_x_users_by_usernames` — Get X users by usernames.
- `get_youtube_channel` — Get a YouTube channel by id.
- `get_youtube_playlist` — Get a YouTube playlist by id.
- `get_youtube_video` — Get a YouTube video by id.
- `get_youtube_video_transcript` — Get a YouTube video's transcript.
- `list_geo_top_mentioned_domains` — List domains most cited in LLM answers.
- `list_geo_top_mentioned_pages` — List pages most cited in LLM answers.
- `list_hacker_news_story_ids` — List Hacker News story IDs.
- `list_hacker_news_story_items` — List Hacker News story items.
- `list_instagram_location_posts` — List posts tagged with an Instagram location.
- `list_instagram_nearby_locations` — List Instagram locations geographically near a given location.
- `list_instagram_post_comment_replies` — List replies to an Instagram comment. [write]
- `list_instagram_post_comments` — List comments on an Instagram post. [write]
- `list_instagram_user_followers` — List followers of an Instagram user.
- `list_instagram_user_following` — List accounts an Instagram user follows.
- `list_instagram_user_former_usernames` — List former usernames for an Instagram user.
- `list_instagram_user_highlights` — List Instagram highlight reels for a user (metadata only).
- `list_instagram_user_posts` — List feed posts authored by an Instagram user.
- `list_instagram_user_reels` — List reels authored by an Instagram user.
- `list_instagram_user_stories` — List active Instagram stories for a user.
- `list_instagram_user_tagged_posts` — List posts an Instagram user is tagged in.
- `list_linkedin_company_affiliated` — List a LinkedIn company's affiliated pages.
- `list_linkedin_company_jobs` — List active job postings at a LinkedIn company.
- `list_linkedin_company_people` — List employees of a LinkedIn company.
- `list_linkedin_company_posts` — List posts published by a LinkedIn company page.
- `list_linkedin_group_posts` — List posts in a LinkedIn group.
- `list_linkedin_post_comment_replies` — List replies to a LinkedIn comment. [write]
- `list_linkedin_post_comments` — List top-level comments on a LinkedIn post. [write]
- `list_linkedin_post_reactions` — List users who reacted to a LinkedIn post. [write]
- `list_linkedin_post_reposts` — List reposts of a LinkedIn post. [write]
- `list_linkedin_user_certifications` — List a LinkedIn user's certifications.
- `list_linkedin_user_comments` — List comments authored by a LinkedIn user.
- `list_linkedin_user_educations` — List a LinkedIn user's education.
- `list_linkedin_user_experience` — List a LinkedIn user's work experience.
- `list_linkedin_user_honors` — List a LinkedIn user's honors and awards.
- `list_linkedin_user_images` — List image posts authored by a LinkedIn user.
- `list_linkedin_user_interest_companies` — List companies a LinkedIn user follows.
- `list_linkedin_user_interest_groups` — List LinkedIn groups a user follows.
- `list_linkedin_user_posts` — List posts authored by a LinkedIn user.
- `list_linkedin_user_publications` — List a LinkedIn user's publications.
- `list_linkedin_user_reactions` — List reactions a LinkedIn user has placed on posts.
- `list_linkedin_user_recommendations` — List recommendations written for a LinkedIn user.
- `list_linkedin_user_skills` — List a LinkedIn user's skills.
- `list_linkedin_user_videos` — List video posts authored by a LinkedIn user.
- `list_linkedin_user_volunteers` — List a LinkedIn user's volunteer experience.
- `list_reddit_post_comments` — List Reddit comments on a post. [write]
- `list_reddit_trending_searches` — List Reddit's current trending search queries.
- `list_reddit_user_comments` — List Reddit comments authored by a user.
- `list_reddit_user_posts` — List Reddit posts authored by a user.
- `list_seo_backlink_anchors` — Get anchor texts used in backlinks to a target.
- `list_seo_backlink_domain_pages` — List target pages ranked by backlinks.
- `list_seo_backlinks` — List individual backlinks pointing to a target.
- `list_seo_referring_domains` — List referring domains pointing to a target.
- `list_seo_referring_networks` — List referring IP networks pointing to a target.
- `list_seo_relevant_pages` — List a domain's top ranking pages.
- `list_seo_subdomains` — List a domain's subdomains with traffic.
- `list_threads_user_posts` — List Threads posts authored by a user.
- `list_threads_user_replies` — List Threads replies authored by a user.
- `list_threads_user_reposts` — List Threads reposts by a user.
- `list_tiktok_hashtag_videos` — List videos tagged with a TikTok hashtag.
- `list_tiktok_music_videos` — List videos using a TikTok music track.
- `list_tiktok_user_followers` — List a TikTok user's followers.
- `list_tiktok_user_following` — List users a TikTok user is following.
- `list_tiktok_user_likes` — List videos liked by a TikTok user.
- `list_tiktok_user_videos` — List videos posted by a TikTok user.
- `list_tiktok_video_comment_replies` — List replies to a TikTok comment. [write]
- `list_tiktok_video_comments` — List top-level comments on a TikTok video.
- `list_x_community_media` — Get media Posts from an X Community.
- `list_x_community_members` — Get members of an X Community.
- `list_x_community_moderators` — Get moderators of an X Community.
- `list_x_community_tweets` — Get Posts from an X Community.
- `list_x_list_followers` — Get followers/subscribers of an X List.
- `list_x_list_members` — Get members of an X List.
- `list_x_list_tweets` — Get Posts from an X List.
- `list_x_tweet_liking_users` — Get users who liked an X Post.
- `list_x_tweet_quotes` — Get quote Posts for an X Post.
- `list_x_tweet_repost_users` — Get users who reposted an X Post.
- `list_x_user_follower_ids` — Get follower IDs for an X user.
- `list_x_user_followers` — Get an X user's followers.
- `list_x_user_following` — Get users followed by an X user.
- `list_x_user_following_ids` — Get following IDs for an X user.
- `list_x_user_liked_tweets` — Get Posts liked by an X user.
- `list_x_user_tweets` — Get Posts authored by an X user.
- `list_x_user_verified_followers` — Get verified followers for an X user.
- `list_youtube_channel_community_posts` — List a YouTube channel's community posts.
- `list_youtube_channel_playlists` — List playlists created by a YouTube channel.
- `list_youtube_channel_shorts` — List Shorts uploaded by a YouTube channel.
- `list_youtube_channel_videos` — List videos uploaded by a YouTube channel.
- `list_youtube_hashtag_videos` — List videos for a YouTube hashtag.
- `list_youtube_playlist_videos` — List videos in a YouTube playlist.
- `list_youtube_related_videos` — List YouTube videos related to a given video.
- `list_youtube_video_captions` — List a YouTube video's caption tracks.
- `list_youtube_video_comments` — List comments on a YouTube video.
- `render_html` — Render a page to HTML.
- `render_markdown` — Render a page to Markdown.
- `resolve_linkedin_industries` — Resolve a free-text industry name to LinkedIn industry IDs.
- `resolve_linkedin_locations` — Resolve a free-text location into LinkedIn geocode tokens.
- `resolve_tiktok_user` — Resolve a TikTok username to a user id.
- `resolve_tiktok_video` — Resolve a TikTok share URL to a video.
- `resolve_youtube_channel_id` — Resolve a YouTube channel URL to its UC... channel id.
- `score_seo_keyword_difficulty` — Score keyword difficulty.
- `search_events` — Search Events.
- `search_geo_ai_mode` — Search AI Mode generative results.
- `search_geo_mentions` — Search LLM mentions of a domain or keyword.
- `search_hotels` — Search Hotels.
- `search_instagram` — Cross-type Instagram search (posts/reels).
- `search_linkedin_ads` — Search the LinkedIn Ad Library.
- `search_linkedin_jobs` — Search LinkedIn jobs by keyword and filters.
- `search_linkedin_people` — Search LinkedIn people by name, title, company, etc.
- `search_linkedin_posts` — Search LinkedIn posts by keyword.
- `search_linkedin_schools` — Search LinkedIn schools by keyword.
- `search_local` — Search Local Finder.
- `search_maps` — Search Maps.
- `search_news` — Search News.
- `search_threads_profiles` — Search Threads users by keyword.
- `search_threads_recent` — Search recent Threads posts.
- `search_threads_top` — Search top Threads posts.
- `search_tiktok` — General TikTok search (returns videos).
- `search_tiktok_hashtags` — Search TikTok hashtags by keyword.
- `search_tiktok_users` — Search TikTok users by keyword.
- `search_tiktok_videos` — Search TikTok videos by keyword.
- `search_x_communities` — Search X Communities.
- `search_x_community_member` — Search members in an X Community.
- `search_x_lists` — Search X Lists.
- `search_x_recent_tweets` — Search recent X Posts.
- `search_youtube_channel` — Search within a YouTube channel.
- `search_youtube_channels` — Search YouTube channels by keyword.
- `search_youtube_playlists` — Search YouTube playlists by keyword.
- `search_youtube_videos` — Search YouTube videos by keyword.
- `summarize_seo_backlink_domain_pages` — Summarize backlinks for each page of a target.
- `summarize_seo_bulk_pages` — Summarize backlinks for many pages at once.
- `translate_x_tweet` — Translate an X Post.
- `translate_x_user_profile` — Translate an X user profile.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change UnifAPI state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — UnifAPI is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=unifapi
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- UnifAPI homepage: https://unifapi.com
