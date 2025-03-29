document.addEventListener("DOMContentLoaded", function () {
  const adHTML = `
      <div class="overlay" id="overlay" onclick="closeAd()">
          <div class="ad-container" onclick="event.stopPropagation();">
              <button class="close-btn" onclick="closeAd()">&times;</button>
              <a id="adLink" href="#" target="_blank">
                  <img id="adImage" src="" alt="Advertisement">
              </a>
              <p>Powered by <a href="https://adisom.netlify.app" target="_blank">ADISOM</a></p>
          </div>
      </div>
  `;

  const adStyle = `
      .overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 999;
      }
      .ad-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          padding: 15px;
          border-radius: 10px;
          margin-top: 30px;
          text-align: center;
          z-index: 1000;
          max-width: 90%;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      }
      .ad-container img {
          width: 100%;
          max-width: 1080px;
          height: auto;
          border-radius: 5px;
      }
      .close-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          cursor: pointer;
          font-size: 18px;
          background: #ff4d4d;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: 0.3s;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      }
      .close-btn:hover {
          background: #ff0000;
      }
  `;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = adStyle;
  document.head.appendChild(styleTag);

  const adDiv = document.createElement("div");
  adDiv.innerHTML = adHTML;
  document.body.appendChild(adDiv);

  const ads = [
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad1.png', link: 'https://haseef-swift.netlify.app/' },
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad2.png', link: 'https://shophf.netlify.app/' },
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad3.png', link: 'https://offerbazaar.teamcrp.in/' },
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad4.png', link: 'https://offerbazaar.teamcrp.in/' },
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad5.png', link: 'https://offerbazaar.teamcrp.in/' },
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad6.png', link: 'https://exp-eb-teb.netlify.app/' },
    { img: 'https://haseefmuhammed.github.io/adisomapi/ads/ad7.png', link: 'https://exp-eb-teb.netlify.app/' }
  ];

  function showAd() {
      let randomAd = ads[Math.floor(Math.random() * ads.length)];
      document.getElementById('adImage').src = randomAd.img;
      document.getElementById('adLink').href = randomAd.link;
      document.getElementById('overlay').style.display = 'block';
  }

  window.closeAd = function () {
      document.getElementById('overlay').style.display = 'none';
      setTimeout(showAd, 180000 ); // 3 minutes
  };

  setTimeout(showAd, 3000); // Show ad after 1 second
  console.log(`Total rendered ads : ${ads.length}`)    
});

console.log(`
    
 _______  ______  _________ _______  _______  _______ 
(  ___  )(  __  \ \__   __/(  ____ \(  ___  )(       )
| (   ) || (  \  )   ) (   | (    \/| (   ) || () () |
| (___) || |   ) |   | |   | (_____ | |   | || || || |
|  ___  || |   | |   | |   (_____  )| |   | || |(_)| |
| (   ) || |   ) |   | |         ) || |   | || |   | |
| )   ( || (__/  )___) (___/\____) || (___) || )   ( |
|/     \|(______/ \_______/\_______)(_______)|/     \|
                                                      

Last updated : 11:33 AM / 26/03/2025
Released on : 25/03/2025
Powered by Haseef Swift    
    `);

