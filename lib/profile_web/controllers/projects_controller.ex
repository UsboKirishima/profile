defmodule ProfileWeb.ProjectsController do
  use ProfileWeb, :controller

  def projects(conn, _params) do
    render(conn, "projects.html")
  end


end
