const jezykiSkryptoweData = {
    "id": "jezyki-skryptowe",
    "name": "Języki skryptowe",
    "icon": "💻",
    "description": "Programowanie w językach skryptowych — Python, JavaScript, Bash i automatyzacja.",
    "modules": [
        {
            "id": "js-wyk-zadania-v3",
            "name": "Wyk zadania",
            "questions": [
                {
                    "id": "js-wyk-001",
                    "type": "multiple",
                    "question": "W języku Python cechą każdego obiektu jest:",
                    "options": [
                        "identyfikator",
                        "nazwa",
                        "wartość",
                        "typ"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": "Każdy obiekt w Pythonie posiada unikalny identyfikator (funkcja id()), typ (klasę) określający jego zachowanie oraz wartość. Nazwa (zmienna) nie jest cechą samego obiektu."
                },
                {
                    "id": "js-wyk-002",
                    "type": "multiple",
                    "question": "Język Python posiada typowanie:",
                    "options": [
                        "statyczne",
                        "dynamiczne",
                        "słabe",
                        "silne"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Python ma typowanie dynamiczne (typy są sprawdzane w czasie wykonania) oraz silne (brak niejawnej konwersji typów)."
                },
                {
                    "id": "js-wyk-003",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat identyfikatorów obiektów w języku Python:",
                    "options": [
                        "unikalność identyfikatorów jest gwarantowana dla obiektów o rozłącznym czasie życia",
                        "unikalność identyfikatorów jest gwarantowana dla obiektów o zachodzącym na siebie czasie życia",
                        "identyfikatory mogą nie być unikalne dla obiektów o rozłącznym czasie życia",
                        "identyfikatory mogą nie być unikalne dla obiektów o zachodzącym na siebie czasie życia"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": "Identyfikatory (adresy pamięci) są unikalne dla obiektów istniejących jednocześnie. Obiekty o rozłącznych czasach życia mogą współdzielić ten sam identyfikator."
                },
                {
                    "id": "js-wyk-004",
                    "type": "single",
                    "question": "Zmienne w języku Python przechowują:",
                    "options": [
                        "bezpośrednio wartości prymitywnych typów danych lub referencje do obiektów",
                        "bezpośrednio wartości prymitywnych typów danych lub obiekty",
                        "bezpośrednio obiekty",
                        "referencje do obiektów"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Wszystkie zmienne w Pythonie przechowują wskaźniki (referencje) do obiektów umieszczonych w stercie pamięci."
                },
                {
                    "id": "js-wyk-005",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat typu danych <class 'tuple'> języka Python:",
                    "options": [
                        "indeksowanie elementów rozpoczyna od indeksu 1",
                        "może przechowywać informacje heterogeniczne pod względem typu danych",
                        "jest typem sekwencyjnym",
                        "jest typem zmiennym (mutowalnym)",
                        "w jego składni deklarowania poszczególne elementy są od siebie oddzielone średnikami",
                        "jedna z postaci jego składni deklarowania korzysta z nawiasów okrągłych"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        5
                    ],
                    "explanation": "Krotka (tuple) to niemodyfikowalny (immutable) typ sekwencyjny pozwalający na elementy heterogeniczne (różnych typów). Indeksowanie zaczyna się od 0, a składnia dopuszcza nawiasy okrągłe."
                },
                {
                    "id": "js-wyk-006",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat typu danych <class 'dict'> języka Python:",
                    "options": [
                        "jako kluczy najlepiej używać obiektów typów niezmiennych, natomiast wartości mogą być dowolnego typu",
                        "wartości muszą być unikalne",
                        "przechowuje pary klucz-wartość, przy czym w przypadku kluczy używana jest ich funkcja skrótu",
                        "iterowanie po zawartości słownika w kolejności wstawiania do niego danych nie jest możliwe"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Klucze w dict muszą być hashowalne (immutable), wartości mogą być dowolne. W nowoczesnym Pythonie kolejność wstawiania elementów jest zachowywana podczas iteracji."
                },
                {
                    "id": "js-wyk-007",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat typu danych <class 'list'> języka Python:",
                    "options": [
                        "w jego składni deklarowania poszczególne elementy są od siebie oddzielone średnikami",
                        "może przechowywać informacje heterogeniczne pod względem typu danych",
                        "jest typem sekwencyjnym",
                        "indeksowanie elementów rozpoczyna od indeksu 1",
                        "jest typem niezmiennym (niemutowalnym)",
                        "jego składnia deklarowania korzysta z nawiasów kwadratowych"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        5
                    ],
                    "explanation": "Lista (list) to modyfikowalny (mutable) typ sekwencyjny. Pozwala na elementy heterogeniczne, indeksowanie zaczyna się od 0, a do deklarowania używa się nawiasów kwadratowych."
                },
                {
                    "id": "js-wyk-008",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat mechanizmu rozpakowywania sekwencyjnych typów danych (ang. sequence unpacking) w języku Python:",
                    "options": [
                        "umożliwia odczytanie wartości poszczególnych elementów sekwencyjnego typu danych i zapisanie ich w osobnych zmiennych",
                        "w jego podstawowej postaci po prawej stronie operatora przypisania musi się znajdować dokładnie tyle samo zmiennych, co liczba elementów rozpakowywanego obiektu stojącego po lewej stronie operatora przypisania",
                        "jednym z jego zastosowań jest łatwiejsze przetwarzanie wielu danych, np. zwróconych z funkcji",
                        "korzyścią z jego stosowania jest uproszczenie składni usuwania elementów z sekwencyjnych typów danych"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Rozpakowywanie przypisuje elementy sekwencji do zmiennych po lewej stronie przypisania. Liczba zmiennych po lewej stronie musi odpowiadać liczbie elementów rozpakowywanej sekwencji po prawej."
                },
                {
                    "id": "js-wyk-009",
                    "type": "multiple",
                    "question": "Zastosowaniami operatora indeksowania w kontekście sekwencyjnych typów danych języka Python są:",
                    "options": [
                        "dodawanie elementów na początku",
                        "replikacja elementów",
                        "modyfikacja wartości elementów",
                        "wycinanie elementów"
                    ],
                    "correctAnswers": [
                        2,
                        3
                    ],
                    "explanation": "Operator indeksowania [] pozwala na odczyt i modyfikację (dla list) elementów pod konkretnym indeksem, oraz na wycinanie podsekwencji (slicing) za pomocą składni [start:stop:step]."
                },
                {
                    "id": "js-wyk-010",
                    "type": "multiple",
                    "question": "Mechanizmowi niejawnej konkatenacji (ang. implicit concatenation) łańcuchów znaków podlegają w języku Python:",
                    "options": [
                        "literały łańcuchów znaków",
                        "łańcuchy znaków, które znajdują się w tym samym wyrażeniu",
                        "zmienne wskazujące na łańcuchy znaków",
                        "łańcuchy znaków, które są od siebie oddzielone tylko spacjami",
                        "łańcuchy znaków, które są od siebie oddzielone tylko znakami białymi",
                        "łańcuchy znaków, które są od siebie oddzielone tylko znakami nowej linii"
                    ],
                    "correctAnswers": [
                        0,
                        3,
                        4
                    ],
                    "explanation": "Niejawna konkatenacja dotyczy wyłącznie literale (string literals) oddzielonych spacjami lub innymi białymi znakami (np. w nawiasach). Zmienne i ogólne wyrażenia string nie podlegają temu mechanizmowi."
                },
                {
                    "id": "js-wyk-011",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat instrukcji warunkowej języka Python:",
                    "options": [
                        "kaskada alternatywnych warunków instrukcji jest realizowana z użyciem słowa kluczowego else",
                        "preferowanym sposobem formatowania poziomów indentacji bloków kodu instrukcji jest wykorzystanie 4 znaków spacji",
                        "blok kodu, który zostanie wykonany jeśli wszystkie warunki instrukcji są fałszywe, jest poprzedzony klauzulą elif",
                        "blok kodu, który zostanie wykonany jeśli warunek instrukcji jest prawdziwy, jest otwierany z użyciem znaku dwukropka"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Formatowanie PEP 8 zaleca 4 spacje do wcięć. Bloki instrukcji warunkowych otwierane są znakiem dwukropka (:). Kaskada warunków korzysta z elif, a końcowy blok z else."
                },
                {
                    "id": "js-wyk-012",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat instrukcji warunkowej języka Python:",
                    "options": [
                        "kaskada alternatywnych warunków instrukcji jest realizowana z użyciem słowa kluczowego elif",
                        "blok kodu, który zostanie wykonany jeśli wszystkie warunki instrukcji są fałszywe, jest poprzedzony klauzulą else",
                        "blok kodu, który zostanie wykonany jeśli warunek instrukcji jest prawdziwy, jest otwierany z użyciem znaku średnika",
                        "preferowanym sposobem formatowania poziomów indentacji bloków kodu instrukcji jest wykorzystanie znaków tabulacji"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "W Pythonie elif realizuje kaskadę warunków, a else jest blokiem domyślnym. Bloki kodu otwiera się dwukropkiem, a wcięcia formatuje spacjami."
                },
                {
                    "id": "js-wyk-013",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat wyrażenia warunkowego (ang. conditional expression) języka Python:",
                    "options": [
                        "zwraca jedną z dwóch wartości, w zależności od tego czy warunek w wyrażeniu jest prawdziwy, czy fałszywy",
                        "jest nazywane inaczej operatorem dwuargumentowym",
                        "ma najniższy priorytet wśród operatorów",
                        "jego postać wygląda następująco: x if condition else y"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": "Wyrażenie warunkowe w Pythonie (operator trójargumentowy) ma postać 'x if condition else y' i zwraca jedną z dwóch wartości. Ma niski priorytet, ale wyższy niż przypisanie."
                },
                {
                    "id": "js-wyk-014",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat wyrażenia warunkowego (ang. conditional expression) języka Python:",
                    "options": [
                        "zwraca jedną z trzech wartości, w zależności od tego czy warunek w wyrażeniu jest prawdziwy, czy fałszywy",
                        "jest nazywane inaczej operatorem trójargumentowym",
                        "jego postać wygląda następująco: condition ? x : y",
                        "pomijając operator przypisania i operatory skrótu (ang. shorthand operators), ma najniższy priorytet wśród operatorów"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Wyrażenie warunkowe to operator trójargumentowy. Pomijając przypisanie, ma najniższy priorytet (niższy niż operatory logiczne and/or)."
                },
                {
                    "id": "js-wyk-015",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat typu danych <class 'range'> języka Python:",
                    "options": [
                        "obiekt tego typu może zostać utworzony w następujący sposób: range(step, start, stop)",
                        "jest to typ sekwencyjny",
                        "obiekty tego typu są często używane w kontekście (składni) pętli for języka",
                        "obiekty tego typu produkują kolejne wartości zmiennoprzecinkowe z zadanego przedziału"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": "Klasa range reprezentuje niezmienną sekwencję liczb całkowitych, bardzo popularną w pętlach for. Parametry to range(start, stop, step) i nie obsługuje ona liczb zmiennoprzecinkowych."
                },
                {
                    "id": "js-wyk-016",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat operatorów zawierania (ang. membership operators) języka Python:",
                    "options": [
                        "w przypadku typów mapujących weryfikują obecność pewnego obiektu wśród wartości kolekcji",
                        "operator not in zwraca prawdę jeśli pewien obiekt nie zawiera się w innym obiekcie (nie jest jego członkiem)",
                        "w przypadku typów sekwencyjnych i zbiorów weryfikują obecność pewnego obiektu wśród kluczy kolekcji",
                        "operator not in zwraca fałsz jeśli pewien obiekt zawiera się w innym obiekcie (jest jego członkiem)",
                        "w przypadku łańcuchów znaków weryfikują, czy pewien łańcuch jest anagramem innego łańcucha"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Operator not in zwraca True, jeśli elementu nie ma w kolekcji, a False w przeciwnym wypadku. W słownikach (dict) operator 'in'/'not in' sprawdza klucze, a nie wartości. Sekwencje i zbiory nie posiadają kluczy, sprawdzana jest obecność elementu."
                },
                {
                    "id": "js-wyk-017",
                    "type": "multiple",
                    "question": "Wskaż własności paradygmatu programowania funkcyjnego, którymi cechuje się język Python:",
                    "options": [
                        "obsługa funkcji pierwszej klasy",
                        "obsługa zmiennych (mutowalnych) typów danych",
                        "obsługa funkcji niższego rzędu, które operują na innych funkcjach",
                        "obsługa rekurencji"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": "W Pythonie funkcje są obiektami pierwszej klasy (first-class functions) i można stosować rekurencję. Zmienne mutowalne należą do programowania imperatywnego, a funkcje operujące na innych funkcjach to funkcje wyższego (a nie niższego) rzędu."
                },
                {
                    "id": "js-wyk-018",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat mechanizmu obsługi wyjątków w języku Python:",
                    "options": [
                        "klauzula else jest wykonywana tylko w sytuacji braku wyjątku, natomiast klauzula finally zawsze (o ile zostały one zdefiniowane)",
                        "klauzula except jest wykonywana, jeśli jej wyrażenie ewaluuje się do listy zawierającej element kompatybilny z podniesionym wyjątkiem",
                        "jeśli jest używana bezwyrażeniowa klauzula except, to musi być ona umieszczona za pozostałymi klauzulami except",
                        "klauzula except jest wykonywana, jeśli jej wyrażenie ewaluuje się do typu podniesionego wyjątku lub do typu podrzędnego w stosunku do niego"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Blok else w try-except wykonuje się przy braku błędów, a finally zawsze. Bare except (bez typu) musi być na samym końcu. Do łapania wielu wyjątków służy krotka (tuple), a nie lista. Blok except łapie wyjątek danego typu oraz typy podrzędne (subclasses), więc wyrażenie w except reprezentuje typ nadrzędny (superclass) w stosunku do podniesionego wyjątku."
                },
                {
                    "id": "js-wyk-019",
                    "type": "multiple",
                    "question": "Pamiętając o tym, że:\n- suite to blok kodu,\n- nawiasy kwadratowe oznaczają część opcjonalną,\n- znak plus informuje o tym, że fragment w nawiasach okrągłych może zostać powtórzony,\nwskaż składnię mechanizmu obsługi wyjątków w języku Python:",
                    "options": [
                        "try: suite\nelse: suite\n(except [expression [as identifier]]: suite)+\n[finally: suite]",
                        "try: suite\nfinally: suite",
                        "try: suite\n(except [expression [as identifier]]: suite)+\n[else: suite]\n[finally: suite]",
                        "try: suite\n[finally: suite]",
                        "try: suite\n[else: suite]\nfinally: suite",
                        "try: suite\nelse: suite\nfinally: suite",
                        "try: suite\n(except [expression [as identifier]]: suite)+\nelse: suite\n[finally: suite]"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": "Poprawna składnia to albo try-finally (opcja b), albo try followed by one or more except blocks, optional else, and optional finally (opcja c)."
                },
                {
                    "id": "js-wyk-020",
                    "type": "multiple",
                    "question": "Wyrażenie lambda (ang. lambda expression) w języku Python to funkcja:",
                    "options": [
                        "która nie może zawierać instrukcji i adnotacji",
                        "niejawnie korzystająca z instrukcji yield",
                        "definiowana w linii",
                        "zawierająca pojedyncze wyrażenie, którego wartość zwracana jest jako rezultat funkcji",
                        "posiadająca nazwę"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": "Funkcje lambda są anonimowe, definiowane inline, zawierają jedno wyrażenie zwracające wartość i nie mogą zawierać instrukcji złożonych (np. pętli) ani adnotacji typów."
                },
                {
                    "id": "js-wyk-021",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat procesów kompilacji i interpretacji kodu źródłowego programu:",
                    "options": [
                        "kompilacja może zostać poprzedzona interpretacją kodu źródłowego do kodu bajtowego",
                        "zarówno kompilacja jak i interpretacja tłumaczą kod maszynowy na kod źródłowy programu",
                        "kompilacja zachodzi przed uruchomieniem programu",
                        "interpretacja zachodzi podczas każdego uruchomienia programu"
                    ],
                    "correctAnswers": [
                        2,
                        3
                    ],
                    "explanation": "Kompilacja do bytecode zachodzi przed wykonaniem programu. Interpretacja (wykonywanie instrukcji bytecode przez maszynę wirtualną) zachodzi przy każdym uruchomieniu."
                },
                {
                    "id": "js-wyk-022",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat identyfikatorów obiektów w języku Python:",
                    "options": [
                        "unikalność identyfikatorów jest gwarantowana dla obiektów o rozłącznym czasie życia",
                        "identyfikatory mogą nie być unikalne dla obiektów o zachodzącym na siebie czasie życia",
                        "unikalność identyfikatorów jest gwarantowana dla obiektów o zachodzącym na siebie czasie życia",
                        "identyfikatory mogą nie być unikalne dla obiektów o rozłącznym czasie życia"
                    ],
                    "correctAnswers": [
                        2,
                        3
                    ],
                    "explanation": "Identyfikatory (adresy) obiektów istniejących jednocześnie muszą być unikalne. Obiekty o rozłącznych czasach życia mogą współdzielić ten sam identyfikator."
                },
                {
                    "id": "js-wyk-023",
                    "type": "multiple",
                    "question": "W języku Python cechą każdego obiektu jest:",
                    "options": [
                        "identyfikator",
                        "nazwa",
                        "wartość",
                        "typ"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": "Każdy obiekt w Pythonie ma identyfikator, typ i wartość. Nazwa jest etykietą przypisaną w danej przestrzeni nazw."
                },
                {
                    "id": "js-wyk-024",
                    "type": "multiple",
                    "question": "Wskaż prawdziwe zdania na temat operatora wycinania (slicing) w języku Python:",
                    "options": [
                        "pozwala na pobranie podsekwencji przy użyciu składni [start:stop:step]",
                        "modyfikuje wartości elementów oryginalnej sekwencji w miejscu",
                        "indeks stop określa pierwszy element, który NIE zostanie włączony do wycinka",
                        "krok (step) nie może być wartością ujemną"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Wycinanie tworzy nową sekwencję. Składnia [start:stop:step] wyznacza zakres prawostronnie otwarty (bez elementu pod indeksem stop). Krok może być ujemny."
                },
                {
                    "id": "js-wyk-025",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe na temat operatora not in w języku Python:",
                    "options": [
                        "zwraca True, jeśli sprawdzany obiekt nie znajduje się w kolekcji",
                        "zwraca False, jeśli sprawdzany obiekt znajduje się w kolekcji",
                        "zwraca błąd TypeError, gdy kolekcja jest pusta",
                        "jest operatorem dwuargumentowym"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Operator not in zwraca True, jeśli sprawdzany obiekt nie znajduje się w kolekcji, a False, jeśli się w niej znajduje. Jest operatorem dwuargumentowym i nie rzuca błędu na pustej kolekcji."
                },
                {
                    "id": "js-wyk-026",
                    "type": "multiple",
                    "question": "Wskaż przykłady poprawnego i syntaktycznie prawidłowego użycia wyrażeń lambda w języku Python:",
                    "options": [
                        "lambda x, y: x + y",
                        "lambda x: x if x > 0 else -x",
                        "lambda: print('Hello')",
                        "lambda x: return x * 2"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Słowo kluczowe return nie może wystąpić w lambda expression (ciało musi być pojedynczym wyrażeniem, a return to instrukcja). Pozostałe formy są syntaktycznie poprawne."
                },
                {
                    "id": "js-wyk-027",
                    "type": "open",
                    "question": "Opisz mechanizm zawierania przez wyjątki w języku Python dodatkowych informacji nazywanych notatkami. Przedstaw jego zastosowanie. Jak można z niego skorzystać, zarówno w celu zapisywania zdarzeń, jak i ich odczytywania? Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "__notes__",
                        "add_note",
                        "note",
                        "notatki",
                        "notatki wyjątków"
                    ],
                    "explanation": "W Pythonie 3.11+ wyjątki posiadają atrybut __notes__ (listę notatek tekstowych). Notatki można dodawać za pomocą metody add_note(text) na instancji wyjątku (np. e.add_note('szczegóły')) i odczytywać iterując po e.__notes__."
                },
                {
                    "id": "js-wyk-028",
                    "type": "open",
                    "question": "Opisz składnię mechanizmu interpolacji literałów łańcuchów znaków (ang. literal string interpolation). Ponadto wyjaśnij jego działanie i wskaż jego zastosowania. Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "f-string",
                        "fstring",
                        "f-str",
                        "interpolacja",
                        "literal string interpolation"
                    ],
                    "explanation": "Formatowane literały znakowe (f-strings) deklaruje się prefiksem 'f' lub 'F' (np. f'Tekst {zmienna}'). Python w czasie wykonywania kodu ewaluuje wyrażenia wewnątrz klamer {} i wstawia ich reprezentację tekstową do napisu."
                },
                {
                    "id": "js-wyk-029",
                    "type": "open",
                    "question": "Wymień i scharakteryzuj 3 podstawowe cechy, które posiadają wszystkie obiekty w języku Python. Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "identyfikator, typ, wartość",
                        "id, typ, wartość",
                        "id, type, value",
                        "identyfikator, wartość, typ",
                        "typ, identyfikator, wartość",
                        "wartość, typ, identyfikator",
                        "identyfikator, typ, wartosc"
                    ],
                    "explanation": "Każdy obiekt ma: 1. Identyfikator (funkcja id() zwraca unikalny adres pamięci), 2. Typ (funkcja type() określa dostępne operacje i zachowanie), 3. Wartość (dane przechowywane przez obiekt)."
                },
                {
                    "id": "js-wyk-030",
                    "type": "open",
                    "question": "Opisz co najmniej dwa sposoby zastępowania w języku Python fragmentów łańcuchów znaków innymi znakami/łańcuchami. Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "replace, sub",
                        "replace i sub",
                        "replace",
                        "sub",
                        "replace() i sub()",
                        "replace(), sub()"
                    ],
                    "explanation": "Fragmenty tekstu można zastępować metodą str.replace(stary, nowy) na obiektach tekstowych lub za pomocą biblioteki re i funkcji re.sub(wzorzec, zamiennik, tekst) w celu dopasowywania wzorców wyrażeń regularnych."
                },
                {
                    "id": "js-wyk-031",
                    "type": "open",
                    "question": "Podaj definicję i scharakteryzuj obiekt iterowalny (ang. iterable object) w języku Python. Przedstaw jego zastosowania. Wymień co najmniej 3 przykładowe typy danych, których obiekty instancji są obiektami iterowalnymi. Ponadto wskaż dwa przypadki, w których obiekty instancji klas zdefiniowanych przez użytkownika mogą być traktowane jako obiekty iterowalne.",
                    "options": [],
                    "correctAnswers": [
                        "__iter__, __getitem__",
                        "__iter__",
                        "iter",
                        "iterable"
                    ],
                    "explanation": "Obiekt iterowalny pozwala na pobranie iteratora (np. przez iter(obj)). Przykłady to list, tuple, str, dict, set. Klasa użytkownika jest iterowalna, jeśli implementuje metodę __iter__() (zwracającą iterator) lub __getitem__() (obsługującą indeksowanie od 0)."
                },
                {
                    "id": "js-wyk-032",
                    "type": "open",
                    "question": "Scharakteryzuj typ danych <class 'list'> dostępny w języku Python. Przedstaw co najmniej 2 sposoby deklarowania list oraz podstawowe operacje wspierane przez ten typ danych. Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "list",
                        "lista",
                        "class 'list'",
                        "<class 'list'>"
                    ],
                    "explanation": "Lista (list) to modyfikowalna, uporządkowana sekwencja elementów. Deklaracja: przez nawiasy kwadratowe l = [1, 2] lub konstruktor list(). Podstawowe operacje: dodawanie (append(), extend()), usuwanie (remove(), pop()), indeksowanie i wycinanie."
                },
                {
                    "id": "js-wyk-033",
                    "type": "open",
                    "question": "Opisz mechanizm zawierania przez wyjątki w języku Python informacji nazywanych argumentami wyjątków. Przedstaw jak można z niego skorzystać, zarówno w celu przekazania argumentów do wyjątku, jak i późniejszego ich odczytywania. Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "args",
                        "e.args",
                        "e.args[]"
                    ],
                    "explanation": "Argumenty przekazane do konstruktora wyjątku (np. raise Exception('komunikat', 404)) są zapisywane w krotce args na instancji wyjątku. Można je odczytać poprzez właściwość e.args."
                },
                {
                    "id": "js-wyk-034",
                    "type": "open",
                    "question": "Wymień i scharakteryzuj przesłanki przemawiające za stosowaniem modułów w języku Python.",
                    "options": [],
                    "correctAnswers": [
                        "moduł",
                        "moduły",
                        "module",
                        "modules",
                        "import"
                    ],
                    "explanation": "Główne zalety modułów to: modularność (podział kodu na logiczne części), enkapsulacja (podział przestrzeni nazw i unikanie kolizji nazw) oraz ponowne użycie kodu (reusability) w różnych częściach projektu."
                },
                {
                    "id": "js-wyk-035",
                    "type": "open",
                    "question": "Przedstaw podstawowy sposób wczytywania w języku Python wartości od użytkownika. Omawiane rzeczy zilustruj przykładowymi fragmentami kodu.",
                    "options": [],
                    "correctAnswers": [
                        "input",
                        "input()"
                    ],
                    "explanation": "Do wczytywania danych od użytkownika służy wbudowana funkcja input(prompt), która pobiera wejście tekstowe z konsoli i zawsze zwraca wartość typu str."
                }
            ]
        },
        {
            "id": "js-mod-generowane",
            "name": "Zadania generowane",
            "questions": [
                {
                    "id": "py-gen-001",
                    "type": "single",
                    "question": "Kto jest twórcą języka programowania Python?",
                    "options": [
                        "Dennis Ritchie",
                        "Guido van Rossum",
                        "Bjarne Stroustrup",
                        "James Gosling"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Guido van Rossum stworzył język Python pod koniec lat 80. XX wieku (pierwsze wydanie w 1991 roku)."
                },
                {
                    "id": "py-gen-002",
                    "type": "single",
                    "question": "Która organizacja odpowiada obecnie za rozwój i standardy języka Python?",
                    "options": [
                        "Python Software Foundation (PSF)",
                        "W3C",
                        "IEEE",
                        "Oracle Corporation"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Python Software Foundation (PSF) to organizacja non-profit zarządzająca prawami autorskimi, rozwojem i społecznością Pythona."
                },
                {
                    "id": "py-gen-003",
                    "type": "single",
                    "question": "Jakie typowanie posiada język Python?",
                    "options": [
                        "Statyczne i silne",
                        "Dynamiczne i słabe",
                        "Dynamiczne i silne",
                        "Statyczne i słabe"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Python ma typowanie dynamiczne (typ zmiennej jest przypisywany w locie) oraz silne (nie pozwala na niejawne konwersje między typami, np. dodanie napisu do liczby)."
                },
                {
                    "id": "py-gen-004",
                    "type": "single",
                    "question": "Jaki jest wynik wykonania operacji dzielenia 5 // 2 w Pythonie 3?",
                    "options": [
                        "2.5",
                        "2",
                        "3",
                        "2.0"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Operator '//' oznacza dzielenie całkowite (floored division) i zwraca część całkowitą wyniku (typ int)."
                },
                {
                    "id": "py-gen-005",
                    "type": "single",
                    "question": "Jaki jest wynik wykonania operacji dzielenia 5 / 2 w Pythonie 3?",
                    "options": [
                        "2",
                        "2.5",
                        "2.0",
                        "3"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "W Pythonie 3 operator '/' zawsze zwraca liczbę zmiennoprzecinkową (float), nawet przy podziale liczb całkowitych bez reszty."
                },
                {
                    "id": "py-gen-006",
                    "type": "single",
                    "question": "Które z poniższych słów kluczowych służy jako instrukcja pusta (placeholder) w Pythonie?",
                    "options": [
                        "void",
                        "null",
                        "pass",
                        "none"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Słowo kluczowe 'pass' jest instrukcją pustą. Służy do zachowania poprawnej składni w blokach, w których nie chcemy umieszczać kodu."
                },
                {
                    "id": "py-gen-007",
                    "type": "multiple",
                    "question": "Które wartości są traktowane jako fałsz logiczny (Falsy) w Pythonie? (wybierz wszystkie poprawne)",
                    "options": [
                        "0",
                        "[] (pusta lista)",
                        "None",
                        "\"False\" (napis)",
                        "{} (pusty słownik)"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        4
                    ],
                    "explanation": "Liczba zero (0), puste kolekcje (listy, słowniki, zbiory, krotki), pusty napis (\"\") oraz None są ewaluowane jako False. Dowolny niepusty napis (nawet \"False\") jest traktowany jako True."
                },
                {
                    "id": "py-gen-008",
                    "type": "single",
                    "question": "Jaka jest różnica między operatorami '==' a 'is'?",
                    "options": [
                        "'==' porównuje tożsamość obiektów (adresy w pamięci), a 'is' porównuje wartości",
                        "'==' porównuje wartości, a 'is' porównuje tożsamość obiektów (czy to ten sam obiekt)",
                        "Oba operatory robią dokładnie to samo",
                        "'is' służy do sprawdzania typów zmiennych"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "'==' sprawdza równość wartości (wywołuje __eq__), natomiast 'is' sprawdza tożsamość referencji (czy id(a) == id(b))."
                },
                {
                    "id": "py-gen-009",
                    "type": "single",
                    "question": "Który z poniższych identyfikatorów zmiennych jest niepoprawny w Pythonie?",
                    "options": [
                        "_user_name",
                        "user_name_2",
                        "2_user_name",
                        "USER_NAME"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Identyfikatory w Pythonie nie mogą zaczynać się od cyfry."
                },
                {
                    "id": "py-gen-010",
                    "type": "single",
                    "question": "Jaki dokument definiuje oficjalny przewodnik po stylu kodowania w języku Python?",
                    "options": [
                        "PEP 8",
                        "PEP 20",
                        "RFC 2616",
                        "ISO 9001"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "PEP 8 (Python Enhancement Proposal 8) to oficjalny Style Guide dla kodu napisanego w Pythonie."
                },
                {
                    "id": "py-gen-011",
                    "type": "single",
                    "question": "Jak działa krótka ewaluacja (short-circuit evaluation) dla operatora 'or' w wyrażeniu A or B?",
                    "options": [
                        "Zawsze oblicza A i B",
                        "Jeśli A jest prawdziwe, B nie jest obliczane, a wynikiem jest wartość A",
                        "Jeśli A jest fałszywe, B nie jest obliczane",
                        "Zawsze zwraca True lub False niezależnie od wartości A i B"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Operator 'or' ocenia lewy operand. Jeśli jest on prawdziwy, zwraca go bez sprawdzania prawego operanda, ponieważ całe wyrażenie musi być True."
                },
                {
                    "id": "py-gen-012",
                    "type": "single",
                    "question": "Który moduł standardowy zawiera listę sys.argv reprezentującą argumenty wiersza poleceń?",
                    "options": [
                        "os",
                        "sys",
                        "argparse",
                        "io"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Moduł 'sys' udostępnia listę 'argv' przechowującą argumenty przekazane do skryptu."
                },
                {
                    "id": "py-gen-013",
                    "type": "single",
                    "question": "Co reprezentuje element sys.argv[0]?",
                    "options": [
                        "Pierwszy argument przekazany przez użytkownika",
                        "Nazwę uruchomionego skryptu",
                        "Liczbę przekazanych argumentów",
                        "Ścieżkę do interpretera Pythona"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "sys.argv[0] to zawsze nazwa (lub ścieżka) uruchomionego pliku skryptu."
                },
                {
                    "id": "py-gen-014",
                    "type": "single",
                    "question": "Dla listy x = [10, 20, 30, 40, 50], jaka będzie wartość wycięcia x[1::2]?",
                    "options": [
                        "[20, 40]",
                        "[10, 30, 50]",
                        "[20, 30, 40]",
                        "[30, 50]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wycięcie x[1::2] startuje od indeksu 1 (20) i pobiera elementy z krokiem 2, czyli indeksy 1, 3. Wynik to [20, 40]."
                },
                {
                    "id": "py-gen-015",
                    "type": "single",
                    "question": "Jaki jest efekt użycia wycięcia x[::-1] na liście x?",
                    "options": [
                        "Zwrócenie listy bez pierwszego i ostatniego elementu",
                        "Klonowanie listy bez żadnych zmian",
                        "Odwrócenie kolejności elementów w nowo utworzonej liście",
                        "Usunięcie wszystkich elementów z listy"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Wycięcie z krokiem -1 (step=-1) powoduje odwrócenie listy i zwrócenie jej kopii."
                },
                {
                    "id": "py-gen-016",
                    "type": "single",
                    "question": "Co się stanie w wyniku operacji x[100:200] na liście x = [1, 2, 3]?",
                    "options": [
                        "Zostanie zgłoszony błąd IndexError",
                        "Zostanie zwrócona pusta lista []",
                        "Zostanie zwrócona wartość None",
                        "Zostaną wstawione puste wartości do listy"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Slicing (wycinanie) w Pythonie wybacza wyjście poza zakres indeksów i w takim wypadku zwraca pustą listę."
                },
                {
                    "id": "py-gen-017",
                    "type": "multiple",
                    "question": "Które z poniższych operacji tworzą niezależną kopię (płytką) listy x?",
                    "options": [
                        "y = x",
                        "y = x[:]",
                        "y = x.copy()",
                        "y = list(x)",
                        "y = copy.deepcopy(x)"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "explanation": "Operacja 'y = x' tworzy jedynie dodatkową referencję do tego samego obiektu. Slicing x[:], metody .copy() i list(x) tworzą płytką kopię. deepcopy() tworzy kopię głęboką."
                },
                {
                    "id": "py-gen-018",
                    "type": "single",
                    "question": "Jaka jest różnica między metodami append() i extend() dla list?",
                    "options": [
                        "append() dodaje element na początek, extend() na koniec",
                        "append() dodaje argument jako pojedynczy element, extend() iteruje po argumencie i dodaje każdy jego element z osobna",
                        "Metody te są synonimami",
                        "extend() usuwa elementy z listy"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "x.append([1,2]) wstawi listę [1,2] jako pojedynczy zagnieżdżony element. x.extend([1,2]) rozszerzy listę o pojedyncze elementy 1 oraz 2."
                },
                {
                    "id": "py-gen-019",
                    "type": "single",
                    "question": "Jaka jest złożoność obliczeniowa wstawienia elementu na początek listy metodą x.insert(0, val) dla listy o długości N?",
                    "options": [
                        "O(1)",
                        "O(log N)",
                        "O(N)",
                        "O(N log N)"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Wstawienie elementu na indeks 0 wymaga przesunięcia wszystkich dotychczasowych N elementów w pamięci o jedną pozycję w prawo, stąd złożoność O(N)."
                },
                {
                    "id": "py-gen-020",
                    "type": "single",
                    "question": "Jaka jest złożoność obliczeniowa dodania elementu na koniec listy metodą x.append(val)?",
                    "options": [
                        "O(1)",
                        "O(N)",
                        "O(log N)",
                        "O(N^2)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Dodanie elementu na koniec listy (amortyzowane) zajmuje stały czas O(1), ponieważ Python alokuje pamięć z zapasem."
                },
                {
                    "id": "py-gen-021",
                    "type": "single",
                    "question": "Jaka jest różnica między x.sort() a sorted(x)?",
                    "options": [
                        "x.sort() sortuje w miejscu i zwraca None, sorted(x) zwraca nową posortowaną listę",
                        "sorted(x) sortuje w miejscu, x.sort() zwraca kopię",
                        "x.sort() działa tylko na krotkach",
                        "Nie ma żadnej różnicy"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metoda .sort() modyfikuje oryginalną listę i nie zwraca wartości. Funkcja wbudowana sorted() przyjmuje dowolny obiekt iterowalny i zwraca nową posortowaną listę."
                },
                {
                    "id": "py-gen-022",
                    "type": "single",
                    "question": "Jaki będzie wynik działania kodu: [x**2 for x in range(5) if x % 2 == 0]?",
                    "options": [
                        "[0, 4, 16]",
                        "[0, 1, 4, 9, 16]",
                        "[1, 9]",
                        "[4, 16]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "range(5) generuje liczby 0, 1, 2, 3, 4. Warunek `x % 2 == 0` filtruje liczby parzyste (0, 2, 4). Ich kwadraty to odpowiednio 0, 4, 16."
                },
                {
                    "id": "py-gen-023",
                    "type": "single",
                    "question": "Czy listy w Pythonie są mutowalne (mutable)?",
                    "options": [
                        "Tak, ich zawartość można modyfikować w miejscu",
                        "Nie, każda zmiana powoduje utworzenie nowego obiektu w pamięci",
                        "Tylko jeśli zawierają wyłącznie liczby",
                        "Tylko w trybie wielowątkowym"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Listy są mutowalne. Możemy dodawać, usuwać i zmieniać elementy bez tworzenia nowego obiektu listy."
                },
                {
                    "id": "py-gen-024",
                    "type": "single",
                    "question": "Jaka jest średnia złożoność wyszukiwania elementu przy użyciu operatora 'in' w liście o długości N?",
                    "options": [
                        "O(1)",
                        "O(log N)",
                        "O(N)",
                        "O(N^2)"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Wyszukiwanie w liście odbywa się sekwencyjnie od początku do końca, dlatego średnia złożoność to O(N)."
                },
                {
                    "id": "py-gen-025",
                    "type": "single",
                    "question": "Jaki będzie wynik operacji x = [1]; x.append(x); print(len(x))?",
                    "options": [
                        "2",
                        "1",
                        "Wystąpi błąd przepełnienia stosu",
                        "Wystąpi błąd ValueError"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Lista x będzie zawierać samą siebie jako drugi element (tworząc strukturę cykliczną). len(x) to 2, ponieważ lista ma teraz dwa elementy: [1, [...]]."
                },
                {
                    "id": "py-gen-026",
                    "type": "single",
                    "question": "Jak poprawnie zdefiniować krotkę (tuple) zawierającą tylko jeden element o wartości 5?",
                    "options": [
                        "t = (5)",
                        "t = (5,)",
                        "t = tuple(5)",
                        "t = [5]"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Przecinek po elemencie jest niezbędny: `(5,)`. Bez przecinka interpreter potraktuje nawiasy jako zwykłe nawiasy matematyczne otaczające liczbę 5 (typ int)."
                },
                {
                    "id": "py-gen-027",
                    "type": "single",
                    "question": "Czy krotka (tuple) w Pythonie jest mutowalna?",
                    "options": [
                        "Tak, można zmieniać jej elementy w dowolnym momencie",
                        "Nie, jest to struktura niemutowalna",
                        "Tylko jeśli nie zawiera zmiennych typu string",
                        "Tak, ale tylko przy użyciu metody .append()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Krotka jest strukturą niemutowalną. Raz utworzona nie może mieć zmienionych, dodanych ani usuniętych elementów."
                },
                {
                    "id": "py-gen-028",
                    "type": "single",
                    "question": "Co się stanie, jeśli spróbujemy zmodyfikować listę wewnątrz krotki, np. t = (1, [2, 3]); t[1].append(4)?",
                    "options": [
                        "Wystąpi błąd TypeError, ponieważ krotka jest niemutowalna",
                        "Operacja zakończy się sukcesem, a krotka będzie miała postać (1, [2, 3, 4])",
                        "Wygenerowany zostanie błąd ValueError",
                        "Lista zostanie skopiowana i krotka pozostanie bez zmian"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Krotka przechowuje jedynie referencje do obiektów. Chociaż sama krotka nie może zmienić referencji, obiekt referowany (lista) jest mutowalny i może być zmieniany."
                },
                {
                    "id": "py-gen-029",
                    "type": "single",
                    "question": "Jakie obiekty mogą być kluczami w słowniku (dict) w Pythonie?",
                    "options": [
                        "Tylko liczby całkowite i napisy",
                        "Dowolne obiekty mutowalne i niemutowalne",
                        "Obiekty hashowalne (niemutowalne, takie jak liczby, napisy, krotki zawierające tylko hashowalne elementy)",
                        "Wszystkie obiekty oprócz list"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Kluczami słownika mogą być wyłącznie obiekty niemutowalne/hashowalne (posiadające metodę __hash__). Listy, słowniki i zbiory nie mogą być kluczami."
                },
                {
                    "id": "py-gen-030",
                    "type": "single",
                    "question": "Jak działa metoda d.get(key, default) dla słownika d?",
                    "options": [
                        "Zwraca wartość dla klucza, a jeśli klucza nie ma, zgłasza błąd KeyError",
                        "Zwraca wartość dla klucza, a jeśli klucza nie ma, zwraca wartość podaną jako default (lub None) bez zgłaszania błędu",
                        "Wstawia domyślną wartość do słownika, jeśli klucz nie istnieje",
                        "Służy do usuwania klucza ze słownika"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda .get() pozwala na bezpieczne pobieranie wartości ze słownika bez obawy o błąd KeyError, zwracając domyślną wartość w przypadku braku klucza."
                },
                {
                    "id": "py-gen-031",
                    "type": "single",
                    "question": "Jaki będzie wynik wywołania typu słownika: {x: x**2 for x in (2, 4)}?",
                    "options": [
                        "Słownik: {2: 4, 4: 16}",
                        "Zbiór: {2, 4, 16}",
                        "Krotka: (2, 4, 16)",
                        "Wystąpi błąd TypeError"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Jest to wyrażenie słownikotwórcze (dict comprehension). Tworzy ono słownik {2: 4, 4: 16}."
                },
                {
                    "id": "py-gen-032",
                    "type": "single",
                    "question": "Jak utworzyć pusty zbiór (set) w Pythonie?",
                    "options": [
                        "s = {}",
                        "s = set()",
                        "s = []",
                        "s = set([])"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Zapis `s = {}` tworzy pusty słownik (dict). Do utworzenia pustego zbioru konieczne jest użycie konstruktora `set()`."
                },
                {
                    "id": "py-gen-033",
                    "type": "single",
                    "question": "Która z poniższych operacji wyznacza część wspólną (przecięcie) zbiorów A i B?",
                    "options": [
                        "A | B",
                        "A & B",
                        "A - B",
                        "A ^ B"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Przecięcie zbiorów (intersection) realizowane jest operatorem '&'. Operator '|' to suma, '-' to różnica, a '^' to różnica symetryczna."
                },
                {
                    "id": "py-gen-034",
                    "type": "single",
                    "question": "Czym charakteryzuje się typ frozenset w porównaniu do zwykłego set?",
                    "options": [
                        "frozenset jest niemutowalny (nie można do niego dodawać ani usuwać elementów) i może być kluczem słownika",
                        "frozenset pozwala na duplikaty elementów",
                        "frozenset sortuje elementy przy każdym wyświetleniu",
                        "frozenset nie posiada metody union()"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "frozenset to zamrożony, niemutowalny zbiór. Ponieważ jest niemutowalny, posiada funkcję hashowania i może być używany np. jako klucz słownika lub element innego zbioru."
                },
                {
                    "id": "py-gen-035",
                    "type": "single",
                    "question": "W jaki sposób Python przekazuje argumenty do funkcji?",
                    "options": [
                        "Zawsze przez wartość (call by value)",
                        "Zawsze przez referencję (call by reference)",
                        "Przez przypisanie / udostępnienie obiektu (call by object reference / sharing)",
                        "Zależy to od użycia słowa kluczowego global"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Python przekazuje referencje do istniejących obiektów (przez przypisanie). Jeśli przekażemy mutowalny obiekt (np. listę), modyfikacje wewnątrz funkcji będą widoczne na zewnątrz."
                },
                {
                    "id": "py-gen-036",
                    "type": "single",
                    "question": "Jaki problem występuje w poniższej definicji funkcji: def dodaj_do_listy(x, lista=[])?",
                    "options": [
                        "Definicja jest całkowicie poprawna",
                        "Domyślna lista jest tworzona raz (przy definicji), przez co kolejne wywołania funkcji będą współdzielić tę samą instancję listy",
                        "Funkcja nie wykona się, ponieważ domyślna wartość nie może być listą",
                        "Wywołanie funkcji bez drugiego argumentu wygeneruje IndexError"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Wartości domyślne parametrów są ewaluowane tylko raz, przy definicji funkcji. Użycie obiektu mutowalnego (jak lista) jako wartości domyślnej prowadzi do zachowania stanu między wywołaniami."
                },
                {
                    "id": "py-gen-037",
                    "type": "single",
                    "question": "Co oznacza zapis *args w sygnaturze funkcji?",
                    "options": [
                        "Wymaga przekazania listy jako argumentu",
                        "Pozwala na przekazanie dowolnej liczby argumentów pozycyjnych, które zostaną spakowane do krotki (tuple)",
                        "Służy do przekazywania argumentów nazwanych",
                        "Zwraca błąd składni, gwiazdka może być tylko w operacjach matematycznych"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "*args zbiera dodatkowe pozycyjne argumenty przekazane do funkcji i pakuje je w krotkę."
                },
                {
                    "id": "py-gen-038",
                    "type": "single",
                    "question": "Jaki jest priorytet wyszukiwania nazw zmiennych w Pythonie (reguła LEGB)?",
                    "options": [
                        "Global -> Local -> Enclosing -> Built-in",
                        "Local -> Enclosing -> Global -> Built-in",
                        "Local -> Enclosing -> Built-in -> Global",
                        "Built-in -> Global -> Enclosing -> Local"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Interpreter szuka zmiennych w kolejności: Local (lokalna), Enclosing (zamykająca / nadrzędna funkcja), Global (globalna), Built-in (wbudowana)."
                },
                {
                    "id": "py-gen-039",
                    "type": "single",
                    "question": "Co się dzieje przy instrukcji import module w porównaniu do from module import func?",
                    "options": [
                        "Oba polecenia robią dokładnie to samo",
                        "import module ładuje cały moduł i tworzy dla niego osobną przestrzeń nazw; from module import func kopiuje funkcję bezpośrednio do obecnej przestrzeni nazw",
                        "from module import func jest wolniejsza, bo importuje cały moduł i usuwa resztę",
                        "from module import func nie wczytuje kodu modułu do pamięci"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "W obu przypadkach moduł jest ładowany w całości do sys.modules, ale polecenie `import` tworzy referencję do modułu w lokalnej przestrzeni nazw, a `from ... import` importuje bezpośrednio dany element do lokalnego zakresu."
                },
                {
                    "id": "py-gen-040",
                    "type": "single",
                    "question": "Jaka jest rola pliku __init__.py w folderze na dysku?",
                    "options": [
                        "Wskazuje interpreterowi Pythona, że katalog powinien być traktowany jako pakiet (package)",
                        "Jest głównym plikiem wykonywalnym aplikacji",
                        "Służy do kompilacji plików pakietu do kodu maszynowego",
                        "Usuwa nieużywane zmienne po zakończeniu działania programu"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Plik __init__.py (może być pusty) oznacza katalog jako pakiet Pythona. Od Pythona 3.3 nie jest on bezwzględnie wymagany dla pakietów przestrzeni nazw, ale wciąż jest standardem."
                },
                {
                    "id": "py-gen-041",
                    "type": "single",
                    "question": "Jaką wartość przyjmuje zmienna specjalna __name__ w skrypcie, który został uruchomiony bezpośrednio (np. python main.py)?",
                    "options": [
                        "\"main\"",
                        "\"__main__\"",
                        "Nazwę pliku, np. \"main.py\"",
                        "None"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Gdy plik jest uruchamiany bezpośrednio, interpreter przypisuje zmiennej __name__ wartość \"__main__\"."
                },
                {
                    "id": "py-gen-042",
                    "type": "single",
                    "question": "W jaki sposób można zmusić interpreter Pythona do ponownego załadowania (przeładowania) już zaimportowanego modułu bez restartu programu?",
                    "options": [
                        "Ponowne wpisanie słowa kluczowego import module",
                        "Użycie funkcji reload(module) z wbudowanego modułu importlib",
                        "Użycie instrukcji del module, a potem import module",
                        "Nie ma możliwości przeładowania modułu w działającym procesie"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Python cache'uje zaimportowane moduły w sys.modules. Aby zmusić go do ponownego odczytu z dysku, należy użyć importlib.reload(module)."
                },
                {
                    "id": "py-gen-043",
                    "type": "single",
                    "question": "Do czego służy zmienna specjalna __all__ definiowana w pliku modułu?",
                    "options": [
                        "Definiuje listę klas i funkcji, które będą zaimportowane przy użyciu składni from module import *",
                        "Przechowuje listę wszystkich autorów modułu",
                        "Blokuje importowanie jakichkolwiek elementów z tego modułu",
                        "Jest listą zmiennych globalnych dostępnych tylko w trybie read-only"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "__all__ to lista stringów określająca, które nazwy mają być eksportowane podczas importu gwiazdkowego (import *)."
                },
                {
                    "id": "py-gen-044",
                    "type": "single",
                    "question": "Dlaczego powszechnie odradza się stosowanie importu w postaci: from module import *?",
                    "options": [
                        "Jest to zabronione przez interpreter i zwraca błąd SyntaxError",
                        "Prowadzi do zanieczyszczenia przestrzeni nazw (namespace pollution) i może nieświadomie nadpisać istniejące funkcje o tej samej nazwie",
                        "Zmniejsza wydajność kodu o co najmniej 50%",
                        "Uniemożliwia debugowanie kodu"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Importowanie wszystkiego gwiazdką zaciemnia pochodzenie funkcji w kodzie i grozi nadpisaniem lokalnych nazw (shadowing)."
                },
                {
                    "id": "py-gen-045",
                    "type": "single",
                    "question": "Co zawiera lista sys.path?",
                    "options": [
                        "Ścieżkę do plików binarnych systemu operacyjnego",
                        "Listę katalogów, w których interpreter Pythona wyszukuje importowane moduły",
                        "Spis wszystkich funkcji wbudowanych w język Python",
                        "Ścieżkę do wirtualnego środowiska"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "sys.path to lista katalogów przeszukiwanych przez interpreter podczas próby zaimportowania modułu (w kolejności: katalog bieżący, ścieżki PYTHONPATH, biblioteki standardowe)."
                },
                {
                    "id": "py-gen-046",
                    "type": "single",
                    "question": "Czym jest środowisko wirtualne (virtual environment, venv) w Pythonie?",
                    "options": [
                        "Emulatorem innego systemu operacyjnego na potrzeby testów",
                        "Izolowanym środowiskiem z osobną wersją interpretera Pythona i bibliotekami, zapobiegającym konfliktom zależności między projektami",
                        "Chmurą obliczeniową do zdalnego uruchamiania skryptów",
                        "Wbudowanym modułem do szyfrowania kodu źródłowego"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "venv tworzy izolowane środowisko, dzięki czemu każdy projekt może mieć własne wersje pakietów zainstalowane niezależnie od systemu i innych projektów."
                },
                {
                    "id": "py-gen-047",
                    "type": "single",
                    "question": "Które narzędzie jest standardowym instalatorem pakietów w ekosystemie Pythona?",
                    "options": [
                        "npm",
                        "pip",
                        "apt",
                        "gradle"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "pip (Pip Installs Packages) to domyślny instalator pakietów z repozytorium PyPI dla języka Python."
                },
                {
                    "id": "py-gen-048",
                    "type": "single",
                    "question": "Co się stanie w przypadku wystąpienia tzw. cyklicznego importu (circular import)?",
                    "options": [
                        "Program wejdzie w nieskończoną pętlę i zawiesi komputer",
                        "Zostanie zgłoszony błąd ImportError/AttributeError, ponieważ jeden z modułów spróbuje odwołać się do niedostępnych jeszcze definicji drugiego",
                        "Python automatycznie złączy oba pliki w jeden",
                        "Interpreter zignoruje drugi import"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Gdy Moduł A importuje Moduł B, a Moduł B importuje Moduł A, powstaje cykl. Może to skutkować brakiem definicji atrybutów podczas inicjalizacji i zgłoszeniem błędu importu."
                },
                {
                    "id": "py-gen-049",
                    "type": "single",
                    "question": "Gdzie fizycznie są instalowane pakiety przez pip, jeśli nie używamy środowiska wirtualnego i instalujemy je globalnie na Windows/Linux?",
                    "options": [
                        "W katalogu projektu",
                        "W folderze site-packages powiązanym z instalacją Pythona",
                        "W katalogu domowym użytkownika w folderze /bin",
                        "W pamięci podręcznej przeglądarki"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Globalne (lub systemowe) pakiety Pythona lądują w specjalnym katalogu o nazwie `site-packages`."
                },
                {
                    "id": "py-gen-050",
                    "type": "single",
                    "question": "Która wbudowana funkcja pozwala sprawdzić listę nazw (atrybutów i metod) zdefiniowanych w danym module lub obiekcie?",
                    "options": [
                        "help()",
                        "dir()",
                        "type()",
                        "list()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Funkcja dir() bez argumentów zwraca nazwy w bieżącym zakresie lokalnym. Przekazanie obiektu lub modułu jako argumentu, np. dir(sys), zwraca listę jego atrybutów."
                },
                {
                    "id": "py-gen-051",
                    "type": "single",
                    "question": "Która klasa jest klasą bazową dla wszystkich wbudowanych wyjątków w Pythonie?",
                    "options": [
                        "Exception",
                        "BaseException",
                        "SystemError",
                        "Object"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "BaseException to bezpośredni przodek wszystkich wyjątków. Większość wyjątków aplikacyjnych dziedziczy po Exception (która sama dziedziczy po BaseException)."
                },
                {
                    "id": "py-gen-052",
                    "type": "single",
                    "question": "Kiedy wykonuje się blok 'else' w konstrukcji try-except-else-finally?",
                    "options": [
                        "Gdy zostanie zgłoszony dowolny wyjątek",
                        "Gdy kod w bloku 'try' wykona się pomyślnie, nie zgłaszając żadnego wyjątku",
                        "Zawsze po zakończeniu bloku 'finally'",
                        "Gdy żaden wyjątek nie pasuje do zdefiniowanych bloków 'except'"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Blok 'else' wykonuje się tylko wtedy, gdy w sekcji 'try' nie wystąpił żaden wyjątek."
                },
                {
                    "id": "py-gen-053",
                    "type": "single",
                    "question": "Jaki jest efekt użycia bloku 'finally'?",
                    "options": [
                        "Wykonuje się tylko wtedy, gdy wyjątek został poprawnie obsłużony",
                        "Wykonuje się zawsze, niezależnie od tego, czy wyjątek wystąpił i czy został obsłużony",
                        "Wykonuje się tylko wtedy, gdy nie wystąpił błąd",
                        "Przerywa działanie programu"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Kod w bloku 'finally' gwarantuje wykonanie (np. do zamykania plików lub zwalniania zasobów) bez względu na to, co wydarzyło się w try/except."
                },
                {
                    "id": "py-gen-054",
                    "type": "single",
                    "question": "Jak poprawnie przechwycić wyjątki typu ValueError oraz TypeError w jednym bloku except?",
                    "options": [
                        "except ValueError, TypeError:",
                        "except ValueError or TypeError:",
                        "except (ValueError, TypeError):",
                        "except [ValueError, TypeError]:"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Aby przechwycić kilka wyjątków w jednym bloku, należy przekazać je jako krotkę w nawiasach okrągłych."
                },
                {
                    "id": "py-gen-055",
                    "type": "single",
                    "question": "Co robi instrukcja 'raise' bez podania nazwy wyjątku, wywołana wewnątrz bloku except?",
                    "options": [
                        "Zgłasza błąd RuntimeError",
                        "Ponownie zgłasza (re-raise) aktywny wyjątek, który jest obecnie obsługiwany",
                        "Nic nie robi (działa jak pass)",
                        "Czyści stos wywołań wyjątków"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Pusta instrukcja `raise` wewnątrz bloku except powoduje wyrzucenie w górę dokładnie tego samego wyjątku, który został złapany."
                },
                {
                    "id": "py-gen-056",
                    "type": "single",
                    "question": "Jak stworzyć własny wyjątek w Pythonie?",
                    "options": [
                        "Stworzyć klasę dziedziczącą po klasie Exception (lub jej podklasie)",
                        "Stworzyć słownik z kluczem 'error'",
                        "Wywołać funkcję create_exception()",
                        "Użyć słowa kluczowego def"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Własne wyjątki definiuje się jako klasy dziedziczące bezpośrednio lub pośrednio po klasie Exception."
                },
                {
                    "id": "py-gen-057",
                    "type": "single",
                    "question": "Jaki wyjątek zostanie zgłoszony, gdy warunek w instrukcji assert będzie fałszywy?",
                    "options": [
                        "TypeError",
                        "AssertionError",
                        "ValueError",
                        "SystemError"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Instrukcja `assert warunek` zgłasza wyjątek `AssertionError`, jeśli ewaluacja warunku daje False."
                },
                {
                    "id": "py-gen-058",
                    "type": "single",
                    "question": "Jak można wyłączyć wykonywanie instrukcji assert w programie w Pythonie?",
                    "options": [
                        "Uruchamiając interpreter Pythona z flagą -O (optymalizacja) lub ustawiając zmienną środowiskową PYTHONOPTIMIZE",
                        "Używając biblioteki standardowej warnings",
                        "Składnia assert jest wyłączana automatycznie w środowiskach produkcyjnych",
                        "Nie można wyłączyć instrukcji assert"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Flaga `-O` (lub `-OO`) wyłącza instrukcje assert (wtedy zmienna wbudowana __debug__ staje się False, a instrukcje assert nie generują żadnego kodu bajtowego)."
                },
                {
                    "id": "py-gen-059",
                    "type": "single",
                    "question": "Który wyjątek zostanie wygenerowany przy próbie odwołania do nieistniejącej zmiennej lokalnej lub globalnej?",
                    "options": [
                        "AttributeError",
                        "NameError",
                        "KeyError",
                        "LookupError"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "NameError jest zgłaszany, gdy interpreter nie potrafi odnaleźć podanej nazwy zmiennej lub funkcji."
                },
                {
                    "id": "py-gen-060",
                    "type": "single",
                    "question": "Który wyjątek zostanie wygenerowany przy próbie odwołania do nieistniejącego klucza w słowniku?",
                    "options": [
                        "IndexError",
                        "KeyError",
                        "AttributeError",
                        "ValueError"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Dostęp do brakującego klucza w słowniku za pomocą nawiasów kwadratowych, np. d['brak'], wywołuje KeyError."
                },
                {
                    "id": "py-gen-061",
                    "type": "single",
                    "question": "Jakie metody musi implementować klasa, aby mogła być używana jako menedżer kontekstu (context manager) w instrukcji 'with'?",
                    "options": [
                        "__enter__() oraz __exit__()",
                        "__open__() oraz __close__()",
                        "__init__() oraz __del__()",
                        "__start__() oraz __stop__()"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Protokół menedżera kontekstu wymaga implementacji metod magicznych __enter__ (uruchamiana na początku) oraz __exit__ (uruchamiana na końcu, obsługuje ewentualne wyjątki)."
                },
                {
                    "id": "py-gen-062",
                    "type": "single",
                    "question": "Jaki błąd zostanie zgłoszony, jeśli spróbujemy podzielić liczbę przez zero?",
                    "options": [
                        "ValueError",
                        "ZeroDivisionError",
                        "ArithmeticError",
                        "FloatingPointError"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "ZeroDivisionError to specyficzny wyjątek zgłaszany w przypadku dzielenia modulo lub zwykłego dzielenia przez zero. Dziedziczy po ArithmeticError."
                },
                {
                    "id": "py-gen-063",
                    "type": "single",
                    "question": "Czy złapanie wyjątku za pomocą except Exception: przechwyci również KeyboardInterrupt (np. naciśnięcie Ctrl+C)?",
                    "options": [
                        "Tak, przechwyci każdy błąd",
                        "Nie, ponieważ KeyboardInterrupt dziedziczy bezpośrednio z BaseException, omijając klasę Exception",
                        "Tak, ale tylko na systemach Linux/Unix",
                        "Tylko jeśli program działa w trybie interaktywnym"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "KeyboardInterrupt, SystemExit oraz GeneratorExit dziedziczą bezpośrednio po BaseException. Przechwycenie 'except Exception' celowo ich nie łapie, aby program mógł zostać normalnie przerwany."
                },
                {
                    "id": "py-gen-064",
                    "type": "single",
                    "question": "Czy napisy (strings) w Pythonie są strukturami mutowalnymi?",
                    "options": [
                        "Tak, można zmieniać znaki pod określonym indeksem",
                        "Nie, stringi są niemutowalne (immutable)",
                        "Tylko napisy jednobajtowe (ASCII) są mutowalne",
                        "Są mutowalne tylko przy użyciu metody .replace()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Stringi są niemutowalne. Każda operacja modyfikacji (np. zmiana litery, dodanie napisu) tworzy nowy obiekt w pamięci."
                },
                {
                    "id": "py-gen-065",
                    "type": "single",
                    "question": "Która metoda konwertuje obiekt typu string (str) na typ bajtowy (bytes)?",
                    "options": [
                        "str.decode()",
                        "str.encode()",
                        "bytes(str)",
                        "str.to_bytes()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda `str.encode(encoding)` konwertuje tekst (unicode) na tablicę bajtów. Do odwrotnej operacji służy `bytes.decode(encoding)`."
                },
                {
                    "id": "py-gen-066",
                    "type": "single",
                    "question": "Jak działa tryb otwarcia pliku 'x' w funkcji open(filename, mode)?",
                    "options": [
                        "Otwiera plik tylko do odczytu w formacie XML",
                        "Otwiera plik do zapisu, ale zgłasza błąd FileExistsError, jeśli plik już istnieje (wyłączne tworzenie)",
                        "Czyści zawartość pliku (truncate) przed otwarciem",
                        "Otwiera plik w trybie binarnym"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Tryb 'x' (exclusive creation) tworzy nowy plik i otwiera go do zapisu. Jeśli plik o tej nazwie już istnieje, operacja kończy się wyjątkiem FileExistsError."
                },
                {
                    "id": "py-gen-067",
                    "type": "single",
                    "question": "Jaka jest różnica między metodami readlines() a read()?",
                    "options": [
                        "read() wczytuje plik jako pojedynczy napis, readlines() wczytuje linie pliku i zwraca je jako listę napisów",
                        "readlines() służy tylko do plików binarnych",
                        "read() wczytuje plik linia po linii, oszczędzając pamięć",
                        "Nie ma żadnej różnicy"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "read() pobiera całą zawartość pliku jako jeden str (lub bytes). readlines() dzieli zawartość po znakach nowej linii i zwraca listę str."
                },
                {
                    "id": "py-gen-068",
                    "type": "single",
                    "question": "Do czego służy instrukcja with open('file.txt', 'r') as f:?",
                    "options": [
                        "Przyspiesza operacje wejścia/wyjścia",
                        "Gwarantuje automatyczne i bezpieczne zamknięcie pliku po wyjściu z bloku kodu, nawet w przypadku wystąpienia błędu",
                        "Uruchamia plik w tle",
                        "Szyfruje dostęp do pliku"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Konstrukcja 'with' działa jako Context Manager, automatycznie zamykając plik (wywołując f.close() na obiekcie pliku) przy wyjściu z zakresu bloku."
                },
                {
                    "id": "py-gen-069",
                    "type": "single",
                    "question": "Jak działa metoda seek(offset, whence) obiektu pliku?",
                    "options": [
                        "Wyszukuje podany ciąg znaków w pliku",
                        "Przesuwa wskaźnik pozycji czytania/zapisu w pliku o określoną liczbę bajtów (offset) względem punktu odniesienia (whence)",
                        "Zapisuje plik na dysku (flush)",
                        "Zmienia nazwę pliku"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda .seek() ustawia pozycję kursora w pliku. Parametr whence decyduje, czy offset jest liczony od początku pliku (0), bieżącej pozycji (1) czy końca pliku (2)."
                },
                {
                    "id": "py-gen-070",
                    "type": "single",
                    "question": "Która metoda zwraca bieżącą pozycję wskaźnika pliku?",
                    "options": [
                        "position()",
                        "tell()",
                        "get_index()",
                        "seek()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda .tell() zwraca aktualną pozycję wskaźnika czytania/zapisu (liczoną w bajtach od początku pliku)."
                },
                {
                    "id": "py-gen-071",
                    "type": "single",
                    "question": "Jaka jest zaleta stosowania biblioteki pathlib w porównaniu do tradycyjnego os.path?",
                    "options": [
                        "pathlib jest szybsza o 200%",
                        "pathlib oferuje obiektowe podejście do ścieżek plików i katalogów, niezależne od systemu operacyjnego",
                        "pathlib pozwala na otwieranie plików bez uprawnień administratora",
                        "os.path została całkowicie usunięta z Pythona 3"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "W pathlib ścieżki są obiektami klasy Path, co pozwala na wygodne manipulowanie nimi za pomocą metod i przeciążonego operatora division '/', zamiast operacji na czystych napisach."
                },
                {
                    "id": "py-gen-072",
                    "type": "single",
                    "question": "Który tryb otwarcia pliku pozwala na dopisywanie danych na koniec bez usuwania dotychczasowej zawartości?",
                    "options": [
                        "'w'",
                        "'a'",
                        "'r+'",
                        "'w+'"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Tryb 'a' (append) otwiera plik do dopisywania. Wskaźnik pozycji jest automatycznie ustawiany na koniec pliku."
                },
                {
                    "id": "py-gen-073",
                    "type": "single",
                    "question": "Jaki będzie wynik działania kodu: '   python   '.strip()?",
                    "options": [
                        "'python'",
                        "'   python'",
                        "'python   '",
                        "'py  thon'"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metoda .strip() usuwa białe znaki (spacje, tabulatory, znaki nowej linii) z początku oraz z końca napisu."
                },
                {
                    "id": "py-gen-074",
                    "type": "single",
                    "question": "Jak połączyć listę napisów ['a', 'b', 'c'] w jeden napis 'a, b, c'?",
                    "options": [
                        "','.join(['a', 'b', 'c'])",
                        "', '.join(['a', 'b', 'c'])",
                        "['a', 'b', 'c'].join(', ')",
                        "concat(',', ['a', 'b', 'c'])"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda .join() jest metodą obiektu typu string (separatory). Zapis `', '.join(kolekcja)` połączy elementy wstawiając przecinek ze spacją między nimi."
                },
                {
                    "id": "py-gen-075",
                    "type": "single",
                    "question": "Jaka jest rola modułu io.StringIO?",
                    "options": [
                        "Służy do szybkiej konkatenacji stringów",
                        "Umożliwia traktowanie napisu (str) w pamięci jako obiektu plikopodobnego (file-like object)",
                        "Zapisuje napisy bezpośrednio na dysk w formacie JSON",
                        "Konwertuje liczby na stringi w locie"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "StringIO tworzy bufor w pamięci RAM, na którym można wykonywać operacje typowe dla plików, np. .read(), .write(), .seek()."
                },
                {
                    "id": "py-gen-076",
                    "type": "single",
                    "question": "Co reprezentuje parametr 'self' przekazywany jako pierwszy argument do metod instancji w klasie?",
                    "options": [
                        "Referencję do samej klasy (metadanych)",
                        "Referencję do konkretnej, aktualnie modyfikowanej instancji (obiektu) tej klasy",
                        "Słowo kluczowe oznaczające funkcję prywatną",
                        "Adres bazowy w pamięci RAM interpretera"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Parametr 'self' (nazwa jest umowna, ale powszechnie stosowana) wskazuje na konkretny obiekt, dla którego wywołano metodę."
                },
                {
                    "id": "py-gen-077",
                    "type": "single",
                    "question": "Jaka jest rola metody magicznej __init__ w klasie?",
                    "options": [
                        "Służy do fizycznej alokacji pamięci dla obiektu (alokator)",
                        "Jest konstruktorem/inicjalizatorem obiektu, wywoływanym automatycznie po jego utworzeniu w celu ustawienia początkowych atrybutów",
                        "Niszczy obiekt i zwalnia zasoby (destruktor)",
                        "Służy do importowania zewnętrznych klas"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda __init__ inicjalizuje nowo utworzoną instancję klasy (samą alokacją zajmuje się __new__)."
                },
                {
                    "id": "py-gen-078",
                    "type": "single",
                    "question": "Jak w Pythonie realizuje się mechanizm enkapsulacji / ukrywania danych (zmienne prywatne)?",
                    "options": [
                        "Używając słowa kluczowego private na początku deklaracji",
                        "Używając konwencji nazewniczej z przedrostkiem pojedynczego underscore '_' (chronione) lub podwójnego underscore '__' (prywatne, włącza name mangling)",
                        "Ukrywanie danych nie jest możliwe w języku Python",
                        "Przez umieszczenie kodu klasy w osobnym module"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Python nie ma ścisłego blokowania dostępu. Stosuje się konwencję: '_' sugeruje atrybut wewnętrzny, a '__' uruchamia name mangling (modyfikację nazwy atrybutu w pamięci na _NazwaKlasy__nazwaAtrybutu), co utrudnia bezpośredni dostęp z zewnątrz."
                },
                {
                    "id": "py-gen-079",
                    "type": "single",
                    "question": "Jak działa name mangling w Pythonie dla atrybutu __secret zdefiniowanego w klasie MyClass?",
                    "options": [
                        "Szyfruje wartość atrybutu algorytmem MD5",
                        "Zmienia wewnętrzną nazwę atrybutu na _MyClass__secret",
                        "Usuwa atrybut z pamięci tuż po zakończeniu metody __init__",
                        "Rzuca błąd SyntaxError при kompilacji"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Name mangling zmienia nazwę atrybutu o strukturze '__nazwa' na '_NazwaKlasy__nazwa', co zapobiega przypadkowemu nadpisaniu w klasach pochodnych."
                },
                {
                    "id": "py-gen-080",
                    "type": "single",
                    "question": "Co to jest MRO (Method Resolution Order)?",
                    "options": [
                        "Algorytm optymalizacji kodu bajtowego",
                        "Kolejność, w jakiej Python przeszukuje klasy bazowe w celu odnalezienia wywoływanej metody (szczególnie istotna przy wielodziedziczeniu)",
                        "Proces usuwania nieużywanych obiektów (Garbage Collector)",
                        "Sposób sortowania metod w klasie według nazwy"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "MRO określa hierarchię przeszukiwania klas przy dziedziczeniu wielokrotnym. Wykorzystuje algorytm C3 Linearization. Kolejność można sprawdzić wywołując np. Klasa.mro()."
                },
                {
                    "id": "py-gen-081",
                    "type": "single",
                    "question": "Co robi funkcja super()?",
                    "options": [
                        "Wymusza uruchomienie programu z uprawnieniami administratora",
                        "Zwraca obiekt proxy, który deleguje wywołania metod do klasy nadrzędnej (rodzica) zgodnie z MRO",
                        "Zwiększa priorytet procesu Pythona w systemie operacyjnym",
                        "Tworzy instancję klasy nadrzędnej"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Funkcja `super()` pozwala wywołać metody klasy nadrzędnej bez konieczności bezpośredniego wpisywania jej nazwy, co ułatwia m.in. dziedziczenie wielokrotne."
                },
                {
                    "id": "py-gen-082",
                    "type": "single",
                    "question": "Która wbudowana funkcja sprawdza, czy dany obiekt jest instancją określonej klasy (lub klasy pochodnej)?",
                    "options": [
                        "type()",
                        "isinstance()",
                        "issubclass()",
                        "hasattr()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "`isinstance(obiekt, klasa)` sprawdza instancję, biorąc pod uwagę drzewo dziedziczenia. `type(obiekt) == klasa` sprawdza wyłącznie dokładną zgodność typów (bez uwzględnienia podklas)."
                },
                {
                    "id": "py-gen-083",
                    "type": "single",
                    "question": "Jaka jest różnica między metodami magicznymi __str__ a __repr__?",
                    "options": [
                        "__str__ służy do reprezentacji czytelnej dla programisty, __repr__ dla użytkownika końcowego",
                        "__str__ powinna zwracać ładnie sformatowany tekst dla użytkownika (np. do print()); __repr__ powinna zwracać jednoznaczny tekst przydatny przy debugowaniu (najlepiej poprawny kod Pythona tworzący dany obiekt)",
                        "__str__ służy tylko do konwersji na typ float",
                        "Obie metody robią dokładnie to samo"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "__str__ ma być przyjazna dla użytkownika. __repr__ ma być precyzyjna, używana w debugowaniu oraz konsoli interaktywnej."
                },
                {
                    "id": "py-gen-084",
                    "type": "single",
                    "question": "Jaka jest różnica między metodami ze standardowym dekoratorem @classmethod a @staticmethod?",
                    "options": [
                        "@classmethod przyjmuje jako pierwszy argument klasę (zazwyczaj cls); @staticmethod nie otrzymuje żadnego automatycznego pierwszego argumentu (działa jak zwykła funkcja w przestrzeni klasy)",
                        "@staticmethod może modyfikować pola instancji klasy",
                        "@classmethod nie ma dostępu do definicji klasy",
                        "Są to dokładnie takie same dekoratory"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metody klasowe (@classmethod) są wywoływane w kontekście klasy. Metody statyczne (@staticmethod) są logicznie powiązane з klasą, ale nie posiadają dostępu ani do instancji, ani do samej klasy."
                },
                {
                    "id": "py-gen-085",
                    "type": "single",
                    "question": "Do czego służy dekorator @property w klasach Pythona?",
                    "options": [
                        "Zmienia metodę w atrybut tylko do odczytu (getter), wywoływany bez nawiasów okrągłych",
                        "Zwiększa szybkość wykonywania metody",
                        "Oznacza, że metoda jest prywatna",
                        "Służy do automatycznego tworzenia zmiennych w bazie danych"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "@property pozwala na dostęp do metody tak, jakby była zwykłym atrybutem (np. x.area zamiast x.area()). Można do niej zdefiniować odpowiednie dekoratory @x.setter oraz @x.deleter."
                },
                {
                    "id": "py-gen-086",
                    "type": "single",
                    "question": "Co robi deklaracja __slots__ = ('name', 'age') w klasie?",
                    "options": [
                        "Definiuje domyślne wartości atrybutów",
                        "Ogranicza atrybuty instancji do określonych w krotce, optymalizując zużycie pamięci (poprzez zablokowanie tworzenia słownika instancji __dict__)",
                        "Blokuje możliwość dziedziczenia po tej klasie",
                        "Automatycznie tworzy metody get i set"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Instrukcja __slots__ wyłącza automatyczne generowanie słownika __dict__ dla instancji, co drastycznie zmniejsza zużycie pamięci RAM przy tworzeniu milionów małych obiektów."
                },
                {
                    "id": "py-gen-087",
                    "type": "single",
                    "question": "Co w kontekście programowania obiektowego w Pythonie oznacza pojęcie 'Duck Typing' (typowanie kacze)?",
                    "options": [
                        "Wymóg dziedziczenia po klasie bazowej Duck",
                        "Podejście, w którym typ obiektu jest determinowany przez jego zachowanie (metody i atrybuty), a nie przez deklarację dziedziczenia ('jeśli chodzi jak kaczka i kwacze jak kaczka, musi być kaczką')",
                        "Sposób obsługi błędów składni",
                        "Szybkie sortowanie metod w klasach"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Duck typing pozwala na elastyczne korzystanie z polimorfizmu: nie sprawdzamy klasy obiektu, lecz to, czy posiada on poszukiwane metody (np. plikopodobny obiekt musi mieć tylko metodę read())."
                },
                {
                    "id": "py-gen-088",
                    "type": "single",
                    "question": "Jaki jest cel stosowania metody magicznej __call__ w klasie?",
                    "options": [
                        "Służy do dzwonienia do zewnętrznych usług sieciowych",
                        "Pozwala na wywoływanie instancji klasy tak, jakby była zwykłą funkcją, np. obj()",
                        "Usuwa obiekt z pamięci",
                        "Służy do deklaracji konstruktora"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Zaimplementowanie __call__ sprawia, że obiekt staje się obiektem wywoływalnym (callable), podobnie jak funkcje."
                },
                {
                    "id": "py-gen-089",
                    "type": "single",
                    "question": "Które metody magiczne musi implementować obiekt, aby był pełnym iteratorem?",
                    "options": [
                        "__iter__() oraz __next__()",
                        "__start__() oraz __stop__()",
                        "__get__() oraz __set__()",
                        "__len__() oraz __getitem__()"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Protokół iteratora wymaga metody __iter__ (zwracającej samą siebie) oraz __next__ (zwracającej kolejny element lub zgłaszającej StopIteration)."
                },
                {
                    "id": "py-gen-090",
                    "type": "single",
                    "question": "Który wyjątek służy do sygnalizowania zakończenia iteracji w iteratorach?",
                    "options": [
                        "IndexError",
                        "StopIteration",
                        "EOFError",
                        "SystemExit"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Wyjątek `StopIteration` jest zgłaszany przez metodę __next__() iteratora, informując pętlę `for` o braku kolejnych elementów."
                },
                {
                    "id": "py-gen-091",
                    "type": "single",
                    "question": "Czym charakteryzuje się funkcja będąca generatorem?",
                    "options": [
                        "Musi zwracać wartość słowem kluczowym return",
                        "Używa słowa kluczowego yield do zwracania wartości i tymczasowego zawieszania stanu wykonania funkcji",
                        "Zawsze działa w osobnym procesie",
                        "Może być wywołana tylko raz w całym programie"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Instrukcja `yield` wewnątrz funkcji sprawia, że staje się ona generatorem. Zamiast kończyć działanie, funkcja zawiesza stan i zwraca kolejną wartość przy każdym wywołaniu next()."
                },
                {
                    "id": "py-gen-092",
                    "type": "single",
                    "question": "Jaka jest kluczowa zaleta stosowania generatorów (np. generator expression) zamiast list składanych (list comprehension) dla dużych zbiorów danych?",
                    "options": [
                        "Generatory są zawsze 10-krotnie szybsze w obliczeniach",
                        "Oszczędność pamięci (generatory produkują wartości leniwie/na żądanie, nie ładując wszystkich elementów do pamięci RAM naraz)",
                        "Generatory automatycznie sortują dane",
                        "Zapis generatora jest krótszy o połowę"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Generatory ewaluują dane leniwie (lazy evaluation). Posiadają złożoność pamięciową O(1) w przeciwieństwie do list O(N)."
                },
                {
                    "id": "py-gen-093",
                    "type": "single",
                    "question": "Jaki będzie typ wyniku wyrażenia: (x**2 for x in range(10))?",
                    "options": [
                        "Krotka (tuple)",
                        "Generator (generator expression)",
                        "Lista (list)",
                        "Zbiór (set)"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Nawiasy okrągłe w wyrażeniach składanych (poza wywołaniami funkcji) tworzą wyrażenie generatorowe (generator expression)."
                },
                {
                    "id": "py-gen-094",
                    "type": "single",
                    "question": "Do czego służy słowo kluczowe yield from w generatorach?",
                    "options": [
                        "Pobiera wartości z generatora i rzuca wyjątek",
                        "Deleguje operację iteracji do poditeratora (innego generatora lub kolekcji), skracając zapis pętli for",
                        "Przerywa działanie generatora",
                        "Służy do importu generatorów z plików zewnętrznych"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "`yield from generator` zastępuje konstrukcję `for x in generator: yield x`, bezpośrednio przesyłając wartości z podrzędnego iteratora."
                },
                {
                    "id": "py-gen-095",
                    "type": "single",
                    "question": "Które z poniższych stwierdzeń opisuje funkcje lambda w Pythonie?",
                    "options": [
                        "Są to pełnoprawne funkcje z wieloma instrukcjami i dokumentacją docstring",
                        "Są to anonimowe funkcje jednowierszowe, których ciało może być tylko pojedynczym wyrażeniem (zwracającym wartość)",
                        "Służą wyłącznie do programowania asynchronicznego",
                        "Są to funkcje napisane w języku C"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Funkcje lambda to zwięzłe, anonimowe funkcje o składni: `lambda arg1, arg2: wyrażenie`."
                },
                {
                    "id": "py-gen-096",
                    "type": "single",
                    "question": "Jaki będzie wynik działania kodu list(map(lambda x: x*2, [1, 2, 3]))?",
                    "options": [
                        "[2, 4, 6]",
                        "[1, 2, 3, 1, 2, 3]",
                        "[2, 2, 2]",
                        "Błąd TypeError"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Funkcja map() stosuje funkcję lambda do każdego elementu listy [1, 2, 3], dając odpowiednio 2, 4, 6."
                },
                {
                    "id": "py-gen-097",
                    "type": "single",
                    "question": "Co zwraca wywołanie filter(lambda x: x > 2, [1, 2, 3, 4])?",
                    "options": [
                        "Listę: [3, 4]",
                        "Leniwy iterator (obiekt klasy filter)",
                        "Zbiór: {3, 4}",
                        "Wartość True"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Funkcje wbudowane takie jak map i filter w Pythonie 3 zwracają leniwe iteratory, nie listy. Aby uzyskać listę, należy zrzutować wynik, np. list(filter(...))."
                },
                {
                    "id": "py-gen-098",
                    "type": "single",
                    "question": "Jak zachowa się funkcja zip(range(2), range(5))?",
                    "options": [
                        "Zwróci pary dla wszystkich elementów range(5), uzupełniając brakujące wartości jako None",
                        "Zgłosi błąd ValueError z powodu nierównej długości",
                        "Zatrzyma się na najkrótszej kolekcji, zwracając iterator z dwiema parami: (0, 0) oraz (1, 1)",
                        "Połączy kolekcje w jeden duży słownik"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "zip() domyślnie zatrzymuje się w momencie wyczerpania najkrótszego z argumentów iterowalnych."
                },
                {
                    "id": "py-gen-099",
                    "type": "single",
                    "question": "Czym jest dekorator w Pythonie?",
                    "options": [
                        "Wbudowanym modułem do modyfikacji stylów konsoli",
                        "Funkcją przyjmującą inną funkcję jako argument i zwracającą zmodyfikowaną funkcję opakowującą (wrapper), rozszerzającą jej zachowanie",
                        "Klasą abstrakcyjną służącą do formatowania tekstu",
                        "Specjalnym plikiem konfiguracyjnym projektu"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Dekorator to wzorzec projektowy w Pythonie (używany ze składnią '@'), służący do modyfikacji lub rozszerzenia zachowania funkcji lub klas bez bezpośredniej ingerencji w ich kod źródłowy."
                },
                {
                    "id": "py-gen-100",
                    "type": "single",
                    "question": "Co oznacza skrót GIL w kontekście interpretera CPython?",
                    "options": [
                        "Garbage Collector Interface Library",
                        "Global Interpreter Lock (blokada, która pozwala tylko jednemu wątkowi na wykonywanie kodu bajtowego Pythona naraz)",
                        "General Internet License",
                        "Graphical Interface Layout"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "GIL (Global Interpreter Lock) to mechanizm w CPythonie uniemożliwiający jednoczesne wykonywanie kodu Pythona na wielu rdzeniach procesora przez różne wątki w ramach jednego procesu (sprawia, że wielowątkowość w Pythonie nie przyspiesza zadań CPU-bound)."
                }
            ]
        },
        {
            "id": "js-pe1-m1",
            "name": "PE1: Moduł 1 — Wprowadzenie",
            "questions": [
                {
                    "id": "js-pe1-m1-001",
                    "type": "single",
                    "question": "Czym jest kod maszynowy?",
                    "options": [
                        "To język programowania wysokiego poziomu, składający się z listy instrukcji, które są zrozumiałe dla człowieka",
                        "To język programowania średniego poziomu składający się z kodu z asemblera przeznaczonego dla procesora komputera",
                        "To język programowania niskiego poziomu składający się z cyfr szesnastkowych, które tworzą instrukcje języka wysokiego poziomu",
                        "To język programowania niskiego poziomu składający się z cyfr/bitów, które komputer odczytuje i rozumie"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Kod maszynowy to program napisany w języku maszynowym, który składa się z sekwencji liczb binarnych:0i1."
                },
                {
                    "id": "js-pe1-m1-002",
                    "type": "single",
                    "question": "Jakie są cztery podstawowe elementy, które składają się na język?",
                    "options": [
                        "Alfabet, morfologia, fonetyka i semantyka",
                        "Alfabet, leksyka, fonetyka i semantyka",
                        "Alfabet, leksyka, składnia i semantyka",
                        "Alfabet, fonetyka, fonologia i semantyka"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Każdy język, czy to język maszynowy, czy język naturalny, składa się z alfabetu, leksyki, składni i semantyki."
                },
                {
                    "id": "js-pe1-m1-003",
                    "type": "single",
                    "question": "Jak nazywa się plik zawierający program napisany w języku programowania wysokiego poziomu?",
                    "options": [
                        "Plik docelowy",
                        "Plik maszynowy",
                        "Plik kodu",
                        "Plik źródłowy"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Plik źródłowy to plik, który zawiera kod źródłowy, czyli instrukcje programu."
                },
                {
                    "id": "js-pe1-m1-004",
                    "type": "multiple",
                    "question": "Które stwierdzenia na temat kompilacji są prawdziwe ? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Kod jest konwertowany bezpośrednio na kod maszynowy wykonywalny przez procesor",
                        "Zwykle jest szybsza niż interpretacja",
                        "Zwykle jest wolniejsza niż interpretacja",
                        "Zarówno Ty, jak i użytkownik końcowy musicie posiadać kompilator, aby uruchomić kod"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Kompilator tłumaczy (kompiluje) program źródłowy (zbiór instrukcji w języku wysokiego poziomu) na kod maszynowy (niższy poziom reprezentacji programu źródłowego). Sekwencja0s i1s może być następnie wykonana przez procesor. Wykonanie skompilowanego kodu jest zazwyczaj szybsze niż interpretacja."
                },
                {
                    "id": "js-pe1-m1-005",
                    "type": "single",
                    "question": "Jaka jest najlepsza definicja skryptu?",
                    "options": [
                        "Jest to plik tekstowy zawierający ciągi zer i jedynek",
                        "Jest to komunikat o błędzie generowany przez kompilator",
                        "Jest to komunikat o błędzie generowany przez tłumacza",
                        "Jest to plik tekstowy zawierający instrukcje składające się na program w języku Python"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Skrypt to zestaw poleceń w języku wysokiego poziomu zapisanych w pliku, zorganizowanych w sposób umożliwiający ich wykonanie jak programu. Skrypt w języku Python to plik zawierający kod napisany w języku Python."
                },
                {
                    "id": "js-pe1-m1-006",
                    "type": "multiple",
                    "question": "Które stwierdzenia są prawdziwe ? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Python 3 jest wstecznie kompatybilny z Pythonem 2",
                        "Python to dobry wybór do tworzenia i wykonywania testów dla aplikacji",
                        "Python jest dobrym wyborem do programowania niskopoziomowego, na przykład gdy chcesz zaimplementować wydajny sterownik",
                        "Python jest darmowy, jest programem typu open source i jest wieloplatformowy"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Python to darmowy język programowania typu open source, dostępny dla każdego. Jest to język wieloplatformowy, co oznacza, że program napisany w Pythonie na systemie Linux będzie działał na Macu i odwrotnie.Ponieważ Python jest stosunkowo łatwy do nauczenia i posiada prostą składnię, jest dobrym wyborem dla testerów."
                },
                {
                    "id": "js-pe1-m1-007",
                    "type": "single",
                    "question": "Czym jest CPython ?",
                    "options": [
                        "To domyślna, referencyjna implementacja Pythona, napisana w języku C",
                        "To język programowania będący nadzbiorem Pythona, zaprojektowany tak, aby osiągać wydajność zbliżoną do języka C przy użyciu kodu pisanego w Pythonie",
                        "To język programowania będący nadzbiorem języka C, zaprojektowany tak, aby osiągać wydajność zbliżoną do Pythona przy kodzie napisanym w C",
                        "To domyślna, referencyjna implementacja w języku C, napisana w Pythonie"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "CPython to oryginalna (tradycyjna) implementacja w języku Python napisana w języku C, w przeciwieństwie do innych, niedomyślnych implementacji, takich jak Jython, implementowanych w języku Java, które pojawiły się później. CPython jest implementacją języka Python dostępną do pobrania ze stronywww.python.orgi pierwszą, w której wprowadzono nowe funkcje. Pojawia się ona we wszystkich kolejnych wersjach Pythona."
                },
                {
                    "id": "js-pe1-m1-008",
                    "type": "single",
                    "question": "Jak nazywa się interpreter wiersza poleceń, który umożliwia interakcję z systemem operacyjnym i wykonywanie poleceń i skryptów Pythona?",
                    "options": [
                        "Konsola",
                        "Jython",
                        "Edytor",
                        "Kompilator"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Konsola Pythona to interpreter wiersza poleceń, który umożliwia wykonywanie poleceń, instrukcji i skryptów Pythona wiersz po wierszu. Dokładnie tak, jak tutaj:www.python.org/shell."
                },
                {
                    "id": "js-pe1-m1-009",
                    "type": "single",
                    "question": "Jakie jest oczekiwane zachowanie następującego programu? print(\"Hello!\")",
                    "options": [
                        "Program wyświetli „Hello!”",
                        "Program wyświetli komunikat o błędzie",
                        "Program wyświetli Hello!",
                        "Program wyświetli („Hello!”)"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Program wyświetli„Hello!”Funkcjaprintwypisuje sprecyzowaną przez nas wiadomość, w tym przypadku„Hello!”."
                },
                {
                    "id": "js-pe1-m1-010",
                    "type": "single",
                    "question": "Jakie jest oczekiwane zachowanie następującego programu? prin(\"Goodbye\")",
                    "options": [
                        "Program wyświetli na ekranie („Goodbye”)",
                        "Program wyświetli „Goodbye” na ekranie",
                        "Program wyświetli na ekranie komunikat o błędzie",
                        "Program wyświetli Goodbye! na ekranie"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Program zgłosi wyjątekNameError, ponieważ Python nie rozpoznaje nazwyprin. Python nie rozpoznaje, że najprawdopodobniej próbujesz użyć słowaprint, a nieprin."
                }
            ]
        },
        {
            "id": "js-pe1-m2",
            "name": "PE1: Moduł 2 — Typy danych, zmienne, operatory, wejście-wyjście",
            "questions": [
                {
                    "id": "js-pe1-m2-001",
                    "type": "single",
                    "question": "Znak \\n powoduje, że funkcja print() :",
                    "options": [
                        "przełamie linię wyjściową",
                        "wyświetli dokładnie dwa znaki: \\ i n",
                        "zduplikuje znak obok niego",
                        "zatrzyma jego wykonywanie"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Dwuznak, zwanyznakiem nowej linii, powoduje, że bieżący wiersz kończy się w punkcie przez niego wskazanymi tworzy nowy wiersz, który zaczyna się zaraz za nim."
                },
                {
                    "id": "js-pe1-m2-002",
                    "type": "single",
                    "question": "Znaczenie parametru kluczowego jest określone przez:",
                    "options": [
                        "nazwę argumentu określoną razem z jego wartością",
                        "jego pozycję w liście argumentów",
                        "związek tego argumentu z istniejącymi zmiennymi",
                        "wartość przypisaną do tego argumentu"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Parametry słowa kluczowego (zwane takżeparametrami nazwanymi) to parametry, których wartości są określane przez słowo kluczowe, po którym następuje znak równości (=)i wartość domyślna przypisana do tego słowa kluczowego. Przykład argumentu słowa kluczowego:def my_function(x=1):."
                },
                {
                    "id": "js-pe1-m2-003",
                    "type": "single",
                    "question": "Wartość dwadzieścia przecinek dwanaście razy dziesięć podniesioną do potęgi ósmej należy zapisać jako:",
                    "options": [
                        "20.12E8",
                        "20.12*10^8",
                        "20.12E8.0",
                        "20E12.8"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętając, że Python wybiera najbardziej efektywny format do przedstawiania liczb, a literaEoznacza\"razy dziesięć do potęgi\"w notacji naukowej, prawidłowy sposób zapisywania liczby20.12 × 108to20.12E8."
                },
                {
                    "id": "js-pe1-m2-004",
                    "type": "single",
                    "question": "Przedrostek 0o oznacza, że liczba po nim jest zapisana w systemie:",
                    "options": [
                        "ósemkowym",
                        "binarnym",
                        "dziesiętnym",
                        "szesnastkowym"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Jeśli liczba całkowita jest poprzedzona0olub0O, będzie ona traktowana jako wartość ósemkowa. Na przykład:0o246to liczba ósemkowa, której wartość dziesiętna to166.Jeśli liczba całkowita jest poprzedzona0xlub0X, będzie ona traktowana jako wartość szesnastkowa. Na przykład:0x246to liczba szesnastkowa, której wartość dziesiętna to582.Na koniec, jeśli liczba całkowita jest poprzedzona przez0blub0B, będzie ona traktowana jako wartość binarna. Na przykład:0b1111to liczba binarna, której wartość dziesiętna to15."
                },
                {
                    "id": "js-pe1-m2-005",
                    "type": "single",
                    "question": "Operator ** :",
                    "options": [
                        "wykonuje potęgowanie",
                        "nie istnieje",
                        "wykonuje mnożenie liczby zmiennoprzecinkowej",
                        "wykonuje zduplikowane mnożenie"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Operator**wykonuje operację potęgowania w Pythonie. Jest on również nazywanyoperatorem potęgowania."
                },
                {
                    "id": "js-pe1-m2-006",
                    "type": "single",
                    "question": "Wynik następującego podziału:\n\n```python\n\n1 / 1\n```",
                    "options": [
                        "jest równy 1.0",
                        "jest równy 1",
                        "nie może zostać obliczony",
                        "nie da się go przewidzieć"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Operator/jest jednym z dwóch rodzajów operatora dzielenia w Pythonie , który dzieli lewy operand przez prawy operand orazzwraca wartość zmiennoprzecinkową (float).Operator//, zwany operatoremdzielenia całkowitoliczbowego (floor division), wykonuje podobną operację, ale wyniki zaokrągla w dół i zwraca liczbę całkowitą."
                },
                {
                    "id": "js-pe1-m2-007",
                    "type": "multiple",
                    "question": "Które z następujących stwierdzeń są prawdziwe ? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Prawym argumentem operatora % nie może być zero.",
                        "Operator ** używa prawostronnego łączenia.",
                        "Wynikiem działania operatora / jest zawsze wartość całkowita.",
                        "Dodanie poprzedza mnożenie."
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Operator%(modulo) zwraca resztę z dzielenia, a ponieważ nie można dzielić przez zero, prawy operand musi być liczbą różną od zera. W przeciwnym razie zostanie zgłoszony ZeroDivisionException.Operator**wykorzystuje prawostronne wiązanie, co oznacza, że wyrażenie2**2**3jest obliczane od prawej do lewej:2**3 = 8i2**8 = 256."
                },
                {
                    "id": "js-pe1-m2-008",
                    "type": "single",
                    "question": "Wiązanie lewostronne określa, że wynik następującego wyrażenia:\n\n```python\n\n1 // 2 * 3\n```",
                    "options": [
                        "0",
                        "4.5",
                        "0.0",
                        "0.16666666666666666"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Lewostronne wiązanie oznacza, że wyrażenie jest obliczane od lewej do prawej:1 // 2 = 0i0 * 3 = 0."
                },
                {
                    "id": "js-pe1-m2-009",
                    "type": "multiple",
                    "question": "Które z poniższych nazw zmiennych są niedozwolone ? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "True",
                        "oraz",
                        "true",
                        "PRAWDA"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Trueorazandto słowa kluczowe w Pythonie (słowa zastrzeżone) i nie mogą być używane jako nazwy zmiennych. Ponieważ Python rozróżnia wielkość liter, nazwytrueiTRUEsą całkowicie dozwolone, ale nie są one najlepszym wyborem."
                },
                {
                    "id": "js-pe1-m2-010",
                    "type": "single",
                    "question": "Funkcja print() może wyświetlać następujące wartości:",
                    "options": [
                        "dowolna liczba argumentów (włącznie z zerem)",
                        "dowolna liczba argumentów (z wyjątkiem zera)",
                        "tylko jeden argument",
                        "nie więcej niż pięć argumentów"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Funkcjaprint()może nie przyjmować żadnych argumentów (np.print()), trzy argumenty (np.print(„one”, „two”, „three”) lub trzy tysiące trzysta trzydzieści trzy... (choć tak naprawdę tego nie sprawdziliśmy!)."
                },
                {
                    "id": "js-pe1-m2-011",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\n\nx = 1\n\n\n\n                        y = 2\n\n\n\n                        z = x\n\n\n\n                        x = y\n\n\n\n                        y = z\n\n\n\n                        print(x, y)\n```",
                    "options": [
                        "2 1",
                        "1 2",
                        "1 1",
                        "2 2"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład:Wartość1zostaje przypisana do zmiennejx, a zmiennaxzostaje zainicjowana (czylix = 1)wartość2zostaje przypisana do zmiennejy, a zmiennayzostaje zainicjowana (więcy = 2)wartość przypisana do zmiennejxjest przypisana do zmiennejz, a zmiennazzostaje zainicjowana (więcz = 1)zmiennaxotrzymuje wartość, która jest przypisana do zmiennej y (a więcx = 2)zmiennayotrzymuje wartość, która jest przypisana do zmiennej z (a więcy = 1)wartości przypisane do zmiennychxiysą teraz wyświetlane, co daje następujący wynik:2 1(uwaga: funkcjaprint()oddziela wyświetlane wartości spacją)"
                },
                {
                    "id": "js-pe1-m2-012",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\n\nx = input()\n\n\n\n                        y = input()\n\n\n\n                        print(x + y)\n```",
                    "options": [
                        "16",
                        "2",
                        "4",
                        "6"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład:funkcjainput()odczytuje argumenty wprowadzone przez użytkownika (odpowiednio2i4) ikonwertuje je na ciągi,do zmiennychxiyprzypisywane są ciągi znaków wprowadzone przez użytkownika,funkcjaprint()wyświetla na ekranie wynik operacjikonkatenacji(proces łączenia ciągów):„2” + „4”; operator+powoduje dodanie ciągu znaków do innego ciągu i daje wynik24."
                },
                {
                    "id": "js-pe1-m2-013",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\n\nx = int(input())\n\n\n\n                        y = int(input())\n\n\n\n\n\n\n\n                        x = x // y\n\n\n\n                        y = y // x\n\n\n\n\n\n\n\n                        print(y)\n```",
                    "options": [
                        "Kod spowoduje błąd wykonania (Runtime error)",
                        "2.0",
                        "4.0",
                        "8.0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład:zmiennejxprzypisywana jest wartość całkowita2(2jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint()zmiennejyjest przypisywana wartość całkowita4(4jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint())wykonywana jest operacja, w wyniku której zmiennejxjest przypisywana wartość0(2 // 4=0)operacja jest wykonywana, ale został zgłoszony ZeroDivisionException, ponieważ operator//nie może zaakceptować0jako prawego operandu. Program zostanie zakończony."
                },
                {
                    "id": "js-pe1-m2-014",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\n\nx = int(input())\n\n\n\n                        y = int(input())\n\n\n\n\n\n\n\n                        x = x / y\n\n\n\n                        y = y / x\n\n\n\n\n\n\n\n                        print(y)\n```",
                    "options": [
                        "8.0",
                        "4.0",
                        "2.0",
                        "Kod spowoduje błąd wykonania (Runtime error)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład:zmiennejxprzypisywana jest wartość całkowita2(2jest wprowadzane przez użytkownika, konwertowane na ciąg znaków przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint())zmiennejyjest przypisywana wartość całkowita4(4jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint())wykonywana jest operacja, w wyniku której zmiennejxjest przypisywana wartość0.5(2 / 4 = 0.5)wykonywana jest operacja, w wyniku której zmiennejyprzypisywana jest wartość8.0(4 / 0.5 = 8.0)wartość przypisana do zmiennejy(8.0) jest wyświetlana na ekranie."
                },
                {
                    "id": "js-pe1-m2-015",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające kolejno 11 i 4?\n\n```python\n\nx = int(input())\n\n\n\n                        y = int(input())\n\n\n\n\n\n\n\n                        x = x % y\n\n\n\n                        x = x % y\n\n\n\n                        y = y % x\n\n\n\n\n\n\n\n                        print(y)\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład:zmiennejxprzypisywana jest wartość całkowita11(11jest wprowadzane przez użytkownika, konwertowane na ciąg znaków przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint())zmiennejyjest przypisywana wartość całkowita4(4jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint())wykonywana jest operacja, w wyniku której zmiennejxprzypisywana jest wartość3(3% 4 = 3)wykonywana jest operacja, w wyniku której zmiennejxprzypisywana jest wartość0(3% 11 = 0)wykonywana jest operacja, w wyniku której zmiennejyprzypisywana jest wartość1(4% 3 = 1)wartość przypisana do zmiennejy(1) jest wyświetlana na ekranie."
                },
                {
                    "id": "js-pe1-m2-016",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające kolejno 3 i 6?\n\n```python\n\nx = input()\n\n\n\n                        y = int(input())\n\n\n\n\n\n\n\n                        print(x * y)\n```",
                    "options": [
                        "333333",
                        "18",
                        "666",
                        "36"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład:zmiennaxotrzymuje wartość„3”(3jest wprowadzane przez użytkownika i konwertowane na ciąg przez funkcjęinput())zmiennayotrzymuje wartość6(6jest wprowadzane przez użytkownika, konwertowane na ciąg przez funkcjęinput(), a następnie konwertowane na liczbę całkowitą przez funkcjęint())funkcjaprint()zwraca wynik następującego mnożenia ciągu:„3” * 6, czyli333333"
                },
                {
                    "id": "js-pe1-m2-017",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\n\nz = y = x = 1\n\n\n\n                        print(x, y, z, sep='*')\n```",
                    "options": [
                        "1*1*1",
                        "1 1 1",
                        "x*y*z",
                        "x y z"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy przykład:zmiennez,yixsą zadeklarowane i zainicjowane, a wartość1jest przypisywana do każdego z nich za pomocą mechanizmu przypisywania tej samej wartości do wielu zmiennych,wartości przypisane do trzech zmiennych są wyświetlane na ekranie i oddzielone symbolem*za pomocą słowa kluczowegosep."
                },
                {
                    "id": "js-pe1-m2-018",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\n\ny = 2 + 3 * 5.\n\n\n\n                        print(Y)\n```",
                    "options": [
                        "fragment kodu spowoduje błąd wykonania",
                        "25.",
                        "17",
                        "17,0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Python rozróżniana wielkość liter, dlategoyiYto dwie różne zmienne. Ponieważ program próbuje wyświetlić na ekranie wartość powiązaną ze zmienną, która nie istnieje w lokalnej przestrzeni nazw, Python nie rozpoznaje jej i zgłaszany jest wyjątekNameError."
                },
                {
                    "id": "js-pe1-m2-019",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\n\nx = 1 / 2 + 3 // 3 + 4 ** 2\n\n\n\n                        print(x)\n```",
                    "options": [
                        "17,5",
                        "17",
                        "8",
                        "8,5"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Tutaj obowiązuje zasada pierwszeństwa operatorów (kolejność wykonywania operacji). Zobaczmy, co się tutaj wydarzy:najpierw zostaje obliczone wyrażenie4 ** 2, dając wynik16.następnie zostaje obliczone wyrażenie1 / 2, dając wynik0.5.jako trzecie zostaje obliczone wyrażenie3 // 3, dając wynik1.na koniec trzy wartości są dodawane (0.5 + 1 + 16), a ich wynik (17.5) jest przypisywana do zmiennejxi wyświetlany na ekranie."
                },
                {
                    "id": "js-pe1-m2-020",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\n\nx = int(input())\n\n\n\n                        y = int(input())\n\n\n\n\n\n\n\n                        print(x + y)\n```",
                    "options": [
                        "6",
                        "16",
                        "2",
                        "4"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wartości2i4są wprowadzane przez użytkownika, konwertowane z ciągów na liczby całkowite i przypisywane odpowiednio do zmiennychxiy. Funkcjaprint()wyświetla na ekranie wynik dodawania liczb całkowitych (2 + 4)."
                }
            ]
        },
        {
            "id": "js-pe1-m3",
            "name": "PE1: Moduł 3 — Wartości logiczne, pętle, listy",
            "questions": [
                {
                    "id": "js-pe1-m3-001",
                    "type": "single",
                    "question": "Operator, który może sprawdzić, czy dwie wartości są sobie równe, jest zapisywany jako:",
                    "options": [
                        "==",
                        "=",
                        "===",
                        "!="
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-002",
                    "type": "single",
                    "question": "Wartość ostatecznie przypisana do x jest równa:",
                    "options": [
                        "Prawda",
                        "Fałsz",
                        "0",
                        "1"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-003",
                    "type": "single",
                    "question": "Ile gwiazdek (*) zostanie wyświetlonych na konsoli po uruchomieniu następującego kodu?",
                    "options": [
                        "dwa",
                        "jeden",
                        "zero",
                        "trzy"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-004",
                    "type": "single",
                    "question": "Ile gwiazdek (*) zostanie wyświetlonych w konsoli po uruchomieniu tego kodu?",
                    "options": [
                        "jeden",
                        "dwa",
                        "trzy",
                        "zero"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-005",
                    "type": "single",
                    "question": "Ile kratek (#) zostanie wyświetlonych w konsoli po uruchomieniu następującego kodu?",
                    "options": [
                        "dwa",
                        "jeden",
                        "trzy",
                        "zero"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-006",
                    "type": "single",
                    "question": "Jaka wartość zostanie przypisana do zmiennejx?",
                    "options": [
                        "Prawda",
                        "Fałsz",
                        "1",
                        "Tak"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-007",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?",
                    "options": [
                        "2",
                        "1",
                        "3",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-008",
                    "type": "single",
                    "question": "Drugie przypisanie:",
                    "options": [
                        "odwraca listę",
                        "skraca listę",
                        "rozszerza listę",
                        "nie zmienia listy"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-009",
                    "type": "single",
                    "question": "Po uruchomieniu poniższego fragmentu kodu, suma wszystkich elementówvalsbędzie wynosić:",
                    "options": [
                        "4",
                        "3",
                        "2",
                        "5"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-010",
                    "type": "multiple",
                    "question": "Spójrz na fragment i wybierz stwierdzenie które sąprawdziwe: (Wybierzdwieodpowiedzi)",
                    "options": [
                        "numsivalssą tej samej długości1 of 4",
                        "numsjest dłuższe niżvals2 of 4",
                        "numsjest replikowane i przypisane dovals3 of 4",
                        "numsivalsodnoszą się do tej samej listy4 of 4"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-011",
                    "type": "multiple",
                    "question": "Wybierz które stwierdzenia sąprawdziwe(Wybierzdwieodpowiedzi)",
                    "options": [
                        "numsjest dłuższe niżvals1 of 4",
                        "numsivalssą tej samej długości2 of 4",
                        "valsjest dłuższe niżnums3 of 4",
                        "numsivalsto dwie różne listy4 of 4"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-012",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?",
                    "options": [
                        "[1, 1, 1, 1, 2, 3]",
                        "[1, 2, 3, 3, 2, 1]",
                        "[1, 2, 3, 1, 2, 3]",
                        "[3, 2, 1, 1, 2, 3]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-013",
                    "type": "single",
                    "question": "Z ilu elementów składa się listamy_list?",
                    "options": [
                        "trzy",
                        "dwa",
                        "cztery",
                        "jeden"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m3-014",
                    "type": "single",
                    "question": "Jaki będzie wynik działania poniższego kodu?",
                    "options": [
                        "ten fragment kodu spowoduje błąd wykonania (Runtime error)",
                        "0",
                        "1",
                        "2"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe1-m4",
            "name": "PE1: Moduł 4 — Funkcje, krotki, słowniki, wyjątki",
            "questions": [
                {
                    "id": "js-pe1-m4-001",
                    "type": "single",
                    "question": "Który z poniższych wierszy prawidłowo rozpoczyna definicję funkcji bezparametrowej?",
                    "options": [
                        "def fun ():",
                        "def fun:",
                        "function fun():",
                        "fun function():"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-002",
                    "type": "multiple",
                    "question": "Funkcja zdefiniowana w następujący sposób: (Wybierz dwie odpowiedzi)\n\n```python\n\ndef function(x=0):\n\n\n\n                            return x\n```",
                    "options": [
                        "może zostać wywołana bez żadnych argumentów",
                        "może zostać wywołana z dokładnie jednym argumentem",
                        "musi zostać wywołana z dokładnie jednym argumentem",
                        "musi zostać wywołana bez żadnych argumentów"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-003",
                    "type": "single",
                    "question": "Funkcja wbudowana to taka funkcja, która:",
                    "options": [
                        "jest dostarczana wraz z Pythonem i stanowi jego integralną część",
                        "została umieszczona w kodzie przez innego programistę",
                        "musi zostać zaimportowana przed użyciem",
                        "jest ukryta przed programistami"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-004",
                    "type": "single",
                    "question": "Przynależność krotek do typów danych sekwencyjnych oznacza, że:",
                    "options": [
                        "mogą być indeksowane i wycinane w sposób podobny do list",
                        "mogą zostać przedłużone za pomocą metody .append()",
                        "można je modyfikować za pomocą instrukcji del",
                        "w rzeczywistości są to listy"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-005",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef f(x):\n\n\n\n                            if x == 0:\n\n\n\n                                return 0\n\n\n\n                            return x + f(x - 1)\n\n\n\n\n\n\n\n\n\n\n\n                        print(f(3))\n```",
                    "options": [
                        "6",
                        "3",
                        "1",
                        "kod jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-006",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(x):\n\n\n\n                            x += 1\n\n\n\n                            return x\n\n\n\n\n\n\n\n\n\n\n\n                        x = 2\n\n\n\n                        x = fun(x + 1)\n\n\n\n                        print(x)\n```",
                    "options": [
                        "4",
                        "5",
                        "3",
                        "kod jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-007",
                    "type": "single",
                    "question": "Jaki kod należy wstawić zamiast komentarza, aby uzyskać oczekiwane dane wyjściowe?\n\n```python\n\ndictionary = {}\n\n\n\n                        my_list = ['a', 'b', 'c', 'd']\n\n\n\n\n\n\n\n                        for i in range(len(my_list) - 1):\n\n\n\n                            dictionary[my_list[i]] = (my_list[i], )\n\n\n\n\n\n\n\n                        for i in sorted(dictionary.keys()):\n\n\n\n                            k = dictionary[i]\n\n\n\n                            # Insert your code here.\n```",
                    "options": [
                        "print(k[0])",
                        "print(k['0'])",
                        "print(k)",
                        "print(k[\"0\"])"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-008",
                    "type": "single",
                    "question": "Następujący fragment:\n\n```python\n\ndef func(a, b):\n\n\n\n                            return a ** a\n\n\n\n\n\n\n\n\n\n\n\n                        print(func(2))\n```",
                    "options": [
                        "jest błędny",
                        "wyświetli w oknie konsoli wynik 4",
                        "wyświetli w oknie konsoli wynik 2",
                        "zwróci None"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-009",
                    "type": "single",
                    "question": "Następujący fragment:\n\n```python\n\ndef func_1(a):\n\n\n\n                            return a ** a\n\n\n\n\n\n\n\n\n\n\n\n                        def func_2(a):\n\n\n\n                            return func_1(a) * func_1(a)\n\n\n\n\n\n\n\n\n\n\n\n                        print(func_2(2))\n```",
                    "options": [
                        "wyświetli 16",
                        "wyświetli 4",
                        "wyświetli 2",
                        "jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-010",
                    "type": "single",
                    "question": "Która z poniższych linii poprawnie inicjuje funkcję z dwoma parametrami, oba z domyślnymi wartościami równymi zero?",
                    "options": [
                        "def fun(a=0, b=0):",
                        "def fun(a=b=0):",
                        "fun fun(a=0, b):",
                        "fun fun(a, b=0):"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-011",
                    "type": "multiple",
                    "question": "Które z poniższych stwierdzeń jest prawdziwe? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Wartość None może być przypisywana do zmiennych.",
                        "Wartość None może być porównywana ze zmiennymi.",
                        "Wartość None nie może być używana poza funkcjami.",
                        "Wartość None może być używana jako argument operatorów arytmetycznych."
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-012",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(x):\n\n\n\n                            if x % 2 == 0:\n\n\n\n                                return 1\n\n\n\n                            else:\n\n\n\n                                return\n\n\n\n\n\n\n\n\n\n\n\n                        print(fun(fun(2)) + 1)\n```",
                    "options": [
                        "Kod spowoduje błąd wykonania (Runtime error)",
                        "1",
                        "2",
                        "None"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-013",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(x):\n\n\n\n                            global y\n\n\n\n                            y = x * x\n\n\n\n                            return y\n\n\n\n\n\n\n\n\n\n\n\n                        fun(2)\n\n\n\n                        print(y)\n```",
                    "options": [
                        "4",
                        "2",
                        "None",
                        "Kod spowoduje błąd wykonania (Runtime error)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-014",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef any():\n\n\n\n                            print(var + 1, end='')\n\n\n\n\n\n\n\n\n\n\n\n                        var = 1\n\n\n\n                        any()\n\n\n\n                        print(var)\n```",
                    "options": [
                        "21",
                        "12",
                        "11",
                        "22"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-015",
                    "type": "single",
                    "question": "Zakładając, że my_tuple jest poprawnie utworzoną krotką, fakt, że krotki są niemutowalne oznacza, że poniższa instrukcja:\n\n```python\n\nmy_tuple[1] = my_tuple[1] + my_tuple[0]\n```",
                    "options": [
                        "jest niedozwolona",
                        "może zostać wykonana wtedy i tylko wtedy gdy krotka przechowuje przynajmniej dwa elementy",
                        "jest w pełni poprawna",
                        "może być niedozwolona, jeśli krotka zawiera zawiera łańcuchy znaków"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-016",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\nmy_list =  ['Mary', 'had', 'a', 'little', 'lamb']\n\n\n\n\n\n\n\n\n\n\n\n                        def my_list(my_list):\n\n\n\n                            del my_list[3]\n\n\n\n                            my_list[3] = 'ram'\n\n\n\n\n\n\n\n\n\n\n\n                        print(my_list(my_list))\n```",
                    "options": [
                        "brak wyniku, ten fragment kodu jest błędny",
                        "['Mary', 'had', 'a', 'little', 'lamb']",
                        "['Mary', 'had', 'a', 'lamb']",
                        "['Mary', 'had', 'a', 'ram']"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-017",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(x, y, z):\n\n\n\n                            return x + 2 * y + 3 * z\n\n\n\n\n\n\n\n\n\n\n\n                        print(fun(0, z=1, y=3))\n```",
                    "options": [
                        "9",
                        "0",
                        "3",
                        "fragment kodu jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-018",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(inp=2, out=3):\n\n\n\n                            return inp * out\n\n\n\n\n\n\n\n\n\n\n\n                        print(fun(out=2))\n```",
                    "options": [
                        "4",
                        "6",
                        "2",
                        "fragment kodu jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-019",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?\n\n```python\n\ndictionary = {'one': 'two', 'three': 'one', 'two': 'three'}\n\n\n\n                        v = dictionary['one']\n\n\n\n\n\n\n\n                        for k in range(len(dictionary)):\n\n\n\n                            v = dictionary[v]\n\n\n\n\n\n\n\n                        print(v)\n```",
                    "options": [
                        "two",
                        "three",
                        "one",
                        "('one', 'two', 'three')"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-020",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?\n\n```python\n\ntup = (1, 2, 4, 8)\n\n\n\n                        tup = tup[1:-1]\n\n\n\n                        tup = tup[0]\n\n\n\n                        print(tup)\n```",
                    "options": [
                        "2",
                        "(2)",
                        "(2, )",
                        "ten fragment kodu jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-021",
                    "type": "multiple",
                    "question": "Wybierz prawdziwe stwierdzenia dotyczące bloku try-except w odniesieniu do poniższego przykładu (Zaznacz dwie odpowiedzi).\n\n```python\n\ntry:\n\n\n\n                            # Some code is here...\n\n\n\n                        except:\n\n\n\n                            # Some code is here...\n```",
                    "options": [
                        "Jeśli podejrzewasz, że fragment kodu może spowodować wystąpienie wyjątku, powinieneś umieścić go w bloku try .",
                        "Kod, który znajduje się po instrukcji except , zostanie wykonany, jeśli kod w bloku try napotka błąd.",
                        "Jeśli w kodzie znajdującym się w bloku try wystąpi błąd składniowy, gałąź except nie będzie w stanie go obsłużyć, a zamiast tego zostanie zgłoszony wyjątek SyntaxError.",
                        "Kod który następuje po instrukcji try zostanie wykonany, jeśli kod w bloku except napotka błąd."
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-m4-022",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?\n\n```python\n\ntry:\n\n\n\n                            value = input(\"Enter a value: \")\n\n\n\n                            print(value/value)\n\n\n\n                        except ValueError:\n\n\n\n                            print(\"Bad input...\")\n\n\n\n                        except ZeroDivisionError:\n\n\n\n                            print(\"Very bad input...\")\n\n\n\n                        except TypeError:\n\n\n\n                            print(\"Very very bad input...\")\n\n\n\n                        except:\n\n\n\n                            print(\"Booo!\")\n```",
                    "options": [
                        "Bardzo, bardzo złe dane wejściowe...",
                        "Bardzo złe dane wejściowe...",
                        "Złe dane wejściowe...",
                        "Buuuu!"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe1-final",
            "name": "PE1: Test końcowy",
            "questions": [
                {
                    "id": "js-pe1-final-001",
                    "type": "single",
                    "question": "Spójrz na poniższy fragment kodu. Jaka będzie zawartość my_numbers\n\n```python\n\nmy_numbers = [10, 20, 30, 40, 50]\n\n\n\n\n\n\n\n                        for i in range(4):\n\n\n\n                            my_numbers.insert(i, my_numbers[-1])\n\n\n\n\n\n\n\n                        print(my_numbers)\n```",
                    "options": [
                        "[50, 10, 50, 20, 50, 30, 50, 40]",
                        "[10, 50, 20, 30, 40, 50, 50, 50]",
                        "[10, 20, 30, 40, 50, 50, 50, 50]",
                        "[10, 20, 30, 50, 50, 50, 50, 40]"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-002",
                    "type": "single",
                    "question": "W kontekście wywołania funkcji w Pythonie, co decyduje o znaczeniu argumentu pozycyjnego?",
                    "options": [
                        "Jego pozycja na liście argumentów",
                        "Jego wartość",
                        "Nazwa argumentu podana wraz z jego wartością",
                        "Jego powiązanie z istniejącymi zmiennymi"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-003",
                    "type": "single",
                    "question": "Przeanalizuj następujący fragment kodu:\n\n```python\n\nalpha = [4, 8, 15, 16, 23, 42]\n\n\n\n                        beta = alpha[:]\n\n\n\n                        beta[2] = 99\n```",
                    "options": [
                        "alfa i beta to dwie nazwy tej samej listy; w związku z tym w obu listach liczba 99 znajduje się na trzecim miejscu.",
                        "alfa i beta to osobne listy; alpha po modyfikacji pozostaje niezmieniona.",
                        "Lista beta jest krótsza niż alpha , ponieważ element został zmodyfikowany.",
                        "Lista alpha jest tej samej długości co lista beta ale ich zawartość nie jest identyczna."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-004",
                    "type": "single",
                    "question": "Operator sprawdzający czy dwie wartości nie są sobie równe jest zapisywany jako:",
                    "options": [
                        "<>",
                        "!=",
                        "not ==",
                        "=/="
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-005",
                    "type": "single",
                    "question": "Biorąc pod uwagę poniższy segment kodu Python:\n\n```python\n\ndef compute_square(x):\n\n\n\n                            return x * x\n\n\n\n\n\n\n\n\n\n\n\n                        def compute_quad(x):\n\n\n\n                            return compute_square(x) * compute_square(None)\n\n\n\n\n\n\n\n\n\n\n\n                        print(compute_quad(4))\n```",
                    "options": [
                        "Wyświetlone zostanie 256.",
                        "Wyświetlone zostanie 16.",
                        "Kod spowoduje wystąpienie runtime error.",
                        "Wyświetlone zostanie 64."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-006",
                    "type": "single",
                    "question": "Wynik poniższego dzielenia:\n\n```python\n\n1 // 2\n```",
                    "options": [
                        "jest równy 0.0",
                        "jest trudny do przewidzenia",
                        "jest równy 0",
                        "jest róny 0,5"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-007",
                    "type": "single",
                    "question": "Rozważ poniżej zdefiniowaną funkcję w Pythonie.\n\n```python\n\ndef raise_power(base, exponent):\n\n\n\n                            return base ** exponent\n\n\n\n\n\n\n\n\n\n\n\n                        print(raise_power(exponent=3, 2))\n```",
                    "options": [
                        "Kod zwróci 8.",
                        "Kod jest błędny i nie może zostać wykonany.",
                        "Kod zwróci None.",
                        "Kod zwróci 9."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-008",
                    "type": "single",
                    "question": "Jaka wartość zostanie przypisana do zmiennej x ?\n\n```python\n\nz = 0\n\n\n\n                        y = 10\n\n\n\n                        x = y < z and z > y or y < z and z < y\n```",
                    "options": [
                        "1",
                        "True",
                        "0",
                        "False"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-009",
                    "type": "single",
                    "question": "Przejrzyj następujące identyfikatory i wybierz te, które są zarezerwowanymi słowami kluczowymi w Pythonie i spowodowałyby błąd składniowy, jeśli zostałyby użyte jako nazwy zmiennych. (wybierz dwie odpowiedzi)",
                    "options": [
                        "class",
                        "true",
                        "continue",
                        "function"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-010",
                    "type": "single",
                    "question": "Jakie jest oczekiwany wynik działania poniższego kodu napisanego w języku Python?\n\n```python\n\nmy_values = [3 * i for i in range(5)]\n\n\n\n\n\n\n\n\n\n\n\n                        def modify_list(values):\n\n\n\n                            del values[values[2] // 3]\n\n\n\n                            return values\n\n\n\n\n\n\n\n\n\n\n\n                        print(modify_list(my_values))\n```",
                    "options": [
                        "[0, 3, 9, 12]",
                        "[0, 6, 9, 12]",
                        "[3, 6, 9, 12]",
                        "[0, 3, 6, 12]"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-011",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\n\nx = 1\n\n\n\n                        y = 2\n\n\n\n                        x, y, z = x, x, y\n\n\n\n                        z, y, z = x, y, z\n\n\n\n\n\n\n\n                        print(x, y, z)\n```",
                    "options": [
                        "1 2 1",
                        "1 1 2",
                        "1 2 2",
                        "2 1 2"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-012",
                    "type": "single",
                    "question": "Jaki będzie wynik działania następującego fragmentu kodu?\n\n```python\n\na = 1\n\n\n\n                        b = 0\n\n\n\n                        a = a ^ b\n\n\n\n                        b = a ^ b\n\n\n\n                        a = a ^ b\n\n\n\n\n\n\n\n                        print(a, b)\n```",
                    "options": [
                        "0 0",
                        "0 1",
                        "1 0",
                        "1 1"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-013",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\n\ndef custom_function(value):\n\n\n\n                            if value % 3 == 0:\n\n\n\n                                return 1\n\n\n\n                            else:\n\n\n\n                                return 2\n\n\n\n\n\n\n\n\n\n\n\n                        print(custom_function(custom_function(4)))\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-014",
                    "type": "single",
                    "question": "Zapoznaj się z poniższym fragmentem kodu w języku Python i ustal które zdanie jest poprawne.\n\n```python\n\ninventory = ['apple', 'banana', 'cherry']\n\n\n\n                        backup_inventory = inventory\n\n\n\n                        del backup_inventory[:]\n```",
                    "options": [
                        "inventory zawiera więcej elementów niż backup_inventory .",
                        "backup_inventory zawiera więcej elementów niż inventory .",
                        "Zarówno inventory jak i backup_inventory zawierają taką samą liczbę elementów.",
                        "Kod spowoduje wystąpienie błędu runtime error."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-015",
                    "type": "single",
                    "question": "Rozważmy poniższy kod Python, gdzie dozwolone są tylko liczby całkowite jako dane wejściowe:\n\n```python\n\nfirst_integer = int(input(\"Enter an integer: \"))\n\n\n\n                        second_integer = int(input(\"Enter another integer: \"))\n\n\n\n                        first_integer = first_integer % second_integer\n\n\n\n                        first_integer = first_integer % second_integer\n\n\n\n                        second_integer = second_integer % first_integer\n\n\n\n                        print(second_integer)\n```",
                    "options": [
                        "Wartość początkowa first_integer nie może być wielokrotnością second_integer .",
                        "second_integer musi być większa niż first_integer .",
                        "first_integer musi zostać zainicjowana do zera.",
                        "zmienna second_integer rónież musi zostać zainicjowana do zera."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-016",
                    "type": "single",
                    "question": "Zakładając, że użytkownik wprowadzi 8 w pierwszym wierszu oraz 5 w drugim wierszu, jaki jest wynik następującego kodu Python?\n\n```python\n\nfirst_input = input(\"Enter first number: \")\n\n\n\n                        second_input = input(\"Enter second number: \")\n\n\n\n                        print(second_input + first_input)\n```",
                    "options": [
                        "85",
                        "13",
                        "5",
                        "58"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-017",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego fragmentu kodu?\n\n```python\n\nprint(\"a\", \"b\", \"c\", sep=\"sep\")\n```",
                    "options": [
                        "asepbsepcsep",
                        "a b c",
                        "abc",
                        "asepbsepc"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-018",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\n\nx = 1 // 5 + 1 / 5\n\n\n\n                        print(x)\n```",
                    "options": [
                        "0",
                        "0.5",
                        "0.4",
                        "0.2"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-019",
                    "type": "single",
                    "question": "Jaki będzie wynik próby wykonania poniższego fragmentu kodu, jeśli sample_tuple to krotka, która została wcześniej zdefiniowana i zawiera co najmniej dwa elementy?\n\n```python\n\nsample_tuple[0] = 5\n\n\n\n                        print(sample_tuple)\n```",
                    "options": [
                        "Zostanie zgłoszony błąd TypeError, ponieważ elementy krotki nie mogą być przypisane na nowo.",
                        "Kod zostanie wykonany pomyślnie, przypisując wartość 5 do pierwszego elementu krotki.",
                        "Kod zostanie wykonany tylko wtedy, gdy wszystkie elementy w sample_tuple będą liczbami całkowitymi.",
                        "Kod zadziała bezbłędnie tylko wtedy, gdy sample_tuple zawiera więcej niż dwa elementy."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-020",
                    "type": "single",
                    "question": "Jaki wynik zostanie zwrócony przez poniższy kod, jeśli użytkownik wprowadzi dwie linie danych zawierające odpowiednio 2 i 4 ?\n\n```python\n\nx = float(input())\n\n\n\n                        y = float(input())\n\n\n\n                        print(y ** (1 / x))\n```",
                    "options": [
                        "1.0",
                        "0.0",
                        "2.0",
                        "4.2"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-021",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik działania następującego kodu?\n\n```python\n\ndictionary = {'alpha': 'beta', 'gamma': 'alpha', 'beta': 'gamma'}\n\n\n\n                        value = dictionary['gamma']\n\n\n\n\n\n\n\n                        for key in range(len(dictionary)):\n\n\n\n                            value = dictionary[value]\n\n\n\n\n\n\n\n                        print(value)\n```",
                    "options": [
                        "(„alfa”, „beta”, „gamma”)",
                        "alpha",
                        "gamma",
                        "beta"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-022",
                    "type": "single",
                    "question": "Ile elementów znajduje się w liście values ?\n\n```python\n\nvalues = [i for i in range(-1, -3, -1)]\n```",
                    "options": [
                        "Jeden",
                        "Trzy",
                        "Dwa",
                        "Zero"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-023",
                    "type": "single",
                    "question": "Które z poniższych wywołań funkcji poprawnie wywołuje funkcję zdefiniowaną poniżej? (wybierz dwie odpowiedzi)\n\n```python\n\ndef custom_function(x, y, z=0):\n\n\n\n                            # Body of the function.\n```",
                    "options": [
                        "custom_function(y=2, x=1)",
                        "custom_function(x=3)",
                        "custom_function(4, 5, 6)",
                        "custom_function()"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-024",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(x, y):\n\n\n\n                            if x == y:\n\n\n\n                                return x\n\n\n\n                            else:\n\n\n\n                                return fun(x, y-1)\n\n\n\n\n\n\n\n\n\n\n\n                        print(fun(0, 3))\n```",
                    "options": [
                        "1",
                        "ten fragment kodu spowoduje wystąpienie Runtime error",
                        "2",
                        "0"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-025",
                    "type": "single",
                    "question": "Ile gwiazdek ( * ) zostanie wyświetlonych w konsoli po uruchomieniu następującego kodu?\n\n```python\n\ni = 0\n\n\n\n                        while i < i + 2 :\n\n\n\n                            i += 1\n\n\n\n                            print(\"*\")\n\n\n\n                        else:\n\n\n\n                            print(\"*\")\n```",
                    "options": [
                        "jeden",
                        "dwa",
                        "Ten fragment spowoduje wejście w nieskończoną pętlę, wyświetlając jedną gwiazdkę w każdej linii",
                        "zero"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-026",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\n\nmy_tuple = (10, 20, 30, 40, 50)\n\n\n\n                        my_tuple = my_tuple[-3:-1]\n\n\n\n                        my_tuple = my_tuple[-1]\n\n\n\n                        print(my_tuple)\n```",
                    "options": [
                        "30",
                        "20",
                        "40",
                        "50"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-027",
                    "type": "single",
                    "question": "Biorąc pod uwagę poniższy kod:\n\n```python\n\nmy_dict = {\"apple\": 1, \"banana\": 2, \"cherry\": 3}\n```",
                    "options": [
                        "for value in my_dict.values():\n print(value)",
                        "for key in my_dict:\n print(value)",
                        "for item in my_dict:\n print(item)",
                        "for val in my_dict.vals():\n print(val)"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-028",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndct = {}\n\n\n\n                        dct['1'] = (1, 2)\n\n\n\n                        dct['2'] = (2, 1)\n\n\n\n\n\n\n\n                        for x in dct.keys():\n\n\n\n                            print(dct[x][1], end=\"\")\n```",
                    "options": [
                        "21",
                        "(2,1)",
                        "(1,2)",
                        "12"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-029",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\n\ndef fun(inp=2, out=3):\n\n\n\n                            return inp * out\n\n\n\n\n\n\n\n\n\n\n\n                        print(fun(out=2))\n```",
                    "options": [
                        "6",
                        "4",
                        "ten fragment kodu jest błędny i spowoduje wystąpienie SyntaxError (błędu składniowego)",
                        "2"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-030",
                    "type": "single",
                    "question": "Ile razy znak # zostanie wyświetlony w konsoli po uruchomieniu następującego kodu?\n\n```python\n\nmatrix = [[x for x in range(3)] for y in range(3)]\n\n\n\n\n\n\n\n                        count = 0\n\n\n\n                        for row in matrix:\n\n\n\n                            for element in row:\n\n\n\n                                if element % 2 != 0:\n\n\n\n                                    count += 1\n\n\n\n                        print(count)\n```",
                    "options": [
                        "Zero",
                        "Jeden",
                        "Dwa",
                        "Trzy"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-031",
                    "type": "single",
                    "question": "Jaki jest wynik następującego kodu, jeśli użytkownik wprowadzi 0 ?\n\n```python\n\ntry:\n\n\n\n                            value = input(\"Enter a value: \")\n\n\n\n                            print(int(value)/len(value))\n\n\n\n                        except ValueError:\n\n\n\n                            print(\"Bad input...\")\n\n\n\n                        except ZeroDivisionError:\n\n\n\n                            print(\"Very bad input...\")\n\n\n\n                        except TypeError:\n\n\n\n                            print(\"Very very bad input...\")\n\n\n\n                        except:\n\n\n\n                            print(\"Booo!\")\n```",
                    "options": [
                        "Buuuu!",
                        "1.0",
                        "0.0",
                        "Bardzo, bardzo złe dane wejściowe...",
                        "Złe dane wejściowe...",
                        "Bardzo złe dane wejściowe..."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-032",
                    "type": "single",
                    "question": "Jakie jest oczekiwane zachowanie poniższego programu w języku Python?\n\n```python\n\ntry:\n\n\n\n                            print(10 / 0)\n\n\n\n                            break\n\n\n\n                        except ZeroDivisionError::\n\n\n\n                            print(\"Zero division error occurred...\")\n\n\n\n                        except (ValueError, TypeError):\n\n\n\n                            print(\"Value or type error occurred..\")\n\n\n\n                        except:\n\n\n\n                            print(\"Unknown error occurred...\")\n```",
                    "options": [
                        "Program spowoduje wyjątek SyntaxError.",
                        "Program spowoduje wystąpienie wyjątku ZeroDivisionError i wyświetli komunikat: \"Wystąpił błąd dzielenia przez zero...\"",
                        "Program spowoduje wystąpienie wyjątku ValueError lub TypeError i wyświetli komunikat: \"Wystąpił błąd wartości lub typu...\".",
                        "\"Program spowoduje wyjątek wsytąpienia nieznanego błędu i wyświetli komunikat 'Unknown error occurred...' w konsoli.\""
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-033",
                    "type": "single",
                    "question": "Jakie jest oczekiwane zachowanie tego programu?\n\n```python\n\nfoo = (1, 2, 3)\n\n\n\n                        foo.index(0)\n```",
                    "options": [
                        "Program spowoduje wyjątek AttributeError .",
                        "Program spowoduje wyjątek ValueError .",
                        "Program spowoduje wyjątek TypeError .",
                        "Program spowoduje wyjątek SyntaxError .",
                        "Program wyświetli 1 na ekranie."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-034",
                    "type": "single",
                    "question": "Który z poniższych fragmentów kodu pokazuje prawidłowy sposób obsługi wielu wyjątków w jednej klauzuli except ?\n\n```python\n\n# A:\n\n\n\n                        except (TypeError, ValueError, ZeroDivisionError):\n\n\n\n                            # Some code.\n\n\n\n\n\n\n\n                        # B:\n\n\n\n                        except TypeError, ValueError, ZeroDivisionError:\n\n\n\n                            # Some code.\n\n\n\n\n\n\n\n                        # C:\n\n\n\n                        except: (TypeError, ValueError, ZeroDivisionError)\n\n\n\n                            # Some code.\n\n\n\n\n\n\n\n                        # D:\n\n\n\n                        except: TypeError, ValueError, ZeroDivisionError\n\n\n\n                            # Some code.\n\n\n\n\n\n\n\n                        # E:\n\n\n\n                        except (TypeError, ValueError, ZeroDivisionError)\n\n\n\n                            # Some code.\n\n\n\n\n\n\n\n                        # F:\n\n\n\n                        except TypeError, ValueError, ZeroDivisionError\n\n\n\n                            # Some code.\n```",
                    "options": [
                        "Tylko A",
                        "A i B",
                        "B oraz C",
                        "D i E",
                        "Tylko F",
                        "A, C i D",
                        "A i F"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-035",
                    "type": "single",
                    "question": "Co się stanie, gdy spróbujesz uruchomić następujący kod?\n\n```python\n\nprint(3 + \"5\")\n```",
                    "options": [
                        "Kod spowoduje zgłoszenie wyjątku AttributeError.",
                        "8 zostanie wyświetlone na ekranie.",
                        "Kod spowoduje zgłoszenie wyjątku ValueError.",
                        "Kod spowoduje zgłoszenie wyjątku SyntaxError.",
                        "Kod spowoduje zgłoszenie wyjątku TypeError."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe2-m1",
            "name": "PE2: Moduł 1 — Pakiety, PIP, charakterystyka i wyjątki",
            "questions": [
                {
                    "id": "js-pe2-m1-001",
                    "type": "single",
                    "question": "Knowing that a function named fun() resides in a module named mod , choose the correct way to import it.",
                    "options": [
                        "import fun from mod",
                        "import fun",
                        "from mod import fun",
                        "from fun import mod"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-002",
                    "type": "single",
                    "question": "Knowing that a function named fun() resides in a module named mod , and it has been imported using the following line: \n import mod\n Choose the way it can be invoked in your code.",
                    "options": [
                        "fun()",
                        "mod‑>fun()",
                        "mod.fun()",
                        "mod::fun()"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-003",
                    "type": "single",
                    "question": "A function which returns a list of all entities available in a module is called:",
                    "options": [
                        "dir()",
                        "listmodule()",
                        "entities()",
                        "content()"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-004",
                    "type": "single",
                    "question": "A pyc file contains:",
                    "options": [
                        "compiled Python code",
                        "a Python interpreter",
                        "a Python compiler",
                        "Python source code"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-005",
                    "type": "single",
                    "question": "When a module is imported, its contents:",
                    "options": [
                        "may be executed (explicitly)",
                        "are ignored",
                        "are executed once (implicitly)",
                        "are executed as many times as they are imported"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-006",
                    "type": "single",
                    "question": "A predefined Python variable that stores the current module name is called:",
                    "options": [
                        "__mod__",
                        "__modname__",
                        "__module__",
                        "__name__"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-007",
                    "type": "single",
                    "question": "The following statement: \n from a.b import c \n causes the import of:",
                    "options": [
                        "entity b from module a from package c",
                        "entity a from module b from package c",
                        "entity c from module b from package a",
                        "entity c from module a from package b"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-008",
                    "type": "single",
                    "question": "What is the expected value assigned to the result variable after the following code is executed?\n\n```python\n\nimport math\n\nresult = math.e != math.pow(2, 4)\nprint(int(result))\n```",
                    "options": [
                        "0",
                        "1",
                        "True",
                        "False"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-009",
                    "type": "single",
                    "question": "What is the expected output of the following code?\n\n```python\n\nfrom random import randint\n\nfor i in range(2):\n   print(randint(1, 2), end='')\n```",
                    "options": [
                        "11 , 12 , 21 , or 22",
                        "12",
                        "There are millions of possible combinations, and the exact output cannot be predicted.",
                        "12 , or 21"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-010",
                    "type": "multiple",
                    "question": "Choose the true statements. (Select two answers)",
                    "options": [
                        "The processor function from the platform module returns an integer with the number of processes currently running in your OS.",
                        "The system function from the platform module returns a string with your OS name.",
                        "The version function from the platform module returns a string with your Python version.",
                        "The version function from the platform module returns a string with your OS version."
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-011",
                    "type": "single",
                    "question": "During the first import of a module, Python deploys the pyc files in the directory called:",
                    "options": [
                        "Mymodules",
                        "Hashbang",
                        "__init__",
                        "__pycache__"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-012",
                    "type": "single",
                    "question": "The digraph written as #! is used to:",
                    "options": [
                        "tell a Unix or Unix-like OS how to execute the contents of a Python file",
                        "create a docstring",
                        "tell an MS Windows OS how to execute the contents of a Python file",
                        "make a particular module entity private"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-013",
                    "type": "single",
                    "question": "A list of package dependencies can be obtained from pip using a command named:",
                    "options": [
                        "show",
                        "dir",
                        "deps",
                        "list"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-014",
                    "type": "single",
                    "question": "The pip list command presents a list of:",
                    "options": [
                        "locally installed packages",
                        "outdated local packages",
                        "all packages available at PyPI",
                        "available pip commands"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-015",
                    "type": "multiple",
                    "question": "What is true about the pip search command? (Select two answers)",
                    "options": [
                        "It needs a working Internet connection to work.",
                        "All its searches are limited to locally installed packages.",
                        "It searches through package names only.",
                        "It searches through all PyPI packages."
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-016",
                    "type": "multiple",
                    "question": "What is true about the pip install command? (Select two answers)",
                    "options": [
                        "It allows the user to install a specific version of the package.",
                        "It installs a package per user only when the --user option is specified.",
                        "It installs a package system-wide only when the --system option is specified.",
                        "It always installs the newest package version and it cannot be changed."
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-017",
                    "type": "single",
                    "question": "What is true about updating already installed Python packages?",
                    "options": [
                        "It's an automatic process which doesn't require any user attention.",
                        "It can be done by reinstalling the package using the reinstall command.",
                        "It can be done only by uninstalling and installing the packages once again.",
                        "It's performed by the install command accompanied by the -U option."
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m1-018",
                    "type": "single",
                    "question": "Which command can you use pip to remove an installed package?",
                    "options": [
                        "pip uninstall package",
                        "pip remove package",
                        "pip install --uninstall package",
                        "pip --uninstall package"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe2-m2",
            "name": "PE2: Moduł 2 — Łańcuchy znaków, operacje na znakach, metody",
            "questions": [
                {
                    "id": "js-pe2-m2-001",
                    "type": "single",
                    "question": "Entering the try: block implies that:",
                    "options": [
                        "some of the instructions from this block may not be executed",
                        "all of the instructions from this block will be executed",
                        "none of the instructions from this block will be executed",
                        "the block will be omitted"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-002",
                    "type": "single",
                    "question": "The unnamed except: block:",
                    "options": [
                        "must be the last one",
                        "can be placed anywhere",
                        "must be the first one",
                        "cannot be used if any named block has been used"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-003",
                    "type": "single",
                    "question": "The top‑most Python exception is called:",
                    "options": [
                        "BaseException",
                        "Exception",
                        "PythonException",
                        "TopException"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-004",
                    "type": "single",
                    "question": "The following statement:\n\n```python\n\nassert var == 0\n```",
                    "options": [
                        "will stop the program when var != 0",
                        "will stop the program when var == 0",
                        "is erroneous",
                        "has no effect"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-005",
                    "type": "single",
                    "question": "What is the expected output of the following code?\n\n```python\n\ntry:\n    print(\"5\"/0)\nexcept ArithmeticError:\n    print(\"arith\")\nexcept ZeroDivisionError:\n    print(\"zero\")\nexcept:\n    print(\"some\")\n```",
                    "options": [
                        "some",
                        "arith",
                        "zero",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-006",
                    "type": "multiple",
                    "question": "Which of the following are examples of built-in concrete Python exceptions? (Select two answers)",
                    "options": [
                        "IndexError",
                        "ImportError",
                        "ArithmeticError",
                        "BaseException"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-007",
                    "type": "single",
                    "question": "ASCII is:",
                    "options": [
                        "short for American Standard Code for Information Interchange",
                        "a standard Python module name",
                        "a predefined Python variable name",
                        "a character name"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-008",
                    "type": "single",
                    "question": "UTF‑8 is:",
                    "options": [
                        "a form of encoding Unicode code points",
                        "a Python version name",
                        "a synonym for byte",
                        "the 9th version of the UTF standard"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-009",
                    "type": "single",
                    "question": "UNICODE is a standard:",
                    "options": [
                        "like ASCII, but much more expansive",
                        "for coding floating-point numbers",
                        "used by coders from universities",
                        "honored by the whole universe"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-010",
                    "type": "single",
                    "question": "The following code:\n\n```python\n\nx = '\\''\nprint(len(x))\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "20"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-011",
                    "type": "single",
                    "question": "The following code:\n\n```python\n\nprint(ord('c') - ord('a'))\n```",
                    "options": [
                        "2",
                        "1",
                        "3",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-012",
                    "type": "single",
                    "question": "The following code:\n\n```python\n\nprint(chr(ord('z') ‑ 2))\n```",
                    "options": [
                        "x",
                        "y",
                        "z",
                        "a"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-013",
                    "type": "single",
                    "question": "The following code:\n\n```python\n\nprint(3 * 'abc' + 'xyz')\n```",
                    "options": [
                        "abcabcabcxyz",
                        "abcabcxyzxyz",
                        "abcxyzxyzxyz",
                        "xyzxyzxyzxyz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-014",
                    "type": "single",
                    "question": "The following code:\n\n```python\n\nprint('Mike' > \"Mikey\")\n```",
                    "options": [
                        "False",
                        "True",
                        "0",
                        "1"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m2-015",
                    "type": "single",
                    "question": "The following code:\n\n```python\n\nprint(float(\"1, 3\"))\n```",
                    "options": [
                        "raises a ValueError exception",
                        "prints 1.3",
                        "prints 1,3",
                        "prints 13"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe2-m3",
            "name": "PE2: Moduł 3 — Programowanie zorientowane obiektowo (OOP)",
            "questions": [
                {
                    "id": "js-pe2-m3-001",
                    "type": "single",
                    "question": "A data structure described as LIFO is actually a:",
                    "options": [
                        "stack",
                        "heap",
                        "list",
                        "tree"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-002",
                    "type": "single",
                    "question": "If the class’s constructor is declared as below, which one of the assignments is valid?\n\n```python\n\nclass Class:\n    def __init__(self):\n        pass\n```",
                    "options": [
                        "object = Class()",
                        "object = Class(self)",
                        "object = Class(object)",
                        "object = Class"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-003",
                    "type": "single",
                    "question": "If there is a superclass named A and a subclass named B , which one of the presented invocations should you put instead of the comment?\n\n```python\n\nclass A:\n    def __init__(self):\n        self.a = 1\n\n\nclass B(A):\n    def __init__(self):\n        # Put selected line here.\n        self.b = 2\n```",
                    "options": [
                        "A.__init__(self)",
                        "A.__init__()",
                        "__init__()",
                        "A.__init__(1)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-004",
                    "type": "single",
                    "question": "What will be the effect of running the following code?\n\n```python\n\nclass A:\n    def __init__(self,v):\n        self.__a = v + 1\n\n\na = A(0)\nprint(a.__a)\n```",
                    "options": [
                        "The code will raise an AttributeError exception",
                        "0",
                        "1",
                        "2"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-005",
                    "type": "single",
                    "question": "What will be the output of the following code?\n\n```python\n\nclass A:\n    def __init__(self,v = 1):\n        self.v = v\n\n    def set(self,v):\n        self.v = v\n        return v\n\n\na = A()\nprint(a.set(a.v + 1))\n```",
                    "options": [
                        "2",
                        "1",
                        "3",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-006",
                    "type": "single",
                    "question": "What will be the output of the following code?\n\n```python\n\nclass A:\n    X = 0\n    def __init__(self,v = 0):\n        self.Y = v\n        A.X += v\n\n\na = A()\nb = A(1)\nc = A(2)\nprint(c.X)\n```",
                    "options": [
                        "3",
                        "1",
                        "2",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-007",
                    "type": "single",
                    "question": "What will be the output of the following code?\n\n```python\n\nclass A:\n    A = 1\n\n\nprint(hasattr(A,'A'))\n```",
                    "options": [
                        "True",
                        "False",
                        "0",
                        "1"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-008",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass A:\n     def __init__(self):\n        pass\n\n\na = A(1)\nprint(hasattr(a,'A'))\n```",
                    "options": [
                        "it will raise an exception",
                        "1",
                        "True",
                        "False"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-009",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass A:\n    def __str__(self):\n        return 'a'\n\n\nclass B(A):\n    def __str__(self):\n        return 'b'\n\n\nclass C(B):\n    pass\n\n\no = C()\nprint(o)\n```",
                    "options": [
                        "it will print b",
                        "it will print a",
                        "it will print c",
                        "it will raise an exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-010",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass A:\n    pass\n\n\nclass B(A):\n    pass\n\n\nclass C(B):\n    pass\n\n\nprint(issubclass(C,A))\n```",
                    "options": [
                        "it will print True",
                        "it will print False",
                        "it will print 1",
                        "it will raise an exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-011",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass A:\n    def a(self):\n        print('a')\n\n\nclass B:\n    def a(self):\n        print('b')\n\n\nclass C(B,A):\n    def c(self):\n        self.a()\n\n\no = C()\no.c()\n```",
                    "options": [
                        "it will print b",
                        "it will print a",
                        "it will print c",
                        "it will raise an exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-012",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass A:\n    def __str__(self):\n        return 'a'\n\n\nclass B:\n    def __str__(self):\n        return 'b'\n\n\nclass C(A, B):\n    pass\n\n\no = C()\nprint(o)\n```",
                    "options": [
                        "it will print a",
                        "it will print b",
                        "it will print c",
                        "it will raise an exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-013",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass A:\n    v = 2\n\n\nclass B(A):\n    v = 1\n\n\nclass C(B):\n    pass\n\n\no = C()\nprint(o.v)\n```",
                    "options": [
                        "it will print 1",
                        "it will print 2",
                        "it will print an empty line",
                        "it will raise an exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-014",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\ndef f(x):\n    try:\n        x = x / x\n    except:\n        print(\"a\",end='')\n    else:\n        print(\"b\",end='')\n    finally:\n        print(\"c\",end='')\n\n\nf(1)\nf(0)\n```",
                    "options": [
                        "it will print bcac",
                        "it will print bcbc",
                        "it will print acac",
                        "it will raise an unhandled exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-015",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\ntry:\n    raise Exception(1,2,3)\nexcept Exception as e:\n    print(len(e.args))\n```",
                    "options": [
                        "it will print 3",
                        "it will print 2",
                        "it will print 1",
                        "it will raise an unhandled exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-016",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass Ex(Exception)\n    def __init__(self, msg):\n        Exception.__init__(self, msg + msg)\n        self.args = (msg,)\n\n\ntry:\n    raise Ex('ex')\nexcept Ex as e:\n    print(e)\nexcept Exception as e:\n    print(e)\n```",
                    "options": [
                        "it will print ex",
                        "it will print exex",
                        "it will print an empty line",
                        "it will raise an unhandled exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m3-017",
                    "type": "single",
                    "question": "What will be the result of executing the following code?\n\n```python\n\nclass I:\n    def __init__(self):\n        self.s = 'abc'\n        self.i = 0\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.i == len(self.s):\n            raise StopIteration\n        v = self.s[self.i]\n        self.i += 1\n        return v\n\n\nfor x in I():\n    print(x,end='')\n```",
                    "options": [
                        "it will print abc",
                        "it will print 0",
                        "it will raise an handled exception",
                        "it will raise an unhandled exception"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe2-m4",
            "name": "PE2: Moduł 4 — Generatory, domknięcia i operacje na plikach",
            "questions": [
                {
                    "id": "js-pe2-m4-001",
                    "type": "single",
                    "question": "What keyword would you use to define an anonymous function?",
                    "options": [
                        "lambda",
                        "def",
                        "afun",
                        "yield"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-002",
                    "type": "multiple",
                    "question": "Select the true statements. (Select two answers)",
                    "options": [
                        "The lambda function can accept any number of arguments",
                        "The lambda function can evaluate only one expression",
                        "The lambda function can accept a maximum of two arguments",
                        "The lambda function can evaluate multiple expressions"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-003",
                    "type": "single",
                    "question": "Look at the code below:\n\n```python\n\nmy_list = [1, 2, 3]\n# Insert line of code here.\nprint(foo)\n```",
                    "options": [
                        "foo = tuple(map(lambda x: x**x, my_list))",
                        "foo = list(map(lambda x: x**x, my_list))",
                        "foo = tuple(map(lambda x: x*x, my_list))",
                        "foo = list(map(lambda x: x*x, my_list))"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-004",
                    "type": "single",
                    "question": "Look at the code below:\n\n```python\n\nmy_tuple = (0, 1, 2, 3, 4, 5, 6)\n# Insert line of code here.\nprint(foo)\n```",
                    "options": [
                        "foo = list(filter(lambda x: x-0 and x-1, my_tuple))",
                        "foo = tuple(filter(lambda x: x-0 and x-1, my_tuple))",
                        "foo = tuple(filter(lambda x: x>1, my_tuple))",
                        "foo = list(filter(lambda x: x==0 and x==1, my_tuple))"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-005",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\ndef I():\n    s = 'abcdef'\n    for c in s[::2]:\n        yield c\n\n\nfor x in I():\n    print(x, end='')\n```",
                    "options": [
                        "It will print ace",
                        "It will print bdf",
                        "It will print abcdef",
                        "It will print an empty line"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-006",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\ndef fun(n):\n    s = '+'\n    for i in range(n):\n        s += s\n        yield s\n\n\nfor x in fun(2):\n    print(x, end='');\n```",
                    "options": [
                        "It will print ++++++",
                        "It will print +",
                        "It will print ++",
                        "It will print +++"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-007",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\ndef o(p):\n    def q():\n        return '*' * p\n    return q\n\n\nr = o(1)\ns = o(2)\nprint(r() + s())\n```",
                    "options": [
                        "It will print ***",
                        "It will print **",
                        "It will print *",
                        "It will print ****"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-008",
                    "type": "multiple",
                    "question": "Which of the following open modes allow you to perform read operations? (Select two answers)",
                    "options": [
                        "r",
                        "r+",
                        "w",
                        "a"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-009",
                    "type": "single",
                    "question": "What is the meaning of the value represented by errno.EEXIST ?",
                    "options": [
                        "File exists",
                        "File doesn't exist",
                        "Bad file number",
                        "Permission denied"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-010",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nb = bytearray(3)\nprint(b)\n```",
                    "options": [
                        "bytearray(b'\\x00\\x00\\x00')",
                        "bytearray(0, 0, 0)",
                        "bytearray(b'3')",
                        "3"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-011",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nimport os\n\nos.mkdir('pictures')\nos.chdir('pictures')\nos.mkdir('thumbnails')\nos.chdir('thumbnails')\nos.mkdir('tmp')\nos.chdir('../')\n\nprint(os.getcwd())\n```",
                    "options": [
                        "It prints the path to the pictures directory",
                        "It prints the path to the thumbnails directory",
                        "It prints the path to the tmp directory",
                        "It prints the path to the root directory"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-012",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nimport os\n\nos.mkdir('thumbnails')\nos.chdir('thumbnails')\n\nsizes = ['small', 'medium', 'large']\n\nfor size in sizes:\n    os.mkdir(size)\n\nprint(os.listdir())\n```",
                    "options": [
                        "['large', 'small', 'medium']",
                        "['.', 'large', 'small', 'medium']",
                        "['.', '..', 'large', 'small', 'medium']",
                        "[]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-013",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nfrom datetime import date\n\ndate_1 = date(1992, 1, 16)\ndate_2 = date(1991, 2, 5)\n\nprint(date_1 - date_2)\n```",
                    "options": [
                        "345 days, 0:00:00",
                        "345 days",
                        "345",
                        "345, 0:00:00"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-014",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nfrom datetime import datetime\n\ndatetime = datetime(2019, 11, 27, 11, 27, 22)\nprint(datetime.strftime('%y/%B/%d %H:%M:%S'))\n```",
                    "options": [
                        "19/November/27 11:27:22",
                        "2019/Nov/27 11:27:22",
                        "2019/11/27 11:27:22",
                        "19/11/27 11:27:22"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-015",
                    "type": "single",
                    "question": "Which program will produce the following output:\n\n```python\n\nMo Tu We Th Fr Sa Su\n```",
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-m4-016",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nimport calendar\n\nc = calendar.Calendar()\n\nfor weekday in c.iterweekdays():\n    print(weekday, end=\" \")\n```",
                    "options": [
                        "0 1 2 3 4 5 6",
                        "1 2 3 4 5 6 7",
                        "Mo Tu We Th Fr Sa Su",
                        "Su Mo Tu We Th Fr Sa"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "js-pe2-final",
            "name": "PE2: Test końcowy",
            "questions": [
                {
                    "id": "js-pe2-final-001",
                    "type": "single",
                    "question": "Knowing that a function named fun() resides in a module named mod , and was imported using the following statement:\n\n```python\n\nfrom mod import fun\n```",
                    "options": [
                        "fun()",
                        "mod.fun()",
                        "mod:fun()",
                        "mod::fun()"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-002",
                    "type": "single",
                    "question": "Given the Python code snippet below:\n\n```python\n\nimport random\nprint(len(dir(random)))\n```",
                    "options": [
                        "A list of attributes belonging to the random module.",
                        "The number of attributes in the random module.",
                        "A TypeError because dir cannot be used with modules.",
                        "The documentation string of the random module."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-003",
                    "type": "single",
                    "question": "The compiled Python bytecode is stored in files which have their names ending with:",
                    "options": [
                        "pyc",
                        "py",
                        "pyb",
                        "pc"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-004",
                    "type": "single",
                    "question": "Assuming that the following three files: a.py , b.py , and c.py reside in the same directory, what will be the output produced after running the c.py file?\n\n```python\n\n# file a.py\nprint(\"a\", end='')\n\n# file b.py\nimport a\nprint(\"b\", end='')\n\n# file c.py\nprint(\"c\", end='')\nimport a\nimport b\n```",
                    "options": [
                        "cab",
                        "bc",
                        "bac",
                        "cba"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-005",
                    "type": "single",
                    "question": "If the following line of code is at the end of a Python script named calculator.py , what will be the output when this script is run directly?\n\n```python\n\nprint(__name__)\n```",
                    "options": [
                        "__calculator__",
                        "calculator",
                        "__main__",
                        "main"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-006",
                    "type": "single",
                    "question": "Consider the following Python import statement in a script:\n\n```python\n\nfrom data.processing.analysis.v1 import compute_metrics as cm\n```",
                    "options": [
                        "Imports the compute_metrics function from the v1.py script, which is part of the analysis subpackage in the processing package inside the data package, and renames it to cm .",
                        "Imports the v1 package from the analysis submodule, which is part of the processing function inside the data module, and renames it to compute_metrics .",
                        "Imports the data module from the processing package, which is part of the analysis subpackage inside the v1 package, and renames it to cm .",
                        "Imports the entire data package and renames it to compute_metrics , allowing all functions and classes within to be accessed using the prefix cm ."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-007",
                    "type": "single",
                    "question": "Given the following Python code segment:\n\n```python\n\ntry:\n   # Code that may raise an exception\n   risky_call()\nexcept ValueError:\n   print(\"Caught ValueError\")\nexcept TypeError:\n   print(\"Caught TypeError\")\nexcept Exception:\n   print(\"Caught a different exception\")\n```",
                    "options": [
                        "One or more except: blocks will be executed.",
                        "Not more than one except: block will be executed.",
                        "None of the except: blocks will be executed.",
                        "Exactly one except: block will be executed."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-008",
                    "type": "single",
                    "question": "Consider the following Python code:\n\n```python\n\ntry:\n    raise Exception(\"An error occurred\")\nexcept ValueError as ve:\n    print(\"ValueError:\", str(ve))\nexcept BaseException as be:\n    print(\"BaseException:\", str(be))\nexcept:\n    print(\"Caught some other exception\")\n```",
                    "options": [
                        "ValueError: An error occurred",
                        "BaseException: An error occurred",
                        "Caught some other exception",
                        "No output; an unhandled exception will terminate the program"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-009",
                    "type": "single",
                    "question": "Review the Python code below:\n\n```python\n\ntry:\n    raise Exception(\"An error has occurred\")\nexcept Exception:\n    print(\"a\")\nexcept:\n    print(\"b\")\nexcept BaseException:\n    print(\"c\")\n```",
                    "options": [
                        "The code will print \"c\"",
                        "The code will print \"a\"",
                        "The code will print \"b\"",
                        "The code will cause a syntax error"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-010",
                    "type": "single",
                    "question": "Analyze the Python statement below:\n\n```python\n\nwith open('data.csv', 'r') as file:\n    for record in file:\n```",
                    "options": [
                        "The code is valid because the open function with 'r' mode returns an iterable file object.",
                        "The code may be valid if record is predefined as a list before the loop.",
                        "The code is invalid because the open function with 'r' mode returns nothing.",
                        "The code is invalid because the open function with 'r' mode returns a non-iterable object."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-011",
                    "type": "single",
                    "question": "Examine the Python assertion statement provided:\n\n```python\n\nassert var > 0\n```",
                    "options": [
                        "It will raise an AssertionError if var is less than or equal to 0.",
                        "It will raise an AssertionError if var is greater than 0.",
                        "It will do nothing regardless of the value of var .",
                        "It will output the value of var if it is greater than 0."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-012",
                    "type": "single",
                    "question": "Given the Python code segment below:\n\n```python\n\nx = r\"\\\"\nprint(len(x))\n```",
                    "options": [
                        "The code will print 3, as the raw string treats backslashes as literal characters.",
                        "The code will print 1, as the triple backslash in a raw string represents a single backslash.",
                        "The code will cause a syntax error due to the unescaped sequence at the end of the raw string.",
                        "The code will print 4, as the raw string preserves the backslashes and the ending double quote is considered part of the string."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-013",
                    "type": "single",
                    "question": "Given the Python code segment below:\n\n```python\n\nx = \"\\//\nprint(len(x))\n```",
                    "options": [
                        "The code will output 4, as there are four characters in the string, with the backslash escaping the following forward slash.",
                        "The code will output 3, recognizing the sequence of two backslashes as a single escaped backslash and two forward slashes.",
                        "The code will output 2, as the double backslash represents a single backslash and the double forward slashes are combined.",
                        "The code will cause a syntax error due to an improper sequence of escape characters."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-014",
                    "type": "single",
                    "question": "Consider the Python code provided below:\n\n```python\n\nprint(chr(ord('a') + 1))\n```",
                    "options": [
                        "The code will print \"b\" as it takes the Unicode code point of 'a', adds 1, and converts it back to a character.",
                        "The code will print \"A\" because the addition operation converts the lowercase 'a' to an uppercase 'A' without changing its position in the alphabet.",
                        "The code will print \"a\" because the addition operation does not affect the character.",
                        "The code will cause a syntax error because you cannot add a number to a character's ord() value."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-015",
                    "type": "single",
                    "question": "Consider the following Python code snippet:\n\n```python\n\nprint(int(\"1.0\"))\n```",
                    "options": [
                        "The code will print 1 because it converts the string \"1.0\" to an integer.",
                        "The code will print 1.0 as it maintains the floating-point format.",
                        "The code will cause a ValueError because \"1.0\" is not a valid literal for the int() constructor without prior conversion to a float.",
                        "The code will cause a TypeError because strings cannot be converted to integers directly when they represent a float."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-016",
                    "type": "single",
                    "question": "If the class constructor is declared in the following way:\n\n```python\n\nclass Class:\n    def __init__(self, val=0):\n        pass\n```",
                    "options": [
                        "object = Class(1, 2)",
                        "object = Class(None)",
                        "object = Class(1)",
                        "object = Class()"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-017",
                    "type": "single",
                    "question": "Consider the Python class CustomNumber and the subsequent operations performed on its instance:\n\n```python\n\nclass CustomNumber:\n    def __init__(self, value=1.5):\n        self.value = value\n\n    def increment(self, increase=2):\n        self.value -= increase\n        return self.value\n\n\nnum_instance = CustomNumber()\nnum_alias = num_instance\nnum_alias.increment()\n\nprint(num_instance.value)\n```",
                    "options": [
                        "0.5",
                        "-0.5",
                        "3.5",
                        "A TypeError is raised."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-018",
                    "type": "single",
                    "question": "What is the expected output of the following code?\n\n```python\n\nclass A:\n    A = 1\n    def __init__(self):\n        self.a = 0\n\n\nprint(hasattr(A, 'a'))\n```",
                    "options": [
                        "False",
                        "True",
                        "0",
                        "1"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-019",
                    "type": "single",
                    "question": "What will the following Python code output?\n\n```python\n\nclass Parent:\n    pass\n\nclass Uncle(Parent):\n    pass\n\nclass Child(Uncle):\n    pass\n\nclass Cousin(Parent):\n    pass\n\n\nprint(issubclass(Child, Cousin), issubclass(Cousin, Uncle))\n```",
                    "options": [
                        "True, True",
                        "True, False",
                        "False, True",
                        "False, False"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-020",
                    "type": "single",
                    "question": "What is the sys.stdout stream in Python typically associated with?",
                    "options": [
                        "The screen",
                        "The keyboard",
                        "A null device",
                        "The printer"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-021",
                    "type": "single",
                    "question": "What will be the result of running the following code?\n\n```python\n\nclass A:\n    def __init__(self, v):\n        self.__a = v + 1\n\nclass B(A):\n    def __init__(self, v):\n        super().__init__(v)\n        self.__a += 1\n\nb = B(0)\nprint(b._A__a)\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "AttributeError is raised"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-022",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\nclass A:\n    def __init__(self):\n        pass\n\n\na = A(1)\nprint(hasattr(a, 'A'))\n```",
                    "options": [
                        "The code will raise an exception",
                        "The code will print True",
                        "The code will print False",
                        "The code will print 1"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-023",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\nclass A:\n    def a(self):\n        print('a')\n\n\nclass B:\n    def a(self):\n        print('b')\n\n\nclass C(B, A):\n    def c(self):\n        self.a()\n\n\no = C()\no.c()\n```",
                    "options": [
                        "The code will print b",
                        "The code will print c",
                        "The code will print a",
                        "The code will raise an exception"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-024",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\ntry:\n    raise Exception(1, 2, 3, (4), \"A\",)\nexcept Exception as e:\n     print(len(e.args))\n```",
                    "options": [
                        "5",
                        "4",
                        "6",
                        "An exception will be raised"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-025",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\ndef my_fun(n):\n    s = '+'\n    for i in range(n):\n        s += s\n        yield s\n\n\nfor x in my_fun(2):\n    print(x, end='')\n```",
                    "options": [
                        "The code will print ++++++",
                        "The code will print +++",
                        "The code will print ++",
                        "The code will print +"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-026",
                    "type": "single",
                    "question": "What is the expected result of executing the following code?\n\n```python\n\nclass I:\n    def __init__(self):\n        self.s = 'abc'\n        self.i = 0\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.i == len(self.s):\n            raise StopIteration\n        v = self.s[self.i]\n        self.i += 1\n        return v\n\n\nfor x in I():\n    print(x, end='')\n```",
                    "options": [
                        "The code will print abc",
                        "The code will print 012",
                        "The code will print cba",
                        "The code will print 210"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-027",
                    "type": "single",
                    "question": "What will be the output of the following code?\n\n```python\n\ndef generate_pattern(n):\n    def create_pattern():\n        return '**' * n\n\n    return create_pattern\n\npattern1 = generate_pattern(1)\npattern2 = generate_pattern(2)\nprint(pattern1() + pattern2())\n```",
                    "options": [
                        "**",
                        "***",
                        "****",
                        "******"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-028",
                    "type": "single",
                    "question": "If s is a stream opened in read mode, the following line of code do?\n\n```python\n\nq = s.read(-1)\n```",
                    "options": [
                        "It reads the entire contents of the stream s .",
                        "It reads nothing from the stream s .",
                        "It reads one character from the stream s .",
                        "It raises an error because a negative value is provided as an argument."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-029",
                    "type": "single",
                    "question": "Assuming that the open() invocation has gone successfully, the following snippet:\n\n```python\n\nfor x in open('file', 'rt'):\n    print(x)\n```",
                    "options": [
                        "read the file line by line",
                        "read the file character by character",
                        "read the whole file at once",
                        "cause an exception"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-030",
                    "type": "single",
                    "question": "If you want to fill a byte array with data read in from a stream, which method can you use?",
                    "options": [
                        "The readinto() method",
                        "The readbytes() method",
                        "The readfrom() method",
                        "The read() method"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-031",
                    "type": "single",
                    "question": "Which of the following commands would you use to check pip 's version? (Select two answers)",
                    "options": [
                        "pip --version",
                        "pip3 --version",
                        "pip version",
                        "pip-version"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-032",
                    "type": "single",
                    "question": "Which of the following commands can be used with pip to uninstall a specific Python package?",
                    "options": [
                        "pip uninstall package_name",
                        "pip erase package_name",
                        "pip delete package_name",
                        "pip --remove package_name"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-033",
                    "type": "single",
                    "question": "Look at the following code:\n\n```python\n\nnumbers = [0, 2, 7, 9, 10]\n# Insert line of code here.\nprint(list(foo))\n```",
                    "options": [
                        "foo = map(lambda num: num ** 2, numbers)",
                        "foo = filter(lambda num: num ** 2, numbers)",
                        "foo = lambda num: num ** 2, numbers",
                        "foo = lambda num: num * 2, numbers)"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-034",
                    "type": "single",
                    "question": "Look at the following code:\n\n```python\n\nnumbers = [i*i for i in range(5)]\n# Insert line of code here.\nprint(foo)\n```",
                    "options": [
                        "foo = list(filter(lambda x: x % 2, numbers))",
                        "foo = list(map(lambda x: x % 2, numbers))",
                        "foo = list(filter(lambda x: x / 2, numbers))",
                        "foo = list(map(lambda x: x // 2, numbers))"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-035",
                    "type": "single",
                    "question": "Look at the code below:\n\n```python\n\nimport random\n\n#\n# Insert lines of code here.\n#\n\nprint(a, b, c)\n```",
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-036",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nimport os\n\nos.mkdir('pictures')\nos.chdir('pictures')\n\nprint(os.getcwd())\n```",
                    "options": [
                        "The code will print the path to the created directory",
                        "The code will print the name of the created directory",
                        "The code will print the content of the created directory",
                        "The code will print the owner of the created directory"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-037",
                    "type": "single",
                    "question": "What information can be read using the uname function provided by the os module? (Select two answers)",
                    "options": [
                        "Operating system name",
                        "Hardware identifier",
                        "Last login date",
                        "Current path"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-038",
                    "type": "single",
                    "question": "What is the expected result of the following code?\n\n```python\n\nfrom datetime import datetime\n\ndatetime_1 = datetime(2019, 11, 27, 11, 27, 22)\ndatetime_2 = datetime(2019, 11, 27, 0, 0, 0)\n\nprint(datetime_1 - datetime_2)\n```",
                    "options": [
                        "11:27:22",
                        "0 days, 11:27:22",
                        "11 hours, 27 minutes, 22 seconds",
                        "0 days"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-039",
                    "type": "single",
                    "question": "If you want to calculate the date that is 30 days after the current date, which of the following code snippets would you use?",
                    "options": [
                        "current_date + timedelta(days=30)",
                        "current_date + timedelta(days-=30)",
                        "current_date + timedelta(30)",
                        "current_date + timedelta(-30)"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-040",
                    "type": "single",
                    "question": "What is the expected result of executing the following Python code?\n\n```python\n\nimport calendar\n\ncalendar.setfirstweekday(calendar.FRIDAY)\nprint(calendar.weekheader(2))\n```",
                    "options": [
                        "It will only print the names of the first two days of the week starting with Friday.",
                        "It will only print the names of the days of the week from Friday to Sunday.",
                        "It will raise an error because calendar.weekheader() does not accept arguments.",
                        "It will print the names of all the days of the week in a shorter format."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                }
            ]
        }
    ]
};
