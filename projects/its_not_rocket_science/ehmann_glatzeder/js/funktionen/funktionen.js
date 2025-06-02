const scenen = {
    TITEL : -2,
    NAME : -1,
    BEGRUESZUNG : 0,
    HAUPTMENU : 1, 
    BIOLOGIE : 2,
    CHEMIE : 3,
    PHYSIK : 4
}   

function aktuellPfeilPosiBio1(text,pfeil, posi){
    switch(posi){
        case -1:
            text.innerText = "Willkommen im Fach Biologie. Biologie ist die Wissenschaft des Organischen, also alles was man als Lebend bezeichnet.";
            pfeil.style.display = "none";
            break;
        case 0: 
            text.innerText = "Hier siehst du das Abbild einer Blume. Jedes Bestandteil hat einen eigenen Namen. Ich werde dir jetzt ihre Funktionen erklären.";
            pfeil.style.display = "none";
            break;
        case 1: //Blüte
            pfeil.style.display = "flex"
            text.innerText = "Die Blüte dient der geschlechtlichen Fortpflanzung. Aus der Blüte wachsen Samen oder auch Früchte und aus diesen entstehen neue, ähnliche Pflanzen.";
            pfeil.style.left = "55%";
            pfeil.style.top = "15%";
            break;
        case 2: //Kelchblatt
            text.innerText = "Die äußeren Kelchblätter sind meist grün und dienen zum Schutz der inneren Blütenteile, besonders wenn die Blüte noch nicht entfaltet ist.";
            pfeil.style.left = "58%";
            pfeil.style.top = "20%";
            break;
        case 3: //Narbe
            text.innerText = "Das ist eine klebrige Spitze des Stempels, wo Pollen gesammelt werden, um Eizellen zu befruchten."
            pfeil.style.left = "55.5%";
            pfeil.style.top = "25.5%";
            break;
        case 4: //Griffel
            text.innerText = "Der lange Stiel, der die Narbe hochhält. Die Narbe und der Griffel bilden zusammen den Stempel."
            pfeil.style.left = "55.5%";
            pfeil.style.top = "28%";
            break;
        case 5: //Blütenblatt
            text.innerText = "Mit den Blütenblättern lockt die Blume Insekten an. An den Insekten bleiben Pollen kleben, welche dann an andere Blumen verteilt werden."
            pfeil.style.left = "59%";
            pfeil.style.top = "32.5%";
            break;
        case 6://Staubblatt
            text.innerText = "Die Staubblätter sind die männlichen Blütenanteile. Sie bestehen aus dem Staubfaden und dem Staubbeutel mit den Pollensäcken. Hier wird der Pollen oder auch Blütenstaub gebildet."
            pfeil.style.left = "58.5%";
            pfeil.style.top = "35%";
            break;
        case 7: //Fruchtknoten
            text.innerText = "Im Fruchtknoten einer Pflanze befinden sich die Samenanlagen, in dem später die Samen heranreifen."
            pfeil.style.left = "60.5%";
            pfeil.style.top = "38%";
            break;
        case 8: //Blütenboden
            text.innerText = "Am Blütenboden oder der Blütenachse setzen die einzelnen Blütenblätter an. Der Blütenboden kann Geruchsstoffe und Nektar produzieren."
            pfeil.style.left = "59.5%";
            pfeil.style.top = "45%";
            break;
        case 9: //Stängel
            text.innerText = " Der Stängel dient der Stabilisierung, gibt ihr Festigkeit und Halt. Er speichert und transportiert Wasser und Nährstoffe zur Blüte oder zu den Blättern."
            pfeil.style.left = "56.5%";
            pfeil.style.top = "47%";
            break;
        case 10: //Blatt
            text.innerText = "Hauptaufgabe eines Blattes sind die Fotosynthese, die Wasseraufnahme und die Wasserabgabe. Bei der Fotosynthese wird Luft gereinigt."
            pfeil.style.left = "46.5%";
            pfeil.style.top = "59.5%";
            break;
        case 11: //Wurzel
            text.innerText = "Ihre Aufgaben sind die Verankerung der Pflanze im Boden sowie die Aufnahme und Weiterleitung von Wasser und andere Stoffe  aus dem Boden ins Innere der Pflanze."
            pfeil.style.left = "50%";
            pfeil.style.top = "73%";
            pfeil.style.display = "block";
            break;
        case 12:
            text.innerText = "Bitte klicke mit der Maus zuerst auf den Begriff und dann auf den passenden Strich. So löst du die folgende Aufgabe."
            pfeil.style.left = "90%"
            pfeil.style.top = "80%";
            pfeil.style.display = "none";
            break;
    }
    console.log(posi);
}

