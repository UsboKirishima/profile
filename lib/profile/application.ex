defmodule Profile.Application do

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Profile.Repo,
      ProfileWeb.Telemetry,
      {Phoenix.PubSub, name: Profile.PubSub},
      ProfileWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: Profile.Supervisor]
    Supervisor.start_link(children, opts)
  end

  @impl true
  def config_change(changed, _new, removed) do
    ProfileWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
