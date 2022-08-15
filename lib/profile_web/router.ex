defmodule ProfileWeb.Router do
  use ProfileWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {ProfileWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ProfileWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/skills", SkillsController, :skills
  end



  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ProfileWeb.Telemetry
    end
  end


  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  scope "/api", ProfileWeb do
    pipe_through :browser

    get "/info", InfoController, :show
  end

end
