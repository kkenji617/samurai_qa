jQuery(function($) {
    /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function() {
    // #headerにopenクラスが存在する場合
    if ($('header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $('header').removeClass('open');

    // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $('header').addClass('open');
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('header').removeClass('open');
  });
  $('.gnav').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('header').removeClass('open');
  });
});


jQuery(function ($) {
  console.log("JavaScript loaded");

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();
  console.log("Nav height: " + navHeight);

  $('a[href*="#"]').on("click", function (e) {
    var href = $(this).attr("href");
    var urlParts = href.split("#");
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(href === "#" ? "html" : "#" + urlParts[1]);
      console.log("Target: " + target);

      if (target.length) {
        var position = target.offset().top - navHeight;
        console.log("Scroll to: " + position);

        $("html, body").animate({ scrollTop: position }, 300, "swing");
        e.preventDefault();
      }
    }
  });
  //ページトップ
  // $("#contact").on("click", function () {
    // $("html, body").animate({ scrollTop: 0 }, 1000);
    // return false;
  // });
});






