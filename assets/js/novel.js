const params = new URLSearchParams(window.location.search);

const id = params.get('id');

fetch('data/novels.json')
.then(res => res.json())
.then(data => {

const novel = data.find(item => item.id === id);

const container =
document.getElementById('novel-detail');

if(!novel){

```
container.innerHTML = `
  <h1>Không tìm thấy truyện</h1>
`;

return;
```

}

container.innerHTML = `

```
<div class="detail-box">

  <div class="cover">

    <img
      src="${novel.cover}"
      alt="${novel.title}"
    >

  </div>

  <div class="info">

    <h1>${novel.title}</h1>

    <p>
      <b>Tác giả:</b>
      ${novel.author}
    </p>

    <p>
      ${novel.description}
    </p>

    <a class="read-btn" href="#">
      Đọc Ngay
    </a>

  </div>

</div>
```

`;

})
.catch(error => {
console.log(error);
});
