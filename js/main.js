// Navbar dropdown
$('.ui.dropdown')
  .dropdown();
// Back to top
$('.backToTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
// Fancybox Auto wrap img tags
$(".text img").each(function (index, element) {
  $(element).wrap(`<a href="${element.src}" data-fancybox data-caption="${element.alt}">`);
});
