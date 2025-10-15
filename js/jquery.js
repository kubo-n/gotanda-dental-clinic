$(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");       // 線をバツに変形
    $("#global-nav").toggleClass("is-open"); // ナビ開閉

    // aria 属性の切り替え
    let expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !expanded);
    $("#global-nav").attr("aria-hidden", expanded);

    // テキスト切り替え
    if (!expanded) {
    $(this).find(".visually-hidden").text("メニューを閉じる");
    $(this).attr("aria-label", "メニューを閉じる");
    } else {
    $(this).find(".visually-hidden").text("メニューを開く");
    $(this).attr("aria-label", "メニューを開く");
    }
  });
  $('#main-visual-fade-in').each(function() {
    var elemTop = $(this).offset().top;
    var scrollBottom = $(window).scrollTop() + $(window).height();

    if (scrollBottom > elemTop + 50) {
    $(this).addClass('visible');
    }
  });
});
