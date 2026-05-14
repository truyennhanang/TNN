const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch("./data/novels.json")

  .then(res => res.json())

  .then(data => {

    const novel =
      data.find(item => item.id === id);

    const container =
      document.getElementById("novel-detail");

    if(!novel){

      container.innerHTML =
        "<h1>Không tìm thấy truyện</h1>";

      return;
    }

    let chapterHTML = "";

    novel.chapters.forEach(chap => {

      chapterHTML += `

        <a
          class="chapter-btn"
          href="reader.html?id=${id}&chapter=${chap.file}"
        >
          ${chap.title}
        </a>

      `;

    });

    container.innerHTML = `

  <div class="detail-box">

    <div class="detail-top">

      <div class="cover">

        <img
          src="${novel.cover}"
          alt="${novel.title}"
        >

      </div>

      <div class="info">

        <h1>${novel.title}</h1>

        <p>${novel.author}</p>

        <p>${novel.description}</p>

      </div>

    </div>

    <div class="chapter-list">

      ${chapterHTML}

    </div>

  </div>

`;

  })

  .catch(error => {

    console.log(error);

  });