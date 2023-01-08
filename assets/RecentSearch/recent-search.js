const ul = document.getElementById('recent-list');
const ls = JSON.parse(localStorage.getItem('recent'));
if (ls) {
  ul.innerHTML = `
    ${ls.map(item=>{
      return `<li><a href="${window.location.origin}/assets/Search/search.html?q=${item}">${item}</a></li>`;
    }).join('')}
  `
}