var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submit");
var tbody = document.getElementById("tbody");
var sites = JSON.parse(localStorage.getItem("sites")) || [];
showAllData();

function addSite() {
  var site = {
    site_Name: siteName?.value,
    site_Url: siteUrl.value,
  };
  sites.push(site);
  localStorage.setItem("sites", JSON.stringify(sites));
  showLastIndex();
  clear();
}

function showLastIndex() {
  let container = ``;
  let lastIndex = sites.length - 1;
  container = `<tr>
              <td>${lastIndex + 1}</td>
              <td>${sites[lastIndex].site_Name}</td>
              <td>
                <button class="btn btn-success">
                  <i class="fa-solid fa-eye mx-2"></i><a class="targetLink" href=https:///${
                    sites[lastIndex].site_Url
                  } target="_blank">Visit</a>
                </button>
              </td>
              <td>
                <button class="btn btn-danger" onclick="deleteSite(${lastIndex})">
                  <i class="fa-solid fa-trash mx-2"></i>
                  Delete
                </button>
              </td>
            </tr>`;

  tbody.innerHTML += container;
}

function showAllData() {
  let container = ``;
  for (let i = 0; i < sites.length; i++) {
    container += `<tr>
    <td>${i + 1}</td>
    <td>${sites[i].site_Name}</td>
    <td>
    <button class="btn btn-success">
    <i class="fa-solid fa-eye mx-2"></i><a class="targetLink" href=https:///${
      sites[i].site_Url
    } target="_blank">Visit</a>
    </button>
    </td>
    <td>
    <button class="btn btn-danger" onclick="deleteSite(${i})">
                  <i class="fa-solid fa-trash mx-2"></i>
                  Delete
                  </button>
                  </td>
                  </tr>`;
  }
  tbody.innerHTML = container;
}

function clear() {
  siteName.value = "";
  siteUrl.value = "";
}

function deleteSite(index) {
  sites.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(sites));
  showAllData();
}

submitBtn.addEventListener("click", addSite);
