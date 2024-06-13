const getImg = document.getElementById("getImg");
const getImgSecondary = document.getElementById("getImg-secondary");
const cards = document.getElementById("cards-container");
console.log(cards);
cards.innerHTML = "";

const CardsGenerator = (src, title, photographer, id) => {
  const col = document.createElement("div");
  col.className = "col-md-4";

  const card = document.createElement("div");
  card.className = "card mb-4 shadow-sm";

  const img = document.createElement("img");
  img.src = src;
  img.alt = title;

  const body = document.createElement("div");
  body.className = "card-body";

  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = title;

  const p = document.createElement("p");
  p.className = "card-text";
  p.innerText = photographer;

  const flexContainer = document.createElement("div");
  flexContainer.className = "d-flex justify-content-between align-items-center";

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "btn-group";

  const buttonHide = document.createElement("button");
  buttonHide.className = "btn btn-sm btn-outline-danger";
  buttonHide.innerText = "Hide";
  buttonHide.addEventListener("click", (event) => {
    col.remove();
  });

  const small = document.createElement("small");
  small.className = "text-muted";
  small.innerText = id;

  buttonGroup.append(buttonHide);
  flexContainer.append(buttonGroup, small);
  body.append(h5, p, flexContainer);
  card.append(img, body);
  col.append(card);
  cards.append(col);
};

const cardGen = (event, query, searchQuery) => {
  if (query === 1) {
    console.log(query);
    fetch(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
      headers: {
        Authorization:
          "rhhlVb4KBIxRDxE64l1vv3gO76rTLXQPBdOFNhDdYCboD5OCmVUXDtkB",
      },
    })
      .then((resp) => resp.json())
      .then((images) => {
        const imgArray = images.photos;
        console.log(imgArray);
        imgArray.forEach((img) => {
          const { src, alt, photographer, id } = img;
          CardsGenerator(src.portrait, alt, photographer, id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    event.preventDefault();
  }
};

const eventHandle = () => cardGen("click", 1, "japanese");
const eventHandle2 = () => cardGen("click", 1, "hamster");

getImg.onclick = eventHandle;
getImgSecondary.onclick = eventHandle2;
