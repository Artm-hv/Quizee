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
    ]
};
