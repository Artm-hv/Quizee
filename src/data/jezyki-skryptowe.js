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
                        "None",
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
                    "explanation": "Kod maszynowy to program napisany w języku maszynowym, który składa się z sekwencji liczb binarnych: 0 i 1."
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
                    "explanation": "Kompilator tłumaczy (kompiluje) program źródłowy (zbiór instrukcji w języku wysokiego poziomu) na kod maszynowy (niższy poziom reprezentacji programu źródłowego). Sekwencja 0s i 1s może być następnie wykonana przez procesor. Wykonanie skompilowanego kodu jest zazwyczaj szybsze niż interpretacja."
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
                    "explanation": "Python to darmowy język programowania typu open source, dostępny dla każdego. Jest to język wieloplatformowy, co oznacza, że program napisany w Pythonie na systemie Linux będzie działał na Macu i odwrotnie. Ponieważ Python jest stosunkowo łatwy do nauczenia i posiada prostą składnię, jest dobrym wyborem dla testerów."
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
                    "explanation": "CPython to oryginalna (tradycyjna) implementacja w języku Python napisana w języku C, w przeciwieństwie do innych, niedomyślnych implementacji, takich jak Jython, implementowanych w języku Java, które pojawiły się później. CPython jest implementacją języka Python dostępną do pobrania ze strony www.python.org i pierwszą, w której wprowadzono nowe funkcje. Pojawia się ona we wszystkich kolejnych wersjach Pythona."
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
                    "explanation": "Program wyświetli „Hello!”. Funkcja print wypisuje sprecyzowaną przez nas wiadomość, w tym przypadku„Hello!”."
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
                    "explanation": "Program zgłosi wyjątek NameError, ponieważ Python nie rozpoznaje nazwy prin. Python nie rozpoznaje, że najprawdopodobniej próbujesz użyć słowa print, a nie prin."
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
                    "explanation": "Dwuznak, zwany znakiem nowej linii, powoduje, że bieżący wiersz kończy się w punkcie przez niego wskazanym i tworzy nowy wiersz, który zaczyna się zaraz za nim."
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
                    "explanation": "Parametry słowa kluczowego (zwane także parametrami nazwanymi) to parametry, których wartości są określane przez słowo kluczowe, po którym następuje znak równości (=) i wartość domyślna przypisana do tego słowa kluczowego. Przykład argumentu słowa kluczowego: def my_function(x=1):"
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
                    "explanation": "Pamiętając, że Python wybiera najbardziej efektywny format do przedstawiania liczb, a litera E oznacza\"razy dziesięć do potęgi\"w notacji naukowej, prawidłowy sposób zapisywania liczby 20.12 × 10^8 to 20.12E8."
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
                    "explanation": "Jeśli liczba całkowita jest poprzedzona 0o lub 0O, będzie ona traktowana jako wartość ósemkowa. Na przykład: 0o246 to liczba ósemkowa, której wartość dziesiętna to 166. Jeśli liczba całkowita jest poprzedzona 0x lub 0X, będzie ona traktowana jako wartość szesnastkowa. Na przykład: 0x246 to liczba szesnastkowa, której wartość dziesiętna to 582. Na koniec, jeśli liczba całkowita jest poprzedzona przez 0b lub 0B, będzie ona traktowana jako wartość binarna. Na przykład: 0b1111 to liczba binarna, której wartość dziesiętna to 15."
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
                    "explanation": "Operator ** wykonuje operację potęgowania w Pythonie. Jest on również nazywany operatorem potęgowania."
                },
                {
                    "id": "js-pe1-m2-006",
                    "type": "single",
                    "question": "Wynik następującego podziału:\n\n```python\n1 / 1\n```",
                    "options": [
                        "jest równy 1.0",
                        "jest równy 1",
                        "nie może zostać obliczony",
                        "nie da się go przewidzieć"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Operator/jest jednym z dwóch rodzajów operatora dzielenia w Pythonie, który dzieli lewy operand przez prawy operand oraz zwraca wartość zmiennoprzecinkową (float).Operator //, zwany operatorem dzielenia całkowitoliczbowego (floor division), wykonuje podobną operację, ale wyniki zaokrągla w dół i zwraca liczbę całkowitą."
                },
                {
                    "id": "js-pe1-m2-007",
                    "type": "multiple",
                    "question": "Które z następujących stwierdzeń są prawdziwe ? (Wybierz dwie odpowiedzi)",
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
                    "explanation": "Operator % (modulo) zwraca resztę z dzielenia, a ponieważ nie można dzielić przez zero, prawy operand musi być liczbą różną od zera. W przeciwnym razie zostanie zgłoszony ZeroDivisionException.Operator**wykorzystuje prawostronne wiązanie, co oznacza, że wyrażenie 2**2**3jest obliczane od prawej do lewej:2**3 = 8 i 2**8 = 256."
                },
                {
                    "id": "js-pe1-m2-008",
                    "type": "single",
                    "question": "Wiązanie lewostronne określa, że wynik następującego wyrażenia:\n\n```python\n1 // 2 * 3\n```",
                    "options": [
                        "0",
                        "4.5",
                        "0.0",
                        "0.16666666666666666"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Lewostronne wiązanie oznacza, że wyrażenie jest obliczane od lewej do prawej: 1 // 2 = 0 i 0 * 3 = 0."
                },
                {
                    "id": "js-pe1-m2-009",
                    "type": "multiple",
                    "question": "Które z poniższych nazw zmiennych są niedozwolone ? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "True",
                        "oraz",
                        "True",
                        "PRAWDA"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "True oraz and to słowa kluczowe w Pythonie (słowa zastrzeżone) i nie mogą być używane jako nazwy zmiennych. Ponieważ Python rozróżnia wielkość liter, nazwyTrue i TRUE są całkowicie dozwolone, ale nie są one najlepszym wyborem."
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
                    "explanation": "Funkcja print() może nie przyjmować żadnych argumentów (np. print()), trzy argumenty (np. print(„one”, „two”, „three”) lub trzy tysiące trzysta trzydzieści trzy... (choć tak naprawdę tego nie sprawdziliśmy!)."
                },
                {
                    "id": "js-pe1-m2-011",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\nx = 1\ny = 2\nz = x\nx = y\ny = z\nprint(x, y)\n```",
                    "options": [
                        "2 1",
                        "1 2",
                        "1 1",
                        "2 2"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład: Wartość 1 zostaje przypisana do zmiennejx, a zmienna x zostaje zainicjowana (czylix = 1)wartość2zostaje przypisana do zmiennejy, a zmienna y zostaje zainicjowana (więc y = 2); wartość przypisana do zmiennej x jest przypisana do zmiennejz, a zmiennej z zostaje zainicjowana (więc z = 1); zmienna x otrzymuje wartość, która jest przypisana do zmiennej y (a więc x = 2); zmienna y otrzymuje wartość, która jest przypisana do zmiennej z (a więc y = 1); wartości przypisane do zmiennych x i y są teraz wyświetlane, co daje następujący wynik: 2 1 (uwaga: funkcja print() oddziela wyświetlane wartości spacją)"
                },
                {
                    "id": "js-pe1-m2-012",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\nx = input()\ny = input()\nprint(x + y)\n```",
                    "options": [
                        "16",
                        "2",
                        "4",
                        "6"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład: funkcja input() odczytuje argumenty wprowadzone przez użytkownika (odpowiednio 2 i 4) i konwertuje je na ciągi, do zmiennych x i y przypisywane są ciągi znaków wprowadzone przez użytkownika, funkcja print() wyświetla na ekranie wynik operacji konkatenacji (proces łączenia ciągów):„2” + „4”; operator+powoduje dodanie ciągu znaków do innego ciągu i daje wynik 24."
                },
                {
                    "id": "js-pe1-m2-013",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\nx = int(input())\ny = int(input())\nx = x // y\ny = y // x\nprint(y)\n```",
                    "options": [
                        "Kod spowoduje błąd wykonania (Runtime error)",
                        "2.0",
                        "4.0",
                        "8.0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład: zmiennej x przypisywana jest wartość całkowita 2 (2 jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); zmiennej y jest przypisywana wartość całkowita 4 (4 jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); wykonywana jest operacja, w wyniku której zmiennej x jest przypisywana wartość 0 (2 // 4 = 0); operacja jest wykonywana, ale został zgłoszony ZeroDivisionException, ponieważ operator // nie może zaakceptować 0 jako prawego operandu. Program zostanie zakończony."
                },
                {
                    "id": "js-pe1-m2-014",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\nx = int(input())\ny = int(input())\nx = x / y\ny = y / x\nprint(y)\n```",
                    "options": [
                        "8.0",
                        "4.0",
                        "2.0",
                        "Kod spowoduje błąd wykonania (Runtime error)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład: zmiennej x przypisywana jest wartość całkowita 2 (2 jest wprowadzane przez użytkownika, konwertowane na ciąg znaków przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); zmiennej y jest przypisywana wartość całkowita 4 (4 jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); wykonywana jest operacja, w wyniku której zmiennej x jest przypisywana wartość 0.5 (2 / 4 = 0.5); wykonywana jest operacja, w wyniku której zmiennej y przypisywana jest wartość 8.0 (4 / 0.5 = 8.0); wartość przypisana do zmiennej y (8.0) jest wyświetlana na ekranie."
                },
                {
                    "id": "js-pe1-m2-015",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające kolejno 11 i 4?\n\n```python\nx = int(input())\ny = int(input())\nx = x % y\nx = x % y\ny = y % x\nprint(y)\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład: zmiennej x przypisywana jest wartość całkowita 11 (11 jest wprowadzane przez użytkownika, konwertowane na ciąg znaków przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); zmiennej y jest przypisywana wartość całkowita 4 (4 jest wprowadzane przez użytkownika i konwertowane na ciąg znaków przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); wykonywana jest operacja, w wyniku której zmiennej x przypisywana jest wartość 3 (3 % 4 = 3); wykonywana jest operacja, w wyniku której zmiennej x przypisywana jest wartość 0 (3 % 11 = 0); wykonywana jest operacja, w wyniku której zmiennej y przypisywana jest wartość 1 (4 % 3 = 1); wartość przypisana do zmiennej y (1) jest wyświetlana na ekranie."
                },
                {
                    "id": "js-pe1-m2-016",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające kolejno 3 i 6?\n\n```python\nx = input()\ny = int(input())\nprint(x * y)\n```",
                    "options": [
                        "333333",
                        "18",
                        "666",
                        "36"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy następujący przykład: zmienna x otrzymuje wartość „3” (3 jest wprowadzane przez użytkownika i konwertowane na ciąg przez funkcję input()); zmienna y otrzymuje wartość 6 (6 jest wprowadzane przez użytkownika, konwertowane na ciąg przez funkcję input(), a następnie konwertowane na liczbę całkowitą przez funkcję int()); funkcja print() zwraca wynik następującego mnożenia ciągu: „3” * 6, czyli 333333"
                },
                {
                    "id": "js-pe1-m2-017",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\nz = y = x = 1\nprint(x, y, z, sep='*')\n```",
                    "options": [
                        "1*1*1",
                        "1 1 1",
                        "x*y*z",
                        "x y z"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy przykład: zmienne z, y i x są zadeklarowane i zainicjowane, a wartość 1 jest przypisywana do każdego z nich za pomocą mechanizmu przypisywania tej samej wartości do wielu zmiennych; wartości przypisane do trzech zmiennych są wyświetlane na ekranie i oddzielone symbolem * za pomocą słowa kluczowego sep."
                },
                {
                    "id": "js-pe1-m2-018",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\ny = 2 + 3 * 5.\nprint(Y)\n```",
                    "options": [
                        "fragment kodu spowoduje błąd wykonania",
                        "25.",
                        "17",
                        "17,0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Python rozróżniana wielkość liter, dlatego y i Y to dwie różne zmienne. Ponieważ program próbuje wyświetlić na ekranie wartość powiązaną ze zmienną, która nie istnieje w lokalnej przestrzeni nazw, Python nie rozpoznaje jej i zgłaszany jest wyjątek NameError."
                },
                {
                    "id": "js-pe1-m2-019",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu?\n\n```python\nx = 1 / 2 + 3 // 3 + 4 ** 2\nprint(x)\n```",
                    "options": [
                        "17,5",
                        "17",
                        "8",
                        "8,5"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Tutaj obowiązuje zasada pierwszeństwa operatorów (kolejność wykonywania operacji). Zobaczmy, co się tutaj wydarzy:najpierw zostaje obliczone wyrażenie 4 ** 2, dając wynik 16. Następnie zostaje obliczone wyrażenie 1 / 2, dając wynik 0.5. Jako trzecie zostaje obliczone wyrażenie 3 // 3, dając wynik 1. Na koniec trzy wartości są dodawane (0.5 + 1 + 16), a ich wynik (17.5) jest przypisywany do zmiennej x i wyświetlany na ekranie."
                },
                {
                    "id": "js-pe1-m2-020",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego fragmentu kodu, jeśli użytkownik wprowadzi dwa wiersze zawierające odpowiednio 2 i 4?\n\n```python\nx = int(input())\ny = int(input())\nprint(x + y)\n```",
                    "options": [
                        "6",
                        "16",
                        "2",
                        "4"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wartości 2 i 4 są wprowadzane przez użytkownika, konwertowane z ciągów na liczby całkowite i przypisywane odpowiednio do zmiennych x i y. Funkcja print() wyświetla na ekranie wynik dodawania liczb całkowitych (2 + 4)."
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
                    "explanation": "Poprawny sposób deklaracji funkcji w Pythonie polega na użyciu zastrzeżonego słowa kluczowego def , po którym następuje nazwa funkcji, nawiasy () oraz dwukropek :. Ponieważ nie ma parametrów, nawiasy są puste."
                },
                {
                    "id": "js-pe1-m4-002",
                    "type": "multiple",
                    "question": "Funkcja zdefiniowana w następujący sposób: (Wybierz dwie odpowiedzi)\n\n```python\ndef function(x=0):\n    return x\n```",
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
                    "explanation": "Funkcja ma z góry określoną wartość parametru x, dlatego może być wywoływana zarówno z jego podaniem, jak i bez niego. Jednak więcej niż jeden argument wygeneruje błąd czasu wykonania (runtime error)"
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
                    "explanation": "Funkcje wbudowane są zintegrowane z Pythonem. Po zainstalowaniu Pythona są dostępne i mogą być używane."
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
                    "explanation": "Krotki są obiektami niemodyfikowalnymi, dlatego mogą być indeksowane i dzielone (slicing) w sposób analogiczny do list. Jednak w trakcie działania nie można ich rozszerzać ani modyfikować. TO NIE są listy."
                },
                {
                    "id": "js-pe1-m4-005",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef f(x):\n    if x == 0:\n        return 0\n    return x + f(x - 1)\n\nprint(f(3))\n```",
                    "options": [
                        "6",
                        "3",
                        "1",
                        "kod jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-006",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(x):\n    x += 1\n    return x\n\nx = 2\nx = fun(x + 1)\nprint(x)\n```",
                    "options": [
                        "4",
                        "5",
                        "3",
                        "kod jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-007",
                    "type": "single",
                    "question": "Jaki kod należy wstawić zamiast komentarza, aby uzyskać oczekiwane dane wyjściowe?\n\n```python\ndictionary = {}\nmy_list = ['a', 'b', 'c', 'd']\nfor i in range(len(my_list) - 1):\n    dictionary[my_list[i]] = (my_list[i], )\nfor i in sorted(dictionary.keys()):\n    k = dictionary[i]\n    # Insert your code here.\n```",
                    "options": [
                        "print(k[0])",
                        "print(k['0'])",
                        "print(k)",
                        "print(k[\"0\"])"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:zostaje utworzony pusty słownik,a następnie lista o nazwie my_list z elementami ['a', 'b', 'c', 'd'],pętla for w zakresie długości listy pomniejszonej o jeden (od 0 do 3) jest inicjowana, a wartości przez które iteruje zmienna i, to a, b, c, d dla każdej iteracji, para klucz-wartość zostanie wstawiona do słownika. Kluczem jest ciąg znaków, a wartość jest jednoelementowa krotka,Powstaje w ten sposób następujący słownik: {'a': ('a',), 'b': ('b',), 'c': ('c',)}inicjowana jest kolejna pętla for, a zmienna i iteruje po posortowanych kluczach słownika,zmienna k przechowuje wartość dla każdego klucza,ponieważ jest to krotka, konieczne jest wybranie opcji print(k[0]) w celu wyświetlenia pierwszego i jedynego elementu."
                },
                {
                    "id": "js-pe1-m4-008",
                    "type": "single",
                    "question": "Następujący fragment:\n\n```python\ndef func(a, b):\n    return a ** a\n\nprint(func(2))\n```",
                    "options": [
                        "jest błędny",
                        "wyświetli w oknie konsoli wynik 4",
                        "wyświetli w oknie konsoli wynik 2",
                        "zwróci None"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Fragment kodu jest błędny, ponieważ funkcja jest wywoływana z jednym argumentem, podczas gdy potrzebne są dwa, ponieważ oba parametry nie mają wartości domyślnych."
                },
                {
                    "id": "js-pe1-m4-009",
                    "type": "single",
                    "question": "Następujący fragment:\n\n```python\ndef func_1(a):\n    return a ** a\n\ndef func_2(a):\n    return func_1(a) * func_1(a)\n\nprint(func_2(2))\n```",
                    "options": [
                        "wyświetli 16",
                        "wyświetli 4",
                        "wyświetli 2",
                        "jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Fragment kodu jest błędny, ponieważ funkcja jest wywoływana z jednym argumentem, podczas gdy potrzebne są dwa, ponieważ oba parametry nie mają wartości domyślnych."
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
                    "explanation": "Poprawny sposób definiowania parametrów z wartościami domyślnymi polega na wskazaniu nazwy zmiennej, znaku przypisania (=) oraz wartości domyślnej, np. a=0. Jeśli istnieje więcej wartości domyślnych, oddziel je przecinkami."
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
                    "explanation": "Wartość None może zostać przypisana do dowolnej zmiennej, zarówno wewnątrz, jak i na zewnątrz funkcji. Może być również używana w wyrażeniach warunkowych i pętlach. Nie można jej jednak używać w operacjach arytmetycznych."
                },
                {
                    "id": "js-pe1-m4-012",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(x):\n    if x % 2 == 0:\n        return 1\n    else:\n        return\n\nprint(fun(fun(2)) + 1)\n```",
                    "options": [
                        "Kod spowoduje błąd wykonania (Runtime error)",
                        "1",
                        "2",
                        "None"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-013",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(x):\n    global y\n    y = x * x\n    return y\n\nfun(2)\nprint(y)\n```",
                    "options": [
                        "4",
                        "2",
                        "None",
                        "Kod spowoduje błąd wykonania (Runtime error)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-014",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef any():\n    print(var + 1, end='')\n\nvar = 1\nany()\nprint(var)\n```",
                    "options": [
                        "21",
                        "12",
                        "11",
                        "22"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-015",
                    "type": "single",
                    "question": "Zakładając, że my_tuple jest poprawnie utworzoną krotką, fakt, że krotki są niemutowalne oznacza, że poniższa instrukcja:\n\n```python\nmy_tuple[1] = my_tuple[1] + my_tuple[0]\n```",
                    "options": [
                        "jest niedozwolona",
                        "może zostać wykonana wtedy i tylko wtedy gdy krotka przechowuje przynajmniej dwa elementy",
                        "jest w pełni poprawna",
                        "może być niedozwolona, jeśli krotka zawiera zawiera łańcuchy znaków"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Operacja jest nielegalna, ponieważ obiekt 'tuple' nie obsługuje przypisania wartości do elementu."
                },
                {
                    "id": "js-pe1-m4-016",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\nmy_list =  ['Mary', 'had', 'a', 'little', 'lamb']\n\ndef my_list(my_list):\n    del my_list[3]\n    my_list[3] = 'ram'\n\nprint(my_list(my_list))\n```",
                    "options": [
                        "brak wyniku, ten fragment kodu jest błędny",
                        "['Mary', 'had', 'a', 'little', 'lamb']",
                        "['Mary', 'had', 'a', 'lamb']",
                        "['Mary', 'had', 'a', 'ram']"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-017",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(x, y, z):\n    return x + 2 * y + 3 * z\n\nprint(fun(0, z=1, y=3))\n```",
                    "options": [
                        "9",
                        "0",
                        "3",
                        "fragment kodu jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-018",
                    "type": "single",
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(inp=2, out=3):\n    return inp * out\n\nprint(fun(out=2))\n```",
                    "options": [
                        "4",
                        "6",
                        "2",
                        "fragment kodu jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Funkcja f jest wywoływana z argumentem typu całkowitego o wartości 3.funkcja rozpoczyna wykonywanie od liczby całkowitej o wartości 3 dla zmiennej x. warunek if porównuje czy 3 == 0, a ponieważ wynik tego porównania to wartość False, blok kodu nie zostaje wykonywany.funkcja dociera do instrukcji return, a wartość całkowita 3 jest przechowywana w pamięci, dodatkowo następuje rekurencyjne wywołanie funkcji f z argumentem 2. warunek if porównuje czy 2 == 0, a jako że wynikiem tego porównania jest False, blok nie zostaje wykonany,funkcja dociera do instrukcji return, a w pamięci przechowywana jest wartość całkowita 2, jak również wywołanie rekurencyjne funkcji f z argumentem całkowitym 1. warunek if dokonuje porównania i sparwdza czy 1 == 0. Jako że wynik tego porównia to False, blok kodu nie zostaje wykonany. funkcja dociera do instrukcji return, a w pamięci przechowywana jest liczba całkowita, plus cykliczne wywoływanie funkcji f z argumentem liczby całkowitej 0,warunek if porównuje czy 0 == 0, a ponieważ wynikiem jest True, wykonywana jest instrukcja return 0, a wywołanie rekurencyjne zostaje przerwaneKażde wywołanie rekurencyjne zwraca swoją wartość, a wynik dodawania jest wypisywany na konsoli, dając wynik 6."
                },
                {
                    "id": "js-pe1-m4-019",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?\n\n```python\ndictionary = {'one': 'two', 'three': 'one', 'two': 'three'}\nv = dictionary['one']\nfor k in range(len(dictionary)):\n    v = dictionary[v]\nprint(v)\n```",
                    "options": [
                        "two",
                        "three",
                        "one",
                        "('one', 'two', 'three')"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Zdefiniowany zostaje następujący słownik : dictionary = {'jeden': 'dwa', 'trzy': 'jeden', 'dwa': 'trzy'}zmienna v przechowuje wartość klucza „jeden\", czyli „dwa\", pętla for jest inicjowana w zakresie długości słownika. Iteracja zostanie wykonana 3 razy,w pierwszej iteracji zmienna v będzie przechowywać wartość klucza „dwa\", czyli „trzy\",w drugiej iteracji zmienna v będzie przechowywać wartość klucza „three\", czyli „jeden\",w trzeciej iteracji zmienna v będzie przechowywać wartość klucza „jeden\", czyli „dwa\",Pętla „for\" zostaje zakończona, a funkcja „print\" wyświetla na konsoli wartość „dwa\"."
                },
                {
                    "id": "js-pe1-m4-020",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?\n\n```python\ntup = (1, 2, 4, 8)\ntup = tup[1:-1]\ntup = tup[0]\nprint(tup)\n```",
                    "options": [
                        "2",
                        "(2)",
                        "(2, )",
                        "ten fragment kodu jest błędny"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Zdefiniowany zostaje następujący słownik : dictionary = {'jeden': 'dwa', 'trzy': 'jeden', 'dwa': 'trzy'}zmienna v przechowuje wartość klucza „jeden\", czyli „dwa\", pętla for jest inicjowana w zakresie długości słownika. Iteracja zostanie wykonana 3 razy,w pierwszej iteracji zmienna v będzie przechowywać wartość klucza „dwa\", czyli „trzy\",w drugiej iteracji zmienna v będzie przechowywać wartość klucza „three\", czyli „jeden\",w trzeciej iteracji zmienna v będzie przechowywać wartość klucza „jeden\", czyli „dwa\",Pętla „for\" zostaje zakończona, a funkcja „print\" wyświetla na konsoli wartość „dwa\"."
                },
                {
                    "id": "js-pe1-m4-021",
                    "type": "multiple",
                    "question": "Wybierz prawdziwe stwierdzenia dotyczące bloku try-except w odniesieniu do poniższego przykładu (Zaznacz dwie odpowiedzi).\n\n```python\ntry:\n    # Some code is here...\nexcept:\n    # Some code is here...\n```",
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
                    "explanation": "Jeśli kod umieszczony wewnątrz bloku try zgłosi wyjątek, następujące wiersze kodu w obrębie bloku nie zostaną wykonane, a wyjątki zdefiniowane poniżej spróbują obsłużyć wygenerowany błąd."
                },
                {
                    "id": "js-pe1-m4-022",
                    "type": "single",
                    "question": "Jaki jest wynik działania poniższego kodu?\n\n```python\ntry:\n    value = input(\"Enter a value: \")\n    print(value/value)\nexcept ValueError:\n    print(\"Bad input...\")\nexcept ZeroDivisionError:\n    print(\"Very bad input...\")\nexcept TypeError:\n    print(\"Very very bad input...\")\nexcept:\n    print(\"Booo!\")\n```",
                    "options": [
                        "Bardzo, bardzo złe dane wejściowe...",
                        "Bardzo złe dane wejściowe...",
                        "Złe dane wejściowe...",
                        "Buuuu!"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten kod:Zdefiniowany zostaje następujący słownik : dictionary = {'jeden': 'dwa', 'trzy': 'jeden', 'dwa': 'trzy'}zmienna v przechowuje wartość klucza „jeden\", czyli „dwa\", pętla for jest inicjowana w zakresie długości słownika. Iteracja zostanie wykonana 3 razy,w pierwszej iteracji zmienna v będzie przechowywać wartość klucza „dwa\", czyli „trzy\",w drugiej iteracji zmienna v będzie przechowywać wartość klucza „three\", czyli „jeden\",w trzeciej iteracji zmienna v będzie przechowywać wartość klucza „jeden\", czyli „dwa\",Pętla „for\" zostaje zakończona, a funkcja „print\" wyświetla na konsoli wartość „dwa\"."
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
                    "question": "Spójrz na poniższy fragment kodu. Jaka będzie zawartość my_numbers\n\n```python\nmy_numbers = [10, 20, 30, 40, 50]\nfor i in range(4):\n    my_numbers.insert(i, my_numbers[-1])\nprint(my_numbers)\n```",
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
                    "question": "Przeanalizuj następujący fragment kodu:\n\n```python\nalpha = [4, 8, 15, 16, 23, 42]\nbeta = alpha[:]\nbeta[2] = 99\n```",
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
                    "question": "Biorąc pod uwagę poniższy segment kodu Python:\n\n```python\ndef compute_square(x):\n    return x * x\n\ndef compute_quad(x):\n    return compute_square(x) * compute_square(None)\n\nprint(compute_quad(4))\n```",
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
                    "question": "Wynik poniższego dzielenia:\n\n```python\n1 // 2\n```",
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
                    "question": "Rozważ poniżej zdefiniowaną funkcję w Pythonie.\n\n```python\ndef raise_power(base, exponent):\n    return base ** exponent\n\nprint(raise_power(exponent=3, 2))\n```",
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
                    "question": "Jaka wartość zostanie przypisana do zmiennej x ?\n\n```python\nz = 0\ny = 10\nx = y < z and z > y or y < z and z < y\n```",
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
                        "True",
                        "continue",
                        "function"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe1-final-010",
                    "type": "single",
                    "question": "Jakie jest oczekiwany wynik działania poniższego kodu napisanego w języku Python?\n\n```python\nmy_values = [3 * i for i in range(5)]\n\ndef modify_list(values):\n    del values[values[2] // 3]\n    return values\n\nprint(modify_list(my_values))\n```",
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
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\nx = 1\ny = 2\nx, y, z = x, x, y\nz, y, z = x, y, z\nprint(x, y, z)\n```",
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
                    "question": "Jaki będzie wynik działania następującego fragmentu kodu?\n\n```python\na = 1\nb = 0\na = a ^ b\nb = a ^ b\na = a ^ b\nprint(a, b)\n```",
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
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\ndef custom_function(value):\n    if value % 3 == 0:\n        return 1\n    else:\n        return 2\n\nprint(custom_function(custom_function(4)))\n```",
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
                    "question": "Zapoznaj się z poniższym fragmentem kodu w języku Python i ustal które zdanie jest poprawne.\n\n```python\ninventory = ['apple', 'banana', 'cherry']\nbackup_inventory = inventory\ndel backup_inventory[:]\n```",
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
                    "question": "Rozważmy poniższy kod Python, gdzie dozwolone są tylko liczby całkowite jako dane wejściowe:\n\n```python\nfirst_integer = int(input(\"Enter an integer: \"))\nsecond_integer = int(input(\"Enter another integer: \"))\nfirst_integer = first_integer % second_integer\nfirst_integer = first_integer % second_integer\nsecond_integer = second_integer % first_integer\nprint(second_integer)\n```",
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
                    "question": "Zakładając, że użytkownik wprowadzi 8 w pierwszym wierszu oraz 5 w drugim wierszu, jaki jest wynik następującego kodu Python?\n\n```python\nfirst_input = input(\"Enter first number: \")\nsecond_input = input(\"Enter second number: \")\nprint(second_input + first_input)\n```",
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
                    "question": "Jaki jest wynik działania poniższego fragmentu kodu?\n\n```python\nprint(\"a\", \"b\", \"c\", sep=\"sep\")\n```",
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
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\nx = 1 // 5 + 1 / 5\nprint(x)\n```",
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
                    "question": "Jaki będzie wynik próby wykonania poniższego fragmentu kodu, jeśli sample_tuple to krotka, która została wcześniej zdefiniowana i zawiera co najmniej dwa elementy?\n\n```python\nsample_tuple[0] = 5\nprint(sample_tuple)\n```",
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
                    "question": "Jaki wynik zostanie zwrócony przez poniższy kod, jeśli użytkownik wprowadzi dwie linie danych zawierające odpowiednio 2 i 4 ?\n\n```python\nx = float(input())\ny = float(input())\nprint(y ** (1 / x))\n```",
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
                    "question": "Jaki jest oczekiwany wynik działania następującego kodu?\n\n```python\ndictionary = {'alpha': 'beta', 'gamma': 'alpha', 'beta': 'gamma'}\nvalue = dictionary['gamma']\nfor key in range(len(dictionary)):\n    value = dictionary[value]\nprint(value)\n```",
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
                    "question": "Ile elementów znajduje się w liście values ?\n\n```python\nvalues = [i for i in range(-1, -3, -1)]\n```",
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
                    "question": "Które z poniższych wywołań funkcji poprawnie wywołuje funkcję zdefiniowaną poniżej? (wybierz dwie odpowiedzi)\n\n```python\ndef custom_function(x, y, z=0):\n    # Body of the function.\n```",
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
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(x, y):\n    if x == y:\n        return x\n    else:\n        return fun(x, y-1)\n\nprint(fun(0, 3))\n```",
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
                    "question": "Ile gwiazdek ( * ) zostanie wyświetlonych w konsoli po uruchomieniu następującego kodu?\n\n```python\ni = 0\nwhile i < i + 2 :\n    i += 1\n    print(\"*\")\nelse:\n    print(\"*\")\n```",
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
                    "question": "Jaki jest wynik działania następującego fragmentu kodu?\n\n```python\nmy_tuple = (10, 20, 30, 40, 50)\nmy_tuple = my_tuple[-3:-1]\nmy_tuple = my_tuple[-1]\nprint(my_tuple)\n```",
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
                    "question": "Biorąc pod uwagę poniższy kod:\n\n```python\nmy_dict = {\"apple\": 1, \"banana\": 2, \"cherry\": 3}\n```",
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
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndct = {}\ndct['1'] = (1, 2)\ndct['2'] = (2, 1)\nfor x in dct.keys():\n    print(dct[x][1], end=\"\")\n```",
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
                    "question": "Jaki jest wynik działania następującego kodu?\n\n```python\ndef fun(inp=2, out=3):\n    return inp * out\n\nprint(fun(out=2))\n```",
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
                    "question": "Ile razy znak # zostanie wyświetlony w konsoli po uruchomieniu następującego kodu?\n\n```python\nmatrix = [[x for x in range(3)] for y in range(3)]\ncount = 0\nfor row in matrix:\n    for element in row:\n        if element % 2 != 0:\n            count += 1\nprint(count)\n```",
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
                    "question": "Jaki jest wynik następującego kodu, jeśli użytkownik wprowadzi 0 ?\n\n```python\ntry:\n    value = input(\"Enter a value: \")\n    print(int(value)/len(value))\nexcept ValueError:\n    print(\"Bad input...\")\nexcept ZeroDivisionError:\n    print(\"Very bad input...\")\nexcept TypeError:\n    print(\"Very very bad input...\")\nexcept:\n    print(\"Booo!\")\n```",
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
                    "question": "Jakie jest oczekiwane zachowanie poniższego programu w języku Python?\n\n```python\ntry:\n    print(10 / 0)\n    break\nexcept ZeroDivisionError::\n    print(\"Zero division error occurred...\")\nexcept (ValueError, TypeError):\n    print(\"Value or type error occurred..\")\nexcept:\n    print(\"Unknown error occurred...\")\n```",
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
                    "question": "Jakie jest oczekiwane zachowanie tego programu?\n\n```python\nfoo = (1, 2, 3)\nfoo.index(0)\n```",
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
                    "question": "Który z poniższych fragmentów kodu pokazuje prawidłowy sposób obsługi wielu wyjątków w jednej klauzuli except ?\n\n```python\n# A:\nexcept (TypeError, ValueError, ZeroDivisionError):\n    # Some code.\n# B:\nexcept TypeError, ValueError, ZeroDivisionError:\n    # Some code.\n# C:\nexcept: (TypeError, ValueError, ZeroDivisionError)\n    # Some code.\n# D:\nexcept: TypeError, ValueError, ZeroDivisionError\n    # Some code.\n# E:\nexcept (TypeError, ValueError, ZeroDivisionError)\n    # Some code.\n# F:\nexcept TypeError, ValueError, ZeroDivisionError\n    # Some code.\n```",
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
                    "question": "Co się stanie, gdy spróbujesz uruchomić następujący kod?\n\n```python\nprint(3 + \"5\")\n```",
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
                    "question": "Wiedząc, że funkcja o nazwie fun() znajduje się w module o nazwie mod, wybierz właściwy sposób jej zaimportowania.",
                    "options": [
                        "importuj zabawę z mod",
                        "importuj zabawę",
                        "z mod import zabawy",
                        "z zabawnego modu importu"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Pamiętaj, że aby zaimportować określone funkcje z modułu, używane jest słowo kluczowe from, po którym następuje nazwa modułu. Następnie po słowie kluczowym import podaj nazwy funkcji, oddzielając je przecinkami."
                },
                {
                    "id": "js-pe2-m1-002",
                    "type": "single",
                    "question": "Wiedząc, że funkcja o nazwie fun() znajduje się w module o nazwie mod i została zaimportowana przy użyciu następującej linii: \n zaimportuj mod\n Wybierz sposób, w jaki można go wywołać w kodzie.",
                    "options": [
                        "fun()",
                        "mod‑>fun()",
                        "mod.fun()",
                        "mod::fun()"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Jeśli importowany jest cały moduł, wywołanie funkcji musi mieć następującą składnię nazwa_modułu.nazwa_funkcji()."
                },
                {
                    "id": "js-pe2-m1-003",
                    "type": "single",
                    "question": "Funkcja zwracająca listę wszystkich obiektów dostępnych w module nazywa się:",
                    "options": [
                        "dir()",
                        "listmodule()",
                        "entities()",
                        "content()"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja dir() zwraca wszystkie właściwości i metody określonego obiektu, łącznie z właściwościami wbudowanymi."
                },
                {
                    "id": "js-pe2-m1-004",
                    "type": "single",
                    "question": "Plik pyc zawiera:",
                    "options": [
                        "skompilowany kod Pythona",
                        "interpreter Pythona",
                        "kompilator Pythona",
                        "Kod źródłowy Pythona"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że pliki pyc są tworzone przez interpreter Pythona przy użyciu plików py. Zawierają skompilowany kod bajtowy kodu źródłowego."
                },
                {
                    "id": "js-pe2-m1-005",
                    "type": "single",
                    "question": "Po zaimportowaniu modułu jego zawartość:",
                    "options": [
                        "może zostać wykonany (jawnie)",
                        "są ignorowane",
                        "są wykonywane raz (domyślnie)",
                        "są wykonywane tyle razy, ile są importowane"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Kiedy importowany jest moduł w Pythonie, cały plik jest wykonywany jednokrotnie, niejawnie, aby mieć pewność, że w module nie ma żadnych błędów."
                },
                {
                    "id": "js-pe2-m1-006",
                    "type": "single",
                    "question": "Predefiniowana zmienna Pythona, która przechowuje bieżącą nazwę modułu, nazywa się:",
                    "options": [
                        "__mod__",
                        "__modname__",
                        "__module__",
                        "__name__"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Zmienna __name__ (dwa podkreślenia przed i po) jest specjalną zmienną Pythona. Po zaimportowaniu modułu będzie on zawierał nazwę pliku modułu."
                },
                {
                    "id": "js-pe2-m1-007",
                    "type": "single",
                    "question": "Poniższe oświadczenie: \n z a.b import c \n powoduje import:",
                    "options": [
                        "jednostka b z modułu a z pakietu c",
                        "jednostka a z modułu b z pakietu c",
                        "jednostka c z modułu b z pakietu a",
                        "jednostka c z modułu a z pakietu b"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Używając notacji z a.b import c, c identyfikuje importowaną jednostkę lub funkcję, b identyfikuje moduł (plik źródłowy) i pakiet (folder)."
                },
                {
                    "id": "js-pe2-m1-008",
                    "type": "single",
                    "question": "Jaka jest oczekiwana wartość przypisana do zmiennej wynikowej po wykonaniu poniższego kodu?\n\n```python\nimport math\nresult = math.e != math.pow(2, 4)\nprint(int(result))\n```",
                    "options": [
                        "0",
                        "1",
                        "True",
                        "False"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Został zaimportowany moduł matematyczny. Zmienna wynikowa będzie zawierać wynik logiczny != (operacja nie równa). Wartość matematyczna jest stałą równą 2,718281828459045. Wynikiem math.pow(2, 4) jest 2 do potęgi 4, czyli 16,0. Wynikiem jest liczba zmiennoprzecinkowa. Ponieważ 2,718281828459045 NIE jest równe 16,0, odpowiedź brzmi Prawda. Korzystając z funkcji print, w konsoli wyświetlana jest odpowiedź przeliczona na wartość całkowitą, czyli 1."
                },
                {
                    "id": "js-pe2-m1-009",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nfrom random import randint\nfor i in range(2):\n   print(randint(1, 2), end='')\n```",
                    "options": [
                        "11 , 12 , 21 , or 22",
                        "12",
                        "Istnieją miliony możliwych kombinacji i nie można przewidzieć dokładnego wyniku.",
                        "12 , or 21"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Metoda randint jest importowana z modułu random. Zwraca liczbę całkowitą wybraną z określonego zakresu. Pętla dla i w zakresie (2) jest inicjowana i wykona dwukrotnie iterację. Wywołanie print(randint(1, 2), end='') wyświetli w konsoli 1 lub 2 i pozostanie w tym samym wierszu ze względu na argument end. Wywołanie print(randint(1, 2), end='') zostanie wykonane ponownie, ponieważ znajduje się w pętli i wyświetli w konsoli 1 lub 2. Pętla zostaje zamknięta. Możliwe wyjścia to 11, 12, 21 i 22."
                },
                {
                    "id": "js-pe2-m1-010",
                    "type": "multiple",
                    "question": "Wybierz zdania prawdziwe. (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Funkcja procesora z modułu platformy zwraca liczbę całkowitą określającą liczbę procesów aktualnie uruchomionych w Twoim systemie operacyjnym.",
                        "Funkcja systemowa z modułu platformy zwraca ciąg znaków zawierający nazwę systemu operacyjnego.",
                        "Funkcja wersji z modułu platformy zwraca ciąg znaków z wersją Pythona.",
                        "Funkcja wersji z modułu platformy zwraca ciąg znaków z wersją systemu operacyjnego."
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Moduł platformy odzyskuje informacje o systemie operacyjnym z Twojego systemu. Funkcja wersji zwraca ciąg znaków z wersją systemu operacyjnego, a funkcja systemowa zwraca ciąg znaków z nazwą systemu operacyjnego."
                },
                {
                    "id": "js-pe2-m1-011",
                    "type": "single",
                    "question": "Podczas pierwszego importu modułu Python instaluje pliki pyc w katalogu o nazwie:",
                    "options": [
                        "Mymodules",
                        "Hashbang",
                        "__init__",
                        "__pycache__"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Pamiętaj, że __pycache__ to katalog zawierający pliki pamięci podręcznej w kodzie bajtowym (.pyc), które są automatycznie generowane przez Python."
                },
                {
                    "id": "js-pe2-m1-012",
                    "type": "single",
                    "question": "Dwuznak zapisany jako #! jest przyzwyczajony do:",
                    "options": [
                        "powiedzieć systemowi operacyjnemu Unix lub podobnemu do Unix, jak wykonać zawartość pliku Python",
                        "utwórz dokument",
                        "powiedzieć systemowi operacyjnemu MS Windows, jak wykonać zawartość pliku Python",
                        "ustawić konkretną jednostkę modułu jako prywatną"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "#! pomaga określić typ programu, który należy wywołać w celu uruchomienia całego pliku skryptu w systemach typu Unix. Jest zawsze używany w pierwszej linii dowolnego pliku."
                },
                {
                    "id": "js-pe2-m1-013",
                    "type": "single",
                    "question": "Listę zależności pakietów można uzyskać z pip za pomocą polecenia o nazwie:",
                    "options": [
                        "show",
                        "dir",
                        "deps",
                        "list"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Polecenie show wyświetla informacje o metadanych pakietu, takie jak wersja, opis, autor, informacje o licencji, podsumowanie i zależności."
                },
                {
                    "id": "js-pe2-m1-014",
                    "type": "single",
                    "question": "Polecenie pip list wyświetla listę:",
                    "options": [
                        "lokalnie zainstalowane pakiety",
                        "nieaktualne pakiety lokalne",
                        "wszystkie pakiety dostępne w PyPI",
                        "dostępne polecenia pip"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że polecenie pip list zwraca listę pakietów zainstalowanych w bieżącym środowisku lokalnym."
                },
                {
                    "id": "js-pe2-m1-015",
                    "type": "multiple",
                    "question": "Jaka jest prawda w przypadku polecenia wyszukiwania pip? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Do pracy potrzebne jest działające połączenie internetowe.",
                        "Wszystkie jego wyszukiwania ograniczają się do pakietów zainstalowanych lokalnie.",
                        "Przeszukuje tylko nazwy pakietów.",
                        "Przeszukuje wszystkie pakiety PyPI."
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": "Pamiętaj, że polecenie pip search służy do przeszukiwania indeksu i identyfikowania pakietów pasujących do wyszukiwanych haseł we wszystkich pakietach PyPI. Dlatego do działania wymagane jest połączenie z Internetem."
                },
                {
                    "id": "js-pe2-m1-016",
                    "type": "multiple",
                    "question": "Jaka jest prawda w przypadku polecenia pip install? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Umożliwia użytkownikowi zainstalowanie określonej wersji pakietu.",
                        "Instaluje pakiet na użytkownika tylko wtedy, gdy określono opcję --user.",
                        "Instaluje pakiet w całym systemie tylko wtedy, gdy określono opcję --system.",
                        "Zawsze instaluje najnowszą wersję pakietu i nie można jej zmienić."
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Pamiętaj, że aby zainstalować konkretną wersję pakietu Pythona, możesz użyć pip install nazwa_pakietu==wersja_pakietu. Opcja --user zmienia zakres instalacji na katalog domowy użytkownika, a nie na domyślną instalację ogólnosystemową."
                },
                {
                    "id": "js-pe2-m1-017",
                    "type": "single",
                    "question": "Jaka jest prawda o aktualizowaniu już zainstalowanych pakietów Pythona?",
                    "options": [
                        "Jest to proces automatyczny, który nie wymaga żadnej uwagi użytkownika.",
                        "Można to zrobić, instalując ponownie pakiet za pomocą polecenia reinstall.",
                        "Można to zrobić jedynie poprzez odinstalowanie i ponowne zainstalowanie pakietów.",
                        "Wykonuje się to za pomocą polecenia install z opcją -U."
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": "Pamiętaj, że opcja -U, --upgrade aktualizuje wszystkie zainstalowane pakiety do najnowszej dostępnej wersji."
                },
                {
                    "id": "js-pe2-m1-018",
                    "type": "single",
                    "question": "Którego polecenia możesz użyć pip, aby usunąć zainstalowany pakiet?",
                    "options": [
                        "pip uninstall package",
                        "pip remove package",
                        "pip install --uninstall package",
                        "pip --uninstall package"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że opcja usuwa zainstalowany pakiet ze środowiska."
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
                    "question": "Wprowadzenie bloku try: oznacza, że:",
                    "options": [
                        "niektóre instrukcje z tego bloku mogą nie zostać wykonane",
                        "wszystkie instrukcje z tego bloku zostaną wykonane",
                        "żadna z instrukcji z tego bloku nie zostanie wykonana",
                        "blok zostanie pominięty"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że instrukcje wewnątrz bloku try są wykonywane sekwencyjnie. Jeśli instrukcja generuje wyjątek, wykonanie przechodzi do instrukcji z wyjątkiem. Dlatego pozostałe instrukcje w bloku try nie są wykonywane."
                },
                {
                    "id": "js-pe2-m2-002",
                    "type": "single",
                    "question": "Nienazwany blok z wyjątkiem:",
                    "options": [
                        "musi być ostatni",
                        "można umieścić w dowolnym miejscu",
                        "musi być pierwszy",
                        "nie można użyć, jeśli użyto dowolnego nazwanego bloku"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wyjątki w bloku try require powinny być wymienione spośród konkretnych wyjątków od ogólnych wyjątków. Gwarantuje to, że w przypadku błędu będzie on objęty odpowiednim wyjątkiem. Nienazwany wyjątek musi być ostatnim wyjątkiem na liście, ponieważ jest to najbardziej ogólny wyjątek."
                },
                {
                    "id": "js-pe2-m2-003",
                    "type": "single",
                    "question": "Najwyższy wyjątek w Pythonie nazywa się:",
                    "options": [
                        "BaseException",
                        "Exception",
                        "PythonException",
                        "TopException"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że klasa BaseException jest, jak sama nazwa wskazuje, klasą bazową dla wszystkich wbudowanych wyjątków w Pythonie."
                },
                {
                    "id": "js-pe2-m2-004",
                    "type": "single",
                    "question": "Poniższe oświadczenie:\n\n```python\nassert var == 0\n```",
                    "options": [
                        "will stop the program when var != 0",
                        "will stop the program when var == 0",
                        "jest błędne",
                        "nie ma żadnego efektu"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że słowo kluczowe Assert sprawdza, czy warunek ma wartość True. Jeżeli tak nie jest, program zgłosi błąd AssertionError."
                },
                {
                    "id": "js-pe2-m2-005",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\ntry:\n    print(\"5\"/0)\nexcept ArithmeticError:\n    print(\"arith\")\nexcept ZeroDivisionError:\n    print(\"zero\")\nexcept:\n    print(\"some\")\n```",
                    "options": [
                        "some",
                        "arith",
                        "zero",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Wykonywana jest funkcja print wewnątrz bloku try. Jeśli przyjrzysz się uważnie, „5” to ciąg znaków podzielony przez liczbę całkowitą zero. Nie jest zgłaszany żaden błąd ArithmeticError ani ZeroDivisionError. Zamiast tego zgłaszany jest wyjątek TypeError, który będzie objęty bezimiennym wyjątkiem. W konsoli zostanie wydrukowane słowo Some."
                },
                {
                    "id": "js-pe2-m2-006",
                    "type": "multiple",
                    "question": "Które z poniższych są przykładami wbudowanych konkretnych wyjątków w języku Python? (Wybierz dwie odpowiedzi)",
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
                    "explanation": "Pamiętaj, że konkretne wyjątki w Pythonie są wyjątkami wbudowanymi, które dziedziczą bezpośrednio z klasy wyjątków. IndexError i ImportError są takimi przypadkami."
                },
                {
                    "id": "js-pe2-m2-007",
                    "type": "single",
                    "question": "ASCII to:",
                    "options": [
                        "skrót od amerykańskiego standardowego kodeksu wymiany informacji",
                        "standardowa nazwa modułu Pythona",
                        "predefiniowaną nazwę zmiennej Pythona",
                        "imię postaci"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że ASCII oznacza amerykański standardowy kod wymiany informacji. Jest to 7-bitowy kod znakowy opracowany w latach 19-60 XX wieku w celu reprezentowania znaków anglojęzycznych."
                },
                {
                    "id": "js-pe2-m2-008",
                    "type": "single",
                    "question": "UTF-8 to:",
                    "options": [
                        "forma kodowania punktów kodowych Unicode",
                        "nazwa wersji Pythona",
                        "synonim bajtu",
                        "9. wersja standardu UTF"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że UTF-8 jest najpopularniejszym typem kodowania Unicode. Używa 1 bitu dla znaków angielskich, 2 bity dla znaków łacińskich i bliskowschodnich oraz 3 bity dla znaków azjatyckich."
                },
                {
                    "id": "js-pe2-m2-009",
                    "type": "single",
                    "question": "UNICODE to standard:",
                    "options": [
                        "jak ASCII, ale znacznie bardziej ekspansywny",
                        "do kodowania liczb zmiennoprzecinkowych",
                        "używane przez programistów z uniwersytetów",
                        "honorowany przez cały wszechświat"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że UNICODE to uniwersalny standard kodowania znaków. Obsługuje znaki ze wszystkich języków świata."
                },
                {
                    "id": "js-pe2-m2-010",
                    "type": "single",
                    "question": "Poniższy kod:\n\n```python\nx = '\\''\nprint(len(x))\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "20"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Zdefiniowano zmienną łańcuchową o nazwie x. Pierwszy i ostatni cudzysłów ograniczają zawartość zmiennej i nie są jej częścią. Ukośnik odwrotny jest znakiem zmiany znaczenia, który również nie jest wliczany do treści. Pojedynczy cudzysłów po ukośniku odwrotnym jest jedynym znakiem wchodzącym w skład zawartości zmiennej. Używając funkcji print, w konsoli wyświetlana jest długość zmiennej, a odpowiedzią jest 1."
                },
                {
                    "id": "js-pe2-m2-011",
                    "type": "single",
                    "question": "Poniższy kod:\n\n```python\nprint(ord('c') - ord('a'))\n```",
                    "options": [
                        "2",
                        "1",
                        "3",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Zdefiniowano zmienną łańcuchową o nazwie x. Pierwszy i ostatni cudzysłów ograniczają zawartość zmiennej i nie są jej częścią. Ukośnik odwrotny jest znakiem zmiany znaczenia, który również nie jest wliczany do treści. Pojedynczy cudzysłów po ukośniku odwrotnym jest jedynym znakiem wchodzącym w skład zawartości zmiennej. Używając funkcji print, w konsoli wyświetlana jest długość zmiennej, a odpowiedzią jest 1."
                },
                {
                    "id": "js-pe2-m2-012",
                    "type": "single",
                    "question": "Poniższy kod:\n\n```python\nprint(chr(ord('z') ‑ 2))\n```",
                    "options": [
                        "x",
                        "y",
                        "z",
                        "a"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Zdefiniowano zmienną łańcuchową o nazwie x. Pierwszy i ostatni cudzysłów ograniczają zawartość zmiennej i nie są jej częścią. Ukośnik odwrotny jest znakiem zmiany znaczenia, który również nie jest wliczany do treści. Pojedynczy cudzysłów po ukośniku odwrotnym jest jedynym znakiem wchodzącym w skład zawartości zmiennej. Używając funkcji print, w konsoli wyświetlana jest długość zmiennej, a odpowiedzią jest 1."
                },
                {
                    "id": "js-pe2-m2-013",
                    "type": "single",
                    "question": "Poniższy kod:\n\n```python\nprint(3 * 'abc' + 'xyz')\n```",
                    "options": [
                        "abcabcabcxyz",
                        "abcabcxyzxyz",
                        "abcxyzxyzxyz",
                        "xyzxyzxyzxyz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Zdefiniowano zmienną łańcuchową o nazwie x. Pierwszy i ostatni cudzysłów ograniczają zawartość zmiennej i nie są jej częścią. Ukośnik odwrotny jest znakiem zmiany znaczenia, który również nie jest wliczany do treści. Pojedynczy cudzysłów po ukośniku odwrotnym jest jedynym znakiem wchodzącym w skład zawartości zmiennej. Używając funkcji print, w konsoli wyświetlana jest długość zmiennej, a odpowiedzią jest 1."
                },
                {
                    "id": "js-pe2-m2-014",
                    "type": "single",
                    "question": "Poniższy kod:\n\n```python\nprint('Mike' > \"Mikey\")\n```",
                    "options": [
                        "False",
                        "True",
                        "0",
                        "1"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Zdefiniowano zmienną łańcuchową o nazwie x. Pierwszy i ostatni cudzysłów ograniczają zawartość zmiennej i nie są jej częścią. Ukośnik odwrotny jest znakiem zmiany znaczenia, który również nie jest wliczany do treści. Pojedynczy cudzysłów po ukośniku odwrotnym jest jedynym znakiem wchodzącym w skład zawartości zmiennej. Używając funkcji print, w konsoli wyświetlana jest długość zmiennej, a odpowiedzią jest 1."
                },
                {
                    "id": "js-pe2-m2-015",
                    "type": "single",
                    "question": "Poniższy kod:\n\n```python\nprint(float(\"1, 3\"))\n```",
                    "options": [
                        "zgłasza wyjątek ValueError",
                        "drukuje 1.3",
                        "drukuje 1,3",
                        "drukuje 13"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Zdefiniowano zmienną łańcuchową o nazwie x. Pierwszy i ostatni cudzysłów ograniczają zawartość zmiennej i nie są jej częścią. Ukośnik odwrotny jest znakiem zmiany znaczenia, który również nie jest wliczany do treści. Pojedynczy cudzysłów po ukośniku odwrotnym jest jedynym znakiem wchodzącym w skład zawartości zmiennej. Używając funkcji print, w konsoli wyświetlana jest długość zmiennej, a odpowiedzią jest 1."
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
                    "question": "Struktura danych opisana jako LIFO to w rzeczywistości:",
                    "options": [
                        "stack",
                        "heap",
                        "list",
                        "tree"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Stos to obiekt przeznaczony do przechowywania danych z wykorzystaniem modelu LIFO (ang. Last-In-First-Out), natomiast LIFO to metoda obsługi struktur danych, w której pierwszy element przetwarzany jest jako ostatni, a ostatni element przetwarzany jest jako pierwszy."
                },
                {
                    "id": "js-pe2-m3-002",
                    "type": "single",
                    "question": "Jeśli konstruktor klasy jest zadeklarowany jak poniżej, które z przypisań jest prawidłowe?\n\n```python\nclass Class:\n    def __init__(self):\n        pass\n```",
                    "options": [
                        "object = Class()",
                        "object = Class(self)",
                        "object = Class(object)",
                        "object = Class"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przypisanie object = Class() tworzy obiekt klasy Class, a metoda __init__ jest wywoływana automatycznie podczas tworzenia tego obiektu. Konstruktor __init__ ma obowiązkowy parametr self, nie ma żadnych atrybutów i nic nie robi, ponieważ wykonywana jest instrukcja zastępcza – pass. Przypisanie obiekt = Class(object) spowoduje wyjątek TypeError, ponieważ metoda __init__() powinna przyjmować tylko jeden argument pozycyjny (self), a nie dwa (self i obiekt). Przypisanie obiekt = Class(self) spowoduje wyjątek NameError, ponieważ nazwa self nie została nigdzie zdefiniowana. Przypisanie object = Class deklaruje zmienną obiektu i przypisuje do niej klasę, ale nie inicjuje obiektu klasy Class."
                },
                {
                    "id": "js-pe2-m3-003",
                    "type": "single",
                    "question": "Jeśli istnieje nadklasa o nazwie A i podklasa o nazwie B, które z przedstawionych wywołań należy umieścić zamiast komentarza?\n\n```python\nclass A:\n    def __init__(self):\n        self.a = 1\n\nclass B(A):\n    def __init__(self):\n        # Put selected line here.\n        self.b = 2\n```",
                    "options": [
                        "A.__init__(self)",
                        "A.__init__()",
                        "__init__()",
                        "A.__init__(1)"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przykład pokazuje nadklasę o nazwie A, która definiuje własny konstruktor. Klasa A jest następnie używana jako baza do utworzenia podklasy o nazwie B, która definiuje jej własnego konstruktora. Konstruktor klasy B powinien teraz wywołać konstruktor z klasy A, co można zrobić w następujący sposób: A.__init__(self)."
                },
                {
                    "id": "js-pe2-m3-004",
                    "type": "single",
                    "question": "Jaki będzie efekt uruchomienia poniższego kodu?\n\n```python\nclass A:\n    def __init__(self,v):\n        self.__a = v + 1\n\na = A(0)\nprint(a.__a)\n```",
                    "options": [
                        "Kod zgłosi wyjątek AttributeError",
                        "0",
                        "1",
                        "2"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Poniższy kod spowoduje wyjątek AttributeError, ponieważ obiekt A nie ma atrybutu __a. Zmienna __a jest zmienną instancji prywatnej i próba uzyskania dostępu do niej lub zmodyfikowania jej spoza klasy zakończy się błędem AttributeError. Modyfikacja atrybutu prywatnego __a i zmiana go na publiczny (a) spowoduje wyświetlenie następujących wyników: 1."
                },
                {
                    "id": "js-pe2-m3-005",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego kodu?\n\n```python\nclass A:\n    def __init__(self,v = 1):\n        self.v = v\n\n    def set(self,v):\n        self.v = v\n        return v\n\na = A()\nprint(a.set(a.v + 1))\n```",
                    "options": [
                        "2",
                        "1",
                        "3",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy kod: Konstruktor klasy A tworzy zmienną instancji o nazwie v równą wartości domyślnej przekazanej do parametru v konstruktora, czyli 1. Metoda set tworzy własną zmienną v i zwraca do niej przekazaną wartość. Tworzony jest obiekt a i wywoływana jest metoda set, która zwraca wartość v równą 1 + 1. Wynik 2 jest wypisywany na konsolę."
                },
                {
                    "id": "js-pe2-m3-006",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego kodu?\n\n```python\nclass A:\n    X = 0\n    def __init__(self,v = 0):\n        self.Y = v\n        A.X += v\n\na = A()\nb = A(1)\nc = A(2)\nprint(c.X)\n```",
                    "options": [
                        "3",
                        "1",
                        "2",
                        "0"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy kod: Konstruktor klasy A tworzy zmienną instancji o nazwie v równą wartości domyślnej przekazanej do parametru v konstruktora, czyli 1. Metoda set tworzy własną zmienną v i zwraca do niej przekazaną wartość. Tworzony jest obiekt a i wywoływana jest metoda set, która zwraca wartość v równą 1 + 1. Wynik 2 jest wypisywany na konsolę."
                },
                {
                    "id": "js-pe2-m3-007",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego kodu?\n\n```python\nclass A:\n    A = 1\n\nprint(hasattr(A,'A'))\n```",
                    "options": [
                        "True",
                        "False",
                        "0",
                        "1"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy kod: Konstruktor klasy A tworzy zmienną instancji o nazwie v równą wartości domyślnej przekazanej do parametru v konstruktora, czyli 1. Metoda set tworzy własną zmienną v i zwraca do niej przekazaną wartość. Tworzony jest obiekt a i wywoływana jest metoda set, która zwraca wartość v równą 1 + 1. Wynik 2 jest wypisywany na konsolę."
                },
                {
                    "id": "js-pe2-m3-008",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass A:\n     def __init__(self):\n        pass\n\na = A(1)\nprint(hasattr(a,'A'))\n```",
                    "options": [
                        "zgłosi wyjątek",
                        "1",
                        "True",
                        "False"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-009",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    def __str__(self):\n        return 'a'\n\nclass B(A):\n    def __str__(self):\n        return 'b'\n\nclass C(B):\n    pass\n\no = C()\nprint(o)\n```",
                    "options": [
                        "wydrukuje b",
                        "wydrukuje a",
                        "wydrukuje c",
                        "zgłosi wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-010",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    pass\n\nclass B(A):\n    pass\n\nclass C(B):\n    pass\n\nprint(issubclass(C,A))\n```",
                    "options": [
                        "wydrukuje Prawda",
                        "wydrukuje Fałsz",
                        "wydrukuje 1",
                        "zgłosi wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-011",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    def a(self):\n        print('a')\n\nclass B:\n    def a(self):\n        print('b')\n\nclass C(B,A):\n    def c(self):\n        self.a()\n\no = C()\no.c()\n```",
                    "options": [
                        "wydrukuje b",
                        "wydrukuje a",
                        "wydrukuje c",
                        "zgłosi wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-012",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    def __str__(self):\n        return 'a'\n\nclass B:\n    def __str__(self):\n        return 'b'\n\nclass C(A, B):\n    pass\n\no = C()\nprint(o)\n```",
                    "options": [
                        "wydrukuje a",
                        "wydrukuje b",
                        "wydrukuje c",
                        "zgłosi wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-013",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    v = 2\n\nclass B(A):\n    v = 1\n\nclass C(B):\n    pass\n\no = C()\nprint(o.v)\n```",
                    "options": [
                        "wydrukuje 1",
                        "wydrukuje 2",
                        "wydrukuje pustą linię",
                        "zgłosi wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-014",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\ndef f(x):\n    try:\n        x = x / x\n    except:\n        print(\"a\",end='')\n    else:\n        print(\"b\",end='')\n    finally:\n        print(\"c\",end='')\n\nf(1)\nf(0)\n```",
                    "options": [
                        "wydrukuje bcac",
                        "wydrukuje bcbc",
                        "wydrukuje wg",
                        "zgłosi nieobsługiwany wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-015",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\ntry:\n    raise Exception(1,2,3)\nexcept Exception as e:\n    print(len(e.args))\n```",
                    "options": [
                        "wydrukuje 3",
                        "wydrukuje 2",
                        "wydrukuje 1",
                        "zgłosi nieobsługiwany wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-016",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass Ex(Exception)\n    def __init__(self, msg):\n        Exception.__init__(self, msg + msg)\n        self.args = (msg,)\n\ntry:\n    raise Ex('ex')\nexcept Ex as e:\n    print(e)\nexcept Exception as e:\n    print(e)\n```",
                    "options": [
                        "wydrukuje np",
                        "wydrukuje exex",
                        "wydrukuje pustą linię",
                        "zgłosi nieobsługiwany wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
                },
                {
                    "id": "js-pe2-m3-017",
                    "type": "single",
                    "question": "Jaki będzie wynik wykonania poniższego kodu?\n\n```python\nclass I:\n    def __init__(self):\n        self.s = 'abc'\n        self.i = 0\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.i == len(self.s):\n            raise StopIteration\n        v = self.s[self.i]\n        self.i += 1\n        return v\n\nfor x in I():\n    print(x,end='')\n```",
                    "options": [
                        "wydrukuje abc",
                        "wypisze 0",
                        "zgłosi obsługiwany wyjątek",
                        "zgłosi nieobsługiwany wyjątek"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kod zgłosi wyjątek TypeError, ponieważ metoda __init__() przyjmuje tylko jeden argument (self), ale do instancji obiektu przekazywane są dwa argumenty pozycyjne (self i 1). Funkcja print() nie jest wykonywana."
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
                    "question": "Jakiego słowa kluczowego użyłbyś do zdefiniowania funkcji anonimowej?",
                    "options": [
                        "lambda",
                        "def",
                        "afun",
                        "yield"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że w Pythonie funkcja lambda to funkcja jednoliniowa zadeklarowana bez nazwy – innymi słowy anonimowa."
                },
                {
                    "id": "js-pe2-m4-002",
                    "type": "multiple",
                    "question": "Wybierz stwierdzenia Prawdziwe. (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Funkcja lambda może przyjąć dowolną liczbę argumentów",
                        "Funkcja lambda może obliczyć tylko jedno wyrażenie",
                        "Funkcja lambda może przyjąć maksymalnie dwa argumenty",
                        "Funkcja lambda może oceniać wiele wyrażeń"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Pamiętaj, że funkcja lambda może mieć dowolną liczbę argumentów, ale może ocenić tylko jedno wyrażenie."
                },
                {
                    "id": "js-pe2-m4-003",
                    "type": "single",
                    "question": "Spójrz na poniższy kod:\n\n```python\nmy_list = [1, 2, 3]\n# Insert line of code here.\nprint(foo)\n```",
                    "options": [
                        "foo = tuple(map(lambda x: x**x, my_list))",
                        "foo = list(map(lambda x: x**x, my_list))",
                        "foo = tuple(map(lambda x: x*x, my_list))",
                        "foo = list(map(lambda x: x*x, my_list))"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "W celu uzyskania wspomnianej krotki wykorzystywana jest funkcja map. Jako argumenty przyjmuje funkcję lambda lambda x: x**x i listę moja_lista. Wykonuje operację potęgowania x**x zdefiniowaną w funkcji lambda dla każdego z elementów listy [1, 2, 3]. Wynik jest rzutowany na krotkę i drukowany w konsoli."
                },
                {
                    "id": "js-pe2-m4-004",
                    "type": "single",
                    "question": "Spójrz na poniższy kod:\n\n```python\nmy_tuple = (0, 1, 2, 3, 4, 5, 6)\n# Insert line of code here.\nprint(foo)\n```",
                    "options": [
                        "foo = list(filter(lambda x: x-0 and x-1, my_tuple))",
                        "foo = tuple(filter(lambda x: x-0 and x-1, my_tuple))",
                        "foo = tuple(filter(lambda x: x>1, my_tuple))",
                        "foo = list(filter(lambda x: x==0 and x==1, my_tuple))"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "W celu uzyskania wspomnianej krotki wykorzystywana jest funkcja map. Jako argumenty przyjmuje funkcję lambda lambda x: x**x i listę moja_lista. Wykonuje operację potęgowania x**x zdefiniowaną w funkcji lambda dla każdego z elementów listy [1, 2, 3]. Wynik jest rzutowany na krotkę i drukowany w konsoli."
                },
                {
                    "id": "js-pe2-m4-005",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\ndef I():\n    s = 'abcdef'\n    for c in s[::2]:\n        yield c\n\nfor x in I():\n    print(x, end='')\n```",
                    "options": [
                        "Wydrukuje asa",
                        "Wydrukuje bdf",
                        "Wypisze abcdef",
                        "Wydrukuje pustą linię"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Kod zaczyna się od wykonania for x w pętli I(): Używa zmiennej x do iteracji po tym, co daje I(): i wyświetla ją w tym samym wierszu ze względu na argument end='' w funkcji print. Po wywołaniu iteratora I(): inicjuje ciąg znaków zawierający znaki s = 'abcdef'. Pętla for iteruje po znakach w ciągu s za pomocą c. Ze względu na notację [::2] pętla będzie iterować tylko co dwa znaki, dając jeden przy każdej iteracji. Innymi słowy, zaczyna się od pierwszego znaku, przechodzi do trzeciego i wreszcie do piątego. Ponieważ nie ma siódmego znaku, wykonanie dobiega końca. As znaków jest drukowany w konsoli."
                },
                {
                    "id": "js-pe2-m4-006",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\ndef fun(n):\n    s = '+'\n    for i in range(n):\n        s += s\n        yield s\n\nfor x in fun(2):\n    print(x, end='');\n```",
                    "options": [
                        "Wydrukuje ++++++",
                        "Wydrukuje +",
                        "Wydrukuje ++",
                        "Wydrukuje +++"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Kod zaczyna się od wykonania for x w pętli I(): Używa zmiennej x do iteracji po tym, co daje I(): i wyświetla ją w tym samym wierszu ze względu na argument end='' w funkcji print. Po wywołaniu iteratora I(): inicjuje ciąg znaków zawierający znaki s = 'abcdef'. Pętla for iteruje po znakach w ciągu s za pomocą c. Ze względu na notację [::2] pętla będzie iterować tylko co dwa znaki, dając jeden przy każdej iteracji. Innymi słowy, zaczyna się od pierwszego znaku, przechodzi do trzeciego i wreszcie do piątego. Ponieważ nie ma siódmego znaku, wykonanie dobiega końca. As znaków jest drukowany w konsoli."
                },
                {
                    "id": "js-pe2-m4-007",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\ndef o(p):\n    def q():\n        return '*' * p\n    return q\n\nr = o(1)\ns = o(2)\nprint(r() + s())\n```",
                    "options": [
                        "It will print ***",
                        "It will print **",
                        "Wydrukuje*",
                        "It will print ****"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeanalizujmy ten fragment kodu: Kod zaczyna się od wykonania for x w pętli I(): Używa zmiennej x do iteracji po tym, co daje I(): i wyświetla ją w tym samym wierszu ze względu na argument end='' w funkcji print. Po wywołaniu iteratora I(): inicjuje ciąg znaków zawierający znaki s = 'abcdef'. Pętla for iteruje po znakach w ciągu s za pomocą c. Ze względu na notację [::2] pętla będzie iterować tylko co dwa znaki, dając jeden przy każdej iteracji. Innymi słowy, zaczyna się od pierwszego znaku, przechodzi do trzeciego i wreszcie do piątego. Ponieważ nie ma siódmego znaku, wykonanie dobiega końca. As znaków jest drukowany w konsoli."
                },
                {
                    "id": "js-pe2-m4-008",
                    "type": "multiple",
                    "question": "Który z poniższych trybów otwartych umożliwia wykonywanie operacji odczytu? (Wybierz dwie odpowiedzi)",
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
                    "explanation": "Oto tryby otwarcia w Pythonie:r - otwiera plik do odczytu.w - otwiera plik do zapisu.a - otwiera plik do dołączenia na końcu. Tworzy nowy plik jeśli nie istnieje.t - otwiera się w trybie tekstowym.b - otwiera się w trybie binarnym.+ - otwiera plik do aktualizacji (odczytu i zapisu)."
                },
                {
                    "id": "js-pe2-m4-009",
                    "type": "single",
                    "question": "Jakie jest znaczenie wartości reprezentowanej przez errno.EEXIST?",
                    "options": [
                        "Plik istnieje",
                        "Plik nie istnieje",
                        "Zły numer pliku",
                        "Odmowa pozwolenia"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że errno.EEXIST oznacza, że ​​plik lub katalog, który chcesz utworzyć, już istnieje."
                },
                {
                    "id": "js-pe2-m4-010",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nb = bytearray(3)\nprint(b)\n```",
                    "options": [
                        "bytearray(b'\\x00\\x00\\x00')",
                        "bytearray(0, 0, 0)",
                        "bytearray(b'3')",
                        "3"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja bytearray() tworzy tablicę bajtów. Ponieważ jako argument podano 3, tablica bajtowa b będzie składać się z 3 pustych bajtów. Następnie funkcja print wysyła je do konsoli: bytearray(b'\\x00\\x00\\x00')."
                },
                {
                    "id": "js-pe2-m4-011",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nimport os\nos.mkdir('pictures')\nos.chdir('pictures')\nos.mkdir('thumbnails')\nos.chdir('thumbnails')\nos.mkdir('tmp')\nos.chdir('../')\nprint(os.getcwd())\n```",
                    "options": [
                        "Wypisuje ścieżkę do katalogu ze zdjęciami",
                        "Wypisuje ścieżkę do katalogu miniatur",
                        "Wypisuje ścieżkę do katalogu tmp",
                        "Wypisuje ścieżkę do katalogu głównego"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja bytearray() tworzy tablicę bajtów. Ponieważ jako argument podano 3, tablica bajtowa b będzie składać się z 3 pustych bajtów. Następnie funkcja print wysyła je do konsoli: bytearray(b'\\x00\\x00\\x00')."
                },
                {
                    "id": "js-pe2-m4-012",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nimport os\nos.mkdir('thumbnails')\nos.chdir('thumbnails')\nsizes = ['small', 'medium', 'large']\nfor size in sizes:\n    os.mkdir(size)\nprint(os.listdir())\n```",
                    "options": [
                        "[„duży”, „mały”, „średni”]",
                        "['.', 'duży', 'mały', 'średni']",
                        "['.', '..', 'duży', 'mały', 'średni']",
                        "[]"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja bytearray() tworzy tablicę bajtów. Ponieważ jako argument podano 3, tablica bajtowa b będzie składać się z 3 pustych bajtów. Następnie funkcja print wysyła je do konsoli: bytearray(b'\\x00\\x00\\x00')."
                },
                {
                    "id": "js-pe2-m4-013",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nfrom datetime import date\ndate_1 = date(1992, 1, 16)\ndate_2 = date(1991, 2, 5)\nprint(date_1 - date_2)\n```",
                    "options": [
                        "345 days, 0:00:00",
                        "345 dni",
                        "345",
                        "345, 0:00:00"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja bytearray() tworzy tablicę bajtów. Ponieważ jako argument podano 3, tablica bajtowa b będzie składać się z 3 pustych bajtów. Następnie funkcja print wysyła je do konsoli: bytearray(b'\\x00\\x00\\x00')."
                },
                {
                    "id": "js-pe2-m4-014",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nfrom datetime import datetime\ndatetime = datetime(2019, 11, 27, 11, 27, 22)\nprint(datetime.strftime('%y/%B/%d %H:%M:%S'))\n```",
                    "options": [
                        "19/listopad/27 11:27:22",
                        "2019/listopad/27 11:27:22",
                        "2019/11/27 11:27:22",
                        "19/11/27 11:27:22"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja bytearray() tworzy tablicę bajtów. Ponieważ jako argument podano 3, tablica bajtowa b będzie składać się z 3 pustych bajtów. Następnie funkcja print wysyła je do konsoli: bytearray(b'\\x00\\x00\\x00')."
                },
                {
                    "id": "js-pe2-m4-015",
                    "type": "single",
                    "question": "Który program wygeneruje następujący wynik:\n\n```python\nMo Tu We Th Fr Sa Su\n```",
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Żądane dane wyjściowe reprezentują dni tygodnia za pomocą tylko dwóch liter. Dlatego metoda Calendar.weekheader() musi otrzymać jako argument wartość 2."
                },
                {
                    "id": "js-pe2-m4-016",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nimport calendar\nc = calendar.Calendar()\nfor weekday in c.iterweekdays():\n    print(weekday, end=\" \")\n```",
                    "options": [
                        "0 1 2 3 4 5 6",
                        "1 2 3 4 5 6 7",
                        "Mo Tu We Czw Fr Sa Su",
                        "Su Mo Tu We Cz Fr Sa"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Pamiętaj, że funkcja bytearray() tworzy tablicę bajtów. Ponieważ jako argument podano 3, tablica bajtowa b będzie składać się z 3 pustych bajtów. Następnie funkcja print wysyła je do konsoli: bytearray(b'\\x00\\x00\\x00')."
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
                    "question": "Wiedząc, że funkcja o nazwie fun() znajduje się w module o nazwie mod i została zaimportowana przy użyciu następującej instrukcji:\n\n```python\nfrom mod import fun\n```",
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
                    "question": "Biorąc pod uwagę poniższy fragment kodu Pythona:\n\n```python\nimport random\nprint(len(dir(random)))\n```",
                    "options": [
                        "Lista atrybutów należących do modułu losowego.",
                        "Liczba atrybutów w module losowym.",
                        "TypeError, ponieważ dir nie może być używany z modułami.",
                        "Ciąg dokumentacji modułu losowego."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-003",
                    "type": "single",
                    "question": "Skompilowany kod bajtowy Pythona jest przechowywany w plikach, których nazwy kończą się na:",
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
                    "question": "Zakładając, że następujące trzy pliki: a.py , b.py i c.py znajdują się w tym samym katalogu, jaki będzie wynik działania po uruchomieniu pliku c.py?\n\n```python\n# file a.py\nprint(\"a\", end='')\n# file b.py\nimport a\nprint(\"b\", end='')\n# file c.py\nprint(\"c\", end='')\nimport a\nimport b\n```",
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
                    "question": "Jeśli następujący wiersz kodu znajduje się na końcu skryptu Pythona o nazwie kalkulator.py , jaki będzie wynik po bezpośrednim uruchomieniu tego skryptu?\n\n```python\nprint(__name__)\n```",
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
                    "question": "Rozważ następującą instrukcję importu języka Python w skrypcie:\n\n```python\nfrom data.processing.analysis.v1 import compute_metrics as cm\n```",
                    "options": [
                        "Importuje funkcję compute_metrics ze skryptu v1.py, który jest częścią podpakietu analitycznego w pakiecie przetwarzania wewnątrz pakietu danych, i zmienia jej nazwę na cm .",
                        "Importuje pakiet v1 z podmodułu analizy, który jest częścią funkcji przetwarzania wewnątrz modułu danych, i zmienia jego nazwę na compute_metrics .",
                        "Importuje moduł danych z pakietu przetwarzania, który jest częścią podpakietu analizy w pakiecie v1, i zmienia jego nazwę na cm .",
                        "Importuje cały pakiet danych i zmienia jego nazwę na compute_metrics , umożliwiając dostęp do wszystkich funkcji i klas w ramach pakietu za pomocą przedrostka cm ."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-007",
                    "type": "single",
                    "question": "Biorąc pod uwagę następujący segment kodu Pythona:\n\n```python\ntry:\n   # Code that may raise an exception\n   risky_call()\nexcept ValueError:\n   print(\"Caught ValueError\")\nexcept TypeError:\n   print(\"Caught TypeError\")\nexcept Exception:\n   print(\"Caught a different exception\")\n```",
                    "options": [
                        "Jeden lub więcej wyjątków: wykonane zostaną bloki.",
                        "Nie więcej niż jeden z wyjątkiem: blok zostanie wykonany.",
                        "Żaden z wyjątkiem: bloków nie zostanie wykonany.",
                        "Dokładnie jeden z wyjątkiem: blok zostanie wykonany."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-008",
                    "type": "single",
                    "question": "Rozważ następujący kod Pythona:\n\n```python\ntry:\n    raise Exception(\"An error occurred\")\nexcept ValueError as ve:\n    print(\"ValueError:\", str(ve))\nexcept BaseException as be:\n    print(\"BaseException:\", str(be))\nexcept:\n    print(\"Caught some other exception\")\n```",
                    "options": [
                        "ValueError: Wystąpił błąd",
                        "BaseException: Wystąpił błąd",
                        "Złapałem inny wyjątek",
                        "Brak wyjścia; nieobsługiwany wyjątek zakończy działanie programu"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-009",
                    "type": "single",
                    "question": "Przejrzyj poniższy kod Pythona:\n\n```python\ntry:\n    raise Exception(\"An error has occurred\")\nexcept Exception:\n    print(\"a\")\nexcept:\n    print(\"b\")\nexcept BaseException:\n    print(\"c\")\n```",
                    "options": [
                        "Kod wyświetli „c”",
                        "Kod wyświetli „a”",
                        "Kod wyświetli „b”",
                        "Kod spowoduje błąd składniowy"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-010",
                    "type": "single",
                    "question": "Przeanalizuj poniższą instrukcję Pythona:\n\n```python\nwith open('data.csv', 'r') as file:\n    for record in file:\n```",
                    "options": [
                        "Kod jest prawidłowy, ponieważ funkcja open w trybie „r” zwraca iterowalny obiekt pliku.",
                        "Kod może być ważny, jeśli rekord jest predefiniowany jako lista przed pętlą.",
                        "Kod jest nieprawidłowy, ponieważ funkcja open w trybie „r” nic nie zwraca.",
                        "Kod jest nieprawidłowy, ponieważ funkcja open w trybie „r” zwraca obiekt, którego nie można iterować."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-011",
                    "type": "single",
                    "question": "Sprawdź dostarczoną instrukcję asercji Pythona:\n\n```python\nassert var > 0\n```",
                    "options": [
                        "Zgłosi błąd AssertionError, jeśli var jest mniejszy lub równy 0.",
                        "Zgłosi błąd AssertionError, jeśli var jest większy niż 0.",
                        "Nic nie zrobi niezależnie od wartości var .",
                        "Wyświetli wartość var, jeśli jest większa niż 0."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-012",
                    "type": "single",
                    "question": "Biorąc pod uwagę poniższy segment kodu Pythona:\n\n```python\nx = r\"\\\"\nprint(len(x))\n```",
                    "options": [
                        "Kod wyświetli 3, ponieważ surowy ciąg znaków traktuje ukośniki odwrotne jako znaki dosłowne.",
                        "Kod wyświetli 1, ponieważ potrójny ukośnik odwrotny w surowym ciągu reprezentuje pojedynczy ukośnik odwrotny.",
                        "Kod spowoduje błąd składni z powodu sekwencji bez zmiany znaczenia na końcu nieprzetworzonego ciągu.",
                        "Kod wyświetli 4, ponieważ surowy ciąg znaków zachowuje ukośniki odwrotne, a kończący podwójny cudzysłów jest uważany za część ciągu."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-013",
                    "type": "single",
                    "question": "Biorąc pod uwagę poniższy segment kodu Pythona:\n\n```python\nx = \"\\//\nprint(len(x))\n```",
                    "options": [
                        "Kod wyświetli 4, ponieważ w ciągu znajdują się cztery znaki, a ukośnik odwrotny będzie stanowić ucieczkę przed następującym ukośnikiem.",
                        "Kod wyświetli 3, rozpoznając sekwencję dwóch ukośników odwrotnych jako pojedynczy ukośnik odwrotny i dwa ukośniki do przodu.",
                        "Kod wyświetli wartość 2, ponieważ podwójny ukośnik odwrotny reprezentuje pojedynczy ukośnik odwrotny, a podwójne ukośniki do przodu są łączone.",
                        "Kod spowoduje błąd składniowy z powodu nieprawidłowej sekwencji znaków ucieczki."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-014",
                    "type": "single",
                    "question": "Rozważ kod Pythona podany poniżej:\n\n```python\nprint(chr(ord('a') + 1))\n```",
                    "options": [
                        "Kod wyświetli „b”, ponieważ pobierze punkt kodowy Unicode „a”, doda 1 i zamieni go z powrotem na znak.",
                        "Kod wyświetli „A”, ponieważ operacja dodawania konwertuje małą literę „a” na wielką literę „A” bez zmiany jej pozycji w alfabecie.",
                        "Kod wyświetli „a”, ponieważ operacja dodawania nie wpływa na znak.",
                        "Kod spowoduje błąd składniowy, ponieważ nie można dodać liczby do wartości or() znaku."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-015",
                    "type": "single",
                    "question": "Rozważ następujący fragment kodu Pythona:\n\n```python\nprint(int(\"1.0\"))\n```",
                    "options": [
                        "Kod wyświetli 1, ponieważ konwertuje ciąg „1.0” na liczbę całkowitą.",
                        "Kod wydrukuje 1.0, ponieważ zachowuje format zmiennoprzecinkowy.",
                        "Kod spowoduje błąd wartości, ponieważ „1.0” nie jest prawidłowym literałem dla konstruktora int() bez wcześniejszej konwersji na wartość zmiennoprzecinkową.",
                        "Kod spowoduje błąd TypeError, ponieważ ciągów znaków nie można bezpośrednio przekonwertować na liczby całkowite, gdy reprezentują one liczbę zmiennoprzecinkową."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-016",
                    "type": "single",
                    "question": "Jeśli konstruktor klasy zostanie zadeklarowany w następujący sposób:\n\n```python\nclass Class:\n    def __init__(self, val=0):\n        pass\n```",
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
                    "question": "Rozważmy klasę Pythona CustomNumber i kolejne operacje wykonywane na jej instancji:\n\n```python\nclass CustomNumber:\n    def __init__(self, value=1.5):\n        self.value = value\n\n    def increment(self, increase=2):\n        self.value -= increase\n        return self.value\n\nnum_instance = CustomNumber()\nnum_alias = num_instance\nnum_alias.increment()\n\nprint(num_instance.value)\n```",
                    "options": [
                        "0.5",
                        "-0.5",
                        "3.5",
                        "Wystąpił błąd TypeError."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-018",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nclass A:\n    A = 1\n    def __init__(self):\n        self.a = 0\n\nprint(hasattr(A, 'a'))\n```",
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
                    "question": "Co wyświetli następujący kod Pythona?\n\n```python\nclass Parent:\n    pass\n\nclass Uncle(Parent):\n    pass\n\nclass Child(Uncle):\n    pass\n\nclass Cousin(Parent):\n    pass\n\nprint(issubclass(Child, Cousin), issubclass(Cousin, Uncle))\n```",
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
                    "question": "Z czym zazwyczaj kojarzy się strumień sys.stdout w Pythonie?",
                    "options": [
                        "Ekran",
                        "Klawiatura",
                        "Żadne urządzenie",
                        "Drukarka"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-021",
                    "type": "single",
                    "question": "Jaki będzie wynik uruchomienia poniższego kodu?\n\n```python\nclass A:\n    def __init__(self, v):\n        self.__a = v + 1\n\nclass B(A):\n    def __init__(self, v):\n        super().__init__(v)\n        self.__a += 1\n\nb = B(0)\nprint(b._A__a)\n```",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "Zgłoszono błąd atrybutu"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-022",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    def __init__(self):\n        pass\n\na = A(1)\nprint(hasattr(a, 'A'))\n```",
                    "options": [
                        "Kod zgłosi wyjątek",
                        "Kod wyświetli wartość True",
                        "Kod wyświetli Fałsz",
                        "Kod zostanie wydrukowany 1"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-023",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\nclass A:\n    def a(self):\n        print('a')\n\nclass B:\n    def a(self):\n        print('b')\n\nclass C(B, A):\n    def c(self):\n        self.a()\n\no = C()\no.c()\n```",
                    "options": [
                        "Kod zostanie wydrukowany b",
                        "Kod zostanie wydrukowany c",
                        "Kod wyświetli a",
                        "Kod zgłosi wyjątek"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-024",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\ntry:\n    raise Exception(1, 2, 3, (4), \"A\",)\nexcept Exception as e:\n     print(len(e.args))\n```",
                    "options": [
                        "5",
                        "4",
                        "6",
                        "Zostanie zgłoszony wyjątek"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-025",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\ndef my_fun(n):\n    s = '+'\n    for i in range(n):\n        s += s\n        yield s\n\nfor x in my_fun(2):\n    print(x, end='')\n```",
                    "options": [
                        "Kod zostanie wydrukowany ++++++",
                        "Kod zostanie wydrukowany +++",
                        "Kod wyświetli ++",
                        "Kod zostanie wydrukowany +"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-026",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik wykonania poniższego kodu?\n\n```python\nclass I:\n    def __init__(self):\n        self.s = 'abc'\n        self.i = 0\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.i == len(self.s):\n            raise StopIteration\n        v = self.s[self.i]\n        self.i += 1\n        return v\n\nfor x in I():\n    print(x, end='')\n```",
                    "options": [
                        "Kod wyświetli abc",
                        "Kod wyświetli 012",
                        "Kod wyświetli cba",
                        "Kod wyświetli 210"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-027",
                    "type": "single",
                    "question": "Jaki będzie wynik poniższego kodu?\n\n```python\ndef generate_pattern(n):\n    def create_pattern():\n        return '**' * n\n\n    return create_pattern\n\npattern1 = generate_pattern(1)\npattern2 = generate_pattern(2)\nprint(pattern1() + pattern2())\n```",
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
                    "question": "Jeśli s jest strumieniem otwartym w trybie odczytu, co zrobi następujący wiersz kodu?\n\n```python\nq = s.read(-1)\n```",
                    "options": [
                        "Odczytuje całą zawartość strumienia s .",
                        "Nie odczytuje niczego ze strumienia s .",
                        "Odczytuje jeden znak ze strumienia s .",
                        "Zgłasza błąd, ponieważ jako argument podano wartość ujemną."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-029",
                    "type": "single",
                    "question": "Zakładając, że wywołanie open() przebiegło pomyślnie, następujący fragment:\n\n```python\nfor x in open('file', 'rt'):\n    print(x)\n```",
                    "options": [
                        "czytaj plik linia po linii",
                        "czytaj plik znak po znaku",
                        "przeczytaj cały plik na raz",
                        "spowodować wyjątek"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-030",
                    "type": "single",
                    "question": "Jeśli chcesz wypełnić tablicę bajtów danymi wczytanymi ze strumienia, jakiej metody możesz użyć?",
                    "options": [
                        "Metoda readinto().",
                        "Metoda readbytes().",
                        "Metoda readfrom().",
                        "Metoda read()."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-031",
                    "type": "single",
                    "question": "Którego z poniższych poleceń użyłbyś do sprawdzenia wersji pip? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "pip --version",
                        "pip3 – wersja",
                        "pip version",
                        "pip-version"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-032",
                    "type": "single",
                    "question": "Którego z poniższych poleceń można użyć z pip, aby odinstalować określony pakiet Pythona?",
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
                    "question": "Spójrz na następujący kod:\n\n```python\nnumbers = [0, 2, 7, 9, 10]\n# Insert line of code here.\nprint(list(foo))\n```",
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
                    "question": "Spójrz na następujący kod:\n\n```python\nnumbers = [i*i for i in range(5)]\n# Insert line of code here.\nprint(foo)\n```",
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
                    "question": "Spójrz na poniższy kod:\n\n```python\nimport random\n#\n# Insert lines of code here.\n#\nprint(a, b, c)\n```",
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
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nimport os\nos.mkdir('pictures')\nos.chdir('pictures')\nprint(os.getcwd())\n```",
                    "options": [
                        "Kod wydrukuje ścieżkę do utworzonego katalogu",
                        "Kod wydrukuje nazwę utworzonego katalogu",
                        "Kod wydrukuje zawartość utworzonego katalogu",
                        "Kod wyświetli właściciela utworzonego katalogu"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-037",
                    "type": "single",
                    "question": "Jakie informacje można odczytać korzystając z funkcji uname udostępnianej przez moduł os? (Wybierz dwie odpowiedzi)",
                    "options": [
                        "Nazwa systemu operacyjnego",
                        "Identyfikator sprzętu",
                        "Ostatnia data logowania",
                        "Aktualna ścieżka"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-038",
                    "type": "single",
                    "question": "Jaki jest oczekiwany wynik poniższego kodu?\n\n```python\nfrom datetime import datetime\ndatetime_1 = datetime(2019, 11, 27, 11, 27, 22)\ndatetime_2 = datetime(2019, 11, 27, 0, 0, 0)\nprint(datetime_1 - datetime_2)\n```",
                    "options": [
                        "11:27:22",
                        "0 days, 11:27:22",
                        "11 godzin, 27 minut i 22 sekund",
                        "0 dni"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "js-pe2-final-039",
                    "type": "single",
                    "question": "Jeśli chcesz obliczyć datę przypadającą 30 dni po bieżącej dacie, którego z poniższych fragmentów kodu byś użył?",
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
                    "question": "Jaki jest oczekiwany wynik wykonania następującego kodu Pythona?\n\n```python\nimport calendar\ncalendar.setfirstweekday(calendar.FRIDAY)\nprint(calendar.weekheader(2))\n```",
                    "options": [
                        "Wydrukuje tylko nazwy pierwszych dwóch dni tygodnia zaczynającego się od piątku.",
                        "Wydrukuje tylko nazwy dni tygodnia od piątku do niedzieli.",
                        "Zgłosi błąd, ponieważ Calendar.weekheader() nie akceptuje argumentów.",
                        "Wydrukuje nazwy wszystkich dni tygodnia w krótszym formacie."
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                }
            ]
        }
    ],
    "dbVersion": 5
};
