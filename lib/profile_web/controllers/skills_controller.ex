defmodule ProfileWeb.SkillsController do
  use ProfileWeb, :controller

  def skills(conn, _params) do
    render(conn, "skills.html")
  end
end
