fetch('data/novels.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('novel-list');

  data.forEach(novel => {
    container.innerHTML += `
      <div class="card">
        <img src="${novel.cover}" alt="">
        <h3>${novel.title}</h3>
        <p>${novel.author}</p>
        <a class="read-btn" href="novel.html?id=${novel.id}">Đọc Ngay</a>
      </div>
    `;
  });
});