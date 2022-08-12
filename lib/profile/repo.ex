defmodule Profile.Repo do
  use Ecto.Repo,
    otp_app: :profile,
    adapter: Ecto.Adapters.Postgres
end
