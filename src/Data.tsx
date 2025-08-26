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
            name: "Aspire: To The Stars",
            year: "2024",
            oneline: "A game about climbing an AI generated tower",
            description: `A mobile game about climbing an AI generated tower, designed with frequent but short play sessions in mind. The tower is filled with enemies, weapons, and upgrades. The game features enemies and levels made with Stable Diffusion and Llama, which are created server-side and updated daily.

The game's server is hosted on AWS, and features a dashboard for managing the content. Stable Diffusion and Llama are used to generate the enemies and levels, which are uploaded to the server as a bundle of images and json data. The dashboard allows for generating content automatically, and for manually editing the content and regenerating specific images before publishing.
            
Game made with C# in Unity. Server made with Python and AWS.`,
            images: [
                {path:"Aspire-Battle-2-phone.webp", alt: "A battle in Aspire: To The Stars"},
                {path:"Aspire-Dashboard.webp", alt: "A browser dashboard for managing content on Aspire's servers. Several enemy images are visible, and a dialog menu for editing one enemy's data is open."},
                {path:"Aspire-Battle-1-phone.webp", alt: "Aspire: To The Stars"},
                // {path:"Aspire-Battle-3-phone.webp", alt: "Aspire: To The Stars"},
                {path:"Aspire-Shop-phone.webp", alt: "A shop in Aspire: To The Stars"},
                {path:"Aspire-Inventory-phone.webp", alt: "A menu showing weapon stats in Aspire: To The Stars"},
                {path:"Aspire-Main-Menu-phone.webp", alt: "The main menu of Aspire: To The Stars"},
            ],
            thumbnail: {path:"Aspire-Main-Menu-phone.webp", alt: "The main menu of Aspire: To The Stars"},
            platforms: ["android"],
            links: [
                {title:"Download from Google Play", link:"https://play.google.com/store/apps/details?id=xyz.stearns.aspire&pcampaignid=web_share"},
                {title:"Privacy Policy", link:"/Aspire-To-The-Stars/privacy"},
            ],
        },
        {
            name: "Rose Curve Visualizer",
            year: "2023",
            oneline: "An interactive experience that blends mathematics and art",
            description: `This online garden transforms mathematical beauty into a fun and mesmerizing experience. Centered around the idea of exploration and play, the controls are designed to let curiosity guide the user to explore a variety of animated rose curves.

Made using p5.js and React.`,
            images: [
                {path:"RoseCurveBlueLoop.webp", alt: "A spinning blue floral rose curve."},
                {path:"RoseCurveGreenLoop.webp", alt: "A spinning spikey green rose curve"},
                {path:"RoseCurveStar.webp", alt: "The rose curve visualizer producing a starry blue rose curve"},
                {path:"RoseCurveColor.webp", alt: "The color-changing interface of the rose curve visualizer producing a grid-like orange rose curve"},
                {path:"RoseCurveGreen.webp", alt: "The rose curve visualizer producing a flowery teal rose curve"},
                {path:"RoseCurveRound.webp", alt: "The rose curve visualizer producing a traditional white rose curve"},
            ],
            thumbnail: {path: "RoseCurveClose.webp", alt: "Rose Curve Visualizer"},
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
- Having everything on a single page allows for everything to be visible at a glance. Details are hidden until the user decides to click on a project.
- The design is more stylish.`,
            images: [
                {path: "Portfolio3.webp", alt: "My personal portfolio"},
                {path: "Portfolio3Mobile.webp", alt: "My personal portfolio on a mobile device"},
            ],
            thumbnail: {path: "Portfolio3.webp", alt: "My personal portfolio"},
            platforms: ["web"],
            links: [{"title":"Source Code","link":"https://github.com/davetheknave/Web-Portfolio-03"}],
        },
        {
            name: "Divine Law",
            year: "2021",
            oneline: "My and my sister's entry to AI and Games Jam 2021",
            description: `My sister and I had one week to create a video game for the AI and Games Jam of 2021 with the theme of "breaking the rules". We designed and created a puzzle game about an angel that can break the laws of physics. We won 7th place out of over 100 entries.`,
            images: [
                {path: "DivineLawScreenshot.webp", alt: "Level 4 of Divine Law"},
                {path: "DivineLaw1.webp", alt: "Level 1 of Divine Law being solved by stopping time"},
                {path: "DivineLaw5.webp", alt: "Level 5 of Divine Law; the player blocks the snake from exiting by growing trees, and collects the key, but has blocked themselves from accessing the door"},
                {path: "DivineLaw7.webp", alt: "Level 7 of Divine Law; the player uses their ability to go through walls and to move trees to block the snake's path"},
            ],
            thumbnail: {path: "DivineLawTitle.webp", alt: "Divine Law"},
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
                {path: "Portfolio2.webp", alt: "My second portfolio"},
                {path: "Portfolio1.webp", alt: "My first portfolio"},
            ],
            thumbnail: {path: "Portfolio12.webp", alt: "Two of my old portfolios"},
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
            images: [{path: "DChess.webp", alt: "A D-Chess match in progress"}],
            thumbnail: {path: "DChess.webp", alt: "A D-Chess match in progress"},
            platforms: ["windows","mac","linux"],
            links: [
                {title: "Download now", link: "https://github.com/davetheknave/D-Chess/releases"},
                {title: "Source code", link: "https://github.com/davetheknave/D-Chess/"},
            ],
        },
    ]
}