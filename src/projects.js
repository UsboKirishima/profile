const gh_name = 'UsboKirishima';

const projects = [
    {id: 0, name: 'PizzaPastaMandolin', description: 'Hacking toolkit made in C', lang: 'c'},
    {id: 1, name: 'Niki', description: 'A simple & efficent discord bot', lang: 'ts'},
    {id: 2, name: 'Goosemod-Installer', description: 'An automated installer for discord goosemod', lang: 'c'},
    {id: 3, name: 'profile', description: 'My profile in a website.', lang: 'html'}
]


const icons = {
    typescript: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361a5.093 5.093 0 0 0-.717-.26a5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529c.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416c.47.197.892.407 1.266.628c.374.222.695.473.963.753c.268.279.472.598.614.957c.142.359.214.776.214 1.253c0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085a4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164a5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09c.249-.06.456-.144.623-.25c.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089a2.12 2.12 0 0 0-.537-.5a5.597 5.597 0 0 0-.807-.444a27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405c-.45-.553-.676-1.222-.676-2.005c0-.614.123-1.141.369-1.582c.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629a7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#9893a5"/></svg>`,
    html5: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13.1 3.5l.7 1.1l.7-1.1V5h1V2h-1l-.7 1.1l-.6-1.1h-1.1v3h1zM18.4 5V4H17V2h-1v3zM9.8 5h1V3h.9V2H8.9v1h.9zM6.6 4h.9v1h1V2h-1v1h-.9V2h-1v3h1zM5 6l1.2 14.4L12 22l5.8-1.6L19 6H5zm11.3 4.6H9.5l.2 1.8h6.4l-.5 5.5l-3.6 1l-3.6-1l-.3-2.9h1.8l.1 1.5l2 .5l2-.5l.2-2.3H8l-.5-5.3h9l-.2 1.7z" fill="#9893a5"/></svg>`,
    cprogramming: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 288"><path d="M255.987 85.672c-.002-4.843-1.037-9.122-3.129-12.794c-2.055-3.612-5.134-6.638-9.262-9.032c-34.081-19.67-68.195-39.28-102.264-58.97c-9.185-5.307-18.091-5.114-27.208.27c-13.565 8.008-81.481 46.956-101.719 58.689C4.071 68.665.015 76.056.013 85.663C0 125.221.013 164.777 0 204.336c.002 4.736.993 8.932 2.993 12.55c2.056 3.72 5.177 6.83 9.401 9.278c20.239 11.733 88.164 50.678 101.726 58.688c9.121 5.387 18.027 5.579 27.215.27c34.07-19.691 68.186-39.3 102.272-58.97c4.224-2.447 7.345-5.559 9.401-9.276c1.997-3.618 2.99-7.814 2.992-12.551c0 0 0-79.094-.013-118.653" fill="#A9B9CB"/><path d="M141.101 5.134c-9.17-5.294-18.061-5.101-27.163.269C100.395 13.39 32.59 52.237 12.385 63.94C4.064 68.757.015 76.129.013 85.711C0 125.166.013 164.62 0 204.076c.002 4.724.991 8.909 2.988 12.517c2.053 3.711 5.169 6.813 9.386 9.254a9008.51 9008.51 0 0 0 20.159 11.62L219.625 50.375c-26.178-15.074-52.363-30.136-78.524-45.241" fill="#7F8B99"/><path d="M154.456 126.968l39.839.281c0-16.599-16.802-57.249-64.973-57.249c-30.691 0-71.951 19.512-71.951 75.61c0 56.097 40.447 74.39 71.951 74.39c51.017 0 63.21-35.302 63.21-55.252l-38.007-2.173s1.017 23.075-25.406 23.075c-24.39 0-28.46-29.878-28.46-40.04c0-15.447 5.493-40.244 28.46-40.244c22.968 0 25.337 21.602 25.337 21.602" fill="#9893a5"/></svg>`
}
function render_projects() {
    projects.forEach(async ({ id, name, description, lang }) => {
        let language;

        if(lang == 'ts') language = icons.typescript;
        else if(lang == 'c') language = icons.cprogramming;
        else if(lang == 'html') language = icons.html5;
        else return;

        const links = document.getElementById('links');
        links.innerHTML += `
        <section id="card">
                        <div class="card-components">
                            <br>
                            <a href="https://github.com/${gh_name}/${name}" id="repo-title">${gh_name}/${name}</a>
                            <div class="langs">
                                <span>${language}</span>
                            </div>
                            <div class="desc">
                                <h2>${description}</h2>
                            </div>
                        </div>
                    </section>
        `
    })
}