function aktuellPfeilPosiBio2(text,pfeil, posi){
    switch(posi){
        case 0: 
            text.innerText = "Alle Säugetiere haben die gleichen Knochen wie Menschen. Aber nicht alle Knochen haben genau die gleiche Form. Ich erkläre dir das Beispiel jetzt an diesem Hund.";
            pfeil.style.display = "none";
            break;
        case 1: //Schädel
            pfeil.style.display = "flex"
            text.innerText = "Jedes Tier hat eine unterschiedliche Kopfform. Das liegt daran, dass jeder Schädel eine andere Form hat.";
            pfeil.style.left = "41%";
            pfeil.style.top = "10.5%";
            break;
        case 2: //Halswirbel
            text.innerText = "Der Hals wird von Wirbelknochen getragen, die mit Gelenken verbunden sind. Die meisten Saugetiere haben wie Menschen die selbe Anzahl an Halswirbeln. Genau 7 Stück.";
            pfeil.style.left = "51.5%";
            pfeil.style.top = "19.5%";
            break;
        case 3: //Schulterblatt
            text.innerText = "Das Schulterblatt ähnelt einem Dreieck. Hier unterscheidet sich meistens nur die Größe. "
            pfeil.style.left = "30%";
            pfeil.style.top = "31%";
            pfeil.style.transform = "rotate(-90deg)"
            break;
        case 4: //Oberarmknochen
            text.innerText = "Der Oberarmknochen verbindet die Schulter mit den Unterarmknochen. Auch dieser Knochen hat nicht viele Unterschiede, außer natürlich in Länge und Dicke."
            pfeil.style.left = "30%";
            pfeil.style.top = "54%";
            pfeil.style.transform = "rotate(90deg)"
            break;
        case 5: //Rippen
            text.innerText = "Wie beim Menschen schützen die Rippen das Herz und die inneren Organe. Die Anzahl der Rippen liegt zwischen 12 bis 20 je nach Säugetierart."
            pfeil.style.left = "53%";
            pfeil.style.top = "65.5%";
            pfeil.style.transform = "rotate(90deg)"
            break;
        case 6://Becken
            text.innerText = "Das Becken hat eine ringförmige Form und verbindet die Wirbelsäule mit den Beinknochen. Man nennt das Becken auch Hüftgelenk."
            pfeil.style.left = "71%";
            pfeil.style.top = "28%";
            pfeil.style.transform = "rotate(-90deg)"
            break;
        case 7: //Oberschenkelknochen
            text.innerText = "Der Oberschenkelknochen ist der stärkste Knochen im Körper."
            pfeil.style.left = "75%";
            pfeil.style.top = "54%";
            pfeil.style.transform = "rotate(90deg)"
            break;
        case 8: //Schwanzwirbel
            text.innerText = "Bei Tieren sind Schwanzwirbel die Fortsetzung der Wirbelsäule. Menschen haben keine Schwanzwirbel, aber ein Steißbein. Bei vielen Tieren hat der Schwanz die Aufgabe, das Gleichgewicht des Tieres zu halten."
            pfeil.style.left = "78.5%";
            pfeil.style.top = "33%";
            pfeil.style.transform = "rotate(-90deg)"
            break;
        case 9:
            text.innerText = "Genau wie bei der Pflanze wählst du zuerst den Begriff aus und dann die richtige Position."
            pfeil.style.left = "%"
            pfeil.style.top = "%";
            pfeil.style.transform = "rotate(deg)"
            break;
    }
    console.log(posi);
}

