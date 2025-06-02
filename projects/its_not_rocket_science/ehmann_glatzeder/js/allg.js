$(function() {

    const scenen = {
        TITEL : -2,
        NAME : -1,
        BEGRUESZUNG : 0,
        HAUPTMENU : 1, 
        BIOLOGIE : 2,
        CHEMIE : 3,
        PHYSIK : 4,
        ABSCHLUSS : 5,
        CREDITS : 6,
        EASTEREGG : 7
    }   

    var letztesLvl;

    //#region TuTorial

    //Biologie

    let Bio1TuT = document.querySelector("#biologie .bio1 .tutorial");
    let SpeicherBio1TuT = Bio1TuT.innerHTML;

    let Bio2TuT = document.querySelector("#biologie .bio2 .tutorial");
    let SpeicherBio2TuT = Bio2TuT.innerHTML;

    let Bio3TuT = document.querySelector("#biologie .bio3 .tutorial");
    let SpeicherBio3TuT = Bio3TuT.innerHTML;

    //Chemie
    let Che1TuT = document.querySelector("#chemie .che1 .tutorial");
    let SpeicherChe1TuT = Che1TuT.innerHTML;

    let Che2TuT = document.querySelector("#chemie .che2 .tutorial");
    let SpeicherChe2TuT = Che2TuT.innerHTML;

    let Che3TuT = document.querySelector("#chemie .che3 .tutorial");
    let SpeicherChe3TuT = Che3TuT.innerHTML;

    //Physik
    let Phy1TuT = document.querySelector("#physik .phy1 .tutorial");
    let SpeicherPhy1TuT = Phy1TuT.innerHTML;

    let Phy2TuT = document.querySelector("#physik .phy2 .tutorial");
    let SpeicherPhy2TuT = Phy2TuT.innerHTML;

    let Phy3TuT = document.querySelector("#physik .phy3 .tutorial");
    let SpeicherPhy3TuT = Phy3TuT.innerHTML;

    //#endregion

    //#region Audio
    let AudioPlayer = document.querySelector("#all audio");
    let AudioSrc = document.querySelector("#all #audiosrc");
    let skip = 0;
    //#endregion

    //#region NamenVariabeln
    let NameButton = document.querySelector("#namenfeld button");
    let NameEingabe = document.querySelector("input[type='text']");
    var NameTraeger;
    //#endregion

    //#region Flaggen für Progress

    var GesamtProg = 0;

    var ProgBio = 0;
    var ProgChe = 0;
    var ProgPhy = 0;

    var GamePhy1 = 1;
    var GamePhy2 = 0;
    var GamePhy3 = 1;

    //#endregion

    //#region TutorialFlaggen

    var TuTBio1 = 0;
    var TuTBio2 = 0;
    var TuTBio3 = 0;

    var TuTChe1 = 0;
    var TuTChe2 = 0;
    var TuTChe3 = 0;

    var TuTPhy1 = 0;
    var TuTPhy2 = 0;
    var TuTPhy3 = 0;
    

    //#endregion

    var Leben = 3;

    //#region Leben

    let lebensleiste = document.querySelector("#all nav .lebensleiste");
    lebensleiste.style.display = "none";

    let leben1 = document.querySelector("#all nav .lebensleiste .leben1");
    let leben2 = document.querySelector("#all nav .lebensleiste .leben2");
    let leben3 = document.querySelector("#all nav .lebensleiste .leben3");
    leben1.style.display = "block";
    leben2.style.display = "block";
    leben3.style.display = "block";

    //#endregion

    //#region BaueDasSpielAufGame

        console.log(NameTraeger = JSON.parse(localStorage.getItem('namentraeger')));

        //#region Titel
        document.querySelector("#titelBildschirm").addEventListener('click', () => {
                //#region auto-load
                if(!(NameTraeger = JSON.parse(localStorage.getItem('namentraeger') == null))){
                    load();
                    versteckeScene(scenen.TITEL);
                    sceneWechseln(scenen.HAUPTMENU);
                }else{
                    sceneWechseln(scenen.NAME);
                    versteckeScene(scenen.TITEL);
                }
                //#endregion
        });
        //#endregion

        //#region Optionsmenu
            let optionButton = document.querySelector(".optionsButton");
            let optionsMenu = document.querySelector("#optionsMenu");
            let optionsClose = document.querySelector("#optionsMenu .optionsClose");
            let audioRegler = document.querySelector("#optionsMenu .audioRegler");
            let audioPlayButton = document.querySelector("#optionsMenu .musicButton");
            let audioPlayButtonImg = document.querySelector("#optionsMenu .musicButton img");
            let audioOutput = document.querySelector("#optionsMenu audio");
            let optionsSpeicher = document.querySelector("#optionsMenu .speichern")
            let optionsBackMenu = document.querySelector("#optionsMenu .hauptmenu");
            let optionsLoeschen = document.querySelector("#optionsMenu .loeschen");

            var spieltAudio = true;

            optionButton.addEventListener('click', () => {
                optionsMenu.style.display = "block";
            })

            optionsClose.addEventListener('click', () => {
                optionsMenu.style.display = "none";
            })

            audioRegler.addEventListener('change', () => {
                audioOutput.volume = audioRegler.value / 10;
                console.log(audioOutput.volume);
            })

            audioPlayButton.addEventListener('click', () => {
                if(audioOutput.paused){
                    audioOutput.play();
                    spieltAudio = true;
                    audioPlayButtonImg.src = "./pics/audio/play-taste.png";
                }else{
                    audioOutput.pause();
                    spieltAudio = false;
                    audioPlayButtonImg.src = "./pics/audio/pause.png";
                }
            })

            optionsBackMenu.addEventListener('click', () => {
                optionsMenu.style.display = "none";
                skip = 0;
                versteckeScene(letztesLvl);
                sceneWechseln(scenen.HAUPTMENU);
            })

            optionsSpeicher.addEventListener('click', () => {
                optionsMenu.style.display = "none";
                save();
            })

            optionsLoeschen.addEventListener('click', () => {
                gamedelete();
                optionsMenu.style.display = "none";
            })
        //#endregion

        //#region Name
        NameButton.addEventListener('click', () => {
            NameTraeger = NameEingabe.value;
            versteckeScene(scenen.NAME);
            sceneWechseln(scenen.BEGRUESZUNG);
        });
        NameEingabe.addEventListener('keypress', (e) => {
            if(e.key == "Enter"){
                NameTraeger = NameEingabe.value;
            versteckeScene(scenen.NAME);
            sceneWechseln(scenen.BEGRUESZUNG);
            }
        });
        //#endregion

        //#region Begrüzung
        let BZaehler = 1;
        let begruezungButton = document.querySelector("#begrueßung button");
        begruezungButton.addEventListener("click", () => {
            if(BZaehler == 1){
                document.querySelector("#begrueßung .teil1").style.display = "block";
            }else if(BZaehler == 2){
                document.querySelector("#begrueßung .teil2").style.display = "block";
            }else{
                versteckeScene(scenen.BEGRUESZUNG);
                sceneWechseln(scenen.HAUPTMENU);
            }
            BZaehler++;
        })

        $("#begrueßung").keypress((event) => {
            console.log(event);
        })
        //#endregion

        //#region Hauptmenu
        document.querySelector(".biobt").addEventListener('click', () => {
            versteckeScene(scenen.HAUPTMENU);
            sceneWechseln(scenen.BIOLOGIE);
        })

        document.querySelector(".chebt").addEventListener('click', () => {
            versteckeScene(scenen.HAUPTMENU);
            sceneWechseln(scenen.CHEMIE);
        })

        document.querySelector(".phybt").addEventListener('click', () => {
            versteckeScene(scenen.HAUPTMENU);
            sceneWechseln(scenen.PHYSIK);
        })
        //#endregion 
   
        //#region BIO1
        let Bio1 = document.querySelector("#biologie .bio1 .bio1spiel");
        let SpeicherBio1 = Bio1.innerHTML;
        //#endregion
        
        //#region BIO2

        //BIO2 Spiel
        let Bio2 = document.querySelector("#biologie .bio2 .bio2spiel");
        let SpeicherBio2 = Bio2.innerHTML;
        //#endregion

        //#region BIO3
        let Bio3 = document.querySelector("#biologie .bio3 .bio3spiel");
        let SpeicherBio3 = Bio3.innerHTML;
        //#endregion
        
        //#region CHE1
        let Che1Game = document.querySelector("#chemie .che1 .che1spiel");
        let SpeicherChe1 = Che1Game.innerHTML;
        //#endregion

        //#region CHE2
        let Che2Game = document.querySelector("#chemie .che2 .che2spiel");
        let SpeicherChe2 = Che2Game.innerHTML;
        //#endregion

        //#region CHE3
        let Che3Game = document.querySelector("#chemie .che3 .che3spiel");
        let SpeicherChe3 = Che3Game.innerHTML;
        //#endregion

        //#region PHY1
        let Phy1Game = document.querySelector("#physik .phy1 .phy1spiel");
        let SpeicherPhy1 = Phy1Game.innerHTML;
        //#endregion PHY1

        //#region PHY2
        let Phy2Game = document.querySelector("#physik .phy2 .phy2spiel");
        let SpeicherPhy2 = Phy2Game.innerHTML;
            //#region aufgabe1

                let Aufgabe1Kasten = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .aufgabe1");

                let Aufgabe1Objekt1 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe1 img[name='objekt1']");
                let Aufgabe1Objekt2 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe1 img[name='objekt2']");

                let Aufgabe1Button = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .auf1akzept");

                gebeFunktionSpielBestätigung(Aufgabe1Button, Aufgabe1Objekt1, Aufgabe1Objekt2, Aufgabe1Kasten, "abstoßend", "anziehend");

            //#endregion
            
            //#region aufgabe2

                let Aufgabe2Kasten = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .aufgabe2");

                let Aufgabe2Objekt1 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe2 img[name='objekt1']");
                let Aufgabe2Objekt2 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe2 img[name='objekt2']");

                let Aufgabe2Button = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .auf2akzept");

                gebeFunktionSpielBestätigung(Aufgabe2Button, Aufgabe2Objekt1, Aufgabe2Objekt2, Aufgabe2Kasten, "abstoßend", "anziehend");
                
            //#endregion

            //#region aufgabe3
                
                let Aufgabe3Kasten = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .aufgabe3");

                let Aufgabe3Objekt1 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe3 img[name='objekt1']");
                let Aufgabe3Objekt2 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe3 img[name='objekt2']");

                let Aufgabe3Button = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .auf3akzept");

                gebeFunktionSpielBestätigung(Aufgabe3Button, Aufgabe3Objekt1, Aufgabe3Objekt2, Aufgabe3Kasten, "anziehend", "abstoßend");

            //#endregion

        //#endregion

        //#region PHY3
            let Phy3Game = document.querySelector("#physik .phy3 .phy3spiel");
            let SpeicherPhy3 = Phy3Game.innerHTML;
        //#endregion

    //#endregion BaueDasSpielAufGame

    //#region failfenster

    let failfenster = document.querySelector("#failfeld");

    document.querySelector("#failfeld .menu").addEventListener('click', () => {
        Leben = 3;
        versteckeScene(letztesLvl);
        sceneWechseln(scenen.HAUPTMENU);
        failfenster.style.display = "none";
    })
    document.querySelector("#failfeld .nochmal").addEventListener('click', () => {
    versteckeScene(letztesLvl);
    Leben = 3;
    if(letztesLvl == scenen.HAUPTMENU){
        sceneWechseln(scenen.EASTEREGG);
    }else{
        sceneWechseln(letztesLvl);
    }
    failfenster.style.display = "none";
    })

    //#endregion

    audioOutput.volume = audioRegler.value / 10;

    sceneWechseln(scenen.TITEL);

    function sceneWechseln(scene){
        console.log("letzte Scene ist gleich: " + scene);
        if(letztesLvl != scene){
            Leben = 3;
        }
        letztesLvl = scene;
        lebensleiste.style.display = "none";
        console.log(AudioPlayer);
        switch(scene) {
            case scenen.TITEL:
                console.log("Wechsle Zum Titel");
                $("#titelBildschirm").css({
                    "display" : "block"
                });
                break;
            case scenen.NAME:
                console.log("Wechsle Zum Namen");
                audiohandler(scene,AudioPlayer,AudioSrc, 0, skip, spieltAudio);
                if(audioOutput.paused){

                }
                $("#namenfeld").css({
                    "display" : "block"
                });
                optionButton.style.display = "block";
                //Eingabe Feld wird Betreten
                NameEingabe.focus();
                break;
            case scenen.BEGRUESZUNG:
                console.log("Wechsle Zur Begruezung");
                audiohandler(scene,AudioPlayer,AudioSrc,0 ,skip, spieltAudio);
                $("#begrueßung").css({
                    "display" : "flex"
                })
                skip = 1;
                document.querySelector("#begrueßung div").insertAdjacentHTML("afterbegin","<p>Herzlich Willkommen " + NameTraeger + "!</p>");
                break;
            case scenen.HAUPTMENU:
                console.log("Wechsle Zum Hauptmenu");
                console.log("Anzahl skip: " + skip);
                lebensleiste.style.display = "none";
                optionButton.style.display = "block";
                audiohandler(scene,AudioPlayer,AudioSrc,0, skip, spieltAudio);
                skip = 0;
                console.log("Anzahl skip: " + skip);
                $("#menu").css({
                    "display" : "block"
                });

                //#region Drawen des Graphens: Nutzung der Funktion von Chart.js
                const data = {
                    labels: [
                        'Biologie',
                        'Chemie',
                        'Physik'
                    ],
                    datasets: [{
                        label: '',
                        data: [ProgBio*2+1, ProgChe*2+1, ProgPhy*2+1],
                        fill: true,
                        backgroundColor: 'rgba(1, 99, 132, 0.5)',
                        borderColor: 'rgb(1, 99, 132)'
                    }]
                    //{
                    //  label: '',
                    //  data: [10, 10, 10],
                    //  pointBackgroundColor: 'rgb(54, 162, 235)',
                    //  pointBorderColor: '#fff',
                    //  pointHoverBackgroundColor: '#fff',
                    //  pointHoverBorderColor: 'rgb(54, 162, 235)'
                    //}]
                  };
                const config = {
                    type: 'radar',
                    data: data,
                    options: {
                      elements: {
                        line: {
                          borderWidth: 3
                        }
                      },
                      scales: {
                        r: {
                            angleLines: {
                                color: "black"
                            },
                            grid:{
                                color: "black"
                            },
                            min: 0,
                            max: 12,
                            ticks: {
                                display : false
                            }
                        }
                      }
                    },
                };
                
                  //Bugfix für das Tolle Diagramm lul
                  document.querySelector(".container").removeChild(document.getElementById('myChart'));
                  var canv = document.createElement('canvas');
                  canv.id = 'myChart';
                  document.querySelector(".container").appendChild(canv);

                  const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                  );
                //#endregion
                
                //#region fortschritt buttons
                    if(ProgBio == 5.5){
                        document.querySelector(".biobt").style.pointerEvents = "none";
                        document.querySelector(".biobt").style.border = "5px solid green";
                    }
                    if(ProgPhy == 5.5){
                        document.querySelector(".phybt").style.pointerEvents = "none";
                        document.querySelector(".phybt").style.border = "5px solid green";
                    }
                    if(ProgChe == 5.5){
                        document.querySelector(".chebt").style.pointerEvents = "none";
                        document.querySelector(".chebt").style.border = "5px solid green";
                    }
                //#endregion

                if(GesamtProg > 0){
                    let PpAllg = document.querySelector("#menu .pAllg");
                    PpAllg.style.display = "block";
                    PpAllg.innerText = GesamtProg + " / 3";
                    if(GesamtProg == 3){
                        let abschlussbt = document.querySelector("#menu .abschlussbt");
                        abschlussbt.style.display = "block";
                        abschlussbt.addEventListener('click',() => {
                            versteckeScene(scenen.HAUPTMENU);
                            sceneWechseln(scenen.ABSCHLUSS);
                        })
                    }
                }
                break;
            case scenen.BIOLOGIE:
                console.log("Wechsle zu Bio");
                audiohandler(scene,AudioPlayer,AudioSrc,ProgBio, skip, spieltAudio);
                switch(ProgBio){
                    case 0:
                        console.log("Bio Tutorial zu Bio 1");
                        $("#biologie").css({
                            "display" : "block"
                        })
                        $(".bio1").css({
                            "display" : "block"
                        })
                        $(".tutorial").css({
                            "display" : "block"
                        })

                        Bio1TuT.innerHTML = SpeicherBio1TuT;

                        let TutBio1Pfeil = document.querySelector("#biologie .bio1 .tutorial .pfeil");
                        let TutBio1text = document.querySelector("#biologie .bio1 .tutorial .sprechblase p");

                        aktuellPfeilPosiBio1(TutBio1text,TutBio1Pfeil,TuTBio1);
                        document.querySelector("#biologie .bio1 .tutorial .w").addEventListener('click', () => {
                            TuTBio1++;
                            aktuellPfeilPosiBio1(TutBio1text,TutBio1Pfeil,TuTBio1);
                            if(TuTBio1 >= 12){
                                document.querySelector("#biologie .bio1 .tutorial .knopp").style.display = "block";
                                TuTBio1 = 12;
                            }
                        })
                        document.querySelector("#biologie .bio1 .tutorial .z").addEventListener('click', () => {
                            TuTBio1--;
                            aktuellPfeilPosiBio1(TutBio1text,TutBio1Pfeil,TuTBio1);
                            if(TuTBio1 == 11){
                                document.querySelector("#biologie .bio1 .tutorial .knopp").style.display = "none";
                            }
                            if(TuTBio1 < 0) TuTBio1 = 0;
                        })
                        document.querySelector("#biologie .bio1 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgBio++;
                            sceneWechseln(scenen.BIOLOGIE);
                        })
                        break;
                    case 1:
                        console.log("Bio1 Rätsel");
                        $("#biologie").css({
                            "display" : "block"
                        })
                        $(".bio1").css({
                            "display" : "block"
                        })
                        $(".bio1spiel").css({
                            "display" : "block"
                        })
                        console.log(Leben)
                        lebensleiste.style.display = "flex";

                        Bio1.innerHTML = SpeicherBio1;

                        //#region Spiel

                        let ausgewaehlterTextBio1 = document.querySelector("#biologie .bio1 .bio1spiel .ausgewaehlie .ausgewaehltes"); 
                        let ausgewaehltesElementBio1;
                        let alleBilderBio1 = document.querySelectorAll("#biologie .bio1 .bio1spiel .tisch img");
                        let alleKnoppeBio1 = document.querySelectorAll("#biologie .bio1 .bio1spiel span button");

                        alleBilderBio1 = randomTisch(alleBilderBio1);

                        gebeFunktionSpiel(alleBilderBio1, alleKnoppeBio1, ausgewaehltesElementBio1, ausgewaehlterTextBio1, scenen.BIOLOGIE);

                        //#endregion

                        alleBilderBio1.forEach(element => {
                            element.style.display = "content";
                            element.style.opacity = "1";
                        })
                        alleKnoppeBio1.forEach(element => {
                            element.style.opacity = "0";
                        })
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                        break;
                    case 2:
                        console.log("Bio2 Tutorial");
                        $("#biologie").css({
                                "display" : "block"
                        })
                        $(".bio2").css({
                                "display" : "block"
                        })
                        $(".tutorial").css({
                                "display" : "block"
                        })
                        Bio2TuT.innerHTML = SpeicherBio2TuT;

                        let TutBio2Pfeil = document.querySelector("#biologie .bio2 .tutorial .pfeil");
                        let TutBio2text = document.querySelector("#biologie .bio2 .tutorial .sprechblase p");

                        aktuellPfeilPosiBio2(TutBio2text,TutBio2Pfeil,TuTBio2);
                        document.querySelector("#biologie .bio2 .tutorial .w").addEventListener('click', () => {
                                console.log("hier")
                                TuTBio2++;
                                aktuellPfeilPosiBio2(TutBio2text,TutBio2Pfeil,TuTBio2);
                                if(TuTBio2 >= 9){
                                    document.querySelector("#biologie .bio2 .tutorial .knopp").style.display = "block";
                                    TuTBio2 = 9;
                                }
                        })
                        document.querySelector("#biologie .bio2 .tutorial .z").addEventListener('click', () => {
                                TuTBio2--;
                                aktuellPfeilPosiBio2(TutBio2text,TutBio2Pfeil,TuTBio2);
                                if(TuTBio2 == 8){
                                    document.querySelector("#biologie .bio2 .tutorial .knopp").style.display = "none";
                                }
                                if(TuTBio2 < 0) TuTBio2 = 0;
                        })
                        document.querySelector("#biologie .bio2 .tutorial .knopp").addEventListener('click', () => {
                                $(".tutorial").css({
                                    "display" : "none"
                                })
                                ProgBio++;
                                sceneWechseln(scenen.BIOLOGIE);
                        })
                        break;
                    case 3:
                        console.log("Bio2 Spiel");
                        $("#biologie").css({
                            "display" : "block"
                        })
                        $(".bio2").css({
                            "display" : "block"
                        })
                        $(".bio2spiel").css({
                            "display" : "block"
                        }) 
                        Leben = 3;
                        lebensleiste.style.display = "flex";

                        Bio2.innerHTML = SpeicherBio2;

                        //#region Spiel

                        let ausgewaehlterTextBio2 = document.querySelector("#biologie .bio2 .bio2spiel .ausgewaehlie .ausgewaehltes"); 
                        let ausgewaehltesElementBio2;
                        let alleBilderBio2 = document.querySelectorAll("#biologie .bio2 .bio2spiel .tisch img");
                        let alleKnoppeBio2 = document.querySelectorAll("#biologie .bio2 .bio2spiel span button");

                        alleBilderBio2 = randomTisch(alleBilderBio2);

                        gebeFunktionSpiel(alleBilderBio2, alleKnoppeBio2, ausgewaehltesElementBio2, ausgewaehlterTextBio2, scenen.BIOLOGIE);

                        //#endregion

                        alleBilderBio2.forEach(element => {
                            element.style.display = "content";
                            element.style.opacity = "1";
                        })
                        alleKnoppeBio2.forEach(element => {
                            element.style.opacity = "0";
                        })
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                        break;
                    case 4:
                        console.log("Bio3 Tutorial");
                        $("#biologie").css({
                            "display" : "block"
                        })
                        $(".bio3").css({
                            "display" : "block"
                        })
                        $("#biologie .bio3 .tutorial").css({
                            "display" : "block"
                        }) 

                        Bio3TuT.innerHTML = SpeicherBio3TuT;

                        let TutBio3Pfeil = document.querySelector("#biologie .bio3 .tutorial .pfeil");
                        let TutBio3text = document.querySelector("#biologie .bio3 .tutorial .sprechblase p");

                        aktuellPfeilPosiBio3(TutBio3text,TutBio3Pfeil,TuTBio3);
                        document.querySelector("#biologie .bio3 .tutorial .w").addEventListener('click', () => {
                            console.log("hier")
                            TuTBio3++;
                            aktuellPfeilPosiBio3(TutBio3text,TutBio3Pfeil,TuTBio3);
                            if(TuTBio3 == 10){
                                document.querySelector("#biologie .bio3 .tutorial .knopp").style.display = "block";
                            }
                        })
                        document.querySelector("#biologie .bio3 .tutorial .z").addEventListener('click', () => {
                            TuTBio3--;
                            aktuellPfeilPosiBio3(TutBio3text,TutBio3Pfeil,TuTBio3);
                            if(TuTBio3 == 9){
                                document.querySelector("#biologie .bio3 .tutorial .knopp").style.display = "none";
                            }
                        })
                        document.querySelector("#biologie .bio3 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgBio++;
                            sceneWechseln(scenen.BIOLOGIE);
                        })
                        break;
                    case 5:
                        console.log("Bio3 Rätsel");
                        $("#biologie").css({
                            "display" : "block"
                        })
                        $(".bio3").css({
                            "display" : "block"
                        })
                        $(".bio3spiel").css({
                            "display" : "block"
                        })
                        Leben = 3;
                        lebensleiste.style.display = "flex";

                        Bio3.innerHTML = SpeicherBio3;

                        //#region Spiel

                        let ausgewaehlterTextBio3 = document.querySelector("#biologie .bio3 .bio3spiel .ausgewaehlie .ausgewaehltes"); 
                        let ausgewaehltesElementBio3;
                        let alleBilderBio3 = document.querySelectorAll("#biologie .bio3 .bio3spiel .tisch img");
                        let alleKnoppeBio3 = document.querySelectorAll("#biologie .bio3 .bio3spiel span button");
                        
                        gebeFunktionSpiel(alleBilderBio3, alleKnoppeBio3, ausgewaehltesElementBio3, ausgewaehlterTextBio3, scenen.BIOLOGIE);

                        alleBilderBio3 = randomTisch(alleBilderBio3);

                        //#endregion

                        alleBilderBio3.forEach(element => {
                            element.style.display = "content";
                            element.style.opacity = "1";
                        })
                        alleKnoppeBio3.forEach(element => {
                            element.style.opacity = "0";
                        })
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                        break;
                }
                break;
            case scenen.CHEMIE:
                console.log("Wechsle zu Chemie");
                audiohandler(scene,AudioPlayer,AudioSrc,ProgChe, skip, spieltAudio);

                Che1Game.innerHTML = SpeicherChe1;
                Che2Game.innerHTML = SpeicherChe2;
                Che3Game.innerHTML = SpeicherChe3;

                Che1TuT.innerHTML = SpeicherChe1TuT;
                Che2TuT.innerHTML = SpeicherChe2TuT;
                Che3TuT.innerHTML = SpeicherChe3TuT;

                switch(ProgChe){
                    case 0:
                        console.log("Wechsle zu Chemie Tutorial 1");
                        $("#chemie").css({
                            "display" : "block"
                        })
                        $("#chemie .che1").css({
                            "display" : "block"
                        })
                        $("#chemie .che1 .tutorial").css({
                            "display" : "block"
                        })
                        Che1TuT.innerHTML = SpeicherChe1TuT;

                        let TuTChe1text = document.querySelector("#chemie .che1 .tutorial .sprechblase p");
                        let TutChe1bild = document.querySelector("#chemie .che1 .tutorial .bild"); 

                        aktuellTutorialChe1(TuTChe1text, TutChe1bild, TuTChe1);
                        document.querySelector("#chemie .che1 .tutorial .w").addEventListener('click', () => {
                            TuTChe1++;
                            if(TuTChe1 > 4) TuTChe1 = 4;
                            aktuellTutorialChe1(TuTChe1text, TutChe1bild, TuTChe1);
                            if(TuTChe1 == 4){
                                document.querySelector("#chemie .che1 .tutorial .knopp").style.display = "block";
                            }
                        })
                        document.querySelector("#chemie .che1 .tutorial .z").addEventListener('click', () => {
                            TuTChe1--;
                            if(TuTChe1 < 0) TuTChe1 = 0;
                            aktuellTutorialChe1(TuTChe1text, TutChe1bild, TuTChe1);
                            if(TuTChe1 == 6){
                                document.querySelector("#chemie .che1 .tutorial .knopp").style.display = "none";
                            }
                        })
                        document.querySelector("#chemie .che1 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgChe = 1;
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.CHEMIE);
                        })
                        break;                        
                    case 1:
                        console.log("Wechsle zu Chemie Spiel 1");
                        $("#chemie").css({
                            "display" : "block"
                        })
                        $("#chemie .che1").css({
                            "display" : "block"
                        })
                        $("#chemie .che1 .che1spiel").css({
                            "display" : "block"
                        })
                        lebensleiste.style.display = "flex";
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);

                        //#region Gewonnen: Weiter und Menu

                        let Che1GewonnenWeiter = document.querySelector("#chemie .che1 .che1spiel .gewonnen .weiter");
                        let Che1GewonnenMenu = document.querySelector("#chemie .che1 .che1spiel .gewonnen .menu");

                        Che1GewonnenWeiter.addEventListener('click', () => {
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.CHEMIE);
                        })

                        Che1GewonnenMenu.addEventListener('click', () => {
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.HAUPTMENU);
                        })

                        //#endregion

                        //#region spielen

                        let alleZuständeTischChe1 = document.querySelectorAll("#chemie .che1 .che1spiel .tisch img");
                        let alleZuständeTabelleChe1 = document.querySelectorAll("#chemie .che1 .che1spiel .spielH img");
                        let gewonnenFensterChe1 = document.querySelector("#chemie .che1 .che1spiel .gewonnen");

                        gebeFunktionChemie(alleZuständeTischChe1, alleZuständeTabelleChe1, gewonnenFensterChe1);

                        //#endregion

                        break;
                    case 2:
                        console.log("Wechsle zu Chemie Tutorial 2");
                        $("#chemie").css({
                            "display" : "block"
                        })
                        $("#chemie .che2").css({
                            "display" : "block"
                        })
                        $("#chemie .che2 .tutorial").css({
                            "display" : "block"
                        })

                        let TuTChe2text = document.querySelector("#chemie .che2 .tutorial .sprechblase p");
                        let TutChe2bild = document.querySelector("#chemie .che2 .tutorial .bild");

                        aktuellTutorialChe2(TuTChe2text, TutChe2bild, TuTChe2);
                        document.querySelector("#chemie .che2 .tutorial .w").addEventListener('click', () => {
                            TuTChe2++;
                            if(TuTChe2 > 4) TuTChe2 = 4;
                            aktuellTutorialChe2(TuTChe2text, TutChe2bild, TuTChe2);
                            if(TuTChe2 == 4){
                                document.querySelector("#chemie .che2 .tutorial .knopp").style.display = "block";
                            }
                        })
                        document.querySelector("#chemie .che2 .tutorial .z").addEventListener('click', () => {
                            TuTChe2--;
                            if(TuTChe2 < 0) TuTChe2 = 0;
                            aktuellTutorialChe2(TuTChe2text, TutChe2bild, TuTChe2);
                            if(TuTChe2 == 6){
                                document.querySelector("#chemie .che2 .tutorial .knopp").style.display = "none";
                            }
                        })
                        document.querySelector("#chemie .che2 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgChe = 3;
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.CHEMIE);
                        })
                        break;  
                    case 3:
                        console.log("Wechsle zu Chemie Spiel 2");
                        $("#chemie").css({
                            "display" : "block"
                        })
                        $("#chemie .che2").css({
                            "display" : "block"
                        })
                        $("#chemie .che2 .che2spiel").css({
                            "display" : "block"
                        })
                        lebensleiste.style.display = "flex";
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);

                        //#region spiel

                        let alleZuständeTischChe2 = document.querySelectorAll("#chemie .che2 .che2spiel .tisch img")
                        let alleZuständeTabelleChe2 = document.querySelectorAll("#chemie .che2 .che2spiel .aufgabe button");
                        let gewonnenFensterChe2 = document.querySelector("#chemie .che2 .che2spiel .gewonnen")

                        alleZuständeTischChe2 = randomTisch(alleZuständeTischChe2);

                        gebeFunktionChemie(alleZuständeTischChe2, alleZuständeTabelleChe2, gewonnenFensterChe2);

                        //#endregion

                        //#region Gewonnen: Weiter und Menu

                        let Che2GewonnenWeiter = document.querySelector("#chemie .che2 .che2spiel .gewonnen .weiter");
                        let Che2GewonnenMenu = document.querySelector("#chemie .che2 .che2spiel .gewonnen .menu");

                        Che2GewonnenWeiter.addEventListener('click', () => {
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.CHEMIE);
                        })

                        Che2GewonnenMenu.addEventListener('click', () => {
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.HAUPTMENU);
                        })

                        //#endregion

                        break;
                    case 4:
                        console.log("Wechsle zu Chemie Tutorial 3");
                        $("#chemie").css({
                            "display" : "block"
                        })
                        $("#chemie .che3").css({
                            "display" : "block"
                        })
                        $("#chemie .che3 .tutorial").css({
                            "display" : "block"
                        })

                        let TuTChe3text = document.querySelector("#chemie .che3 .tutorial .sprechblase p");
                        let TuTChe3Pfeil1 = document.querySelector("#chemie .che3 .tutorial .pfeil1");
                        let TuTChe3Pfeil2 = document.querySelector("#chemie .che3 .tutorial .pfeil2");
                        let TuTChe3Pfeil3 = document.querySelector("#chemie .che3 .tutorial .pfeil3");

                        aktuellPfeilPosiChe3(TuTChe3text,TuTChe3Pfeil1,TuTChe3Pfeil2,TuTChe3Pfeil3,TuTChe3);
                        document.querySelector("#chemie .che3 .tutorial .w").addEventListener('click', () => {
                            TuTChe3++;
                            aktuellPfeilPosiChe3(TuTChe3text,TuTChe3Pfeil1,TuTChe3Pfeil2,TuTChe3Pfeil3,TuTChe3);
                            if(TuTChe3 >= 5){
                                document.querySelector("#chemie .che3 .tutorial .knopp").style.display = "block";
                                TuTChe3 = 12;
                            }
                        })
                        document.querySelector("#chemie .che3 .tutorial .z").addEventListener('click', () => {
                            TuTChe3--;
                            aktuellPfeilPosiChe3(TuTChe3text,TuTChe3Pfeil1,TuTChe3Pfeil2,TuTChe3Pfeil3,TuTChe3);
                            if(TuTChe3 == 4){
                                document.querySelector("#chemie .che3 .tutorial .knopp").style.display = "none";
                            }
                            if(TuTChe3 < 0) TuTChe3 = 0;
                        })
                        document.querySelector("#chemie .che3 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgChe++;
                            sceneWechseln(scenen.CHEMIE);
                        })
                        break;  
                    case 5:
                        console.log("Wechsle zu Chemie Spiel 3");
                        $("#chemie").css({
                            "display" : "block"
                        })
                        $("#chemie .che3").css({
                            "display" : "block"
                        })
                        $("#chemie .che3 .che3spiel").css({
                            "display" : "block"
                        })
                        lebensleiste.style.display = "flex";
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);

                        //#region spiel

                        let che3alleKnoppe = document.querySelectorAll("#chemie .che3 .che3spiel .farbe button");
                        let che3alleBilder = document.querySelectorAll("#chemie .che3 .che3spiel .aufgabe .bilder img");
                        let che3Bidler = document.querySelector("#chemie .che3 .che3spiel .bilder");
                        let che3sprechblase = document.querySelector("#chemie .che3 .che3spiel .sprechblase p")
                        let che3gewonnen = document.querySelector("#chemie .che3 .che3spiel .gewonnen")

                        gebeFunktionChemieChe3(che3alleKnoppe, che3alleBilder, che3sprechblase, che3Bidler, che3gewonnen);

                        //#endregion

                        //#region gewonnen

                        let che3GewonnenMenu = document.querySelector("#chemie .che3 .che3spiel .gewonnen .menu");

                        che3GewonnenMenu.addEventListener('click', () => {
                            ProgChe = 5.5;
                            GesamtProg += 1;
                            versteckeScene(scenen.CHEMIE);
                            sceneWechseln(scenen.HAUPTMENU);
                        })

                        //#endregion

                        break;
                }
                break;
            case scenen.PHYSIK:
                console.log("Wechsle zu Physik");
                audiohandler(scene,AudioPlayer,AudioSrc,ProgPhy, skip, spieltAudio);

                Phy1Game.innerHTML = SpeicherPhy1;
                Phy2Game.innerHTML = SpeicherPhy2;
                Phy3Game.innerHTML = SpeicherPhy3;
            
                switch(ProgPhy){
                    case 0:
                        console.log("Wechsle zu Physik Tutorial 1");
                        $("#physik").css({
                            "display" : "block"
                        })
                        $(".phy1").css({
                            "display" : "block"
                        })
                        $(".phy1 .tutorial").css({
                            "display" : "block"
                        })
                        Phy1TuT.innerHTML = SpeicherPhy1TuT;

                        let TutPhy1kopf = document.querySelector("#physik .phy1 .tutorial .kopf");
                        let TutPhy1bild = document.querySelector("#physik .phy1 .tutorial .bild");
                        let TutPhy1text = document.querySelector("#physik .phy1 .tutorial .sprechblase p");

                        document.querySelector("#physik .phy1 .tutorial .w").addEventListener('click', () => {
                            TuTPhy1++;
                            if(TuTPhy1 > 11) TuTPhy1 = 11;
                            aktuellTutorialPhy1(TutPhy1text, TutPhy1bild, TutPhy1kopf, TuTPhy1);
                            if(TuTPhy1 == 11){
                                document.querySelector("#physik .phy1 .tutorial .knopp").style.display = "block";
                            }
                        })
                        document.querySelector("#physik .phy1 .tutorial .z").addEventListener('click', () => {
                            TuTPhy1--;
                            if(TuTPhy1 < 0) TuTPhy1 = 0;
                            aktuellTutorialPhy1(TutPhy1text, TutPhy1bild, TutPhy1kopf, TuTPhy1);
                            if(TuTPhy1 == 6){
                                document.querySelector("#physik .phy1 .tutorial .knopp").style.display = "none";
                            }
                        })
                        document.querySelector("#physik .phy1 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgPhy++;
                            sceneWechseln(scenen.PHYSIK);
                        })
                        aktuellTutorialPhy1(TutPhy1text, TutPhy1bild, TutPhy1kopf, TuTPhy1);
                        break;
                    case 1:
                        console.log("Wechsle zu Physik Spiel 1");
                        $("#physik").css({
                            "display" : "block"
                        })
                        $(".phy1").css({
                            "display" : "block"
                        })
                        $(".phy1spiel").css({
                            "display" : "block"
                        })
                        lebensleiste.style.display = "flex";
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);

                        //#region weiter und nochmal knopp und gewonnen

                        let phy1weiterKnopp = document.querySelector("#physik .phy1spiel .weiter");
                        let phy1nochmalKnopp = document.querySelector("#physik .phy1spiel .nochmal");
                        let phy1naechstesLvl = document.querySelector("#physik .phy1spiel .gewonnen .naechstesLvL");
                        let phy1gewonnenMainMenu = document.querySelector("#physik .phy1spiel .gewonnen .menu");
                        let phy1gewonnen = document.querySelector("#physik .phy1spiel .gewonnen");
                        
                        phy1weiterKnopp.addEventListener('click', () => {
                            GamePhy1++;
                            skip++;
                            if(GamePhy1 == 4){
                                ProgPhy++;
                                skip = 0;
                                console.log("gewonnen");
                                phy1gewonnen.style.display = "block";
                            }else{
                                versteckeScene(scenen.PHYSIK);
                                sceneWechseln(scenen.PHYSIK);
                            }
                            phy1weiterKnopp.style.display = "none";
                            phy1nochmalKnopp.style.display = "none";
                        })
                
                        phy1nochmalKnopp.addEventListener('click', () => {
                            GamePhy1 = 1;
                            skip++;
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.PHYSIK);
                        })

                        phy1naechstesLvl.addEventListener('click', () => {
                            console.log("yo");
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.PHYSIK);
                        });

                        phy1gewonnenMainMenu.addEventListener('click', () => {
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.HAUPTMENU);
                        })

                        //#endregion
                        
                        switch(GamePhy1){
                            case 1:
                                console.log("Level 1")
                                $(".level1").css({
                                    "display" : "block"
                                })

                                //#region level1
                                    let phy1level1linkeSeite = document.querySelector("#physik .phy1spiel .level1 .linkeseite");
                                    let phy1level1rechteSeite = document.querySelector("#physik .phy1spiel .level1 .rechteseite");
                                    let phy1level1alleGewichteRechts = document.querySelectorAll("#physik .phy1spiel .level1 .rechteseite img");
                                    let phy1level1alleGewichteLinksWaage = document.querySelectorAll("#physik .phy1spiel .level1 .linkeseite img");
                                    let phy1level1alleGewichteLinks = document.querySelectorAll("#physik .phy1spiel .level1 .tisch img");
                                    let phy1level1waage = document.querySelector("#physik .phy1spiel .level1 .waage");

                                    console.log("yo " + phy1level1alleGewichteLinks);

                                    phy1level1alleGewichteLinks = randomTisch(phy1level1alleGewichteLinks)

                                    gebeFunktionSpielGleichgewicht(phy1level1linkeSeite, phy1level1alleGewichteRechts, phy1level1alleGewichteLinks, phy1level1rechteSeite, phy1level1waage, phy1level1alleGewichteLinksWaage);
                                //#endregion

                                break;
                            case 2:
                                console.log("Level 2")
                                $(".level2").css({
                                    "display" : "block"
                                })

                                //#region level2
                                let phy1level2linkeSeite = document.querySelector("#physik .phy1spiel .level2 .linkeseite");
                                let phy1level2rechteSeite = document.querySelector("#physik .phy1spiel .level2 .rechteseite");
                                let phy1level2alleGewichteRechts = document.querySelectorAll("#physik .phy1spiel .level2 .rechteseite img");
                                let phy1level2alleGewichteLinksWaage = document.querySelectorAll("#physik .phy1spiel .level2 .linkeseite img");
                                let phy1level2alleGewichteLinks = document.querySelectorAll("#physik .phy1spiel .level2 .tisch img");
                                let phy1level2waage = document.querySelector("#physik .phy1spiel .level2 .waage");

                                gebeFunktionSpielGleichgewicht(phy1level2linkeSeite, phy1level2alleGewichteRechts, phy1level2alleGewichteLinks, phy1level2rechteSeite, phy1level2waage, phy1level2alleGewichteLinksWaage);
                                //#endregion level2

                                break;
                            case 3:
                                console.log("Level 3")
                                $(".level3").css({
                                    "display" : "block"
                                })

                                //#region level3
                                let phy1level3linkeSeite = document.querySelector("#physik .phy1spiel .level3 .linkeseite");
                                let phy1level3rechteSeite = document.querySelector("#physik .phy1spiel .level3 .rechteseite");
                                let phy1level3alleGewichteRechts = document.querySelectorAll("#physik .phy1spiel .level3 .rechteseite img");
                                let phy1level3alleGewichteLinksWaage = document.querySelectorAll("#physik .phy1spiel .level3 .linkeseite img");
                                let phy1level3alleGewichteLinks = document.querySelectorAll("#physik .phy1spiel .level3 .tisch img");
                                let phy1level3waage = document.querySelector("#physik .phy1spiel .level3 .waage");

                                gebeFunktionSpielGleichgewicht(phy1level3linkeSeite, phy1level3alleGewichteRechts, phy1level3alleGewichteLinks, phy1level3rechteSeite, phy1level3waage, phy1level3alleGewichteLinksWaage);
                                //#endregion level3

                                break;
                        }
                        
                        break;
                    case 2:
                        console.log("Wechsle zu Physik Tutorial 2");
                        $("#physik").css({
                            "display" : "block"
                        })
                        $(".phy2").css({
                            "display" : "block"
                        })
                        $(".phy2 .tutorial").css({
                            "display" : "block"
                        })
                        Phy2TuT.inner = SpeicherPhy2TuT;

                        let TutPhy2kopf = document.querySelector("#physik .phy2 .tutorial .kopf");
                        let TutPhy2bild = document.querySelector("#physik .phy2 .tutorial .bild");
                        let TutPhy2text = document.querySelector("#physik .phy2 .tutorial .sprechblase p");

                        document.querySelector("#physik .phy2 .tutorial .w").addEventListener('click', () => {
                            TuTPhy2++;
                            if(TuTPhy2 > 12) TuTPhy2 = 12;
                            aktuellTutorialPhy2(TutPhy2text, TutPhy2bild, TutPhy2kopf, TuTPhy2);
                            if(TuTPhy2 == 12){
                                document.querySelector("#physik .phy2 .tutorial .knopp").style.display = "block";
                            }
                        })
                        document.querySelector("#physik .phy2 .tutorial .z").addEventListener('click', () => {
                            TuTPhy2--;
                            if(TuTPhy2 < 0) TuTPhy2 = 0;
                            aktuellTutorialPhy2(TutPhy2text, TutPhy2bild, TutPhy2kopf, TuTPhy2);
                            if(TuTPhy2 == 5){
                                document.querySelector("#physik .phy2 .tutorial .knopp").style.display = "none";
                            }
                        })
                        document.querySelector("#physik .phy2 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgPhy++;
                            sceneWechseln(scenen.PHYSIK);
                        })
                        aktuellTutorialPhy2(TutPhy2text, TutPhy2bild, TutPhy2kopf, TuTPhy2);
                        break;
                    case 3:
                        console.log("Wechsle zu Physik Spiel 2");
                        $("#physik").css({
                            "display" : "block"
                        })
                        $(".phy2").css({
                            "display" : "block"
                        })
                        $(".phy2spiel").css({
                            "display" : "block"
                        })
                        lebensleiste.style.display = "flex";
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);

                        //#region weiter und gewonnen

                        let phy2gewonnen = document.querySelector("#physik .phy2 .phy2spiel .gewonnen")
                        let weiterButtonPhy2Spiel = document.querySelector("#physik .phy2 .phy2spiel .gewonnen .weiter");
                        let phy2gewonnenMainMenu = document.querySelector("#physik .phy2 .phy2spiel .menu");

                        weiterButtonPhy2Spiel.addEventListener("click", () => {
                            weiterButtonPhy2Spiel.style.display = "none";
                            audiohandler(scenen.PHYSIK,AudioPlayer,AudioSrc,ProgPhy, skip, spieltAudio);
                            ProgPhy++;
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.PHYSIK);
                        })

                        phy2gewonnenMainMenu.addEventListener('click', () => {
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.HAUPTMENU);
                        })

                        //#endregion

                        //#region spiel

                        let alleMagnete = document.querySelectorAll("#physik .phy2 .phy2spiel .arbeitsflaeche img");
                        let magnetRotierend = document.querySelector("#physik .phy2 .phy2spiel .dreher img");

                        let buttonLinksDreher = document.querySelector("#physik .phy2 .phy2spiel .dreher .linksdreher");
                        let buttonRechtsDreher = document.querySelector("#physik .phy2 .phy2spiel .dreher .rechtsdreher");

                        gebeFunktionSpielMagnete(alleMagnete, magnetRotierend, buttonRechtsDreher, buttonLinksDreher);

                            //#region aufgabe1

                                let Aufgabe1Kasten = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .aufgabe1");

                                let Aufgabe1Objekt1 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe1 img[name='objekt1']");
                                let Aufgabe1Objekt2 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe1 img[name='objekt2']");

                                let Aufgabe1Button = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .auf1akzept");

                                gebeFunktionSpielBestätigung(Aufgabe1Button, Aufgabe1Objekt1, Aufgabe1Objekt2, Aufgabe1Kasten, "abstoßend", "anziehend", phy2gewonnen);

                            //#endregion
                            
                            //#region aufgabe2

                                let Aufgabe2Kasten = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .aufgabe2");

                                let Aufgabe2Objekt1 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe2 img[name='objekt1']");
                                let Aufgabe2Objekt2 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe2 img[name='objekt2']");

                                let Aufgabe2Button = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .auf2akzept");

                                gebeFunktionSpielBestätigung(Aufgabe2Button, Aufgabe2Objekt1, Aufgabe2Objekt2, Aufgabe2Kasten, "abstoßend", "anziehend", phy2gewonnen);
                                
                            //#endregion

                            //#region aufgabe3

                                let Aufgabe3Kasten = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .aufgabe3");

                                let Aufgabe3Objekt1 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe3 img[name='objekt1']");
                                let Aufgabe3Objekt2 = document.querySelector("#physik .phy2 .arbeitsflaeche .aufgabe3 img[name='objekt2']");

                                let Aufgabe3Button = document.querySelector("#physik .phy2 .phy2spiel .arbeitsflaeche .auf3akzept");

                                gebeFunktionSpielBestätigung(Aufgabe3Button, Aufgabe3Objekt1, Aufgabe3Objekt2, Aufgabe3Kasten, "anziehend", "abstoßend", phy2gewonnen);

                            //#endregion aufgabe3

                        //#endregion

                        break;
                    case 4:
                        console.log("Wechsle zu Physik Tutorial 3");
                        $("#physik").css({
                            "display" : "block"
                        })
                        $(".phy3").css({
                            "display" : "block"
                        })
                        $(".phy3 .tutorial").css({
                            "display" : "block"
                        })
                        Phy3TuT.inner = SpeicherPhy3TuT;

                        let TutPhy3kopf = document.querySelector("#physik .phy3 .tutorial .kopf");
                        let TutPhy3bild = document.querySelector("#physik .phy3 .tutorial .bild");
                        let TutPhy3text = document.querySelector("#physik .phy3 .tutorial .sprechblase p");

                        document.querySelector("#physik .phy3 .tutorial .w").addEventListener('click', () => {
                            TuTPhy3++;
                            if(TuTPhy3 > 17) TuTPhy3 = 17;
                            aktuellTutorialPhy3(TutPhy3text, TutPhy3bild, TutPhy3kopf, TuTPhy3);
                            if(TuTPhy3 == 17){
                                document.querySelector("#physik .phy3 .tutorial .knopp").style.display = "block";
                            }
                        })
                        document.querySelector("#physik .phy3 .tutorial .z").addEventListener('click', () => {
                            TuTPhy3--;
                            if(TuTPhy3 < 0) TuTPhy3 = 0;
                            aktuellTutorialPhy3(TutPhy3text, TutPhy3bild, TutPhy3kopf, TuTPhy3);
                            if(TuTPhy3 == 10){
                                document.querySelector("#physik .phy3 .tutorial .knopp").style.display = "none";
                            }
                        })
                        document.querySelector("#physik .phy3 .tutorial .knopp").addEventListener('click', () => {
                            $(".tutorial").css({
                                "display" : "none"
                            })
                            ProgPhy++;
                            sceneWechseln(scenen.PHYSIK);
                        })
                        aktuellTutorialPhy3(TutPhy3text, TutPhy3bild, TutPhy3kopf, TuTPhy3);
                        break;
                    case 5:
                        console.log("Wechsle zu Physik Spiel 3");
                        $("#physik").css({
                            "display" : "block"
                        })
                        $(".phy3").css({
                            "display" : "block"
                        })
                        $(".phy3spiel").css({
                            "display" : "block"
                        })
                        switch(GamePhy3){
                            case 1:
                                console.log("Level 1")
                                $(".level1").css({
                                    "display" : "block"
                                })
                                break;
                            case 2:
                                console.log("Level 2")
                                $(".level2").css({
                                    "display" : "block"
                                })
                                break;
                            case 3:
                                console.log("Level 3")
                                $(".level3").css({
                                    "display" : "block"
                                })
                                break;
                        }
                        lebensleiste.style.display = "flex";
                        aktuellLebensLeiste(leben1,leben2,leben3,Leben);

                        //#region weiter und menu button

                        let phy3gewonnen = document.querySelector("#physik .phy3 .phy3spiel .gewonnen");

                        let phy3weiterKnopp = document.querySelector("#physik .phy3spiel .weiter");
                        let phy3nochmalKnopp = document.querySelector("#physik .phy3spiel .nochmal");

                        let phy3gewonnenWeiter = document.querySelector("#physik .phy3 .phy3spiel .gewonnen .weiter");
                        let phy3gewonnenMenu = document.querySelector("#physik .phy3 .phy3spiel .gewonnen .menu");

                        phy3weiterKnopp.addEventListener('click', () => {
                            GamePhy3++;
                            skip++;
                            if(GamePhy3 == 4){
                                ProgPhy++;
                                skip = 0;
                                console.log("gewonnen");
                                phy3gewonnen.style.display = "block";
                            }else{
                                versteckeScene(scenen.PHYSIK);
                                sceneWechseln(scenen.PHYSIK);
                            }
                            phy3weiterKnopp.style.display = "none";
                            phy3nochmalKnopp.style.display = "none";
                        })
                
                        phy3nochmalKnopp.addEventListener('click', () => {
                            GamePhy3 = 1;
                            skip++;
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.PHYSIK);       
                        })

                        
                        phy3gewonnenWeiter.addEventListener('click', () => {
                            GesamtProg += 1;
                            ProgPhy = 5.5;
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.PHYSIK);
                        })

                        phy3gewonnenMenu.addEventListener('click', () => {
                            console.log("yo")
                            document.querySelector(".phybt").style.pointerEvents = "none";
                            document.querySelector(".phybt").style.border = "5px solid green";
                            ProgPhy = 5.5;
                            GesamtProg += 1;
                            versteckeScene(scenen.PHYSIK);
                            sceneWechseln(scenen.HAUPTMENU);
                        })

                        //#endregion

                        //#region spiel

                            //#region level 1

                            let phy3LvL1tisch = document.querySelectorAll("#physik .phy3 .phy3spiel .level1 .tisch img");

                            let phy3Lvl1reatsel = document.querySelectorAll("#physik .phy3 .phy3spiel .level1 .schaltung button");

                            gebeFunktionSpielElektrik(phy3LvL1tisch, phy3Lvl1reatsel, phy3weiterKnopp, phy3nochmalKnopp);

                            //#endregion level 1

                            //#region level 2

                            let phy3LvL2tisch = document.querySelectorAll("#physik .phy3 .phy3spiel .level2 .tisch img");

                            let phy3Lvl2reatsel = document.querySelectorAll("#physik .phy3 .phy3spiel .level2 .schaltung button");

                            gebeFunktionSpielElektrik(phy3LvL2tisch, phy3Lvl2reatsel, phy3weiterKnopp, phy3nochmalKnopp);

                            //#endregion level 2

                            //#region level 3

                            let phy3LvL3tisch = document.querySelectorAll("#physik .phy3 .phy3spiel .level3 .tisch img");

                            let phy3Lvl3reatsel = document.querySelectorAll("#physik .phy3 .phy3spiel .level3 .schaltung button");

                            gebeFunktionSpielElektrik(phy3LvL3tisch, phy3Lvl3reatsel, phy3gewonnen, phy3nochmalKnopp);

                            //#endregion level 3

                        //#endregion spiel

                        break;
                }
                break;
            case scenen.ABSCHLUSS:
                        $("#abschluss").css({
                            "display" : "block"
                        })
                        document.querySelector("#abschluss .credits").addEventListener('click', ()=>{
                            versteckeScene(scenen.ABSCHLUSS);
                            sceneWechseln(scenen.CREDITS);
                        })
                break;
            case scenen.CREDITS:
                        $("#credits").css({
                            "display" : "block"
                        })
                break;
            case scenen.EASTEREGG:
                        $("#easteregg").css({
                            "display" : "block"
                        })
                break;
        }   
    }

    function gebeFunktionChemieChe3(Knoppe, Bilder, Sprechblase, Bidl, gewonnen){
        let farbeMerker;
        var BilderZaehler = Bilder.length - 1;

        Knoppe.forEach(function(element) {
            element.addEventListener('click', () => {
                farbeMerker = element.name;
                console.log(farbeMerker);
            })
        })  

        Bidl.alt = Bilder[Bilder.length - 1].alt;

        Bilder = randomTisch(Bilder);
        console.log(Bilder);
        Sprechblase.innerText = Bilder[BilderZaehler].name;

        Bidl.addEventListener('click', () => {
            console.log(Bilder[BilderZaehler].alt)
            if(farbeMerker != null){
                if(farbeMerker == Bilder[BilderZaehler].name){
                    Bilder[BilderZaehler].style.display = "block";
                    BilderZaehler -= 1;
                    if(BilderZaehler != -1){
                        Sprechblase.innerText = Bilder[BilderZaehler].name;
                        console.log(Bilder[BilderZaehler]);
                    }else{
                        Sprechblase.innerText = "Gewonnen!";
                        gewonnen.style.display = "block";
                    }
                }else{
                    console.log("wtf")
                    Leben--; 
                    aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                    if(Leben == 0){
                        failfenster.style.display = "block";
                    }
                }
            }
        })

    }   

    function gebeFunktionChemie(alleTisch, alleTabelle, gewonnen){
        let speicherTisch;
        var zustaendefertig = 0;    

        alleTisch.forEach(element => {
            element.addEventListener('click', () => {
                alleTisch.forEach(element => {
                    element.style.border = "1px solid black";
                })

                speicherTisch = element;
                element.style.border = '3px solid black';
            })
        })
        console.log(alleTisch);

        alleTabelle.forEach(element => {
            element.addEventListener('click', () => {
                if(speicherTisch != null){
                zustaendefertig++;
                speicherTisch.style.display = "none";
                speicherTisch.style.border = "none";

                console.log(element.alt)

                if(element.name != ""){
                    element.alt = element.name;
                }

                console.log(element.alt)
                console.log(alleTabelle);

                if(element.alt != speicherTisch.alt){
                    Leben--;
                    aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                    element.style.border = "10px solid red";
                }else{
                    element.style.border = "10px solid green";
                }

                element.style.opacity = 1;
                element.src = speicherTisch.src;
                element.style.pointerEvents = "none";

                //Verlohren!
                if(Leben == 0){
                    failfenster.style.display = "block";
                }

                //Gewonnen
                if(Leben > 0 && zustaendefertig == alleTisch.length){
                    gewonnen.style.display = "block";
                    ProgChe += 1;
                }

                zustandTischGemerkt = null;  
                }
            })
        })
    }

    function gebeFunktionSpiel(bilder, knoppe, ausgewaehltesElement, ausgewaehlterText, scene){
        let flagZaehler = 0;

        bilder.forEach(function(element) {
            element.addEventListener('click', () => {
                bilder.forEach(elements => {
                    elements.style.border = "none";
                })
                console.log("Es wurde " + element.alt + " ausgewählt");
                ausgewaehltesElement = element;
                ausgewaehltesElement.style.border = "3px solid black";
                ausgewaehlterText.innerText = "Du hast " + ausgewaehltesElement.name + " ausgewählt";
            })
        })
    
        knoppe.forEach(function(element) {
            element.addEventListener('click', () => {
                //Richtig
                if(ausgewaehltesElement.name == element.name){
                    ausgewaehltesElement.style.display = "none";
                    console.log(element.name);
                    $("button[name='"+element.name+"']").css({
                        "opacity" : "1",
                        "width" : "110px",
                        "height" : "50px"
                    })
                    flagZaehler++;
                }
                //Falsch
                else{
                    Leben--;
                    console.log(Leben);
                    aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                }
    
                //failfenster
                if(Leben == 0){
                    console.log("verdammt seist du!")
                    failfenster.style.display = "block";
                    console.log(alleBilderBio1);
                    bilder.forEach(function(element) {
                        element.style.display = "initial";
                    })
                    bilder.forEach(function(element) {
                        element.style.opacity = 0;
                    })
                }
                //gewonnen!
                if(flagZaehler >= knoppe.length) {
                    switch(scene){
                        case scenen.BIOLOGIE:
                            switch(ProgBio){
                                case 1:
                                    document.querySelector("#biologie .bio1 .bio1spiel .gewonnen").style.display = "flex";
                                    ProgBio = 2;
                                    document.querySelector("#biologie .bio1 .bio1spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.BIOLOGIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#biologie .bio1 .bio1spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.BIOLOGIE);
                                        sceneWechseln(scenen.BIOLOGIE);
                                    })
                                    break;
                                case 3:
                                    document.querySelector("#biologie .bio2 .bio2spiel .gewonnen").style.display = "block";
                                    document.querySelector("#biologie .bio2 .bio2spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.BIOLOGIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#biologie .bio2 .bio2spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.BIOLOGIE);
                                        sceneWechseln(scenen.BIOLOGIE);
                                    })
                                    ProgBio = 4;
                                    break;
                                case 5:
                                    document.querySelector("#biologie .bio3 .bio3spiel .gewonnen").style.display = "block";
                                    ProgBio = 5.5;
                                    document.querySelector("#biologie .bio3 .bio3spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.BIOLOGIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#biologie .bio3 .bio3spiel .gewonnen .weiter").addEventListener('click', () => {
                                        document.querySelector(".biobt").style.pointerEvents = "none";
                                        document.querySelector(".biobt").style.border = "5px solid green";
                                        GesamtProg += 1;
                                        versteckeScene(scenen.BIOLOGIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    break;
                            }
                            break;
                        case scenen.CHEMIE:
                            switch(ProgChe){
                                case 1:
                                    document.querySelector("#chemie .che1 .che1spiel .gewonnen").style.display = "block";
                                    document.querySelector("#chemie .che1 .che1spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#chemie .che1 .che1spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.CHEMIE);
                                    })
                                    break;
                                case 3:
                                    document.querySelector("#chemie .che2 .che2spiel .gewonnen").style.display = "block";
                                    document.querySelector("#chemie .che2 .che2spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#chemie .che2 .che2spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.CHEMIE);
                                    })
                                    break;
                                case 5:
                                    document.querySelector("#chemie .che3 .che3spiel .gewonnen").style.display = "block";
                                    document.querySelector("#chemie .che3 .che3spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#chemie .che3 .che3spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.CHEMIE);
                                    })
                                    break;
                            }
                            ProgChe++;
                            break;
                        case scenen.PHYSIK:
                            switch(ProgPhy){
                                case 1:
                                    document.querySelector("#physik .phy1 .phy1spiel .gewonnen").style.display = "block";
                                    document.querySelector("#physik .phy1 .phy1spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.PHYSIK);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#physik .phy1 .phy1spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.PHYSIK);
                                        sceneWechseln(scenen.PHYSIK);
                                    })
                                    break;
                                case 3:
                                    document.querySelector("#physik .phy2 .phy2spiel .gewonnen").style.display = "block";
                                    document.querySelector("#physik .phy2 .phy2spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.PHYSIK);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#physik .phy2 .phy2spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.PHYSIK);
                                        sceneWechseln(scenen.PHYSIK);
                                    })
                                    break;
                                case 5:
                                    document.querySelector("#chemie .che3 .che3spiel .gewonnen").style.display = "block";
                                    document.querySelector("#chemie .che3 .che3spiel .gewonnen .menu").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.HAUPTMENU);
                                    })
                                    document.querySelector("#chemie .che3 .che3spiel .gewonnen .weiter").addEventListener('click', () => {
                                        versteckeScene(scenen.CHEMIE);
                                        sceneWechseln(scenen.CHEMIE);
                                    })
                                    break;
                            }
                            ProgPhy++;
                            break;     
                    }
                }
            })
        })
    }

    function gebeFunktionSpielGleichgewicht(links, Gewichterechts, Gewichtelinks, rechts, waage, waagelinks ){
        var rechtsGewicht = 0;
        var linkesGewicht = 0;
        let ausgewaehltesGewicht;
        var anzahlGewichte = Gewichtelinks.length;

       

        for(let i = 0; i<Gewichterechts.length ; i++){
            if(Gewichterechts[i].alt == "leicht") rechtsGewicht += 5;
            if(Gewichterechts[i].alt == "schwer") rechtsGewicht += 10;
        }

        for(let i = 0; i<waagelinks.length ; i++){
            if(waagelinks[i].alt == "leicht") linkesGewicht += 5;
            if(waagelinks[i].alt == "schwer") linkesGewicht += 10;
        }

        Gewichtelinks.forEach(element => {
            element.addEventListener('click', () => {
                Gewichtelinks.forEach(element => {
                    element.style.border = "none";
                })

                console.log("yo")
                element.style.border = "2px solid black";
                ausgewaehltesGewicht = element;
            })
        })

        //#region initaliezing
        if(linkesGewicht > rechtsGewicht){
            waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_ung_links.png')";
            links.style.top = "11.5%";
            rechts.style.top = "1.5%";
        }else if(linkesGewicht == rechtsGewicht){
            waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_gleichgewicht.png')";
            links.style.top = "7.5%";
            rechts.style.top = "7.5%";
            document.querySelector("#physik .phy1 .phy1spiel .weiter").style.display = "block";
        }else if(linkesGewicht < rechtsGewicht){
            links.style.top = "1.5%";
            rechts.style.top = "11.5%";
            waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_ung_rechts.png')";
        }
        //#endregion

        links.addEventListener('click', () => {
            if(ausgewaehltesGewicht != null){
                if(ausgewaehltesGewicht.alt == "leicht"){
                    links.insertAdjacentHTML('beforeend', "<img src='./pics/physik/gleichgewichtskonzept/leichtes_gewicht.png' alt='leicht'>");
                    linkesGewicht += 5;
                }else if(ausgewaehltesGewicht.alt == "schwer") {
                    links.insertAdjacentHTML('beforeend', "<img src='./pics/physik/gleichgewichtskonzept/fettes_gewicht.png' alt='schwer'>");
                    linkesGewicht += 10;
                }
                ausgewaehltesGewicht.style.display = "none";
                ausgewaehltesGewicht = null;

                anzahlGewichte--;

                if(linkesGewicht > rechtsGewicht){
                    waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_ung_links.png')";
                    links.style.top = "11.5%";
                    rechts.style.top = "1.5%";
                }
                //Gewonnen!
                else if(linkesGewicht == rechtsGewicht){
                    waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_gleichgewicht.png')";
                    links.style.top = "7.5%";
                    rechts.style.top = "7.5%";
                    document.querySelector("#physik .phy1 .phy1spiel .weiter").style.display = "block";
                }
                else if(linkesGewicht < rechtsGewicht){
                    links.style.top = "1.5%";
                    rechts.style.top = "11.5%";
                    waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_ung_rechts.png')";
                }

                console.log(anzahlGewichte);
                //Verlohren
                if(anzahlGewichte == 0 && linkesGewicht != rechtsGewicht){
                    Leben--;
                    aktuellLebensLeiste(leben1, leben2, leben3, Leben);
                    if(Leben == 0){
                        failfenster.style.display = "block";
                    }else{
                        document.querySelector("#physik .phy1 .phy1spiel .nochmal").style.display = "block";
                    } 
                }
            }
            console.log(linkesGewicht);
        })

        rechts.addEventListener('click', () => {
            if(ausgewaehltesGewicht != null){
                if(ausgewaehltesGewicht.alt == "leicht"){
                    rechts.insertAdjacentHTML('beforeend', "<img src='./pics/physik/gleichgewichtskonzept/leichtes_gewicht.png' alt='leicht'>");
                    rechtsGewicht += 5;
                }else if(ausgewaehltesGewicht.alt == "schwer") {
                    rechts.insertAdjacentHTML('beforeend', "<img src='./pics/physik/gleichgewichtskonzept/fettes_gewicht.png' alt='schwer'>");
                    rechtsGewicht += 10;
                }
                ausgewaehltesGewicht.style.display = "none";
                ausgewaehltesGewicht = null;

                anzahlGewichte--;

                if(linkesGewicht > rechtsGewicht){
                    waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_ung_links.png')";
                    links.style.top = "11.5%";
                    rechts.style.top = "1.5%";
                }
                //Gewonnen!
                else if(linkesGewicht == rechtsGewicht){
                    waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_gleichgewicht.png')";
                    links.style.top = "7.5%";
                    rechts.style.top = "7.5%";
                    document.querySelector("#physik .phy1 .phy1spiel .weiter").style.display = "block";
                }
                else if(linkesGewicht < rechtsGewicht){
                    links.style.top = "1.5%";
                    rechts.style.top = "11.5%";
                    waage.style.backgroundImage = "url('./pics/physik/gleichgewichtskonzept/waage_ung_rechts.png')";
                }

                console.log(anzahlGewichte);
                //Verlohren
                if(anzahlGewichte == 0 && linkesGewicht != rechtsGewicht){
                    Leben--;
                    aktuellLebensLeiste(leben1, leben2, leben3, Leben);
                    if(Leben == 0){
                        failfenster.style.display = "block";
                    }else{
                        document.querySelector("#physik .phy1 .phy1spiel .nochmal").style.display = "block";
                    } 
                }
            }
            console.log(rechtsGewicht);
        })
    }

    function gebeFunktionSpielMagnete(allesRotierende, magnetRotierend, pfeilRechtsDreher, pfeilLinksDreher){
        let ausgeaehlterMagnet;

        allesRotierende.forEach(element => {
            element.addEventListener('click', ()=>{

                allesRotierende.forEach(element => {
                    element.style.border = "2px solid black";
                })
                element.style.border = "5px solid black";

                ausgeaehlterMagnet = element;
                magnetRotierend.alt = element.alt;
                console.log(ausgeaehlterMagnet);
            })
        })

        pfeilRechtsDreher.addEventListener('click', () => {
            switch(ausgeaehlterMagnet.alt){
                case "rechts":
                    magnetRotierend.alt = "oben";
                    ausgeaehlterMagnet.alt = "oben";
                    break;
                case "oben":
                    magnetRotierend.alt = "links";
                    ausgeaehlterMagnet.alt = "links";
                    break;
                case "links":
                    magnetRotierend.alt = "unten";
                    ausgeaehlterMagnet.alt = "unten";
                    break; 
                case "unten":
                    magnetRotierend.alt = "rechts";
                    ausgeaehlterMagnet.alt = "rechts";
                    break;     
            }
        })

        pfeilLinksDreher.addEventListener('click', () => {
            switch(ausgeaehlterMagnet.alt){
                case "rechts":
                    magnetRotierend.alt = "unten";
                    ausgeaehlterMagnet.alt = "unten";
                    break;
                case "unten":
                    magnetRotierend.alt = "links";
                    ausgeaehlterMagnet.alt = "links";
                    break;
                case "links":
                    magnetRotierend.alt = "oben";
                    ausgeaehlterMagnet.alt = "oben";
                    break; 
                case "oben":
                    magnetRotierend.alt = "rechts";
                    ausgeaehlterMagnet.alt = "rechts";
                    break;     
            }
        })
    }

    function gebeFunktionSpielBestätigung(AufgabeButton, AufgabeObjekt1, AufgabeObjekt2, AufgabeKasten, loesung1, loesung2, weiter){
        AufgabeButton.addEventListener('click', () => {
            console.log(AufgabeObjekt1);
            console.log(magnetStatus(AufgabeObjekt1, AufgabeObjekt2));
            if(magnetStatus(AufgabeObjekt1, AufgabeObjekt2) == loesung1){
                AufgabeKasten.style.border = "9px solid green";
                AufgabeButton.style.pointerEvents = "none";
            }else if(magnetStatus(AufgabeObjekt1, AufgabeObjekt2 == loesung2)){
                AufgabeKasten.style.border = "9px solid red";
                Leben--;
                aktuellLebensLeiste(leben1,leben2,leben3,Leben);
                if(Leben == 0){
                    failfenster.style.display = "block";
                }
                AufgabeButton.style.pointerEvents = "none";
            }

            GamePhy2++;
            if(GamePhy2 == 3 && Leben > 0){
                weiter.style.display = "block";
            }else if(GamePhy3 == 3 && Leben == 0){
                failfenster.style.display = "block";
            }
        })
    }

    function gebeFunktionSpielElektrik(tischKnoppe, reatselKnoppe, weiterKnopp, nochmalKnopp){
        let Stromkreis = 0;
        let StromkreisKap = 0;
        var anzahlBatterie200W = 0;
        var anzahlBatterie400W = 0;
        var anzahlBatterie600W = 0;
        let ausgeaehlterElement;

        reatselKnoppe.forEach(function(element){
            switch(element.name){
                case "lampe200W":
                    Stromkreis -= 200;
                    break;
                case "lampe400W":
                    Stromkreis -= 400;
                    break;
                case "schalter":
                    console.log("schalter");
                    break;
                case "schalterOFF":
                    console.log("schalterOFF");
                    break;
                case "batterie200W":
                    Stromkreis += 200;
                    break;
                case "batterie400W":
                    Stromkreis += 400;
                    break;
                case "batterie600W":
                    Stromkreis += 600;
                    break;
            }
        })

        tischKnoppe.forEach(function(element){
            element.addEventListener('click', () => {
                tischKnoppe.forEach(function(elements){
                    elements.style.border = "2px solid black";
                })
                ausgeaehlterElement = element;
                element.style.border = "5px solid black";
            })
        })

        reatselKnoppe.forEach(function(element){
            element.addEventListener('click', () => {
                if(!(ausgeaehlterElement == null) && element.name == ""){
                    element.name = ausgeaehlterElement.name;
                    ausgeaehlterElement.style.display = "none";
                    ausgeaehlterElement = null;
                    console.log(element.name);

                    element.style.pointerEvents = "none";

                    console.log(element.name);

                    //#region Messe Strom
                    switch(element.name){
                        case "lampe200W":
                            Stromkreis -= 200;
                            if(Stromkreis <= 200) element.name = "lampe200WOFF";
                            break;
                        case "lampe400W":
                            Stromkreis -= 400;
                            if(Stromkreis <= 400) element.name = "lampe400WOFF";
                            break;
                        case "schalter":
                            console.log("schalter");
                            break;
                        case "schalterOFF":
                            console.log("schalterOFF");
                            break;
                        case "batterie200W":
                            Stromkreis += 200;
                            StromkreisKap += 200;
                            anzahlBatterie200W++;

                            console.log(anzahlBatterie200W);
                            break;
                        case "batterie400W":
                            anzahlBatterie400W++;
                            StromkreisKap += 400;
                            Stromkreis += 400;
                            break;
                        case "batterie600W":
                            anzahlBatterie600W++;
                            Stromkreis += 600;
                            StromkreisKap += 600;
                            break;
                    }
                    console.log("Stromkreis : " + Stromkreis);
                    //#endregion
                    
                    //#region siegbedingung
                    var stromkreisGeschlossen = true;

                    reatselKnoppe.forEach(function(element) {
                        if(element.name == ""){
                            stromkreisGeschlossen = false;
                        }
                    })

                    if(stromkreisGeschlossen == true){
                        if(Stromkreis == 0){
                            console.log(anzahlBatterie200W)
                            if(anzahlBatterie200W > 0 || anzahlBatterie400W > 0 || anzahlBatterie600W > 0){
                                //Gewonnen
                                console.log("Gewonnen!");
                                weiterKnopp.style.display = "block";
                            }else{
                                console.log("Wie?!");
                            }
                        }else{
                            //Verlohren
                            console.log("verlohren");
                            nochmalKnopp.style.display = "block";
                        }
                    }
                    //#endregion
                }

                //#region schalterFunktionalität
    
                if(element.name == "schalter" || element.name == "schalterOFF"){
                    element.style.pointerEvents = "fill";
                    element.addEventListener('click', () => {
                        if(element.name == "schalter"){
                            element.name = "schalterOFF";
                            reatselKnoppe.forEach(function(element) {
                                if(element.name == "lampe200W"){
                                    element.name = "lampe200WOFF";
                                }else if(element.name == "lampe400W"){
                                    element.name = "lampe400WOFF";
                                }
                            })
                        }else{
                            element.name = "schalter";
                            reatselKnoppe.forEach(function(element) {
                                if(element.name == "lampe200WOFF" && StromkreisKap >= 200 && Stromkreis >= 0){
                                    element.name = "lampe200W";
                                }else if(element.name == "lampe400WOFF" && StromkreisKap >= 400 && Stromkreis >= 0){
                                    element.name = "lampe400W";
                                }
                            })
                        }
                    })
                }

                //#endregion

                //#region lampenFunktionalität
                
                if(stromkreisGeschlossen == true){
                    var alleSchalterOn = true;

                    reatselKnoppe.forEach(function(element){
                        if(element.name == "schalterOFF") alleSchalterOn = false;
                    })

                    if(alleSchalterOn){
                        var tmpStromKap = StromkreisKap;
                        reatselKnoppe.forEach(function(element){
                            if(element.name == "lampe200WOFF" && tmpStromKap >= 200){
                                element.name = "lampe200W";
                                tmpStromkreisKap -= 200;
                            }else if(element.name == "lampe400WOFF" && tmpStromKap >= 400){
                                element.name = "lampe400W";
                                tmpStromKap -= 400;
                            }
                        })
                    }
                }

                //#endregion
            })
        })

    }

    function versteckeScene(scene){

        console.log("Verstecke: " + scene)
        switch(scene){
            case scenen.TITEL:
                $("#titelBildschirm").css({
                    "display" : "none"
                });
                break;
            case scenen.NAME:
                $("#namenfeld").css({
                    "display" : "none"
                });
                break;
            case scenen.BEGRUESZUNG:
                $("#begrueßung").css({
                    "display" : "none"
                });
                break;
            case scenen.HAUPTMENU:
                $("#menu").css({
                    "display" : "none"
                });
                break;
            case scenen.BIOLOGIE:
                $("#biologie").css({
                    "display" : "none"
                })
                $(".bio1").css({
                    "display" : "none"
                })
                $(".bio1 .tutorial").css({
                    "display" : "none"
                })
                $(".bio1spiel").css({
                    "display" : "none"
                })
                $(".bio2").css({
                    "display" : "none"
                })
                $(".bio2 .tutorial").css({
                    "display" : "none"
                })
                $(".bio2spiel").css({
                    "display" : "none"
                })
                $(".bio3").css({
                    "display" : "none"
                })
                $(".bio3 .tutorial").css({
                    "display" : "none"
                })
                $(".bio3spiel").css({
                    "display" : "none"
                })
                break;
            case scenen.PHYSIK:
                $("#physik").css({
                    "display" : "none"
                })
                $(".phy1").css({
                    "display" : "none"
                })
                $(".phy1 .tutorial").css({
                    "display" : "none"
                })
                $(".phy1spiel").css({
                    "display" : "none"
                })
                $(".level1").css({
                    "display" : "none"
                })
                $(".level2").css({
                    "display" : "none"
                })
                $(".level3").css({
                    "display" : "none"
                })
                $(".phy2").css({
                    "display" : "none"
                })
                $(".phy2 .tutorial").css({
                    "display" : "none"
                })
                $(".phy2spiel").css({
                    "display" : "none"
                })
                $(".phy3").css({
                    "display" : "none"
                })
                $(".phy3 .tutorial").css({
                    "display" : "none"
                })
                $(".phy3spiel").css({
                    "display" : "none"
                })
                break;
            case scenen.CHEMIE:
                $("#chemie").css({
                    "display" : "none"
                })
                $(".che1").css({
                    "display" : "none"
                })
                $(".che1 .tutorial").css({
                    "display" : "none"
                })
                $(".che1spiel").css({
                    "display" : "none"
                })
                $(".che2").css({
                    "display" : "none"
                })
                $(".che2 .tutorial").css({
                    "display" : "none"
                })
                $(".che2spiel").css({
                    "display" : "none"
                })
                $(".che3").css({
                    "display" : "none"
                })
                $(".che3 .tutorial").css({
                    "display" : "none"
                })
                $(".che3spiel").css({
                    "display" : "none"
                })
                break;
            case scenen.ABSCHLUSS:
                $("#abschluss").css({
                    "display" : "none"
                })
                break;
            case scenen.CREDITS:
                $("#credits").css({
                    "display" : "none"
                })
                break;
            case scenen.EASTEREGG:
                $("#easteregg").css({
                    "display" : "none"
                })
                break;
        }
    }

    function save() {
        localStorage.setItem('letztesLvl', JSON.stringify(letztesLvl));
        localStorage.setItem('skip', JSON.stringify(skip));

        localStorage.setItem('namentraeger', JSON.stringify(NameTraeger));

        localStorage.setItem('GesamtProg', JSON.stringify(GesamtProg));
        localStorage.setItem('ProgBio', JSON.stringify(ProgBio));
        localStorage.setItem('ProgChe', JSON.stringify(ProgChe));
        localStorage.setItem('ProgPhy', JSON.stringify(ProgPhy));

        localStorage.setItem('GamePhy1', JSON.stringify(GamePhy1));
        localStorage.setItem('GamePhy2', JSON.stringify(GamePhy2));
        localStorage.setItem('GamePhy3', JSON.stringify(GamePhy3));

        localStorage.setItem('TuTBio1', JSON.stringify(TuTBio1));
        localStorage.setItem('TuTBio2', JSON.stringify(TuTBio2));
        localStorage.setItem('TuTBio3', JSON.stringify(TuTBio3));

        localStorage.setItem('TuTChe1', JSON.stringify(TuTChe1));
        localStorage.setItem('TuTChe2', JSON.stringify(TuTChe2));
        localStorage.setItem('TuTChe3', JSON.stringify(TuTChe3));

        localStorage.setItem('TuTPhy1', JSON.stringify(TuTPhy1));
        localStorage.setItem('TuTPhy2', JSON.stringify(TuTPhy2));
        localStorage.setItem('TuTPhy3', JSON.stringify(TuTPhy3));

    }

    function load() {
        letztesLvl = JSON.parse(localStorage.getItem('letztesLvl'));
        skip = JSON.parse(localStorage.getItem('skip'));

        NameTraeger = JSON.parse(localStorage.getItem('namentraeger'));

        GesamtProg = JSON.parse(localStorage.getItem('GesamtProg'));
        ProgBio = JSON.parse(localStorage.getItem('ProgBio'));
        ProgChe = JSON.parse(localStorage.getItem('ProgChe'));
        ProgPhy = JSON.parse(localStorage.getItem('ProgPhy'));

        console.log("Lade" + ProgBio);

        GamePhy1 = JSON.parse(localStorage.getItem('GamePhy1'));
        GamePhy2 = JSON.parse(localStorage.getItem('GamePhy2'));
        GamePhy3 = JSON.parse(localStorage.getItem('GamePhy3'));
        
        TuTBio1 = JSON.parse(localStorage.getItem('TuTBio1'));
        TuTBio2 = JSON.parse(localStorage.getItem('TuTBio2'));
        TuTBio3 = JSON.parse(localStorage.getItem('TuTBio3'));

        TuTChe1 = JSON.parse(localStorage.getItem('TuTChe1'));
        TuTChe2 = JSON.parse(localStorage.getItem('TuTChe2'));
        TuTChe3 = JSON.parse(localStorage.getItem('TuTChe3'));

        TuTPhy1 = JSON.parse(localStorage.getItem('TuTPhy1'));
        TuTPhy2 = JSON.parse(localStorage.getItem('TuTPhy2'));
        TuTPhy3 = JSON.parse(localStorage.getItem('TuTPhy3'));
    }

    function gamedelete(){
        localStorage.removeItem('letztesLvl');
        localStorage.removeItem('skip');

        localStorage.removeItem('namentraeger');

        localStorage.removeItem('GesamtProg');
        localStorage.removeItem('ProgBio');
        localStorage.removeItem('ProgChe');
        localStorage.removeItem('ProgPhy');

        localStorage.removeItem('GamePhy1');
        localStorage.removeItem('GamePhy2');
        localStorage.removeItem('GamePhy3');

        localStorage.removeItem('TuTBio1');
        localStorage.removeItem('TuTBio2');
        localStorage.removeItem('TuTBio3');

        localStorage.removeItem('TuTChe1');
        localStorage.removeItem('TuTChe2');
        localStorage.removeItem('TuTChe3');

        localStorage.removeItem('TuTPhy1');
        localStorage.removeItem('TuTPhy2');
        localStorage.removeItem('TuTPhy3');
    }
})
