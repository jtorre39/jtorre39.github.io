(() => {
    const portfolio = [
        {
            title: "Keyframe",
            key: "tweener",
            img: "images/smol.png",
            lineBreak: "Tweener"
        },

        {
            title: "Maze Builder Web App",
            key: "maze",
            img: "images/maze.png"
        },

        {
            title: "Talk About Yourself",
            key: "self",
            img: "images/self_inclusion.png"
        },

        {
            title: "GRNmap",
            key: "grnmap",
            img: "images/grnmap.png",
            lineBreak: "Research",
        },

        {
            title: "Website Portfolio",
            key: "website",
            img: "images/self_inclusion.png"
        },

        {
            title: "Pluvio",
            key: "pluvio",
            img: "images/pluvio.png",
            lineBreak: "App",
        },

        {
            title: "Work",
            key: "work",
            img: "images/self_inclusion.png",
            lineBreak: "Experience",
        },

        {
            title: "Oxtails",
            key: "oxtails",
            img: "images/oxtails.png",
            lineBreak: "Project",

        },

        {
            title: "jen-lang",
            key: "jen",
            img: "images/jen-lang.png"
        },
    ];
    const getPortfolio = () => portfolio;
    const getTopicCount = () => portfolio.length;
    window.Portfolio = { getPortfolio, getTopicCount };
})();
