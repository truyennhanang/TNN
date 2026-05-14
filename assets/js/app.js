fetch('data/novels.json')
.then(res => res.json())
.then(data => {

const container = document.getElementById('novel-list');

data.forEach(novel => {

```
container.innerHTML += `

  <div class="card">

    <div class="card-img">
      <img src="${novel.cover}" alt="${novel.title}">
    </div>

    <div class="card-content">

      <h3>${novel.title}</h3>

      <p class="author">
        ${novel.author}
      </p>

      <a class="read-btn"
         href="novel.html?id=${novel.id}">
         Đọc Ngay
      </a>

    </div>

  </div>

`;
```

});

})
.catch(error => {
console.log(error);
});
