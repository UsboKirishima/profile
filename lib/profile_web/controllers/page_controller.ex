defmodule ProfileWeb.PageController do
  use ProfileWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", description: "I'm Davide, also called by friends and strangers 'usbo', I born in a little city near Parma in Italy, I'm studying Automation and Robotic at high school. My dream future is to work as backend developer at Discord, I'll move to Switzerland after the end of the school. I started to coding websites and APIs few years ago using Node.js frameworks, now I'm trying to learn more about Elixir frameworks.")
  end


end
