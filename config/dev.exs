import Config

config :profile, Profile.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "profile_dev",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :profile, ProfileWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "5dH4i/P1F3t6OH0xbBtHL8nvQaFweqVBOIzkHsTmCzDEiiAN7edwl2Bmu0+wj5P7",
  watchers: [
    esbuild: {Esbuild, :install_and_run, [:default, ~w(--sourcemap=inline --watch)]}
  ]

config :profile, ProfileWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/profile_web/(live|views)/.*(ex)$",
      ~r"lib/profile_web/templates/.*(eex)$"
    ]
  ]

config :logger, :console, format: "[$level] $message\n"

config :phoenix, :stacktrace_depth, 20

config :phoenix, :plug_init_mode, :runtime