function aktuellPfeilPosiBio3(text,pfeil, posi){
    switch(posi){
        case 0: 
            text.innerText = "Der Körper hat viele Organe die unterschiedliche Aufgaben haben. Die wichtigsten Organe und ihre Funktionen erfährst du jetzt hier von mir.";
            pfeil.style.display = "none";
            break;
        case 1: //Gehirn
            pfeil.style.display = "flex"
            text.innerText = "Das Gehirn sammelt alle Informationen, die der Körper von außen und aus seinem Inneren erhält. Es verarbeitet sie und sendet Befehle, um die einzelnen Organe zu steuern. Nahezu alles, was wir denken, fühlen und machen, geht vom Gehirn aus.";
            pfeil.style.left = "55%";
            pfeil.style.top = "19.5%";
            pfeil.style.transform = "rotate(-90deg)"
            break;
        case 2: //Schilddrüse
            text.innerText = "Die Schilddrüse sorgt dafür, dass bestimmte Hormone in den Körper kommen. Hormone sind Stoffe, die etwas im Körper bewirken.";
            pfeil.style.left = "28%";
            pfeil.style.top = "21%";
            pfeil.style.transform = "rotate(-130deg)"
            break;
        case 3: //Herz
            text.innerText = "Das Herz pumpt das Blut durch den Körper. So entsteht ein Blutkreislauf, der alle Körperteile mit dem notwendigen Sauerstoff und den wichtigen Teilen aus der Nahrung versorgt."
            pfeil.style.left = "70%";
            pfeil.style.top = "29%";
            pfeil.style.transform = "rotate(-40deg)"
            break;
        case 4: //Lunge
            text.innerText = "Die Lungenflügel versorgen den Körper mit Sauerstoff. Außerdem entfernt sie Kohlendioxid aus dem Körper, das ist der verbrauchte Sauerstoff."
            pfeil.style.left = "20%";
            pfeil.style.top = "41%";
            pfeil.style.transform = "rotate(180deg)"
            break;
        case 5: //Leber
            text.innerText = "In der Leber werden Nährstoffe gespeichert. Sie hilft bei der Verdauung und beseitigt die Gifte und Abfallstoffe, die im Blut sind. Außerdem sorgt sie dafür, dass unser Blut aus den richtigen Teilen zusammengesetzt ist."
            pfeil.style.left = "18%";
            pfeil.style.top = "57%";
            pfeil.style.transform = "rotate(180deg)"
            break;
        case 6://Magen
            text.innerText = "Im Magen wird alles gesammelt was wir essen und trinken. Dort werden fremde Bakterien getötet und das aufgenommene Eiweiß gespalten."
            pfeil.style.left = "68%";
            pfeil.style.top = "47%";
            pfeil.style.transform = "rotate(0deg)"
            break;
        case 7: //Nieren
            text.innerText = "Die Nieren filtern Wasser aus dem Blut. Dabei entsteht Urin. Wenn Blut durch die Nieren hindurchfließt, wird es gereinigt. Was der Körper nicht mehr braucht oder was giftig ist, wird herausgefiltert."
            pfeil.style.left = "71.5%";
            pfeil.style.top = "60%";
            pfeil.style.transform = "rotate(0deg)"
            break;
        case 8: //Darm
            text.innerText = "Der Darm besteht aus 3 Teilen und ist insgesamt 8 bis 9 meter lang. Hier wird die Nahrung komplett Verdaut und die Nährstoffe werden im ganzen Körper verteilt."
            pfeil.style.left = "22%";
            pfeil.style.top = "71%";
            pfeil.style.transform = "rotate(180deg)"
            break;
        case 9: //Blase
            text.innerText = "Die Harnblase speichert den Urin, damit wir nicht dauernd auf Toilette müssen. Die Blase wird durch einen starken Muskel verschlossen. Babys können diesen Muskel noch nicht kontrollieren, deshalb brauchen sie Windeln."
            pfeil.style.left = "65%"
            pfeil.style.top = "71%";
            pfeil.style.transform = "rotate(0deg)"
            break;
        case 10:
            text.innerText = "Jetzt weißt du viel neues über den menschlichen Körper. Im nächsten Level kannst du dein Wissen auch gleich testen. "
            pfeil.style.display = "none"
            break;
    }
    console.log(posi);
}

