kerdesek = [
    {
        k: "Honnan származik a Toblerone csoki?",
        v1: "Amerika",
        v2: "Svájc",
        v3: "Németország",
        v4: "Görögország",
        jo: "2"
    },
    {
        k: "Minek a rövidítése a HP márkanév?",
        v1: "Hewlett-Packard, az alapítók nevei",
        v2: "Hooks and Printers, utalva arra, amit gyártanak",
        v3: "Hanoi Paper",
        v4: "Nem rövidítés",
        jo: "1"
    },
    {
        k: "Melyik színre a legérzékenyebb az emberi szem?",
        v1: "kék",
        v2: "sárga",
        v3: "fehér",
        v4: "zöld",
        jo: "4"
    },
    {
        k: "Ki találta fel a golyóstollat?",
        v1: "Alden Downsend",
        v2: "Thomas Edison",
        v3: "Yagura Kücü",
        v4: "Bíró László",
        jo: "4"
    },
    {
        k: "Hány voltos egy ceruzaelem?",
        v1: "0.5V",
        v2: "1.0V",
        v3: "1.5V",
        v4: "3.0V",
        jo: "3"
    },
    {
        k: "Ki tervezte a Móricz Zsigmond Református Kollégium épületét?",
        v1: "Alpár Ignác",
        v2: "Deseffwy Soma",
        v3: "Aczél Gábor",
        v4: "Bauer Emil",
        jo: "1"
    },
    {
        k: "Hol található a Gare de Bures-sur-Yvette vasútállomás?",
        v1: "Olaszországban",
        v2: "Franciaországban",
        v3: "Görögországban",
        v4: "Hollandiában",
        jo: "2"
    },
    {
        k: "A hiedelem szerint hány élete van a macskáknak?",
        v1: "3",
        v2: "5", 
        v3: "9",
        v4: "10",
        jo: "3"
    },
    {
        k: "Mikor jelent meg a Big Mac?",
        v1: "1920",
        v2: "1934",
        v3: "1945",
        v4: "1968",
        jo: "4"
    },
    {
        k: "Mit jelent az alábbi olasz mondat: 'Ti butto dalla finestra.'?",
        v1: "Mindannyiunkért eljönnek",
        v2: "Dalra fakadtak",
        v3: "Kidoblak az ablakon",
        v4: "Ketten utazunk együtt",
        jo: "3"
    }
];

var s=""
var index=0

var kerdesek=() =>
{
   s=""
   s+="<h1>"+kerdesek[index].k+"</h1><br>"
   s+='<input type="valaszok" id="k1" name="valasz" value="1"><label for="k1">'+kerdesek[index].v1+'</label><br><input type="valaszok" id="k2" name="valasz" value="2"><label for="k2">'+kerdesek[index].v2+'</label><br><input type="valaszok" id="k3" name="valasz" value="3"><label for="k3">'+kerdesek[index].v3+'</label><input type="valaszok" id="k4" name="valasz" value="4"><label for="k4">'+kerdesek[index].v4+'</label>'
   if(index>=kerdesek.length)
        {
            index++
        }
    document.getElementById("kerdesek").innerHTML=s
}

var betoltes=() =>
{
    shuffleArray(kerdesek)
    kerdesek()
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}