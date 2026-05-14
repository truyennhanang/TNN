console.log("APP RUNNING");

fetch("./data/novels.json")

  .then(response => response.json())

  .then(data => {

    console.log(data);

    const container =
      document.getElementById("novel-list");

    let html = "";

    data.forEach(novel => {

      html += `

        <div class="card">

          <img
            src="${novel.cover}"
            alt="${novel.title}"
          >

          <h3>${novel.title}</h3>

          <p>${novel.author}</p>

          <a
            class="read-btn"
            href="novel.html?id=${novel.id}"
          >
            Đọc Ngay
          </a>

        </div>

      `;

    });

    container.innerHTML = html;

  })

  .catch(error => {

    console.log(error);

  });