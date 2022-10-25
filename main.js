let config = {
    "Title": "davideusberti",
    "Name": "davideusberti",
    "Description": "",
    "links": [
        {
            "Title": "Instagram",
            "URL": "https://instagram.com/davideusberti",
            "icon_classes": "fab fa-instagram"
        },
        {
            "Title": "TikTok",
            "URL": "https://www.tiktok.com/@davideusberti",
            "icon_classes": "fa fa-coffee"
        },
        {
            "Title": "Twitter",
            "URL": "https://twitter.com/davideusberti",
            "icon_classes": "fab fa-twitter"
        },
        {
            "Title": "Github",
            "URL": "https://github.com/UsboKirishima",
            "icon_classes": "fab fa-github",
        },
        {
            "Title": "Discord",
            "URL": "https://discord.com/users/848463685374443530",
            "icon_classes": "fab fa-discord",
        },
        {
            "Title": "Spotify",
            "URL": "https://open.spotify.com/user/r6zgsygw4x6fvx1qj24jvy9ef?si=a16a6624632d4b60",
            "icon_classes": "fab fa-spotify",
        },
        {
            "Title": "Youtube",
            "URL": "https://www.youtube.com/channel/UCoo119wKgywNac9ScwngpuQ",
            "icon_classes": "fab fa-youtube"
        },
        {
            "Title": "Facebook",
            "URL": "https://www.facebook.com/davide.usberti.12",
            "icon_classes": "fab fa-facebook"
        },
        {
            "Title": "Website",
            "URL": "http://davideusberti.me",
            "icon_classes": "fas fa-link",
        }
    ]
}

const linkComponent = (title, icon_classes, url) => {
    return `
      <div>
          <a href="${url}" target="_blank" class="links , hover">
          <i class="${icon_classes} links-in"></i>
          ${title}</a>
      </div>
    `
}

link_container = document.getElementById("link-container")

name_component = document.getElementById("name_component")
description_component = document.getElementById("description_component")

description_meta = document.getElementById("description-meta")
title_meta = document.getElementById("title-meta")


name_component.innerText = config.Name
description_component.innerText = config.Description
document.title = config.Title
description_meta = config.Description
title_meta = config.Title


for (let i = 0; i < config.links.length; i++) {
    link_container.innerHTML += linkComponent(config.links[i].Title, config.links[i].icon_classes, config.links[i].URL)
}