const params = new URLSearchParams(window.location.search);
const pexelId = params.get("pexelId");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/photos/" + pexelId, {
    headers: {
      Authorization: "rhhlVb4KBIxRDxE64l1vv3gO76rTLXQPBdOFNhDdYCboD5OCmVUXDtkB",
    },
  })
    .then((resp) => resp.json())
    .then((pictureObj) => {
      console.log(pictureObj);
      const img = document.createElement("img");
      img.src = pictureObj.src.original;
      img.style = "max-width:100%";
      img.alt = pictureObj.alt;
      document.body.appendChild(img);
    });
});
