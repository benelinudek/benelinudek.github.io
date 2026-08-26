// ================================================
// BENELI NUDEK WEBSITE
// Main JavaScript
// ================================================

document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // WEBSITE SEARCH
    // ============================================

    const searchForm = document.getElementById("site-search");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    if (searchForm && searchInput && searchResults) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchTerm = searchInput.value
                .trim()
                .toLowerCase();

            searchResults.innerHTML = "";

            if (searchTerm === "") {

                searchResults.innerHTML = `
                    <div class="card">
                        <h3>Search the website</h3>
                        <p>Please enter something to search for.</p>
                    </div>
                `;

                return;
            }


            const searchableSections = [
                {
                    name: "About Beneli Nudek",
                    description:
                        "Biography, background, birthplace, education and personal story.",
                    link: "#about",
                    keywords:
                        "about beneli nudek biography born tegbi education story"
                },

                {
                    name: "Beneli Nudek Music",
                    description:
                        "Songs, releases, music and streaming platforms.",
                    link: "#music",
                    keywords:
                        "music songs afrobeat afropop street pop drill trap"
                },

                {
                    name: "Lyrics",
                    description:
                        "Song lyrics and stories behind the music.",
                    link: "#lyrics",
                    keywords:
                        "lyrics songs words feelings"
                },

                {
                    name: "Videos",
                    description:
                        "Music videos, performances and behind-the-scenes content.",
                    link: "#videos",
                    keywords:
                        "videos music video performance behind scenes"
                },

                {
                    name: "Beneli Style",
                    description:
                        "Streetwear, formal outfits, everyday looks, performance outfits and accessories.",
                    link: "#style",
                    keywords:
                        "style fashion streetwear formal clothes outfits sneakers accessories"
                },

                {
                    name: "Events",
                    description:
                        "Upcoming performances, appearances and events.",
                    link: "#events",
                    keywords:
                        "events concerts performances appearances"
                },

                {
                    name: "Gallery",
                    description:
                        "Photos from music, fashion, art, events and life.",
                    link: "#gallery",
                    keywords:
                        "gallery photos photography fashion music art"
                },

                {
                    name: "NUDEK World",
                    description:
                        "The future business vision covering fashion, art, music, agriculture and more.",
                    link: "#business",
                    keywords:
                        "nudek world business fashion manufacturing agriculture art entrepreneurship"
                },

                {
                    name: "Net Worth",
                    description:
                        "Public estimated net worth information.",
                    link: "#net-worth",
                    keywords:
                        "net worth money wealth public profile"
                },

                {
                    name: "Contact",
                    description:
                        "Business enquiries, bookings, collaborations and professional opportunities.",
                    link: "#contact",
                    keywords:
                        "contact email booking business collaboration media"
                }
            ];


            const results = searchableSections.filter(function (section) {

                return (
                    section.name.toLowerCase().includes(searchTerm) ||
                    section.description.toLowerCase().includes(searchTerm) ||
                    section.keywords.includes(searchTerm)
                );

            });


            if (results.length === 0) {

                searchResults.innerHTML = `
                    <div class="card">
                        <h3>No results found</h3>
                        <p>
                            We couldn't find anything matching
                            "${searchInput.value}".
                        </p>
                    </div>
                `;

                return;
            }


            results.forEach(function (result) {

                const resultCard = document.createElement("div");

                resultCard.className = "card";

                resultCard.innerHTML = `
                    <h3>${result.name}</h3>

                    <p>
                        ${result.description}
                    </p>

                    <div class="button-group">

                        <a
                            href="${result.link}"
                            class="btn btn-outline"
                        >
                            Explore
                        </a>

                    </div>
                `;

                searchResults.appendChild(resultCard);

            });

        });

    }

});
