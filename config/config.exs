import Config

config :profile,
  ecto_repos: [Profile.Repo]

config :profile, ProfileWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: ProfileWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Profile.PubSub,
  live_view: [signing_salt: "eo4oO/SS"]

config :profile, Profile.Mailer, adapter: Swoosh.Adapters.Local

config :swoosh, :api_client, false

config :esbuild,
  version: "0.14.29",
  default: [
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

import_config "#{config_env()}.exs"