function aktuellTutorialChe1(text, bild, flag){
    switch(flag){
        case 0: 
        text.innerText = "Unter Aggregatszuständen versteht man unterschiedliche festigkeiten von Materialien. Insgesammt 4, aber wir werden nur mit 3 Zuständen arbeiten. Es wird unterschieden ob etwas Fest ist, also wie Metall, Flüssig wie Wasser oder Gasförmig wie Dampf.";
            break;
        case 1: //
            text.innerText = "Wasser kann alle 3 Zustände haben. Wenn es gefroren wird, wird aus Wasser Eis und bei Erhitzung verdamft es. In seiner Ursprungsform ist es flüssig.";
            break;
        case 2: //
            text.innerText = "In der Wissenschaft werden Aggregatszustände anders abgebildet. Meißtens in Form von Kreisen, welche in einem Behälter liegen. Bei Eis liegen die Kreise im Quadrat eng nebeneinander, bei Wasser ";
            bild.src = "pics/chemie/aggregatzustaende.png"
            break;
        case 3: //
            bild.src = "pics/chemie/aggregatzustaende_tutorial2.png"
            text.innerText = "Bei Eis liegen die Kreise am Boden eng bei einander. Bei Wasser befinden sie sich auch meist am Boden, kleben aber nicht so aneinander. Und bei Gas sind die Kreise überall verteilt."
            break;
        case 4: //
            text.innerText = "In den folgenden Aufgaben sollst du die Aggregatszustände wie du sie kennst, ihren wissenschaftlichen Darstellungen zuordnen."
            break;
    }
    console.log(flag);
}

function aktuellTutorialChe2(text, bild, flag){
    switch(flag){
        case 0: 
        text.innerText = "Zitronen sind sauer und Wasser ist mild. Diesen Unterschied misst man mit PH-Werten. Eine Skala von 0 bis 14, wobei 0 sehr sauer ist und 14 ganz mild, genannt Alkalisch.";
            break;
        case 1: //
            text.innerText = "Es gibt spezielles Papier, welches sich verfärbt wenn man es in eine Flüsigkeit hält. So kann man den PH-Wert messen. ";
            break;
        case 2: //
            bild.src = "pics/chemie/ph_tutorial.png"
            bild.style.width = "450px"
            text.innerText = "Mittel die den PH-Wert 0 bis 1 haben, also starke Säuren, und 10 -14 sogenannte Laugen sind schädlich für den Körper und sollten vermieden werden.";
            break;
        case 3: //
            bild.src = "pics/chemie/tutorial_ph.png"
            bild.style.width = "650px"
            //bild.style.left = "20%"
            text.innerText = "In der nächsten Aufgabe zeige ich dir einige Bilder die du bestimmt kennst.  Dabei klickst du auf das Bild und dann auf den Kasten."

            break;
        case 4: //
            text.innerText = "Bitte ordne die Bilder den Zahlen zu wie du es vermutest. Als kleiner Tip, erinnere dich wie die Sachen schmecken oder sich anfühlen."
            break;
    }
    console.log(flag);
}

