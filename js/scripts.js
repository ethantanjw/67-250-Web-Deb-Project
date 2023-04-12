(function($){
    $(document).ready(function(){
     $('.container-carousel').flickity({
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: true,
        
     });
    });
})(jQuery)


function openTab(event, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }


