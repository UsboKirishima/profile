import Config

config :profile, Profile.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "profile_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

config :profile, ProfileWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "nenh8CSxAOG4FDQbC+j+1Au1oTVf5Aosgx5JFW7jssLfV0ui5RnA+E23OYbHuIG1",
  server: false

config :profile, Profile.Mailer, adapter: Swoosh.Adapters.Test

config :logger, level: :warn

config :phoenix, :plug_init_mode, :runtime