function aktuellPfeilPosiChe3(text,pfeil1,pfeil2,pfeil3, posi){
    switch(posi){
        case 0: 
        text.innerText = "Das Periodensystem ist eine Tabelle, in der sich alle 118 chemischen Elemente befinden, die es auf der Welt gibt. Element sind Grundbestandteile, wie Zutaten beim Kochen.";
            pfeil1.style.display = "none";
            pfeil2.style.display = "none";
            pfeil3.style.display = "none";
            break;
        case 1: //
            text.innerText = "Angeordnet wird das Periodensystem nach der Ordnungszahl. Diese wird durch die Anzahl von Protonen in einem Element definiert. Das Proton ist ein positiv geladenes Teilchen im Element.";
            pfeil1.style.display = "flex"
            pfeil1.style.left = "49%";
            pfeil1.style.top = "14%";
            pfeil1.style.transform = "rotate(90deg)"
            break;
        case 2: //
            text.innerText = "In der Mitte befindet sich das Symbol eines Elements. Dieses wird aus Buchstaben des Namens zusammengesetzt. Genau wie die ersten Buchstaben beim Autokennzeichen für den Ort stehen. ";
            pfeil1.style.left = "64%";
            pfeil1.style.top = "16%";
            pfeil1.style.transform = "rotate(90deg)"
            break;
        case 3: //
            text.innerText = "Die Farben fallen immer als erstes auf. Diese geben an welche Eigenschaft ein Element hat. Diese Information steht meistens beim Periodensystem dabei, also brauchst du dir deswegen keine Sorgen machen."
            pfeil1.style.display = "none";
            break;
        case 4: //
            text.innerText = "Einige Elemente kennst du sicher schon aus deinem Umfeld. Wie zum Beispiel Helium, Magnesium und Gold."
            pfeil1.style.display = "flex"
            pfeil1.style.left = "85%";
            pfeil1.style.top = "22.5%";
            pfeil1.style.transform = "rotate(0deg)"
            pfeil2.style.display = "flex"
            pfeil2.style.left = "62%";
            pfeil2.style.top = "46%";
            pfeil2.style.transform = "rotate(90deg)"
            pfeil3.style.display = "flex"
            pfeil3.style.left = "30%";
            pfeil3.style.top = "35.5%";
            pfeil3.style.transform = "rotate(180deg)"
            break;
        case 5: //
            text.innerText = "Die nächste Aufgabe erfordert von dir, das Periodensystem einzufärben. Dir wird oben eine Hilfestellung gegeben, welche du unten auswählst und dann auf das Bild klickst."
            pfeil1.style.display = "none";
            pfeil2.style.display = "none";
            pfeil3.style.display = "none";
            break;
    }
    console.log(posi);
}

function aktuellTutorialPhy1(text, bild, kopf, flag){
    switch(flag){
        case 0:
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            text.innerText = "Willkommen im Physiklabor! Zu Beginn möchte ich dir gerne das Gleichgewichtskonzept beibringen!";
            break;
        case 1:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Hier siehst du eine Waage, welche sich im Gleichgewicht befindet."
            break;
        case 2:
            bild.src = "pics/physik/gleichgewichtskonzept/waage_ung_links.png";
            text.innerText = "Wenn jedoch eine Seite mehr Gewicht trägt als die andere Seite, fällt die Waage ins Ungleichgewicht!";
            break;
        case 3:
            kopf.src = "pics/spieleRelevant/avatar_agreeing.png";
            text.innerText = "Damit die Waage nun aber wieder ins Gleichgewicht fällt, müssen wir auf der einen Seite Gewicht hinzufügen oder auf der anderen Seite Gewichte entfernen.";
            break;
        case 4:
            text.innerText = "Belassen wir es aber erstmal bei: Gewicht hinzufügen!";
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            break;
        case 5:
            text.innerText = "Dies ist ein Gewicht. Mit Gewichten und einer Waage kann man durch Gleichsetzung ermitteln wie Schwer ein Objekt ist";
            bild.src = "pics/physik/gleichgewichtskonzept/fettes_gewicht.png";
            bild.style.border = "2px solid black";
            break;
        case 6:
            text.innerText = "Die Waage fällt ins Gleichgewicht wenn auf der einen Seite, sich genauso viel Gewicht befindet wie auf der anderen Seite.";
            kopf.src = "pics/spieleRelevant/avatar_agreeing.png";
            bild.src = "pics/physik/gleichgewichtskonzept/waage_gleichgewicht.png";
            bild.style.display = "block";
            break;
        case 7:
            text.innerText = "Dies ist erstmal alles was du für die Gleichsetztung wissen musst. Mach dich nun bereit, denn hier kommt dein erstes Rätsel!"
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            bild.style.display = "none";
            break;
        case 8:
            text.innerText = "Nutze die Gewichte auf der linken Seite um die Waage auszugleichen. Wähle ein Gewicht aus in dem du es anklickst ";
            kopf.src = "pics/spieleRelevant/avatar_agreeing.png"
            bild.src = "pics/physik/gleichgewichtskonzept/tutorial_pic_1s.png";
            bild.style.display ="block";
            break;
        case 9:
            text.innerText = "Klicke anschließend auf die Seite wo du das Gewicht hinzufügen möchtest. Doch Vorsicht! Du kannst die Gewichte nur hinzufügen und nicht entfernen!";
            bild.src = "pics/physik/gleichgewichtskonzept/tutorial_pic_2.png"
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            break;
        case 10:
            text.innerText = "Du weißt, wenn du das Level geschafft hast, dann wird ein Pfeil in der unteren rechten Ecke auftauchen."
            bild.src ="pics/physik/gleichgewichtskonzept/tutorial_pic_3.png";
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            bild.style.display = "block";
            break;
        case 11:
            bild.style.display = "none";
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Nun wünsche ich dir Viel Glück! Den Rest muss du selber schaffen!!!"
            break;
    }
    console.log(flag);
}

