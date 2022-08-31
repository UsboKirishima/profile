defmodule ProfileWeb.SkillsController do
  use ProfileWeb, :controller

  def skills(conn, _params) do
    render(conn,
    "skills.html",
    languages: [
      "TypeScript",
      "Elixir",
      "C",
      "Rust",
      "Haskell"
    ],
    frameworks: [
      "Phoenix",
      "Node.js",
      "Next.js",
      "GTK+"
    ],
    tools: [
      "Neovim",
      "Alacritty",
      "Arch Linux"
    ]
    )
  end
end
