// src/lib/jquery-custom.js
import $ from 'jquery';
import 'slick-carousel'; // Slick functionality
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function initCustomUI() {
  $(document).ready(() => {
    $(".offer-list").slick({
      arrows: false,
      slidesToShow: 3,
      dots: true,
      responsive: [
        { breakpoint: 769, settings: { slidesToShow: 2 } },
        { breakpoint: 500, settings: { slidesToShow: 1 } },
      ],
    });

    // All your other jQuery code here safely
  });
}
