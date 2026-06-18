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
        }
    ]
};
