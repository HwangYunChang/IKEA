$(function(){
  //메뉴
  let menu =  `
  <!-- 고정 아이콘 -->
  <div class="fixed">
    <div class="logo">
      <h1><a href="index.html"><img src="img/logo.png" alt="" class="logo"></a></h1>
    </div>
    <div class="credit">
      <!-- 안내문구 -->
      <p>좌우로 돌려보면서 360도 체험을 진행해보세요.      
      </p>
    </div>
    <div class="info">
      <img src="img/info_s.png" alt="" class="info1">
    </div>
  </div>

  <!-- 인포메이션 -->
  <div class="infomation">
    <h2><img src="img/t_logo.png" alt=""></h2>
    <ul>
      <li>
        <div>IKEA Family</div>
        <p>지금 IKEA Family에 무료로 가입하고
          다양한 멤버 전용 혜택을 누리세요.</p>
        <button>자세히 보기</button>
      </li>
      <li>
        <div>IKEA Business Network</div>
        <p>여러분의 더 나은 비즈니스 환경을 위한
          다양한 혜택들을 받으세요.</p>
        <button>자세히 보기</button>
      </li>
    </ul>
    <div class="address">
      IKEA 코리아 <br>
      주소 : (우) 14352 경기도 광명시 일직로 17 IKEA광명점 <br>
      사업자 등록번호 : 106-86-82871 <br>
      대표자 : 프레드릭 요한손 <br>
      통신판매업 신고 : 2018-경기광명-0209 <br>
      TEL : 1670-4532
    </div>
    <div class="copyright">
      © Inter IKEA Systems B.V 1999-2022
    </div>
    <div class="info_btn">
      <img src="/img/close_w.png" alt="">
    </div>
  </div>
    `

  $('.common').append(menu)

  //스크롤 커스텀
  $(window).on("load",function(){
    $(".product_list").mCustomScrollbar();
  });

  $(window).on("load",function(){
    $(".box_wrap").mCustomScrollbar({
      axis:"x",
      theme:"dark-3"
    });
  });

  $(window).on("load",function(){
    $(".frame3").mCustomScrollbar({
      theme:"dark-3"
    });
  });

  // 가이드 화면
  $(function () {
    setTimeout(() => {
      $('.guide').fadeOut();
    }, 3000);
  })
  $(document).on('click', '.guide .btn_g', function () {
    $('.guide').fadeOut(200)
  });
  // 인트로 화면 전환
  $(document).on('click', '#btn', function () {
    $('.intro_page').fadeOut(200)
  });

  //로고
  $(document).on('click', '.logo', function () {
    $('.prev').fadeOut(200)
  });

  //인포메이션 슬라이드
  $(document).on('click', '.info1', function () {
    $('.infomation').slideToggle(0)
  })
  
  $(document).mouseup(function (e){
    if($(".infomation").has(e.target).length === 0){
      $(".infomation").hide();
    }
  });
  $(document).on('click', '.info_btn', function () {
    $('.infomation').fadeOut(200)
  })


  //서브페이지 제품 상세페이지
  $(document).on('click', '.txt_wrap1 img', function () {
    $('.item_box2').css('display','block')
  })
  $(document).on('click', '.txt_wrap2 img', function () {
    $('.item_box3').css('display','block')
  })
  $(document).on('click', '.txt_wrap3 img', function () {
    $('.item_box4').css('display','block')
  })
  $(document).on('click', '.txt_wrap4 img', function () {
    $('.item_box5').css('display','block')
  })
  $(document).on('click', '.txt_wrap5 img', function () {
    $('.item_box6').css('display','block')
  })
  $(document).on('click', '.txt_wrap6 img', function () {
    $('.item_box7').css('display','block')
  })
  $(document).on('click', '.txt_wrap7 img', function () {
    $('.item_box8').css('display','block')
  })
  $(document).on('click', '.txt_wrap8 img', function () {
    $('.item_box9').css('display','block')
  })
  $(document).on('click', '.txt_wrap9 img', function () {
    $('.item_box10').css('display','block')
  })
  $(document).on('click', '.txt_wrap10 img', function () {
    $('.item_box11').css('display','block')
  })
  
  $(document).on('click', '.txt_wrap img', function () {
    $('.product_wrap').css('display','none')
  })
  $(document).on('click', '.x_button', function () {
    $('.item_box').fadeOut(200)
  });

  //모든 상품 리스트
  $('.all_product').mouseenter(function(){
    $('.product_list').stop().slideDown();
  });

  $('.all_product').mouseleave(function(){
    $('.product_list').stop().slideUp();
  });
  $('.product_list').mouseleave(function(){
    $('.product_list').stop().slideUp();
  });

  $('.video_b').click(function (){
    $('.video1').css('display','block')
  })
  $('.video_b2').click(function (){
    $('.video2').css('display','block')
  })
  $('.video_b3').click(function (){
    $('.video3').css('display','block')
  })
  $('.video_b4').click(function (){
    $('.video4').css('display','block')
  })
  $('.video_b5').click(function (){
    $('.video5').css('display','block')
  })
  $('.video_b6').click(function (){
    $('.video6').css('display','block')
  })
  
  $('.video1 .btn').click(function (){
    $('.video1').css('display','none')
  })
  $('.video2 .btn').click(function (){
    $('.video2').css('display','none')
  })
  $('.video3 .btn').click(function (){
    $('.video3').css('display','none')
  })
  $('.video4 .btn').click(function (){
    $('.video4').css('display','none')
  })
  $('.video5 .btn').click(function (){
    $('.video5').css('display','none')
  })
  $('.video6 .btn').click(function (){
    $('.video6').css('display','none')
  })
  
  // 브랜드스토리 액자 클릭시 팝업
  $('.frame').click(function (){
    $('.frame1').css('display','block')
  })
  $('.frame2').click(function (){
    $('.frame3').css('display','block')
  })

  $(document).mouseup(function (e){
    if($(".frame1 img").has(e.target).length === 0){
      $(".frame1").hide();
    }
  });
  $(document).mouseup(function (e){
    if($(".frame3 img").has(e.target).length === 0){
      $(".frame3").hide();
    }
  });




  
  ///////////////////////////////////////
});




