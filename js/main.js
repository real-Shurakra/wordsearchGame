class wordsearchGame {
    loadWords() {
        try{
            let wordsArray = Array("aalen", "Abart", "abbat", "Abbau", "abbog", "Abend", "abgab", "Abgas", "abhob", "Abhol", "Abhör", "abkam", "ablag", "abmaß", "Abort", "Abruf", "absah", "Absud", "abtat", "Abtei", "abtun", "Abweg", "abwog", "abzog", "Abzug", "Achse", "Acker", "Acryl", "Adams", "adeln", "Adels", "adieu", "Adler", "adlig", "Äcker", "äffen", "Äffin", "Ägide", "Ähren", "älter", "Ämter", "Äpfel", "ärger", "Ärmel", "ärmer", "Ärzte", "Äther", "ätsch", "Ätzen", "äugen", "Affen", "affig", "After", "Agave", "Agent", "Agrar", "ahmen", "ahnen", "Ahorn", "Akten", "Aktie", "aktiv", "Aktor", "Alarm", "Alben", "Album", "alert", "alias", "Alibi", "Allee", "allwo", "allzu", "Alpen", "Alpha", "alpin", "Altar", "Alten", "Alter", "Altöl", "Ammen", "Ampel", "Amsel", "amten", "Anbau", "anbei", "anbot", "andre", "angab", "Angel", "angst", "anhob", "ankam", "Anker", "Anmut", "Anruf", "ansah", "antat", "antik", "antun", "anzog", "Anzug", "apart", "Apfel", "April", "Apsis", "Arche", "Areal", "Arena", "Arier", "Armee", "Armen", "Armut", "Aroma", "Arsch", "Arsen", "arten", "artig", "Asche", "Asien", "Asket", "Aspik", "Assel", "Aster", "Astro", "Atlas", "atmen", "Atoll", "Audio", "außen", "außer", "Augen", "Autor", "Axiom", "baden", "Bahre", "Bambi", "banal", "Bande", "Banjo", "Barde", "Baron", "barst", "basal", "Basar", "Basis", "Batik", "Bauch", "bauen", "Bauer", "Bäche", "Böcke", "bäckt", "Böden", "Bäder", "beben", "Beere", "begab", "beide", "beige", "bekam", "Belag", "Beleg", "belud", "bemaß", "büßen", "Büßer", "Berge", "Beruf", "besaß", "besah", "Besen", "beste", "beten", "Beton", "Beuge", "Beule", "Beute", "bevor", "bewog", "Bezug", "Bügel", "Bögen", "Bühne", "Bibel", "Biber", "Biene", "Biest", "Binde", "binär", "Binse", "birgt", "Birke", "Birne", "Bitte", "Biwak", "büken", "blank", "Blase", "blass", "Blatt", "Bälde", "Blöße", "Blech", "blich", "Blick", "blieb", "blies", "blind", "Blink", "Blitz", "Block", "blond", "bläst", "Blüte", "Bluff", "Blume", "Bluse", "Bände", "Bänke", "Boden", "Bogen", "Bohle", "Bohne", "Bombe", "Bongo", "Bonus", "Bonze", "Boots", "Borke", "Borte", "Boten", "Bowle", "boxen", "Boxer", "brach", "Brand", "Braue", "braun", "Braut", "Börde", "Brech", "breit", "Brems", "Bären", "Brenn", "Brett", "Brühe", "Brief", "briet", "Brise", "Brite", "Börse", "brüsk", "Bärte", "Bruch", "Brumm", "Brust", "Büste", "Buben", "buhen", "Bulle", "bäumt", "Busch", "Busen", "Butan", "Butze", "Celli", "Cello", "Chaos", "Chaot", "Chlor", "Choke", "Chöre", "Chrom", "Civil", "Clown", "Cobra", "Codex", "Comic", "Couch", "Coupe", "Creme", "Curry", "dabei", "Dachs", "dafür", "daher", "dahin", "Damen", "damit", "Dampf", "Dandy", "daran", "darum", "dasaß", "Datei", "Daten", "Datex", "Dativ", "Datum", "Dauer", "Daune", "davon", "davor", "Dübel", "debil", "Debüt", "Degen", "Deich", "Dekan", "Dekor", "Delle", "Delta", "Demut", "Depot", "derer", "desto", "Devon", "devot", "Düfte", "dicht", "Diele", "Dildo", "Dinar", "Diode", "Dirne", "Diwan", "Dämme", "Dämon", "Döner", "Dünge", "dünkt", "Docht", "Dogge", "Dogma", "Dohle", "Dolch", "Donau", "Dosen", "Dosis", "Draht", "drall", "Drama", "drang", "drauf", "Dreck", "dröge", "Drift", "Drink", "dritt", "Därme", "Droge", "Dürre", "Drüse", "Druck", "dösen", "Dudel", "Duell", "Duett", "dumpf", "Dunst", "durch", "Durst", "Dusch", "Dusel", "duzen", "ebben", "Ebene", "ebnen", "ecken", "eckig", "Edukt", "ehren", "Eiche", "Eifer", "eigen", "eilen", "eilig", "Eimer", "einen", "einig", "Eisen", "eisig", "eitel", "Eiter", "ekeln", "Eklat", "eklig", "Ekzem", "elend", "Elfen", "Elite", "Ellen", "empor", "emsig", "enden", "Engel", "engen", "Enkel", "enorm", "Enten", "Enzym", "erbat", "erben", "Erbin", "Erbse", "erden", "erdig", "Erdöl", "ergab", "Erker", "erlag", "Erlös", "ernst", "Ernte", "erzog", "Esche", "Essen", "Esser", "Essig", "Etage", "Etüde", "Ethik", "Ethos", "Eulen", "Euter", "exakt", "extra", "Fabel", "Faden", "Fahne", "Fahrt", "Falke", "Falle", "falls", "Falte", "famos", "Fango", "Farbe", "Fasan", "Faser", "fatal", "Fatum", "Fauna", "Faust", "faxen", "Fazit", "Fäden", "Fecht", "Feder", "fegen", "Feger", "Fehde", "Feier", "Feile", "feind", "Felge", "Ferse", "fesch", "Feuer", "fügen", "fähig", "Fähre", "fährt", "Fibel", "Fiber", "fidel", "Figur", "Filet", "final", "finit", "Finne", "Finte", "Firma", "First", "Fisch", "fixen", "Fixer", "Fjord", "flach", "Flair", "Flaum", "Fleck", "Fleiß", "flöge", "Flöhe", "Fließ", "flink", "Flirt", "Fülle", "Flora", "floss", "flott", "Flöte", "Fluch", "flugs", "Fluid", "Fluor", "Fluss", "fünft", "fängt", "focht", "Fokus", "Folge", "Folie", "Foren", "Forst", "Forum", "Fotze", "Foyer", "Frack", "Frage", "Franc", "fräße", "Freak", "frech", "fremd", "Fress", "Freud", "Frist", "fromm", "Front", "Frost", "Fürst", "Frust", "Fürze", "Föten", "Fötus", "Fuchs", "Fuder", "fußen", "Fugen", "Fuhre", "Fäule", "Furie", "Fusel", "Futur", "Gabel", "Galle", "Garbe", "Garde", "garni", "Gasöl", "Gasse", "Gassi", "Gatte", "Gauda", "gebar", "geben", "Geber", "Gebet", "Gebot", "Gebär", "geübt", "Gefäß", "gegen", "gehen", "Gehör", "Geier", "Geige", "Geist", "Gelee", "geölt", "gemäß", "Gemüt", "genau", "Genie", "Genom", "Genre", "genug", "Genus", "Gerät", "Gerte", "Gesäß", "gesät", "Geäst", "Geste", "getan", "Getto", "Getue", "Gicht", "Gilde", "Ginko", "Glanz", "glatt", "Glück", "Gleis", "Gleit", "glich", "Glied", "Glimm", "glitt", "gälte", "Gämse", "Gnade", "Gänse", "Gänze", "Gosse", "Gouda", "Gramm", "Graph", "gräbt", "Größe", "Greif", "Greis", "grell", "gären", "Grenz", "Grieß", "griff", "Grill", "Grips", "Groll", "Gräte", "Grube", "Gruft", "Grund", "Gäste", "Güter", "gütig", "Götze", "Gulag", "Gäule", "Gummi", "Gunst", "Gurke", "Gusto", "haben", "Hades", "Hafen", "Hafer", "Hagel", "hager", "haken", "Halde", "hallo", "Halte", "Handy", "Hanse", "Harem", "Harfe", "Hasel", "Hasen", "hatte", "Haube", "Hauch", "hauen", "Hauer", "Haupt", "Hebel", "heben", "Heber", "Hecht", "hegen", "Heide", "Helot", "Henne", "herab", "heran", "herum", "herzu", "heuer", "heute", "hexen", "Hexer", "Häfen", "Hüfte", "Hügel", "Höhen", "höher", "Höhle", "höhlt", "Hähne", "hielt", "Hilfe", "Hilfs", "hilft", "hinab", "hinan", "Hindu", "hinzu", "Hirse", "Hirte", "Hitze", "Hölle", "Hälse", "Hände", "Hänge", "Hobby", "Hobel", "Hoden", "holen", "Honig", "Horde", "Horst", "Hosen", "Hotel", "Hürde", "hören", "Hörer", "hörig", "Härte", "hüten", "Hüter", "hätte", "human", "humid", "Humor", "Humus", "Hunde", "Hunne", "hupen", "huren", "hurra", "Husar", "Häute", "Hydra", "Hymne", "Hyäne", "ideal", "Ideen", "Idiot", "Idyll", "igeln", "Ikone", "Iltis", "Image", "Imker", "immer", "immun", "indem", "indes", "Index", "Indio", "Indiz", "infam", "Innen", "innig", "Insel", "intim", "intus", "Ionen", "irden", "irren", "irrig", "Islam", "Jacht", "Jacke", "jagen", "Japan", "Jüdin", "jeher", "jetzt", "Jäger", "Joker", "Jolle", "Joule", "jäten", "Jubel", "Juden", "Jumbo", "Junge", "Juras", "Juror", "Juwel", "Kabel", "Kader", "Kakao", "Kalbs", "Kalif", "Kamel", "Kamin", "Kampf", "Kanal", "Kanne", "Kanon", "Kante", "Kappe", "Karat", "Karre", "Karte", "Kasko", "Kasse", "Kasus", "Kater", "kauen", "Kübel", "Köche", "Köder", "Kegel", "Kehle", "Kelch", "Kelle", "Kerze", "Kette", "Keule", "Käfer", "Käfig", "Kähne", "Kiepe", "Kiosk", "Kippe", "Kirch", "Kiste", "Küken", "Klage", "klamm", "klang", "Klapp", "Klebe", "Kleid", "Kleie", "klein", "Klemm", "Klick", "Klima", "klipp", "Klops", "Klotz", "Kälte", "Kluft", "kämen", "Knabe", "Knack", "Knall", "knapp", "Knast", "Knauf", "Knick", "knien", "kniff", "König", "Knopf", "Kobra", "Kodex", "Kohle", "Kokon", "Kolik", "Komet", "Komik", "Komma", "Konto", "Kopie", "Koran", "Korps", "Korso", "Kosak", "Köpfe", "Krach", "kraft", "Krake", "krank", "Kranz", "krass", "kraus", "Kraut", "Körbe", "Krebs", "Kreis", "küren", "Krepp", "Kreuz", "Krähe", "Krieg", "Krimi", "Krise", "Kräne", "kroch", "Krone", "Kropf", "kross", "Kröte", "Krume", "krumm", "Küste", "Köter", "Kuben", "Kubus", "Kugel", "Kuhle", "Kunde", "Kunst", "Kupee", "Kupon", "Kuppe", "kuren", "Kurie", "Kurve", "laben", "labil", "Labor", "Lache", "Lachs", "laden", "Lader", "Lagen", "Lager", "Lakai", "Laken", "Lamee", "Lampe", "Lande", "Lanze", "Larve", "Laser", "Lasso", "Latex", "Latte", "Laube", "Lauch", "Lauer", "Laune", "Lücke", "Läden", "leben", "Leber", "Leder", "ledig", "legal", "legen", "leger", "Lehne", "Lehre", "leibt", "Leier", "Leine", "leise", "Lemma", "Lende", "Lepra", "Lesbe", "lesen", "Leser", "Letzt", "Leute", "lägen", "Löhne", "Liane", "licht", "Liebe", "Liege", "liest", "Ligen", "Likör", "Lilie", "Limes", "Limit", "Linde", "Linie", "linke", "links", "Linse", "Lippe", "Liter", "Litze", "Länge", "längs", "Lobby", "loben", "Logik", "Logis", "lokal", "losen", "loten", "Lotos", "Lotse", "Lotto", "loyal", "Lösch", "lösen", "lässt", "Lüste", "löten", "Luchs", "Luder", "läuft", "lugen", "Lunge", "Lunte", "Läuse", "Luxus", "Löwen", "Lymph", "Lyrik", "Macho", "Macht", "Macke", "madig", "Mafia", "Magen", "mager", "Magie", "Magma", "magst", "Major", "Makel", "Makro", "malen", "Maler", "Malus", "Malve", "manch", "Manie", "Manko", "Manna", "Mappe", "Marge", "Markt", "Maske", "Masse", "Mauer", "Möbel", "Mücke", "Mädel", "Media", "Meile", "Meise", "meist", "Melde", "Menge", "Mensa", "Messe", "Meter", "Meute", "mögen", "mähen", "Mühle", "Mähne", "Möhre", "Miene", "Miete", "Mieze", "mäßig", "Mikro", "Milan", "Milbe", "Milch", "Miliz", "Mimik", "Minen", "minus", "Misch", "Mitte", "mixen", "Mixer", "Mönch", "Münze", "mobil", "Modul", "Modus", "Mogul", "Moiré", "Mokka", "Monat", "Moped", "Moral", "Morse", "Motel", "Motiv", "Motor", "Motte", "Motto", "Möpse", "mürbe", "Müsli", "Mütze", "Muffe", "Mulde", "Multi", "Mumie", "Murks", "Mäuse", "Musik", "musst", "muten", "mutig", "Mutti", "Myrre", "Mäzen", "Nabel", "Nacht", "nackt", "Nadel", "Nagel", "nagen", "Nager", "nahen", "Namen", "Narbe", "Nasen", "nativ", "Natur", "Nebel", "neben", "nebst", "Neffe", "Neger", "Nelke", "netto", "neuer", "neunt", "Nägel", "nähen", "näher", "nicht", "Niere", "Niete", "nimmt", "nobel", "Nomen", "Nonne", "norme", "Notar", "Noten", "Notiz", "Novum", "Nässe", "nötig", "Nudel", "Nugat", "Nutte", "Nylon", "Obhut", "oblag", "ocker", "Odium", "öfter", "Ölung", "offen", "Oheim", "Ohren", "Oktan", "Oktav", "Olive", "Olymp", "Onkel", "Opern", "Opfer", "Opium", "Optik", "Orbit", "Orden", "Order", "Organ", "Orgel", "Orgie", "Orkan", "orten", "Osten", "Oster", "Otter", "Ozean", "Pacht", "Paket", "Palme", "Panik", "Panne", "Pappe", "Papst", "parat", "Pasta", "Paste", "Pater", "Pauke", "Pause", "Pöbel", "Pedal", "Pegel", "Penis", "Perle", "Pfahl", "Pfand", "Pfarr", "Pfeil", "Pferd", "pfiff", "Pflug", "Pfote", "Pfuhl", "Pfund", "Phase", "Photo", "piano", "Piezo", "Pille", "Pilot", "Pinie", "Pinne", "Pirat", "Piste", "Pixel", "Pizza", "platt", "Platz", "Pläne", "plump", "Pluto", "Pokal", "Poker", "polar", "Polen", "polig", "Polis", "Polit", "Polle", "Polyp", "Poren", "Porno", "porös", "Porti", "Porto", "Posse", "prall", "prüde", "Püree", "Preis", "Press", "pries", "prima", "Prime", "Prinz", "Probe", "Profi", "Prosa", "prost", "Prunk", "Psalm", "Pudel", "Puder", "Pulle", "Pulli", "Pumpe", "Punkt", "Puppe", "Puter", "Pylon", "Qualm", "Quant", "Quark", "Quart", "Quarz", "quasi", "Quell", "Quere", "Quirl", "quitt", "Quote", "Rache", "Radar", "Radau", "Radio", "Radon", "ragen", "Rampe", "rapid", "Rappe", "rasch", "rasen", "Rasse", "raten", "Ratte", "Rauch", "Raudi", "rauen", "Raupe", "Röcke", "Räder", "Realo", "recht", "reden", "reell", "Regal", "Regel", "regen", "Regie", "reich", "Reihe", "Reise", "remis", "Rente", "reuig", "Revue", "rügen", "Röhre", "Richt", "Ricke", "Riege", "Riese", "riete", "rigid", "Rille", "Rinde", "rings", "Rinne", "Rippe", "Riten", "Römer", "Robbe", "roden", "Rohöl", "Rolle", "Rolli", "Roman", "Rommé", "Rondo", "Rosen", "rosig", "Rotor", "Route", "Räson", "röter", "rätst", "Rubel", "Rubin", "Ruder", "rufen", "Rufer", "Rugby", "ruhen", "ruhig", "rußig", "Rumpf", "Runde", "Rupie", "Sache", "sacht", "sagen", "Sahne", "Saite", "Salat", "Salbe", "Saldo", "Salon", "Salto", "Salut", "Salve", "Samba", "Samen", "sanft", "Satan", "Satin", "Satyr", "Sauce", "sauen", "sauer", "Sauna", "Säbel", "Schad", "Schaf", "Schah", "schal", "Scham", "Schar", "Schau", "scheu", "schön", "Schoß", "schob", "schon", "schor", "Schub", "schuf", "Schuh", "Schul", "Schur", "Säcke", "Süden", "sechs", "Seele", "Segel", "Segen", "sehen", "Seher", "Seide", "Seife", "Seite", "selbe", "selig", "Semit", "süßen", "Senat", "Sende", "senil", "Señor", "Seren", "Serie", "Serum", "Sesam", "Sexte", "Sexus", "Säfte", "sägen", "Sühne", "Sicht", "siech", "sieht", "Silbe", "Sinus", "Sippe", "Sirup", "Sitte", "Skala", "Skalp", "Skier", "Slawe", "Sülze", "smart", "sämig", "Sünde", "Socke", "Soßen", "sogar", "Sohle", "solch", "Solei", "solle", "somit", "Sonde", "Sonne", "sonor", "sonst", "sooft", "Sorge", "Sorte", "sowie", "Spalt", "Spann", "Spant", "Spatz", "Späße", "Speck", "Speer", "Sperr", "Spezi", "Spieß", "Spiel", "spien", "Spike", "Spind", "Spion", "spitz", "Späne", "Spore", "Sporn", "Sport", "Spott", "spröd", "Spreu", "Sprüh", "Sprit", "Spule", "Spurt", "Särge", "Staat", "Stabs", "stach", "Stadt", "stahl", "Stall", "Stamm", "stand", "stank", "starb", "stark", "starr", "Start", "statt", "Staub", "Stäbe", "Stück", "Steak", "Stech", "Steck", "Steiß", "steif", "Steig", "steil", "Stein", "Stell", "Stemm", "Stern", "stete", "stets", "Stich", "stieß", "stieg", "Stiel", "Stier", "Stift", "still", "Stimm", "Stirn", "Stock", "Stoff", "Stola", "stolz", "Stopp", "Straf", "Streb", "Streu", "Stroh", "Strom", "stößt", "Stütz", "Stube", "Stuck", "Stufe", "Stuhl", "stumm", "Stunk", "Sturm", "Sturz", "Stuss", "Stute", "Sätze", "Suche", "Sucht", "säuft", "Suite", "Säule", "Summe", "Sumpf", "super", "Suppe", "Säure", "Sushi", "Szene", "Tabak", "Tadel", "Tafel", "tagen", "Tages", "Taiga", "Takel", "Taler", "Talon", "Tango", "Tanne", "Tante", "Tapet", "Tarif", "Tasse", "Taste", "Tatze", "Taube", "Tauch", "tauen", "Taxen", "Tücke", "Teeei", "Teich", "Teile", "Teint", "Telex", "Tempo", "Tenne", "Tenor", "teuer", "Theke", "Thema", "These", "Thron", "Tiger", "Tilde", "Tinte", "Tisch", "Titan", "Titel", "Täler", "tönen", "Tänze", "Toast", "toben", "Todes", "Tonne", "Topas", "Torso", "Torte", "tosen", "total", "Toten", "Töpfe", "Trafo", "Trage", "Trakt", "trank", "Traum", "Treff", "Treib", "Trend", "Trenn", "Treue", "träfe", "Tröge", "trägt", "Trias", "Trick", "trieb", "Törin", "Trink", "trist", "Tritt", "Türme", "Troll", "Tropf", "Tross", "Trost", "Trott", "trotz", "Truhe", "Trunk", "Trupp", "töten", "Täter", "tätig", "tuend", "Tulpe", "Tumor", "Tunte", "Turbo", "Tusch", "tuten", "Tutor", "Typen", "Typus", "übrig", "üppig", "ulken", "ulkig", "Ultra", "Umbau", "umgab", "umher", "umhin", "umkam", "umsah", "umtun", "Umweg", "umzog", "Umzug", "Unfug", "Union", "unken", "Unmut", "Unrat", "Unruh", "unser", "unsre", "unten", "unter", "Urahn", "uralt", "urban", "Vater", "vegan", "Velin", "Venen", "Venus", "Vögel", "Vögte", "Video", "viert", "Vikar", "Villa", "Viper", "Viren", "Virus", "Visum", "vital", "Vlies", "Vogel", "voilà", "Vokal", "Volks", "vorab", "voran", "vorig", "Votum", "Väter", "Waage", "Wache", "Wachs", "Wacht", "Waden", "Waffe", "wagen", "Wagon", "Waise", "Walöl", "Walze", "Wange", "Wanne", "Wanst", "Wanze", "waren", "Warte", "warum", "Warze", "Wasch", "waten", "Watte", "weben", "Weber", "Wedel", "weder", "wehen", "weich", "Weide", "Weihe", "weise", "weißt", "Weite", "welch", "Welle", "Welpe", "Wende", "wenig", "Werbe", "Werft", "Werks", "Werte", "Wesen", "Wespe", "Weste", "Wette", "wägen", "Wicke", "wider", "Wiese", "wieso", "Wille", "wirbt", "wirft", "wirst", "Wisch", "Witwe", "Wölfe", "Wände", "wobei", "Woche", "Wodka", "wofür", "woher", "wohin", "Wolfs", "Wolke", "Wolle", "womit", "Wonne", "woran", "worin", "worum", "Wotan", "wovon", "wovor", "Wrack", "wrang", "würde", "wären", "Würfe", "Würge", "Wärme", "wüten", "wuchs", "Wucht", "Wulst", "Wunde", "wurde", "Wurst", "wusch", "Yacht", "Zange", "Zebra", "Zeche", "zehnt", "Zeige", "Zeile", "Zelle", "Zeter", "Zügel", "zügig", "Zähne", "Zicke", "Ziege", "Zille", "zirka", "Zitat", "Zitze", "zivil", "Zölle", "Zobel", "Zonen", "zotig", "Zöpfe", "Zäsur", "Zuber", "Zucht", "zudem", "zugab", "zugig", "zumal", "Zäune", "Zunft", "Zunge", "Zuruf", "zusah", "Zutat", "Zutun", "zuvor", "zuzog", "Zuzug", "zwang", "Zweck", "Zweig", "zweit", "Zwerg", "Zwirn", "Zwist", "zwölf", "Zyste");
            return wordsArray;
        }
        catch (error){
            console.warn(error);
        }
    }

    toDE (string) {
        string.replace('Ü', '&#220;');
        string.replace('ü', '&#252;');
        string.replace('Ö', '&#214;');
        string.replace('ö', '&#246;');
        string.replace('Ä', '&#196;');
        string.replace('ä', '&#228;');
        string.replace('ß', '&#223;');
        return string;
    }

    getWord() {
        try{
            let words = Array();
            words = this.loadWords();
            let thisWord = words[Math.floor(Math.random()*words.length)];
            return thisWord;
        }
        catch (error){
            console.warn(error);
        }
    }
    
    checkWord(word, searchWord, round) {
        try{
            let checkWord = this.checkWordExists(word);
            if (checkWord){
                for (let i = 0; i < word.length; i++) {
                    this.checkWordLetter(searchWord, word[i], round, i);
                }
            }
            else{
                let notify = new Notify();
                notify.setText(notify.noteType.hinweis, this.toDE(word + ' ist nicht in der Wordliste') )
                notify.makeModal();
                notify.showModal();
                return false;
            }

            if (word === searchWord){
                let notify = new Notify();
                notify.setText(notify.noteType.erfolg, this.toDE('<strong>Du hast gewonnen.</strong><br>Zum neu spielen F5.'))
                notify.makeModal();
                notify.showModal();
            }

            return true;
        }
        catch (error){
            console.warn(error);
        }
    }

    checkWordExists(word) {
        try{
            let words = Array();
            words = this.loadWords();
            let existCheck = words.includes(word);
            return existCheck;
        }
        catch (error){
            console.warn(error);
        }
    }

    checkWordLetter(word, letter, wordNumber, letterNumber) {
        try{
            let checkExists = word.includes(letter);
            if (checkExists){
                let checkLetter = word[letterNumber] == letter;
                if (checkLetter){
                    this.coverIsExact(letterNumber, wordNumber, letter);
                }
                else {
                    this.coverIsInside(letterNumber, wordNumber, letter)
                }
            }
            else {
                this.coverNotInside(letterNumber, wordNumber, letter)
            }
        }
        catch (error){
            console.warn(error);
        }
    }

    coverIsExact(x, y, letter) {
        try{
            let covering = '<p>'+letter+'</p>';
            let element = document.getElementById('' + y + x);
            element.setAttribute('class', 'letterExect');
            element.innerHTML = covering;

        }
        catch (error){
            console.warn(error);
        }
    }

    coverIsInside(x, y, letter) {
        try{
            let covering = '<p>'+letter+'</p>';
            let element = document.getElementById('' + y + x);
            element.setAttribute('class', 'letterInside');
            element.innerHTML = covering;
        }
        catch (error){
            console.warn(error);
        }
    }

    coverNotInside(x, y, letter) {
        try{
            let covering = '<p>'+letter+'</p>';
            let element = document.getElementById('' + y + x);
            element.innerHTML = covering;

        }
        catch (error){
            console.warn(error);
        }

    }
}

currentRound = 0;
maxRounds = 6
setRoundDisplay(currentRound + 1, maxRounds);
var gameEngine = new wordsearchGame();
searchWord = gameEngine.getWord();

function getNewWord(){
    currentRound = 0;
    let word = '';
    word = gameEngine.getWord();
    if (word.length != 5){

        return getNewWord();
    }
    else{
        return word;
    }
}

document.getElementById('wordInput').addEventListener("input", startRound);

function setRoundDisplay(nowRound, maxRound){
    document.getElementById('currentRound').innerText = 'Runde ' + nowRound + ' / ' + maxRound;
}

function startRound(){
    let word = document.getElementById('wordInput').value;
    if (word.length == 5){
        let result = gameEngine.checkWord(word, searchWord, currentRound);
        if (!result) {return;}
        currentRound = currentRound + 1;
        if (currentRound > maxRounds - 1) {
            let notify = new Notify();
            notify.setText(notify.noteType.fehler, '<strong>Du hast verloren.</strong><br>Zum neu spielen F5.')
            notify.makeModal();
            notify.showModal();
        }
        else{
            setRoundDisplay(currentRound + 1, maxRounds);
        }
        document.getElementById('wordInput').value = '';
        
    }
    
}