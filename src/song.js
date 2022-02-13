const CONSTANTS = {
    API_URL: "https://api.lanyard.rest/v1",
    WEBSOCKET_URL: "wss://api.lanyard.rest/socket",
    HEARTBEAT_PERIOD: 1000 * 30
}

function songT() {
    let songID = document.getElementById('songID');
    let res = fetch(`${CONSTANTS.API_URL}/users/848463685374443530/kv/`);
    let body = res.json();
    if (!body.success) throw new Error(body.error?.message || "An invalid error occured");
    
    songID.innerHTML = `Song <span>${body.data.success}</span>`
    
}

