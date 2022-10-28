const wrapper = document.querySelector(".wrapper"),
    mp3Input = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    mp3link = wrapper.querySelector(".mp3-link iframe");

generateBtn.addEventListener("click", () => {
    let mp3Value = mp3Input.value;
    if (!mp3Value) return;
    mp3link.src = `https://convert2mp3s.com/api/widgetv2?url=${mp3Value}`;
    wrapper.classList.add("active");
    })