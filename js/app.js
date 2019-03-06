$(function(){
  $("a h1").on( "click", function(){
  $(".article").remove()
  });
  $(".closePopUp").on( "click", function(){
  $("#popUp").hide()
  $('#popUp.loader').css("background-size", "default")
  });
  
  $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6d8f4fc0e19f4d5a96eb0c6e789668c1" , function(res){
  $(".LAST").on( "click", function() {
      $("#popUp").attr("hidden",false);
  var number = 0 ;
  res.articles.forEach(element => {
    number = number +1 ;
    const ar = document.createElement('article')
    ar.setAttribute("class" ,"arr" )
    ar.setAttribute("id" , number)
    const m = document.getElementById("main")
    m.appendChild(ar)
    const img = document.createElement("section")
    img.setAttribute("class", "imgg")
    ar.appendChild(img)
    const img2=document.createElement("img")
    img2.setAttribute("src",`${element.urlToImage}`)
    img.appendChild(img2)
    const articleC = document.createElement("section")
    articleC.setAttribute("class","articleC")
    ar.appendChild(articleC)
    const A = document.createElement('a')
    A.setAttribute("herf","#")
    articleC.appendChild(A)
    const h = document.createElement("h3")
    h.setAttribute("class" , "title")
    h.textContent=`${element.title}`
    A.appendChild(h)
    const anotherh = document.createElement("h6")
    anotherh.textContent=`${element.author}`
    articleC.appendChild(anotherh)
    const i = document.createElement("section")
    i.setAttribute("class" , "i")
    $(".i").text("")
    ar.appendChild(i)
    const cf = document.createElement("div")
    cf.setAttribute("class" , "cf")
    ar.appendChild(cf)
    $('.articleContent').click(function(){
      $("#popUp").attr("class", "");
      var Ti = $(this).find("h3").text();
      var de = $(this).find("h6").text();
      var urrl = $(this).find("p").text();

      $("#popUp h1").replaceWith("<h1>"+$(this).find("h3").text()+"</h1>");
      $('#popUp p').replaceWith("<p>"+$(this).find("h6").text()+"</p>");
      $('#popUpAction').attr('href', urrl)

  })

  $('.closePopUp').click(function() {
    $("#popUp").attr("class", "loader hidden");
  });
})
  });
  $("#popUp").attr("hidden",true);
  });
  });

  $(function(){
    $("a h1").on( "click", function(){
    $(".article").remove()
    });
    $(".closePopUp").on( "click", function(){
    $("#popUp").hide()
    $('#popUp.loader').css("background-size", "default")
    });
    
    $.get("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Gc8dNA4KRb8uC25cgE3dVOrD2cfwHF3g", function(res){
    $(".LAST2").on( "click", function() {
        $("#popUp").attr("hidden",false);
    var number = 0 ;
    res.articles.forEach(element => {
      number = number +1 ;
      const ar = document.createElement('article')
      ar.setAttribute("class" ,"arr" )
      ar.setAttribute("id" , number)
      const m = document.getElementById("main")
      m.appendChild(ar)
      const img = document.createElement("section")
      img.setAttribute("class", "imgg")
      ar.appendChild(img)
      const img2=document.createElement("img")
      img2.setAttribute("src",`${element.thumbnail_standard}`)
      img.appendChild(img2)
      const articleC = document.createElement("section")
      articleC.setAttribute("class","articleC")
      ar.appendChild(articleC)
      const A = document.createElement('a')
      A.setAttribute("herf","#")
      articleC.appendChild(A)
      const h = document.createElement("h3")
      h.setAttribute("class" , "title")
      h.textContent=`${element.title}`
      A.appendChild(h)
      const anotherh = document.createElement("h6")
      anotherh.textContent=`${element.section}`
      articleC.appendChild(anotherh)
      const i = document.createElement("section")
      i.setAttribute("class" , "i")
      $(".i").text("")
      ar.appendChild(i)
      const cf = document.createElement("div")
      cf.setAttribute("class" , "cf")
      ar.appendChild(cf)
      $('.articleContent').click(function(){
        $("#popUp").attr("class", "");
        var Ti = $(this).find("h3").text();
        var de = $(this).find("h6").text();
        var urrl = $(this).find("p").text();
  
        $("#popUp h1").replaceWith("<h1>"+$(this).find("h3").text()+"</h1>");
        $('#popUp p').replaceWith("<p>"+$(this).find("h6").text()+"</p>");
        $('#popUpAction').attr('href', urrl)
  
    })
  
    $('.closePopUp').click(function() {
      $("#popUp").attr("class", "loader hidden");
    });
  })
    });
    $("#popUp").attr("hidden",true);
    });
    });
    
    
    
  
  
  