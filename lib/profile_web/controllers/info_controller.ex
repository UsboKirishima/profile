defmodule ProfileWeb.InfoController do
  use ProfileWeb, :controller

  def show(conn, _params) do
    json(conn, %{
      name: "Davide",
      surname: "Usberti",
      age: "16",
      school: "Automation & Robotics",
      country: "Italy",
      town: "Parma",
      github_name: "UsboKirishima"
    })
  end
end
