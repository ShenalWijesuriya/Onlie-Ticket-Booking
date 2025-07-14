import React, { useEffect } from 'react';

function BgCard() {
  const images = [
    "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "https://image.tmdb.org/t/p/w500/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    "https://image.tmdb.org/t/p/w500/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
    "https://image.tmdb.org/t/p/w500/3dM1iY5G7cjGEGzvmYwllgZK17z.jpg",
    "https://image.tmdb.org/t/p/w500/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
    "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    "https://image.tmdb.org/t/p/w500/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    "https://image.tmdb.org/t/p/w500/aE9tGsPOaYuIBuGW9WfdcZ5t1QD.jpg",
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/w500/zGS2w9aoBMiB7vuPkbzT8cUhwOg.jpg",
    "https://image.tmdb.org/t/p/w500/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
    "https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    script.async = true;
    script.onload = () => {
      new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: images.length,
        speed: 900,
        coverflowEffect: {
          rotate: 25,
          stretch: 30,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
    document.head.appendChild(style);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, [images.length]);

  return (
    <div className="w-full max-w-6xl h-96 mx-auto my-8 bg-gray-800/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-gray-700/50">
      <div className="swiper">
        <div className="swiper-wrapper">
          {images.map((img, index) => (
            <div key={index} className="swiper-slide !w-56 h-80">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default BgCard;