function aktuellTutorialPhy2(text, bild, kopf, flag){
    switch(flag){
        case 0:
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            text.innerText = "Willkommen Zurück! Nun werde ich dich ein bisschen in Magnetismus Unterrichten!";
            break;
        case 1:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Hier siehst du wie ein klassischer Stabmagnet aufgebaut ist. Anhand der schwarzen Linien kannst du erkennen wie sich das Magnetfeld aufgebaut hat."
            break;
        case 2:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Wie du sicherlich schon weißt, haben Magnete einen Nord- und Süd- Pol. Diese sind jeweils mit N und S makiert. ";
            break;
        case 3:
            kopf.src = "pics/spieleRelevant/avatar_agreeing.png";
            text.innerText = "Magnete können aus verschiedenen Elementen bestehen, zum Beispiel aus Eisen, Cobalt oder Nickel. Doch nicht nur Metalle können Magnetfelder haben.";
            bild.src = "pics/physik/magnetismus/magnet_yuhu.png";
            bild.style.border = "2px solid black";
            break;
        case 4:
            text.innerText = "Sogar unsere Erde hat ihr eigenes Magnetfeld! Dies liegt daran das unser Erdkern hauptsächlich aus geschmolzenem Eisen besteht.";
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            bild.src = "pics/physik/magnetismus/erde.png";
            bild.style.border = "none";
            break;
        case 5:
            text.innerText = "Und wir sollten sogar dankbar darüber sein, dass die Erde ein Magnetfeld hat, denn dies dient als 'Schutzschild' gegen solarische Angriffe der Sonne!";
            bild.src = "pics/physik/magnetismus/erde_battlet.jpg";
            bild.style.border = "2px solid black";
            break;
        case 6:
            text.innerText = "Und wegen des Erdmagnetfeldes können wir an unserem Nordpol und Südpol die arktischen Lichter beobachten.";
            kopf.src = "pics/spieleRelevant/avatar_agreeing.png";
            bild.style.display = "block";
            break;
        case 7:
            text.innerText = "Besprechen wir nun deine nächste Aufgabe."
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            break;
        case 8:
            text.innerText = "Hierbei musst du einfach die Magnete in die richtige Position drehen, sodass sich diese entweder anziehen oder abstoßen."
            bild.src = "pics/physik/magnetismus/tutorial_magnet.png";
            break;
        case 9:
            text.innerText = "Zuerst wählst du einen Magneten aus der Arbeitsfläche aus. Dieser Magnet wird anschließend Oben angezeigt.";
            bild.src = "pics/physik/magnetismus/tutorial_magnet_1.png";
            break;
        case 10:
            text.innerText = "Mithilfe der Pfeile kannst du den Magneten drehen.";
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            bild.src = "pics/physik/magnetismus/tutorial_magnet_2.png";
            break;
        case 11:
            text.innerText = "Wenn du dir dann sicher bist, dass du die Magneten richtig positioniert hast, drücke auf den Bestätigungshacken rechts neben der Aufgabe.";
            bild.src = "pics/physik/magnetismus/tutorial_magnet_3.png";
            kopf.src = "pics/spieleRelevant/avatar_agreeing.png";
            break;
        case 12:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Dies ist alles was ich dir nun erstmal beibringen konnte. Viel Glück bei der nächsten Aufgabe!"
            break;
    }
    console.log(flag);
}

