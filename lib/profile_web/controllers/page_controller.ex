defmodule ProfileWeb.PageController do
  use ProfileWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", description: "
    Also known as usbo, West Parma programmer UsboKirishima (born Davide Usberti) started coding little automated softwares in 2019, in recent years he has taken part in the Italian scene collaborating on many projects.
    After a long period of non-stop coding he stopped contributing to any project for 8 months for various trials with cyber criminals and hacking attacks affliating.
    Affilied to 333 mentality He is a listener of American Rappers, in particoular to Lil Loaded, NLE Choppa, Chief Keef, Bueface, 6ix9ine, Gunna.
    Also a fan of the new music genre UK Drill in particoular with: Central Cee, Rondodasosa, Russ Millions, Tion Wayne, Tankz.
    Is possible to listen to this artists thanks to the spotify playlists made by him (@davideusberti on spotify).
    Now He is waiting to the shits end to broke again in the scene.
    ")
  end


end
