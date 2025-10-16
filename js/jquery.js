$(function() {
  // ハンバーガーボタンクリック時
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

  // トップページのメインビジュアル表示
  $('#main-visual-fade-in').each(function() {
    var elemTop = $(this).offset().top;
    var scrollBottom = $(window).scrollTop() + $(window).height();

    if (scrollBottom > elemTop + 50) {
    $(this).addClass('visible');
    }
  });

  // 診療案内ページのセクション移動ボタンクリック時
  $('.move-section-button').click(function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    const position = $(target).offset().top;
    const headerHeight = $('.header').outerHeight();

    $('html, body').animate({
      scrollTop: position - headerHeight
    }, 600);
  });
});
