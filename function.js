function cacher_lvl1() {
    zone_a_cacher = document.getElementById("text_level1");
    zone_a_cacher.className="invisible";
    button = document.getElementById("button_next_lvl1");
    button.className="button_next";
    title = document.getElementById("title_level_lvl1");
    title.className="check";
    title = document.getElementById("function");
    title.className="check";
}
function cacher_lvl2() {
    zone_a_cacher = document.getElementById("button_lvl2");
    zone_a_cacher.className="invisible";
    zone_a_cacher = document.getElementById("button_come_back_lvl2");
    zone_a_cacher.className="invisible";
    button = document.getElementById("button_next_lvl2");
    button.className="button_next";
    title = document.getElementById("title_level_lvl2");
    title.className="check";
}
function level_3(){
    reponse = document.getElementById("secret_code");
    bonne_reponse = reponse.value
    if (bonne_reponse=="698"){
        zone_a_cacher = document.getElementById("button_come_back_lvl3");
        zone_a_cacher.className="invisible";
        button = document.getElementById("button_next_lvl3");
        button.className="button_next";
        title = document.getElementById("title_level_lvl3");
        title.className="check";
    } else {
        alert("mauvais code sorry");
    }
    
}
function level_4(){
    reponse = document.getElementById("prenom");
    bonne_reponse = reponse.value
    if (bonne_reponse=="ton prénom"){
        zone_a_cacher = document.getElementById("button_come_back_lvl4");
        zone_a_cacher.className="invisible";
        button = document.getElementById("button_next_lvl4");
        button.className="button_next";
        title = document.getElementById("title_level_lvl4");
        title.className="check";
    } else {
        alert("Impossible");
    }
    
}
