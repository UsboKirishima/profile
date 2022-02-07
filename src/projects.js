const gh_name = 'UsboKirishima';

const projects = [
    {id: 0, name: 'PizzaPastaMandolin', description: 'Hacking toolkit made in C'},
    {id: 1, name: 'Niki', description: 'A simple & efficent discord bot'},
    {id: 2, name: 'Goosemod-Installer', description: 'An automated installer for discord goosemod'},
    {id: 3, name: 'profile', description: 'My profile in a website.'}
]

function render_projects() {
    projects.forEach(async ({ id, name, description }) => {
        const links = document.getElementById('links');
        links.innerHTML += `
        <p id="project">・<a href="https://github.com/${gh_name}/${name}" id="project-url">${gh_name}/${name}</a></p>
        `
    })
}