function aktuellTutorialPhy3(text, bild, kopf, flag){
    switch(flag){
        case 0:
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            bild.style.display = "none";
            text.innerText = "So sehen wir uns also wieder! Willkommen zurück bei Physik!";
            break;
        case 1:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            bild.style.display = "block";
            bild.style.backgroundImage = "url('pics/physik/elektrik/einfache_schaltung.png')";
            text.innerText = "Diesmal erkläre ich dir etwas über Elektrik. Dies ist mein Lieblingsthema also mach dich gespannt!";
            break;
        case 2:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            bild.style.backgroundImage = "url('pics/physik/elektrik/reihenschaltung.png')";
            text.innerText = "Um genauer zu sein, werde ich dir nun sehr einfache Schaltungen vorstellen, welche du später selbst zusammensetzen sollst.";
            break;
        case 3:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Damit eine Lampe leuchtet, benötigen wir Strom. Der Strom kommt aus einer Stromquelle, welche ein positives und ein negatives Ende besitzt.";
            break;
        case 4:
            kopf.src = "pics/spieleRelevant/avatar_happy.png"
            bild.style.backgroundImage = "url('pics/physik/elektrik/einfache_schaltung.png')";
            text.innerText = "In der Physik fließt der Strom vom Negativen Ende zum Positiven. Was das aber zu bedeuten hat brauchst du grad nicht wissen."
            break;
        case 5:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Damit der Strom von der Stromquelle zur Lampe fließt, müssen wir den Stromkreis schließen. Dabei helfen uns die Kabel, welche direkt mit der Lampe und der Stromquelle verbunden sind.";
            break;
        case 6:
            kopf.src = "pics/spieleRelevant/avatar_neutral.png";
            text.innerText = "Wir benötigen 2 Kabel, da wenn das Plus-Pol und das Negativ-Pol direkt miteinader verbunden währen, ein Kurzschluss enstehen würde!";
            break;
        case 7:
            kopf.src = "pics/spieleRelevant/avatar_talking.png";
            text.innerText = "Wie fürchterlich!"
            break;
        case 8:
            kopf.src = "pics/spieleRelevant/avatar_talking.png";
            text.innerText = "Ein Kurzschluss ensteht also, wenn die Batterie direkt mit der Batterie verbunden ist.";
            break;
        case 9:
            bild.style.backgroundImage = "url('pics/physik/elektrik/einfache_schaltung.png')";
            text.innerText = "Bei diesem Stromkreis wird die Lampe automatisch aktiviert sobald die Kabel verbunden sind.";
            break;
        case 10:
            bild.style.backgroundImage = "url('pics/physik/elektrik/reihenschaltung.png')";
            text.innerText = "Wenn wir aber die Lampe steuern möchten benötigen wir einen Schalter.";
            break;
        case 11:
            text.innerText = "Wenn der Schalter umgelegt wird, ist der Stromkreis geschlossen und der Strom kann fließen.";
            break;
        case 12:
            kopf.src = "pics/spieleRelevant/avatar_happy.png";
            text.innerText = "Soviel erstmal zur Elektrik! Mach dich bereit denn hier kommt dein nächstes Rätsel!";
            break;
        case 13:
            text.innerText = "Bei deinem nächsten Rätsel musst du mithilfe der elektrischen Elemente den Stromkreis vervollständigen";
            kopf.src ="pics/spieleRelevant/avatar_neutral.png";
            bild.style.height = "50%";
            break;
        case 14:
            text.innerText = "Dabei wählst du das Element links aus und packst es an die Stelle, wo du es im Schaltkreis haben möchtest"
            bild.style.backgroundImage = "url(pics/physik/elektrik/tutorial_elektrik_1.png)";
            bild.style.height = "62%";
            break;
        case 15:
            text.innerText = "Jedoch kannst du nur Elemente dort hinschieben, wo sich diese Kästen befinden. Pass jedoch darauf auf, dass du den Strom immer optional benutzt. Sonst wenn du eine zu schwache Batterie benutzt, kein Strom mehr übrig bleibt!";
            break;
        case 16:
            text.innerText = "Oben gibt es eine Hilfestellung, wie du den Schaltkreis vervollständigen kannst. Vergiss nicht! : Blos keinen Kurzschluss machen, sonst verlierst du ein Leben.";
            bild.style.backgroundImage = "url(pics/physik/elektrik/tutorial_elektrik_2.png)";
            break;
        case 17:
            text.innerText = "Mehr brauchst du nicht zu wissen. Viel Glück bei deinem nächsten Rätsel!";
            break;
    }
    console.log(flag);
}

