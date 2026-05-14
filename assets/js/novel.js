const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('data/novels.json')
.then(res => res.json())
.then(data => {

  const novel = data.find(item => item.id === id);

  const container = document.getElementById('novel-detail');

  container.innerHTML = `
    <div style="padding:20px">
      <h1>${novel.title}</h1>
      <img src="${novel.cover}" width="250">
      <p>${novel.description}</p>
    </div>
  `;
});