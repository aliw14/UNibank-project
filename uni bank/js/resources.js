  const player = document.getElementById("player");
  const icon = document.querySelector(".videobar-icon");

  let youtubePlayer;
  function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "OhNyqv6mrCo",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
      events: {
        onReady: () => {
          icon.style.display = "none";
        },
      },
    });
  }

  player.addEventListener("click", () => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      youtubePlayer.playVideo();
    }
  });

  let buttons = document.querySelectorAll(".sibling-item");
for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector(".active")
        if (!(btn.classList.contains("active"))) {
            btn.classList.add("active")
            active.classList.remove("active")
        }
    }
}

const searchIcon = document.getElementById('glass');
const searchInput = document.querySelector('#list input');
const closeSearch = document.getElementById('close-search');
const searchBox = document.getElementById('list');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('show');
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchBox.classList.remove('show');
});




