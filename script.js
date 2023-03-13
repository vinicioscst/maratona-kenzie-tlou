const episodes = [
    {
      img: "./assets/episodes/episode1.svg",
      title: "When You're Lost in the Darkness",
      description:
        " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
    },
  
    {
      img: "./assets/episodes/episode2.svg",
      title: "Infected",
      description:
        " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },
    {
      img: "./assets/episodes/episode3.svg",
      title: "Long, Long Time",
      description:
        " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
      img: "./assets/episodes/episode4.svg",
      title: "Please Hold to My Hand",
      description:
        " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
  ];


  function exportEpisodes(arr) {

    const episodesList = document.querySelector('.episodes-list')

    for (let i = 0; i < arr.length ; i++) {

      let episode = document.createElement('li')

      let episodeImage = document.createElement('img')
      episodeImage.src = `${arr[i].img}`

      let textBox = document.createElement('div')
      textBox.className = 'episodes-text'

      let episodeTitle = document.createElement('h4')
      episodeTitle.innerText = `"${arr[i].title}"`

      let episodeDescription = document.createElement('p')
      episodeDescription.innerText = `${arr[i].description}`


      episodesList.appendChild(episode)
      episode.appendChild(episodeImage)
      episode.appendChild(textBox)
      textBox.appendChild(episodeTitle)
      textBox.appendChild(episodeDescription)
    }

  }

  exportEpisodes(episodes)