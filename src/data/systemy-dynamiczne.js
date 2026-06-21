const systemyDynamiczneData = {
    "id": "systemy-dynamiczne",
    "name": "Systemy dynamiczne",
    "icon": "⚙️",
    "description": "Analiza i modelowanie systemów dynamicznych — równania stanu, stabilność i sterowanie.",
    "modules": [
        {
            "id": "sd-mod-lab",
            "name": "Test labo",
            "questions": [
                {
                    "id": "sd-test-lab-001",
                    "type": "multiple",
                    "question": "Algorytmy genetyczne to",
                    "options": [
                        "algorytmy deterministyczne, wykorzystujące procesy naturalne, tj. dziedziczenie oraz darwinowską zasadę przeżycia",
                        "algorytmy, których sposób działania minimalizuje szanse utknięcia na lokalnych ekstremach",
                        "algorytmy probabilistyczne, wykazujące ściśle uwarunkowany sposób poszukiwania rozwiązania",
                        "algorytmy, w których występuje duża losowość, przez co algorytm może utykać na ekstremach lokalnych"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-002",
                    "type": "multiple",
                    "question": "Algorytmy ewolucyjne to",
                    "options": [
                        "algorytmy, których sposób działania minimalizuje szanse utknięcia na lokalnych ekstremach",
                        "algorytmy deterministyczne",
                        "algorytmy probabilistyczne (stochastyczne), wykazujące ściśle uwarunkowany sposób poszukiwania rozwiązania",
                        "algorytmy, w których występuje zbyt duża losowość, przez co algorytm może utykać na ekstremach lokalnych i nie wyznaczyć rozwiązania"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-003",
                    "type": "multiple",
                    "question": "Jak można zabezpieczyć algorytm genetyczny w problemach identyfikacji obiektów dynamicznych przed problemem przedwczesnej zbieżności",
                    "options": [
                        "zastosować odpowiednią selekcję",
                        "dobrać inne kodowanie parametrów",
                        "zmniejszyć populację",
                        "odpowiednio dobrać parametry kontrolne algorytmu"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-004",
                    "type": "multiple",
                    "question": "Zaznacz prawdziwe informacje dotyczące reprezentacji binarnej",
                    "options": [
                        "długość ciągu binarnego zależy od warunków zadania",
                        "reprezentacja binarna jest szybsza od innych reprezentacji osobników",
                        "allele częściej przyjmują wartość \"0\" niż \"1\"",
                        "sumaryczna długość ciągu binarnego zależy od liczby parametrów zadania"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-005",
                    "type": "open",
                    "question": "Zaproponuj parametry dla optymalizacji statycznej AG",
                    "options": [],
                    "correctAnswers": [
                        "K, T, J, prawdopodobieństwo krzyżowania i mutacji",
                        "K, T, J, prawdopodobieństwo krzyżowania, prawdopodobieństwo mutacji",
                        "przestrzeń poszukiwań K,T, wskaźnik jakości J, prawdopodobieństwo krzyżowania, prawdopodobieństwo mutacji"
                    ],
                    "explanation": "Komentarz: Niepewne - przestrzeń poszukiwań K, T, wskaźnik jakości J, prawdopodobieństwo krzyżowania, prawdopodobieństwo mutacji."
                },
                {
                    "id": "sd-test-lab-006",
                    "type": "multiple",
                    "question": "Co zaliczamy do metod gradientowych",
                    "options": [
                        "żadna z powyższych odpowiedzi",
                        "metoda gradientu prostego, największego spadku, gaussa-seidla, rosenbrocka",
                        "Metoda gradientu prostego, największego spadku, gradientu sprzężonego, fletchera-reevesa, davida-fletchera-powella",
                        "metoda gradientu prostego, fletchera-reevesa, neldera-meada"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-007",
                    "type": "multiple",
                    "question": "W problemie identyfikacji członu inercyjnego mutacja",
                    "options": [
                        "tempo mutacji było dość duże",
                        "należało przyjąć bardzo małą wartość prawdopodobieństwa mutacji",
                        "mutacja nie zachodziła",
                        "jest niezbędna bo wprowadza nowy materiał genetyczny"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-008",
                    "type": "multiple",
                    "question": "W problemie wyznaczania parametrów członu dynamicznego należy przyjąć",
                    "options": [
                        "średnią wielkość populacji",
                        "bardzo małą populację > 10",
                        "wystarczy przyjąć kilku osobników w populacji",
                        "zależy od wielkości przestrzeni poszukiwań i liczby iteracji"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-009",
                    "type": "multiple",
                    "question": "Wartość prawdopodobieństwa krzyżowania zawsze jest",
                    "options": [
                        "bardzo mała we wszystkich problemach",
                        "bardzo duża niezależnie od problemu",
                        "zależy od problemu"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-010",
                    "type": "multiple",
                    "question": "Czy osobniki/chromosomy w populacji początkowej podlegają ocenie jak inne osobniki",
                    "options": [
                        "ocenianie osobników następuje po kilku iteracjach, bo wcześniej osobniki nie są wystarczająco dobre",
                        "wszystkie osobniki populacji podlegają takiej samej ocenie",
                        "ocena osobników następuje dopiero po operacjach genetycznych"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-011",
                    "type": "multiple",
                    "question": "W procesie identyfikacji modelu matematycznego członu inercyjnego",
                    "options": [
                        "rozwiązanie stanowi największa wartość wskaźnika jakości",
                        "rozwiązanie problemu stanowi wynik parametrów z ostatniej iteracji algorytmu genetycznego",
                        "parametry K,T jako rozwiązanie problemu oraz wartość wskaźnika jakości",
                        "rozwiązanie stanowi najmniejsza wartość wskaźnika jakości"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-012",
                    "type": "multiple",
                    "question": "W problemach optymalizacji statycznej wyznacza się",
                    "options": [
                        "wartości zmiennych, które ekstremalizują wskaźnik jakości",
                        "wartość wskaźnika jakości",
                        "wartość funkcji wektorowej",
                        "wartości zmiennych, które minimalizują wskaźnik jakości"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-013",
                    "type": "multiple",
                    "question": "Jak można poprawić efektywność i skuteczność algorytmu genetycznego w problemach sterowania systemami dynamicznymi",
                    "options": [
                        "konieczność zastosowania innej reprezentacji osobników niż poznane",
                        "nie ma potrzeby stosowania połączenia hybrydowego metody klasycznej i algorytmu genetycznego",
                        "zastosować inne operatory genetyczne",
                        "połączyć algorytm genetyczny z metodą klasyczną"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-014",
                    "type": "multiple",
                    "question": "Algorytm genetyczny poszukuje ekstremum funkcji",
                    "options": [
                        "minimum funkcji przystosowania",
                        "ekstremum lokalne funkcji",
                        "maksimum/minimum funkcji celu",
                        "maksimum funkcji przystosowania"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-015",
                    "type": "open",
                    "question": "Wymień zastosowania algorytmów genetycznych w życiu codziennym",
                    "options": [],
                    "correctAnswers": [
                        "Zastosowania w dziedzinie nauki, techniki, inżynierii, medycyny, biznesu itp.",
                        "nauka, technika, inżynieria, robotyka, informatyka, medycyna, biznes"
                    ],
                    "explanation": "Komentarz: Zastosowania w dziedzinie nauki, techniki, inżynierii konstrukcyjnej, informatyce, robotyce, fizyce, medycynie, biologii, socjologii, politologii, kombinatoryce i w biznesie. W dodatku w problemach optymalizacji i sterowania, do projektowania kratownic, w zadaniach wyboru strategii dostaw i magazynowania materiałów budowlanych, w projektowaniu architektonicznym, do modelowania struktur reologicznych, układów wysokiej skali integracji, planowania drogi ruchomego robota, optymalizacji kosztów transportu, w problemach identyfikacji i modelowania."
                },
                {
                    "id": "sd-test-lab-016",
                    "type": "multiple",
                    "question": "Cechy odróżniające algorytmy genetyczne od metod klasycznych to",
                    "options": [
                        "korzystają z informacji określonej przy pomocy funkcji celu",
                        "przetwarzają zakodowaną postać zadania",
                        "wymagają informacji takich jak pochodna, gradient funkcji, itp",
                        "wykorzystują deterministyczne reguły wyboru"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-017",
                    "type": "multiple",
                    "question": "Przez sposób kodowania rozumiemy kodowanie",
                    "options": [
                        "fenotypu przez genotyp",
                        "genotypu przez fenotyp",
                        "zbiór parametrów zadania za pomocą chromosomów"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-018",
                    "type": "open",
                    "question": "Omów najnowsze zastosowania w inżynierii algorytmów genetycznych.",
                    "options": [],
                    "correctAnswers": [
                        "szeregowanie zadań, strategie inwestycyjne, modelowanie finansowe, optymalizacja funkcji, podejmowanie decyzji"
                    ],
                    "explanation": "Komentarz: Dzięki swojej wydajności i prostocie implementacji AG znalazły szerokie zastosowanie w rozwiązywaniu problemów takich jak: szeregowanie zadań, konstrukcja strategii inwestycyjnych, modelowanie finansowe, optymalizacja funkcji, podejmowanie decyzji oraz minimalizacja kosztów czy harmonogramowanie pracy itp."
                },
                {
                    "id": "sd-test-lab-019",
                    "type": "multiple",
                    "question": "Problem identyfikacji parametrycznej członów dynamicznych z zastosowaniem algorytmu genetycznego",
                    "options": [
                        "musi być realizowany w warunkach off-line",
                        "jest procesem czasochłonnym w porównaniu z metodami klasycznymi",
                        "musi być realizowany w warunkach on-line",
                        "czas jest porównywalny jak przy zastosowaniu metod klasycznych"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-020",
                    "type": "multiple",
                    "question": "Biorąc pod uwagę losowość algorytmu genetycznego w problemach sterowania podajemy",
                    "options": [
                        "wyłącznie najgorszy wynik z serii doświadczeń",
                        "wyłącznie najlepszy wynik z serii doświadczeń",
                        "wynik średni z serii doświadczeń",
                        "najlepszy i najgorszy wynik z serii doświadczeń"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-021",
                    "type": "multiple",
                    "question": "W wybranych zastosowaniach algorytmy genetyczne i sztuczne sieci neuronowe tworzą układy hybrydowe gdzie",
                    "options": [
                        "metody te są stosowane jedna za drugą, przy czym kolejność nie zależy od rozwiązywanego zadania",
                        "nie stosuje się takich układów",
                        "jedna z metod wykorzystuje wyniki otrzymane przez drugą metodę",
                        "metody są używane jednocześnie"
                    ],
                    "correctAnswers": [
                        2,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-022",
                    "type": "open",
                    "question": "Wymień zastosowania algorytmów genetycznych w systemach dynamicznych.",
                    "options": [],
                    "correctAnswers": [
                        "sterowanie silnikami, optymalizacja statyczna",
                        "identyfikacja parametryczna, sterowanie silnikami",
                        "sterowanie silnikami, optymalizacja statyczna lub identyfikacja"
                    ],
                    "explanation": "Komentarz: Nie wiadomo - być może w problemach sterowania silnikami albo czymś takim albo w problemie optymalizacji statycznej X D"
                },
                {
                    "id": "sd-test-lab-023",
                    "type": "multiple",
                    "question": "W którym krzyżowaniu istnieje możliwość otrzymania tylko jednego potomka:",
                    "options": [
                        "nierównomiernym",
                        "w arytmetycznym",
                        "w jednopunktowym",
                        "równomiernym"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-024",
                    "type": "multiple",
                    "question": "W problemach sterowania systemami dynamicznymi algorytm genetyczny poszukuje",
                    "options": [
                        "maksimum przyjętego wskaźnika jakości",
                        "minimum funkcji celu",
                        "maksimum funkcji celu",
                        "minimum wskaźnika jakości"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-025",
                    "type": "multiple",
                    "question": "AG znajdują zastosowanie w",
                    "options": [
                        "problemach, w których metody klasyczne nie dają oczekiwanego rozwiązania",
                        "problemach, w których nie jest dobrze określony sposób rozwiązania problemu, ale znany jest sposób oceny jakości rozwiązania",
                        "problemach, w których jest dobrze określony sposób rozwiązania problemu, ale znany jest sposób oceny jakości rozwiązania",
                        "problemach, w których można uzyskać rozwiązania za pomocą metod klasycznych"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "sd-test-lab-026",
                    "type": "multiple",
                    "question": "Selekcja",
                    "options": [
                        "eliminuje osobniki zbyt silne prowadzące do rozwiązań lokalnych",
                        "eliminuje osobniki słabe z populacji",
                        "dyskwalifikuje osobniki o mocnych cechach genetycznych",
                        "zależy od naporu selekcyjnego"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "sd-mod-w1",
            "name": "Wykład 1: Optymalizacja statyczna i identyfikacja",
            "questions": [
                {
                    "id": "sd-w1-001",
                    "type": "single",
                    "question": "Co jest celem optymalizacji statycznej?",
                    "options": [
                        "Wyznaczenie optymalnych rozwiązań zadań o parametrach niezmiennych w czasie (dla procesów w stanie ustalonym)",
                        "Wyznaczenie przebiegu czasowego sygnału wyjściowego układu dynamicznego w stanie nieustalonym",
                        "Minimalizacja liczby zmiennych stanu układu dynamicznego",
                        "Analiza stabilności BIBO układu o sprzężeniu zwrotnym"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Optymalizacja statyczna polega na wyznaczeniu optymalnych rozwiązań zadań o parametrach niezmiennych w czasie, dotyczących procesów w stanie ustalonym."
                },
                {
                    "id": "sd-w1-002",
                    "type": "single",
                    "question": "Do jakiej grupy metod optymalizacji statycznej zaliczamy metodę Neldera-Meada?",
                    "options": [
                        "Do metod bezgradientowych (jest to metoda simplex bez ograniczeń)",
                        "Do metod gradientowych (opartych na pochodnej wskaźnika jakości)",
                        "Do analitycznych metod programowania liniowego (metoda simpleks)",
                        "Do metod programowania kwadratowego"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metoda Neldera-Meada (metoda simplex poszukiwania bezpośredniego) to numeryczna metoda bezgradientowa stosowana do zadań bez ograniczeń."
                },
                {
                    "id": "sd-w1-003",
                    "type": "multiple",
                    "question": "Które z wymienionych metod zalicza się do metod gradientowych optymalizacji statycznej?",
                    "options": [
                        "Metoda gradientu prostego i największego spadku",
                        "Metoda Davida-Fletchera-Powella (DFP) i Fletchera-Reevesa",
                        "Metoda Neldera-Meada i Boxa (complex)",
                        "Metoda Hooke'a-Jeevesa i Rosenbrocka"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Metody gradientowe to m.in. gradient prosty, największy spadek, Fletcher-Reeves, gradient sprzężony, Davidon-Fletcher-Powell (DFP). Rosenbrock, Hooke-Jeeves, Nelder-Mead i Box to metody bezgradientowe."
                },
                {
                    "id": "sd-w1-004",
                    "type": "single",
                    "question": "W jakich przypadkach zadanie programowania liniowego (PL) można rozwiązać metodą graficzną?",
                    "options": [
                        "Gdy występują co najwyżej 2 zmienne decyzyjne (x1, x2)",
                        "Gdy wskaźnik jakości jest funkcją kwadratową",
                        "Gdy wszystkie ograniczenia są równościami stopnia drugiego",
                        "Tylko gdy funkcja celu nie posiada ekstremów globalnych"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metoda graficzna rozwiązywania zadań programowania liniowego jest stosowana, gdy występują co najwyżej dwie zmienne decyzyjne."
                },
                {
                    "id": "sd-w1-005",
                    "type": "single",
                    "question": "Jakie są three główne etapy identyfikacji obiektów sterowania (w kolejności)?",
                    "options": [
                        "Wybór struktury modelu, wyznaczenie wartości współczynników (parametrów), weryfikacja modelu",
                        "Pomiar sygnałów, uczenie sieci neuronowej, synteza regulatora PID",
                        "Linearyzacja układu nieliniowego, wyznaczenie transmitancji, badanie stabilności Hurwitza",
                        "Inicjalizacja populacji, krzyżowanie jednopunktowe, mutacja bitowa"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Klasyczny proces identyfikacji dzieli się na etapy: 1) Wybór struktury modelu, 2) Wyznaczenie parametrów (współczynników), 3) Weryfikacja modelu."
                },
                {
                    "id": "sd-w1-006",
                    "type": "multiple",
                    "question": "Co oznacza określenie 'struktury modelu' w procesie identyfikacji?",
                    "options": [
                        "Typ modelu (np. liniowy, stacjonarny, ciągły/dyskretny)",
                        "Rząd modelu (np. rząd równania różniczkowego lub stopień transmitancji)",
                        "Wymiarowość układu (liczba wejść i wyjść)",
                        "Dokładne wartości stałych czasowych i współczynników wzmocnienia"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wybór struktury modelu określa typ (np. liniowy, stacjonarny), rząd (równań różniczkowych/transmitancji) oraz wymiarowość (liczba wejść/wyjść). Konkretne wartości parametrów (np. stałe czasowe, wzmocnienia) są wyznaczane w kolejnym etapie."
                },
                {
                    "id": "sd-w1-007",
                    "type": "single",
                    "question": "W celu znalezienia ekstremum globalnego za pomocą numerycznych metod optymalizacji statycznej należy:",
                    "options": [
                        "Powtarzać procedurę optymalizacji z różnych punktów startowych",
                        "Zwiększać krok różniczkowania do nieskończoności",
                        "Stosować wyłącznie ograniczenia równościowe",
                        "Zawsze stosować metodę graficzną"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Numeryczne metody optymalizacji lokalnej mogą utknąć w ekstremach lokalnych, dlatego ogólna zasada poszukiwania optimum globalnego wymaga powtarzania optymalizacji z różnych punktów startowych."
                },
                {
                    "id": "sd-w1-008",
                    "type": "single",
                    "question": "W programowaniu liniowym (PL) funkcje ograniczeń i wskaźnik jakości muszą być:",
                    "options": [
                        "Wyłącznie liniowe",
                        "Kwadratowe",
                        "Różniczkowalne co najmniej dwukrotnie",
                        "Bezwzględnie dodatnie"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Programowanie liniowe zakłada, że zarówno wskaźnik jakości (funkcja celu), jak i funkcje ograniczeń są liniowe."
                },
                {
                    "id": "sd-w1-009",
                    "type": "multiple",
                    "question": "Do metod bezgradientowych optymalizacji statycznej zaliczamy:",
                    "options": [
                        "Metodę Rosenbrocka i Gaussa-Seidla",
                        "Metodę Hooke'a-Jeevesa i Powella",
                        "Metodę Boxa (Complex) i Neldera-Meada",
                        "Metodę największego spadku i Fletchera-Reevesa"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Metody bezgradientowe to m.in. Gauss-Seidel, Rosenbrock, Nelder-Mead, Box (Complex), Powell, Hooke-Jeeves. Metody gradientowe to m.in. największy spadek, Fletcher-Reeves, DFP."
                },
                {
                    "id": "sd-w1-010",
                    "type": "multiple",
                    "question": "Co może stanowić wskaźnik jakości (funkcję celu) przy identyfikacji parametrów modelu dynamicznego (np. członu inercyjnego)?",
                    "options": [
                        "Błąd średniokwadratowy różnicy między wyjściem obiektu a wyjściem modelu",
                        "Suma bezwzględnych uchybów w dyskretnych chwilach czasu",
                        "Czas i koszt obliczeń optymalizacyjnych",
                        "Wartość stałej czasowej T"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Wskaźnikiem jakości przy identyfikacji jest zazwyczaj miara dopasowania wyjść modelu do obiektu, np. błąd średniokwadratowy lub suma uchybów. Parametry modelu (np. T) są zmiennymi decyzyjnymi, a nie wskaźnikiem jakości."
                },
                {
                    "id": "sd-w1-011",
                    "type": "single",
                    "question": "Na czym polega etap weryfikacji modelu w procesie identyfikacji?",
                    "options": [
                        "Na ocenie, czy model właściwie opisuje obiekt, m.in. przez porównanie charakterystyk czasowych modelu i obiektu",
                        "Na losowaniu populacji startowej chromosomów",
                        "Na analitycznym rozwiązaniu równania charakterystycznego det(sI-A)=0",
                        "Na automatycznym wyznaczeniu struktury modelu przy pomocy metody najmniejszych kwadratów"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Etap weryfikacji ocenia adekwatność modelu, analizując czy jego charakterystyki czasowe zgadzają się z zachowaniem rzeczywistego obiektu."
                },
                {
                    "id": "sd-w1-012",
                    "type": "single",
                    "question": "Programowanie całkowitoliczbowe (PC) oraz programowanie zerojedynkowe zalicza się do:",
                    "options": [
                        "Programowania liniowego (PL)",
                        "Metod gradientowych optymalizacji nieliniowej",
                        "Optymalizacji dynamicznej Bellmana",
                        "Metod identyfikacji on-line"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Zgodnie z wykładem 1, programowanie całkowitoliczbowe i zerojedynkowe są zaliczane do problemów programowania liniowego (PL)."
                }
            ]
        },
        {
            "id": "sd-mod-w2",
            "name": "Wykład 2: Projektowanie algorytmów genetycznych",
            "questions": [
                {
                    "id": "sd-w2-001",
                    "type": "multiple",
                    "question": "Czym charakteryzuje się reprezentacja binarna osobników w algorytmach genetycznych?",
                    "options": [
                        "Osobniki reprezentowane są przez ciągi zerojedynkowe o określonej długości",
                        "Allele mogą przyjmować wartości '0' lub '1'",
                        "Długość ciągu binarnego zależy od wymaganego przedziału poszukiwań i żądanej dokładności",
                        "Reprezentacja ta nie pozwala na kodowanie parametrów rzeczywistych"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "W kodowaniu binarnym geny (allele) przyjmują wartości 0 lub 1. Długość pojedynczego ciągu binarnego dla zmiennej zależy od przedziału [Ai, Bi] oraz zadanej dokładności l. Reprezentacja binarna jak najbardziej służy do kodowania parametrów rzeczywistych."
                },
                {
                    "id": "sd-w2-002",
                    "type": "single",
                    "question": "Zgodnie z regułą minimalnego alfabetu w algorytmach genetycznych:",
                    "options": [
                        "Należy stosować alfabet o jak najmniejszej liczbie symboli (np. binarny)",
                        "Długość chromosomu powinna być minimalna",
                        "Mutacja powinna zachodzić z prawdopodobieństwem bliskim zero",
                        "Liczba osobników w populacji musi być mniejsza niż 10"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Reguła minimalnego alfabetu mówi, że należy wybrać alfabet o jak najmniejszej liczbie symboli (zazwyczaj kod binarny {0,1}), co daje maksymalną liczbę schematów przetwarzanych w populacji."
                },
                {
                    "id": "sd-w2-003",
                    "type": "single",
                    "question": "Jaka jest typowa wartość prawdopodobieństwa krzyżowania (pk) w klasycznych algorytmach genetycznych?",
                    "options": [
                        "Stosunkowo duża, zwykle w granicach od 0.1 do 1.0 (np. 0.6 - 0.9)",
                        "Bardzo mała, w granicach 0.001 - 0.01",
                        "Zawsze równa dokładnie 0.5",
                        "Powinna wynosić 0.0, aby nie niszczyć dobrze przystosowanych osobników"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Krzyżowanie jest głównym operatorem poszukiwań, stąd jego prawdopodobieństwo pk jest duże (zwykle w przedziale 0.6 - 0.9, ogólnie 0.1 - 1.0)."
                },
                {
                    "id": "sd-w2-004",
                    "type": "single",
                    "question": "Wskaż cechę mutacji w klasycznych algorytmach genetycznych:",
                    "options": [
                        "Prawdopodobieństwo mutacji (pm) jest małe (zwykle 0.001 - 0.1), ponieważ zbyt częsta mutacja zniszczyłaby dobre cechy osobników",
                        "Mutacja służy jako główny operator poszukiwawczy i zachodzi u każdego osobnika",
                        "Mutacja jest całkowicie zbędna, jeśli zastosowano selekcję turniejową",
                        "Mutacja polega wyłącznie na zamianie miejscami dwóch losowych genów w chromosomie"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Mutacja zachodzi rzadko (typowo pm w przedziale 0.001 - 0.1). Wprowadza ona nowy materiał genetyczny i zapobiega utknięciu w minimach lokalnych, ale zbyt wysokie pm zamienia algorytm w ślepe błądzenie losowe."
                },
                {
                    "id": "sd-w2-005",
                    "type": "single",
                    "question": "Na czym polega selekcja turniejowa?",
                    "options": [
                        "Wybiera się losowo grupę osobników, z której do nowej populacji przechodzi osobnik najlepiej przystosowany",
                        "Przypisuje się osobnikom sektory koła proporcjonalne do funkcji przystosowania",
                        "Sortuje się osobników według rankingu i losuje na podstawie rangi",
                        "Dokonuje się liniowej kombinacji wektorów rodzicielskich"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Selekcja turniejowa polega na losowym wyborze podgrupy osobników (np. 2 lub 3) i wyłonieniu z niej osobnika o najlepiej przystosowanym. Proces powtarza się do zapełnienia nowej populacji."
                },
                {
                    "id": "sd-w2-006",
                    "type": "single",
                    "question": "Co to jest 'przedwczesna zbieżność' (premature convergence) algorytmu genetycznego?",
                    "options": [
                        "Sytuacja, w której populacja zostaje zdominowana przez osobniki o zbliżonych genotypach reprezentujących optimum lokalne, co uniemożliwia znalezienie optimum globalnego",
                        "Sytuacja, w której algorytm kończy działanie przed wykonaniem pierwszej iteracji",
                        "Zbyt szybkie znalezienie optimum globalnego, powodujące błędy weryfikacji modelu",
                        "Problem związany z brakiem pamięci w wieloetapowych procesach Markowa"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przedwczesna zbieżność występuje, gdy osobniki o wysokim (ale nie globalnie optymalnym) przystosowaniu szybko zdominują populację, a brak różnorodności genetycznej uniemożliwia dalsze poszukiwania."
                },
                {
                    "id": "sd-w2-007",
                    "type": "multiple",
                    "question": "Wskaż właściwe informacje dotyczące selekcji metodą koła ruletki:",
                    "options": [
                        "Każdemu osobnikowi odpowiada sektor proporcjonalny do jego wartości funkcji przystosowania",
                        "Funkcja przystosowania musi przyjmować wyłącznie wartości nieujemne",
                        "Istnieje ryzyko, że silne osobniki szybko zdominują populację, prowadząc do przedwczesnej zbieżności",
                        "Metoda ta gwarantuje, że najsłabszy osobnik nigdy nie zostanie wybrany"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Koło ruletki dzieli prawdopodobieństwo wyboru proporcjonalnie do przystosowania, co wymaga Fp >= 0. Silne osobniki mogą je zdominować (ryzyko przedwczesnej zbieżności). Nawet najsłabszy osobnik ma jednak niezerową szansę wylosowania, więc nie jest bezwzględnie zdyskwalifikowany."
                },
                {
                    "id": "sd-w2-008",
                    "type": "multiple",
                    "question": "Czym jest 'schemat' (schema) w teorii algorytmów genetycznych i jak definiuje się jego rząd o(H) oraz rozpiętość (długość definiującą) d(H)?",
                    "options": [
                        "Schemat to wzorzec określający podzbiór ciągów binarnych o podobnych wartościach na ustalonych pozycjach (z użyciem znaku maski *)",
                        "Rząd schematu o(H) to liczba ściśle określonych (ustalonych) pozycji w schemacie",
                        "Rozpiętość schematu d(H) to odległość między skrajnymi ustalonymi pozycjami w schemacie",
                        "Rząd schematu o(H) określa długość ciągu binarnego chromosomu"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Schemat (np. *10*1) reprezentuje podobieństwo ciągów. Rząd o(H) to liczba bitów ustalonych (dla *10*1 wynosi 3). Rozpiętość d(H) to odległość skrajnych pozycji (dla *10*1 pozycje 2 i 5, rozpiętość 5 - 2 = 3)."
                },
                {
                    "id": "sd-w2-009",
                    "type": "single",
                    "question": "Jak brzmi hipoteza bloków budujących (building block hypothesis) Goldberga?",
                    "options": [
                        "Krótkie (o małej rozpiętości), niskiego rzędu i dobrze przystosowane schematy (bloki budujące) rozprzestrzeniają się w populacji wykładniczo i łączą się, tworząc rozwiązania optymalne",
                        "Bloki budujące to macierze dynamiczne A, B, C, D, które należy połączyć szeregowo",
                        "Każdy chromosom musi składać się z równej liczby bloków o wartościach wyłącznie dodatnich",
                        "Najdłuższe schematy o wysokim rzędzie wykazują największą odporność na niszczące działanie krzyżowania"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Hipoteza bloków budujących mówi, że krótkie, niskiego rzędu, dobrze przystosowane schematy (cegiełki) przeżywają krzyżowanie i łącząc się dają optymalne rozwiązania."
                },
                {
                    "id": "sd-w2-010",
                    "type": "single",
                    "question": "Ile wynosi całkowita liczba schematów dla chromosomu o długości ciągów m przy alfabecie złożonym z k symboli?",
                    "options": [
                        "(k + 1)^m",
                        "k^m",
                        "2^m",
                        "m^k"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Zgodnie z formułą Hollanda, liczba możliwych schematów dla ciągu o długości m i alfabecie o rozmiarze k wynosi (k+1)^m (ponieważ na każdej pozycji może być jeden z k symboli lub symbol wieloznaczny *)."
                },
                {
                    "id": "sd-w2-011",
                    "type": "single",
                    "question": "Krzyżowanie arytmetyczne stosowane w kodowaniu zmiennopozycyjnym polega na:",
                    "options": [
                        "Wyznaczeniu potomków jako kombinacji liniowej dwóch wektorów rodzicielskich: x' = a * x1 + (1-a) * x2",
                        "Zamianie losowo wybranego bitu w ciągu binarnego chromosomu na przeciwny",
                        "Losowaniu nowej wartości rzeczywistej z rozkładu normalnego wokół wartości rodzica",
                        "Wyborze jednego punktu podziału w chromosomie i zamianie ogonów rodziców"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Krzyżowanie arytmetyczne to kombinacja liniowa wektorów rzeczywistych. Jeśli a jest stałe, jest to krzyżowanie jednorodne, jeśli zmienne - niejednorodne."
                },
                {
                    "id": "sd-w2-012",
                    "type": "single",
                    "question": "Które z metod selekcji w algorytmie genetycznym promują osobników najsilniejszych na podstawie ich względnego położenia w uszeregowanej populacji, zamiast bezpośrednio używać bezwzględnych wartości funkcji przystosowania?",
                    "options": [
                        "Selekcja rankingowa",
                        "Selekcja koła ruletki",
                        "Selekcja stochastyczna z resztą",
                        "Selekcja naturalna bez ograniczeń"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Selekcja rankingowa szereguje (sortuje) osobników według przystosowania, a szansa wyboru zależy od ich pozycji (rangi) w rankingu, co zapobiega dominacji super-osobnika o gigantycznej bezwzględnej wartości funkcji przystosowania."
                },
                {
                    "id": "sd-w2-013",
                    "type": "multiple",
                    "question": "Do metod ekstrakcji końcowego wyniku działania algorytmu genetycznego zalicza się:",
                    "options": [
                        "Podejście 'best-so-far' (zapisywanie najlepszego osobnika ze wszystkich pokoleń)",
                        "Wybór najlepszego osobnika wyłącznie z ostatniego pokolenia",
                        "Średnia arytmetyczna ze wszystkich osobników w populacji początkowej",
                        "Najgorszy osobnik z całej ewolucji w celu weryfikacji stabilności"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Wynik działania AG wyznacza się zazwyczaj dwiema metodami: zapamiętując najlepszego osobnika napotkanego podczas całej ewolucji ('best-so-far') lub biorąc najlepszego osobnika z ostatniego pokolenia."
                }
            ]
        },
        {
            "id": "sd-mod-w3",
            "name": "Wykład 3: Przestrzeń stanu i stabilność",
            "questions": [
                {
                    "id": "sd-w3-001",
                    "type": "single",
                    "question": "Jaki wymiar ma macierz stanu A dla układu dynamicznego n-tego rzędu (jednowyjściowego, jednowejściowego)?",
                    "options": [
                        "n x n",
                        "n x 1",
                        "1 x n",
                        "1 x 1"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Macierz stanu A ma wymiar n x n, gdzie n jest rzędem układu dynamicznego (liczba zmiennych stanu)."
                },
                {
                    "id": "sd-w3-002",
                    "type": "single",
                    "question": "Równaniem charakterystycznym układu opisanego macierzą stanu A nazywamy:",
                    "options": [
                        "det(sI - A) = 0",
                        "det(A) = 0",
                        "sI - A = 0",
                        "det(sI + A) = 0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Równanie charakterystyczne to det(sI - A) = 0, gdzie s to zmienna zespolona, a I to macierz jednostkowa."
                },
                {
                    "id": "sd-w3-003",
                    "type": "multiple",
                    "question": "Wskaż zalety opisu układu dynamicznego w przestrzeni stanów w automatyce:",
                    "options": [
                        "Przedstawienie zjawisk dynamicznych wewnątrz układu",
                        "Możliwość sterowania nie tylko wyjściem, ale też wielkościami fizycznymi określającymi stan wewnętrzny",
                        "Zawsze niższy stopień skomplikowania obliczeń w porównaniu do transmitancji",
                        "Dogodne warunki do realizacji obliczeń numerycznych"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Opis w przestrzeni stanów pozwala śledzić i sterować stanem wewnętrznym układu regulacji oraz ułatwia symulacje numeryczne."
                },
                {
                    "id": "sd-w3-004",
                    "type": "single",
                    "question": "Układ dynamiczny jest stabilny (w sensie BIBO), jeżeli:",
                    "options": [
                        "Sygnał wyjściowy na dowolny ograniczony sygnał wejściowy jest ograniczony",
                        "Odpowiedź impulsowa układu dąży do nieskończoności",
                        "Wyznacznik macierzy stanu A wynosi zero",
                        "Mianownik transmitancji ma wyłącznie pierwiastki dodatnie"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Stabilność BIBO (Bounded Input Bounded Output) oznacza stabilność stabilnego ograniczonego wejścia i ograniczonego wyjścia."
                },
                {
                    "id": "sd-w3-005",
                    "type": "multiple",
                    "question": "Zgodnie z algebraicznym kryterium Hurwitza, układ opisany równaniem charakterystycznym jest stabilny, jeśli:",
                    "options": [
                        "Wszystkie współczynniki a_i są większe od zera (a_i > 0)",
                        "Wszystkie podwyznaczniki D_i (minory Hurwitza) są większe od zera (D_i > 0)",
                        "Przynajmniej jeden minor Hurwitza D_i jest ujemny",
                        "Wyraz wolny a_0 jest ujemny"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Kryterium Hurwitza wymaga, aby współczynniki były dodatnie (warunek konieczny) oraz wszystkie minory D_i > 0 (warunek dostateczny)."
                },
                {
                    "id": "sd-w3-006",
                    "type": "single",
                    "question": "Kiedy układ regulacji znajduje się na granicy stabilności według kryterium Hurwitza?",
                    "options": [
                        "Gdy a_0 = 0 (oraz pozostałe a_i > 0, D_{n-1} > 0) lub gdy współczynniki są dodatnie, ale jeden z minorów D_i = 0",
                        "Gdy przynajmniej jeden współczynnik a_i < 0",
                        "Gdy wyznacznik główny układu D_n jest ujemny",
                        "Gdy stopień mianownika transmitancji jest mniejszy od stopnia licznika"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Granica stabilności zachodzi, gdy wyraz wolny a_0 = 0 (jeden biegun zerowy) lub gdy minor Hurwitza D_i = 0 (para biegunów czysto urojonych)."
                },
                {
                    "id": "sd-w3-007",
                    "type": "single",
                    "question": "Jaki wniosek o stabilności można wyciągnąć dla układu o transmitancji G(s) = 1 / (s^2 + 2s + 3)?",
                    "options": [
                        "Układ jest stabilny",
                        "Układ jest niestabilny",
                        "Układ jest na granicy stabilności",
                        "Stabilność zależy od wielkości wymuszenia wejściowego"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Mianownik s^2 + 2s + 3 = 0. Wszystkie współczynniki są dodatnie (1, 2, 3 > 0). Minory Hurwitza: D1 = 2 > 0, D2 = a1*a0 = 2*3 = 6 > 0. Układ jest stabilny."
                },
                {
                    "id": "sd-w3-008",
                    "type": "single",
                    "question": "W równaniach stanu układu ciągłego macierz B jest nazywana:",
                    "options": [
                        "Macierzą wejść (sterowań)",
                        "Macierzą stanu",
                        "Macierzą wyjść",
                        "Macierzą bezpośredniego oddziaływania (transmisyjną)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "B jest macierzą wejściową (sterowań) o wymiarze n x p, gdzie p to liczba wejść."
                },
                {
                    "id": "sd-w3-009",
                    "type": "single",
                    "question": "Dla układu o transmitancji G(s) = (s^2 + 5s + 10) / (s^2 + 3s + 6), jaka będzie wartość macierzy bezpośredniego przejścia D?",
                    "options": [
                        "D = [1]",
                        "D = [0]",
                        "D = [10]",
                        "D = [6]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Ponieważ stopień licznika i mianownika są równe (m = n = 2), sygnał wejściowy przechodzi bezpośrednio na wyjście ze współczynnikiem b2/a2 = 1/1 = 1."
                },
                {
                    "id": "sd-w3-010",
                    "type": "single",
                    "question": "Jak zdefiniowana jest macierz wyjść C w równaniu wyjścia y(t) = Cx(t) + Du(t)?",
                    "options": [
                        "Określa ona powiązanie wektora stanu x(t) z sygnałem wyjściowym y(t)",
                        "Określa dynamikę zmian zmiennych stanu",
                        "Łączy bezpośrednio sygnał wejściowy u(t) z wyjściem y(t)",
                        "Jest macierzą jednostkową"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Macierz C (wymiar q x n) określa wpływ stanu wewnętrznego x(t) na sygnał wyjściowy y(t)."
                }
            ]
        },
        {
            "id": "sd-mod-w4",
            "name": "Wykład 4: Sygnał wyjściowy układu ciągłego",
            "questions": [
                {
                    "id": "sd-w4-001",
                    "type": "single",
                    "question": "W jakim celu wyznacza się przebieg czasowy sygnału wyjściowego y(t)?",
                    "options": [
                        "Aby zbadać dynamikę układu regulacji",
                        "Tylko po to, aby wyznaczyć równanie charakterystyczne",
                        "W celu redukcji wymiarowości problemu NP-trudnego",
                        "W celu identyfikacji parametrów algorytmu genetycznego"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wyznaczenie y(t) pozwala poznać odpowiedź czasową i zbadać dynamikę (szybkość, przeregulowanie) układu dynamicznego."
                },
                {
                    "id": "sd-w4-002",
                    "type": "multiple",
                    "question": "Jakie metody są najczęściej stosowane do wyznaczania sygnału wyjściowego układu ciągłego y(t) przy znanej transformacie Y(s)?",
                    "options": [
                        "Metoda rozkładu na ułamki proste",
                        "Metoda residuów",
                        "Metoda szeregu potęgowego",
                        "Kryterium stabilności Nyquista"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Dla układów ciągłych (dziedzina s) podstawowymi metodami są rozkład na ułamki proste oraz metoda residuów (odwrotna transformata Laplace'a)."
                },
                {
                    "id": "sd-w4-003",
                    "type": "single",
                    "question": "Residuum funkcji F(s) = Y(s)*e^(st) w pojedynczym biegunie s = s_i oblicza się ze wzoru:",
                    "options": [
                        "lim_{s -> s_i} [ (s - s_i) * Y(s) * e^(st) ]",
                        "lim_{s -> s_i} [ Y(s) * e^(st) ]",
                        "lim_{s -> s_i} [ (s + s_i) * Y(s) * e^(st) ]",
                        "lim_{s -> s_i} [ (s - s_i) / (Y(s) * e^(st)) ]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Residuum dla bieguna pojedynczego s_i to granica przy s -> s_i z wyrażenia (s - s_i) * Y(s) * e^(st)."
                },
                {
                    "id": "sd-w4-004",
                    "type": "single",
                    "question": "W metodzie rozkładu na ułamki proste, jeśli mianownik M(s) transformaty Y(s) ma pierwiastki pojedyncze s_i, to składnik czasowy y_i(t) odpowiadający ułamkowi C_i / (s - s_i) wynosi:",
                    "options": [
                        "C_i * e^(s_i * t)",
                        "C_i * t * e^(s_i * t)",
                        "C_i * cos(s_i * t)",
                        "C_i * e^(-s_i * t)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Odwrotna transformata Laplace'a wyrażenia 1 / (s - a) to e^(at). Pomnożone przez stałą C_i daje C_i * e^(s_i * t)."
                },
                {
                    "id": "sd-w4-005",
                    "type": "single",
                    "question": "Co to są bieguny transformaty Y(s) = L(s)/M(s)?",
                    "options": [
                        "Miejsca zerowe mianownika M(s)",
                        "Miejsca zerowe licznika L(s)",
                        "Współczynniki rozwinięcia w szereg Taylora",
                        "Wartości własne macierzy wejściowej B"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Bieguny transformaty to punkty osobliwe, czyli pierwiastki równania mianownika M(s) = 0."
                }
            ]
        },
        {
            "id": "sd-mod-w5",
            "name": "Wykład 5: Programowanie Dynamiczne",
            "questions": [
                {
                    "id": "sd-w5-001",
                    "type": "single",
                    "question": "Kto jest twórcą Programowania Dynamicznego (PD)?",
                    "options": [
                        "Richard Bellman w latach 50-tych XX wieku",
                        "Rudolf Kalman w latach 60-tych XX wieku",
                        "Aleksandr Lapunow pod koniec XIX wieku",
                        "John von Neumann w latach 40-tych XX wieku"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metodyka Programowania Dynamicznego została opracowana przez Richarda Bellmana w latach 50-tych XX wieku."
                },
                {
                    "id": "sd-w5-002",
                    "type": "single",
                    "question": "Jak brzmi Zasada Optymalności Bellmana dla systemów dynamicznych?",
                    "options": [
                        "Niezależnie od stanu początkowego i decyzji w pierwszym okresie, pozostałe decyzje muszą stanowić optymalną politykę dla stanów wynikłych z pierwszej decyzji",
                        "Optymalne sterowanie w każdym kroku musi być równe zeru",
                        "Decyzja optymalna zależy tylko od drogi dotarcia do danego stanu",
                        "Jeżeli trajektoria jest optymalna w przedziale [t0, tk], to jej część w przedziale [t1, tk] nie musi być optymalna"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Zasada ta stanowi, że końcowy etap trajektorii optymalnej musi być optymalny sam w sobie dla stanów wynikających z poprzednich etapów."
                },
                {
                    "id": "sd-w5-003",
                    "type": "single",
                    "question": "Od którego etapu rozpoczynamy obliczenia przy rozwiązywaniu zadań optymalizacji metodą Programowania Dynamicznego?",
                    "options": [
                        "Od końca (wstecz, backward induction)",
                        "Od początku (w przód, forward induction)",
                        "Od etapu o największym koszcie",
                        "Kolejność nie ma znaczenia"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Algorytm Bellmana rozwiązuje problem od końca, wyznaczając optymalne decyzje dla kolejnych kroków wstecz aż do stanu początkowego."
                },
                {
                    "id": "sd-w5-004",
                    "type": "single",
                    "question": "Jaką wadę posiada Programowanie Dynamiczne (PD)?",
                    "options": [
                        "Wymaga dużego nakładu obliczeń przy dużych wymiarach problemu (tzw. przekleństwo wymiarowości)",
                        "Wymaga bezwzględnej ciągłości i różniczkowalności wszystkich funkcji",
                        "Działa wyłącznie dla liniowych obiektów dynamicznych",
                        "Często utyka w ekstrema lokalne i nie gwarantuje optimum globalnego"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Głównym problemem jest tzw. 'przekleństwo wymiarowości' (curse of dimensionality) - wykładniczy wzrost liczby stanów i kombinacji."
                },
                {
                    "id": "sd-w5-005",
                    "type": "multiple",
                    "question": "Które z poniższych problemów mogą być efektywnie rozwiązywane za pomocą Programowania Dynamicznego?",
                    "options": [
                        "Problem plecakowy (knapsack problem)",
                        "Problem komiwojażera (wyznaczanie cyklu Hamiltona)",
                        "Problem wydawania reszty (coin change)",
                        "Wyznaczanie sterowania optymalnego w systemach regulacji"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wszystkie te problemy posiadają strukturę podproblemów oraz własność optymalnej podstruktury, co kwalifikuje je do PD."
                },
                {
                    "id": "sd-w5-006",
                    "type": "single",
                    "question": "Wieloetapowy proces decyzyjny (WPD) posiada właściwość Markowa, jeżeli:",
                    "options": [
                        "Wpływ pozostałych etapów decyzyjnych na wartość funkcji wskaźnika jakości zależy wyłącznie od stanu na końcu obecnego etapu i decyzji przyszłych",
                        "Przyszłe stany układu zależą od całej historii decyzji podjętych od samego początku procesu",
                        "Wszystkie decyzje są podejmowane w sposób losowy zgodnie z rozkładem Gaussa",
                        "Układ nie ma możliwości zmiany stanu pod wpływem sterowania"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Własność Markowa oznacza 'brak pamięci' - przyszłość zależy tylko od obecnego stanu, a nie od drogi jego osiągnięcia."
                },
                {
                    "id": "sd-w5-007",
                    "type": "single",
                    "question": "Jaka jest optymalna trajektoria sterowań w Zadaniu 1 (z Wykładu 5) oraz minimalna wartość wskaźnika jakości J?",
                    "options": [
                        "1-2-5-9-11-13 (J = 14)",
                        "1-3-5-9-11-13 (J = 15)",
                        "1-4-6-8-10-13 (J = 16)",
                        "1-2-6-8-10-13 (J = 13)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Zgodnie z wyliczeniami wstecz z wykładu, najtańsza droga to 1-2-5-9-11-13 o łącznym kosztcie J = 14."
                },
                {
                    "id": "sd-w5-008",
                    "type": "single",
                    "question": "Jaka jest zaleta Programowania Dynamicznego w porównaniu z klasycznymi metodami wariacyjnymi (np. opartymi na pochodnych)?",
                    "options": [
                        "Nie wymaga żadnych założeń dotyczących charakteru i ciągłości funkcji kryterialnej",
                        "Ma zawsze liniową złożoność obliczeniową",
                        "Nie wymaga znajomości stanu początkowego",
                        "Może być stosowane wyłącznie dla układów liniowych"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "PD nie potrzebuje pochodnych ani ciągłości wskaźnika jakości - może pracować na tabelach, funkcjach dyskretnych i z ograniczeniami typu nierówności."
                }
            ]
        },
        {
            "id": "sd-mod-w6",
            "name": "Wykład 6: Sygnał wyjściowy układu dyskretnego",
            "questions": [
                {
                    "id": "sd-w6-001",
                    "type": "multiple",
                    "question": "Jakie metody są stosowane do wyznaczania sygnału wyjściowego układu dyskretnego y(kT) na podstawie transformaty Y(z)?",
                    "options": [
                        "Metoda rozkładu na ułamki proste",
                        "Metoda residuów",
                        "Metoda szeregu potęgowego (dzielenia wielomianów)",
                        "Metoda Eulera-Maruyamy"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Układy dyskretne (dziedzina z) analizuje się za pomocą rozkładu Y(z)/z na ułamki proste, metody residuów dla Y(z)*z^(k-1) oraz metody dzielenia pisemnego (szereg potęgowy)."
                },
                {
                    "id": "sd-w6-002",
                    "type": "single",
                    "question": "W metodzie szeregu potęgowego wyznaczania y(kT) sygnał wyjściowy otrzymuje się poprzez:",
                    "options": [
                        "Dzielenie licznika L(z) przez mianownik M(z) metodą dzielenia wielomianów",
                        "Rozwinięcie transformaty Y(z) w szereg Taylora wokół z=1",
                        "Wyznaczenie wartości własnych macierzy stanu A",
                        "Przekształcenie Laplace'a sygnału dyskretnego"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Dzieląc licznik przez mianownik według malejących potęg z, otrzymujemy iloraz w postaci szeregu potęgowego potęg z^{-k}, gdzie współczynniki to wartości y(kT)."
                },
                {
                    "id": "sd-w6-003",
                    "type": "single",
                    "question": "Residuum funkcji F(z) = Y(z)*z^(k-1) w pojedynczym biegunie z = z_i dla układu dyskretnego oblicza się ze wzoru:",
                    "options": [
                        "lim_{z -> z_i} [ (z - z_i) * Y(z) * z^(k-1) ]",
                        "lim_{z -> z_i} [ (z - z_i) * Y(z) * z^k ]",
                        "lim_{z -> z_i} [ (z + z_i) * Y(z) * z^(k-1) ]",
                        "lim_{z -> z_i} [ Y(z) * z^(k-1) ]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wzór na residuum bieguna pojedynczego z_i w transformacie Z ma postać granicy przy z -> z_i z wyrażenia (z - z_i)*Y(z)*z^(k-1)."
                },
                {
                    "id": "sd-w6-004",
                    "type": "single",
                    "question": "Dlaczego w metodzie rozkładu na ułamki proste w dziedzinie Z najczęściej rozkłada się funkcję Y(z)/z zamiast Y(z)?",
                    "options": [
                        "Aby po wymnożeniu przez 'z' otrzymać ułamki o postaci z/(z - z_i), które odpowiadają standardowym oryginałom czasowym (np. skokowi jednostkowemu)",
                        "Bo mianownik Y(z) zawsze zawiera czynnik z",
                        "Tego wymaga kryterium stabilności Jury'ego",
                        "Dzięki temu unika się dzielenia wielomianów"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Ułamki typu z/(z - a) mają bardzo proste oryginały czasowe: a^k. Rozkładanie Y(z)/z, a potem mnożenie przez z pozwala natychmiast odczytać y(kT) z tablic."
                }
            ]
        }
    ],
    "dbVersion": 3
};
