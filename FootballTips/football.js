document.addEventListener("DOMContentLoaded", () => {
    const matches = [
        { homeTeam: "Leicester City", awayTeam: "Chelsea", prediction: "Chelsea To Win", odds: "-140", homeLogo: "Leicester_City_crest.svg.png", awayLogo: "chelsea-fc-logo-png_seeklogo-188885.png" },
        { homeTeam: "Fulham", awayTeam: "Wolves", prediction: "Fulham To Win", odds: "+100", homeLogo: "Fulham_FC_(shield).svg.png", awayLogo: "Wolverhampton_Wanderers_FC_crest.svg.png" },
        { homeTeam: "Everton", awayTeam: "Brentford", prediction: "Brentford or Tie", odds: "+130", homeLogo: "Everton_FC_logo.svg.png", awayLogo: "Brentford_FC_crest.svg.png" },
        { homeTeam: "Arsenal", awayTeam: "Nottm Forest", prediction: "Both Teams To Score", odds: "-150", homeLogo: "Arsenal_FC.svg.png", awayLogo: "Nottingham_Forest_F.C._logo.svg.png" },
        { homeTeam: "Bournemouth", awayTeam: "Brighton", prediction: "Brighton Or Tie", odds: "-150", homeLogo: "AFC_Bournemouth_(2013).svg.png", awayLogo: "Brighton_and_Hove_Albion_FC_crest.svg.png" },
        { homeTeam: "Aston Villa", awayTeam: "Crystal Palace", prediction: "Aston Villa To Win", odds: "-120", homeLogo: "Aston_Villa_FC_new_crest.svg.png", awayLogo: "Crystal_Palace_FC_logo_(2022).svg.png"},
        { homeTeam: "Man City", awayTeam: "Tottenham", prediction: "Over 2,5 Goals", odds: "-120", homeLogo: "Manchester_City_FC_badge.svg.png", awayLogo: "Tottenham_Hotspur.svg.png"},
        { homeTeam: "Southampton", awayTeam: "Liverpool", prediction: "Liverpool To Win", odds: "-300", homeLogo: "FC_Southampton.svg.png", awayLogo: "Liverpool_FC.svg.png"},
        { homeTeam: "Ipswich Town", awayTeam: "Man United", prediction: "Over 2,5 Goals", odds: "-110", homeLogo: "Ipswich_Town.svg.png", awayLogo: "Manchester_United_FC_crest.svg.png"},
        { homeTeam: "Newcastle", awayTeam: "West Ham", prediction: "Over 2,5 Goals", odds: "-120", homeLogo: "Newcastle_United_Logo.svg.png", awayLogo: "West_Ham_United_FC_logo.svg.png"},
    ];

    const matchesList = document.getElementById("matches-list");

    matches.forEach(match => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${match.homeLogo}" alt="${match.homeTeam} Logo" class="team-logo"> 
                ${match.homeTeam}  -  <img src="${match.awayLogo}" alt="${match.awayTeam} Logo" class="team-logo"> 
                ${match.awayTeam}
            </td>
            <td>${match.prediction}</td>
            <td>${match.odds}</td>
        `;
        matchesList.appendChild(row);
    });
});