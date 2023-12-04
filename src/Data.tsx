export const data = function(){
    return [
        // {
        //     name: "Ocean game (TEMP NAME)",
        //     year: "In progress",
        //     oneline: "An rpg",
        //     description: "",
        //     images: "",
        //     thumbnail: "",
        //     platforms: ["windows","mac"],
        //     links: [],
        // },
        {
            name: "Rose Curve Visualizer",
            year: "2023",
            oneline: "An interactive experience that blends mathematics and art",
            description: `This online garden transforms mathematical beauty into a fun and mesmerizing experience. Centered around the idea of exploration and play, the controls are designed to let curiosity guide the user to explore a variety of animated rose curves.

Made using p5.js and React.`,
            images: [
                {path:"RoseCurveBlueLoop.gif", alt: "A spinning blue floral rose curve."},
                {path:"RoseCurveGreenLoop.gif", alt: "A spinning spikey green rose curve"},
                {path:"RoseCurveStar.png", alt: "The rose curve visualizer producing a starry blue rose curve"},
                {path:"RoseCurveColor.png", alt: "The color-changing interface of the rose curve visualizer producing a grid-like orange rose curve"},
                {path:"RoseCurveGreen.png", alt: "The rose curve visualizer producing a flowery teal rose curve"},
                {path:"RoseCurveRound.png", alt: "The rose curve visualizer producing a traditional white rose curve"},
            ],
            thumbnail: {path: "RoseCurveClose.png", alt: "Rose Curve Visualizer"},
            platforms: ["web"],
            links: [
                {title:"View now", link:"https://davetheknave.github.io/Rose-Curve-Visualizer"},
                {title:"Source code", link:"https://github.com/davetheknave/Rose-Curve-Visualizer"},
            ],
        },
        {
            name: "Personal Portfolio",
            year: "2023",
            oneline: "You're looking at it!",
            description: `My personal portfolio is designed to give a quick overview of some of the personal projects I've done, with more detailed information being available on GitHub or elsewhere. My latest website is similar to my previous one, but with a few notable improvements showcasing what I've learned:
- The portfolio is centered around larger images. This is more eye catching and reflects on the visual nature of much of my work.
- Having everything on a single page without routing allows for everything to be visible at a glance. Details are hidden until the user decides to click on a project.
- The design is more stylish.`,
            images: [
                {path: "Portfolio3.png", alt: "My personal portfolio"},
                {path: "Portfolio3Mobile.png", alt: "My personal portfolio on a mobile device"},
            ],
            thumbnail: {path: "Portfolio3.png", alt: "My personal portfolio"},
            platforms: ["web"],
            links: [{"title":"Source Code","link":"https://github.com/davetheknave/Web-Portfolio-03"}],
        },
        {
            name: "Divine Law",
            year: "2021",
            oneline: "My and my sister's entry to AI and Games Jam 2021",
            description: `My sister and I had one week to create a video game for the AI and Games Jam of 2021 with the theme of "breaking the rules". We designed and created a puzzle game about an angel that can break the laws of physics. We won 7th place out of over 100 entries.`,
            images: [
                {path: "DivineLawScreenshot.png", alt: "Level 4 of Divine Law"},
                {path: "DivineLaw1.gif", alt: "Level 1 of Divine Law being solved by stopping time"},
                {path: "DivineLaw5.gif", alt: "Level 5 of Divine Law; the player blocks the snake from exiting by growing trees, and collects the key, but has blocked themselves from accessing the door"},
                {path: "DivineLaw7.gif", alt: "Level 7 of Divine Law; the player uses their ability to go through walls and to move trees to block the snake's path"},
            ],
            thumbnail: {path: "DivineLawTitle.png", alt: "Divine Law"},
            platforms: ["windows","mac"],
            links: [{title:"Play now",link:"https://leafyline.itch.io/divine"}],
        },
        {
            name: "Old portfolio sites",
            year: "",
            oneline: "Previous versions of my portfolio. Kept here for digital archaeologists",
            description: `I have made two versions of an online portfolio in the past.

I made the first website soon after I graduated. It featured fun animations and was artistic, but also a bit complicated.

The second one is a simpler site with a fixed header on the left side. It improved upon the previous site by being simpler, more responsive, and using the header as a persistent call to action.`,
            images: [
                {path: "Portfolio2.png", alt: "My second portfolio"},
                {path: "Portfolio1.png", alt: "My first portfolio"},
            ],
            thumbnail: {path: "Portfolio12.png", alt: "Two of my old portfolios"},
            platforms: ["web"],
            links: [
                {title: "Source code for portfolio (2021)", link: "https://github.com/davetheknave/davetheknave.github.io/"},
                {title: "Source code for portfolio (2019)", link: "https://github.com/davetheknave/Web-Portfolio-01"},
            ],
        },
        {
            name: "D-Chess",
            year: "2018",
            oneline: "A futuristic chess game for two players featuring time travel and an alternate dimension",
            description: `One day I decided to make a video game about multi-dimensional chess. I tried to cram as many alternate dimensions into the rules of chess as I could without making the game too difficult for humans to play. I ended up creating a game with two additional dimensions: one time, and the other an alternate physical space.

As this game does not feature an AI opponent, this is best played with 2 players.`,
            images: [{path: "DChess.png", alt: "A D-Chess match in progress"}],
            thumbnail: {path: "DChess.png", alt: "A D-Chess match in progress"},
            platforms: ["windows","mac","linux"],
            links: [
                {title: "Download now", link: "https://github.com/davetheknave/D-Chess/releases"},
                {title: "Source code", link: "https://github.com/davetheknave/D-Chess/"},
            ],
        },
    ]
}