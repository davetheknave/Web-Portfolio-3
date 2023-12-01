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
            description: "This online garden transforms mathematical beauty into a fun and mesmerizing experience. Centered around the idea of exploration and play, the controls are designed to let curiosity guide the user to explore a variety of animated rose curves.",
            images: ["Screenshot 2023-11-30 at 13.46.51.png", "Screenshot 2023-11-30 at 13.47.00.png", "Screenshot 2023-11-30 at 13.47.40.png", "Screenshot 2023-11-30 at 13.48.59.png", "Screenshot 2023-11-30 at 13.49.43.png", "Screenshot 2023-11-30 at 13.50.31.png", "Screenshot 2023-11-30 at 13.50.47.png", "Screenshot 2023-11-30 at 13.51.08.png", "Screenshot 2023-11-30 at 13.52.42.png", "Screenshot 2023-11-30 at 13.54.27.png", "Screenshot 2023-11-30 at 13.55.44.png", "Screenshot 2023-11-30 at 14.54.55.png"],
            thumbnail: "Screenshot 2023-11-30 at 13.55.44.png",
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
            - It now has a back end to allow me to update it easily.
            - Having a single page without routing allows for everything to be visible at a glance. Details are hidden until the user decides to click on a project.
            - The portfolio is centered around larger images. This is more eye catching and reflects on the visual nature of much of my work.
            - The design is more modern and uses animations to gently guide the user.`,
            images: ["Portfolio3.png",],
            thumbnail: "Portfolio3.png",
            platforms: ["web"],
            links: [{"title":"Source Code","link":"https://github.com/davetheknave/Web-Portfolio-03"}],
        },
        {
            name: "Divine Law",
            year: "2021",
            oneline: "My and my sister's entry to AI and Games Jam 2021",
            description: `My sister and I had one week to create a video game for the AI and Games Jam of 2021 with the theme of "breaking the rules". We designed and created a puzzle game about an angel that can break the laws of physics. We won 7th place out of over 100 entries.`,
            images: ["DivineLawTitle.png","DivineLawScreenshot.png"],
            thumbnail: "DivineLawTitle.png",
            platforms: ["windows","mac"],
            links: [{title:"Play now",link:"https://leafyline.itch.io/divine"}],
        },
        {
            name: "Old portfolio sites",
            year: "",
            oneline: "Previous versions of my portfolio. Kept here for digital archaeologists",
            description: `The first personal site I made soon after I graduated. It featured fun animations and was artistic, but also a bit complicated.
            The second one is a simpler site with a consistent header on the left side. It improved upon the previous site in many ways:
            - The simpler look, while less artistic, was more robust and responsive to work on more devices.
            - The soft colors are easier on the eyes.
            - The header on the left has contact information and serves as a persistent call to action.`,
            images: ["Portfolio2.png","Portfolio1.png"],
            thumbnail: "Portfolio2.png",
            platforms: ["web"],
            links: [
                {title: "Source code for second site", link: "https://github.com/davetheknave/davetheknave.github.io/"},
                {title: "Source code for first site", link: "https://github.com/davetheknave/Web-Portfolio-01"},
            ],
        },
        {
            name: "D-Chess",
            year: "2018",
            oneline: "A futuristic chess game for two players featuring time travel and an alternate dimension",
            description: `One day I decided to make a video game about multi-dimensional chess. I tried to cram as many alternate dimensions into the rules of chess as I could without making the game too difficult for humans to play. I ended up creating a game with two additional dimensions: one time, and the other an alternate physical space.

            As this game does not feature an AI opponent, this is best played with 2 players.`,
            images: ["DChess.png"],
            thumbnail: "DChess.png",
            platforms: ["windows","mac","linux"],
            links: [{title: "Source code", link: "https://github.com/davetheknave/D-Chess/"}],
        },
    ]
}