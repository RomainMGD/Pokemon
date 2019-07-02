$(document).ready(() => {
    var niveaux = 1;
    var lifepoint = 50;
    var exp = 0;
    var fightxp = 0;
    var objectif = 20;
    
    function phase_combat () {
        var dmg = Math.round(Math.random()*15);
        var critique = Math.random()*100;

        if (lifepoint > 0) {
            lifepoint = lifepoint - dmg;

            if (lifepoint > 11 && lifepoint < 33) {
                $('#pointdevie').attr('class', 'align bg-warning');
            }else if (lifepoint > 0 && lifepoint < 11)
                $('#pointdevie').attr('class', 'align bg-danger');
        }
        
    }
})