function aktuellLebensLeiste(leben1,leben2,leben3,anzahlLeben){
    if(anzahlLeben == 3){
        leben1.style.display = "block";
        leben2.style.display = "block";
        leben3.style.display = "block";
    }
    if(anzahlLeben == 2){
        leben3.style.display = "none";
    }
    else if(anzahlLeben == 1){
        leben2.style.display = "none";
    }else if(anzahlLeben == 0){
        leben1.style.display = "none";
    }
}

function magnetStatus(magnet1, magnet2){
    //Anziehen oder Abstoßen
    if((magnet1.alt == "oben" && magnet2.alt == "unten") || (magnet1.alt == "unten" && magnet2.alt == "oben") || (magnet1.alt == "rechts" && magnet2.alt == "rechts") || (magnet1.alt == "links" && magnet2.alt == "links")){
        return "anziehend";
    }else if((magnet1.alt == "oben" && magnet2.alt == "oben") ||(magnet1.alt == "unten" && magnet2.alt == "unten") || (magnet1.alt == "links" && magnet2.alt == "rechts") || (magnet1.alt == "rechts" && magnet2.alt == "links")){
        return "abstoßend";
    }else {
        return "nichts";
    }
}

function audiohandler(scene,player,src,prog, skip, spieltAudio){

    if(skip >= 1){
        skip--;
    }else{
        switch(scene){
        case scenen.NAME:
            src.src = "music/background_music.mp3"; 
            break;
        case scenen.BEGRUESZUNG:
            break;
        case scenen.HAUPTMENU:
            src.src = "music/background_music.mp3";
            player.load();
            break;
        case scenen.BIOLOGIE:
                switch(prog){
                    case 0:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 1:
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break;
                    case 2:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 3:
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break; 
                    case 4:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 5: 
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break; 
                }
                break;
        case scenen.CHEMIE:
                switch(prog){
                    case 0:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 1:
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break;
                    case 2:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 3:
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break; 
                    case 4:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 5: 
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break; 
                }
                break;
        case scenen.PHYSIK:
                switch(prog){
                    case 0:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 1:
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break;
                    case 2:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 3:
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break; 
                    case 4:
                        src.src = "music/tutorial_music.mp3"
                        player.load();
                        break;
                    case 5: 
                        src.src = "music/ohohlevelmusictime_music.mp3"
                        player.load();
                        break; 
                }
                break;
        }
    }
    if(spieltAudio){
        player.play();
    }

    console.log("Audio spiel: " + player.paused);
    
}

function randomTisch(imgArray){
    for (var i = imgArray.length - 1; i > 0; i--) {
 
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var tempSRC = imgArray[i].src;
        var tempALT = imgArray[i].alt;
        var tempNAME = imgArray[i].name;
        imgArray[i].src = imgArray[j].src;
        imgArray[i].alt = imgArray[j].alt;
        imgArray[i].name = imgArray[j].name;
        imgArray[j].src = tempSRC;
        imgArray[j].alt = tempALT;
        imgArray[j].name = tempNAME;
    }
    return imgArray;
}

