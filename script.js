function renderHTML(data) {
    const html = `<h1>${data.name}</h1>
    <h1>${data.bio}</h1>
    <img src="${data.avatar_url}" alt="profile.jpg">
    <h1>Following ${data.following}</h1>
    <h1>Follower ${data.followers}</h1>
    `
    return html;
} 

function fetchApi() {
    fetch('https://api.github.com/users/NeoGlanding')
     .then(response => response.json())
     .then(data => {
         console.log(data)
         document.getElementById('github-profiles').insertAdjacentHTML('afterbegin', renderHTML(data))
        })
     .catch(err => console.log(err))
}

fetchApi()