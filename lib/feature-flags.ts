// Toggle with FEATURE_ONLINE_ORDERING=false in the environment to hide the
// online ordering preview (e.g. once real order-taking is wired up, or to
// stop showing the demo outside client presentations).
export const FEATURES = {
  onlineOrdering: process.env.FEATURE_ONLINE_ORDERING !== "false",
} as const;
