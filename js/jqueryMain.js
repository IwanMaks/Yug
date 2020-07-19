$(function () {
    $("a.header-link").click(function () {
     let elementClick = $(this).attr("href")
     let destination = $(elementClick).offset().top;
     $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
     return false;
    });
    $("a.logo-link").click(function () {
        let element = $(this).attr("href")
        let aim = $(element).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: aim }, 1100);
        return false;
    });
    $("a.map-link").click(function () {
        let element = $(this).attr("href")
        let aim = $(element).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: aim }, 1100);
        return false;
    });   
  });