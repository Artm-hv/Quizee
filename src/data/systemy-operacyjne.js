const systemyOperacyjneData = {
    "id": "systemy-operacyjne",
    "name": "Systemy operacyjne",
    "icon": "💿",
    "description": "Zasady działania systemów operacyjnych, zarządzanie procesami, pamięcią, systemami plików oraz bezpieczeństwo.",
    "modules": [
        {
                "id": "so-m1",
                "name": "SO: Moduł 1 — Szeregowanie i procesy",
                "questions": [
                        {
                                "id": "so-m1-001",
                                "type": "multiple",
                                "question": "Które z poniższych zdań dotyczących algorytmu szeregowania O(1) są prawdziwe?",
                                "options": [
                                        "Wymiana priorytetów zadań sprowadza się do zamiany wskaźników na tablicę aktywną i przeterminowaną.",
                                        "Priorytet każdego zadania jest ustalany wyłącznie na podstawie jego poziomu interaktywności.",
                                        "Promowane są zadania o wysokim stopniu interaktywności.",
                                        "Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesorów wyłącznie wtedy, kiedy kolejka zadań jednego z nich jest pusta.",
                                        "Kwanty czasu dla poszczególnych zadań są przeliczane dopiero wówczas, gdy ostatnie z zadań znajdujących się w tablicy priorytetów aktywnych wyczerpie swój kwant czasu."
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-002",
                                "type": "multiple",
                                "question": "Określ, które ze zdań dotyczące szeregowania procesorów w Linuksie 2.6 są prawdziwe?",
                                "options": [
                                        "Linuks realizuje wielozadaniowość wyłącznie w oparciu o kooperację",
                                        "Działanie planisty 0(1) oparte jest na schemacie kolejek ze sprzężeniem zwrotnym.",
                                        "Zadania interaktywne otrzymują od planisty 0(1) mniejszy kwant czasu niż zadanie nieinteraktywne",
                                        "Główną strukturą danych planisty CFS jest drzewo czerwono-czarne.",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego."
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-003",
                                "type": "multiple",
                                "question": "Które twierdzenie odnośnie wątków i procesów w systemie Linux są prawdziwe?",
                                "options": [
                                        "Za szeregowanie wątków odpowiada inny mechanizm jądra niż za szeregowanie procesów",
                                        "Każdy wątek jądra posada swoją odrębną przestrzeń adresową",
                                        "Makrodefinicja „current” pozwala na szybki dostęp do deskryptora bieżącego procesu.",
                                        "Proces macierzysty, którego proces potomny się zakończył przechodzi w stan TASK_ZOMBIE",
                                        "Deskryptory procesów powiązane są w listę."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-004",
                                "type": "multiple",
                                "question": "Które z poniższych zdań dotyczących algorytmu szeregowania O(1) jest prawdziwe?",
                                "options": [
                                        "Wymiana priorytetów zadań sprowadza się do zamiany wsk. na tab. aktywną i przeterminowaną.",
                                        "Priorytet każdego zadania jest ustalany wyłącznie na podst. jego poziomu interakt.",
                                        "Promowane są zadania o wysokim stopniu interakt.",
                                        "Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesów wyłącznie wtedy, gdy kolejka zadań 1 z nich jest pusta. (???)",
                                        "Kwanty czasu dla poszcz. zadań są przeliczane dopiero gdy ost. z zadań w tab… wyczerpie swój kwant."
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-005",
                                "type": "multiple",
                                "question": "Określ, które ze zdań dot. szeregowania procesów w Linuksie 2.6 są prawdziwe?",
                                "options": [
                                        "Linux realizuje wielozadaniowość wyłącznie w oparciu o kooperację",
                                        "Działanie planisty O(1) oparte jest na schemacie kolejek ze sprzężeniem zwrotnym",
                                        "Zadania interaktywne otrzymują od planisty O(1) mniejszy kwant czasu niż zadania nieinteraktywne",
                                        "Główną strukturą danych planisty jest drzewo czerwono-czarne",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego"
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-006",
                                "type": "multiple",
                                "question": "Które twierdzenia odnośnie wątków i procesów w systemie Linux są prawdziwe?",
                                "options": [
                                        "Za szeregowanie wątków odpowiada inny mechanizm jądra niż za szeregowanie procesów. (???)",
                                        "Każdy wątek jądra posiada swoją odrębną przestrzeń adresową.",
                                        "Makrodefinicja \"current\" powala na szybki dostęp do deskryptora bieżącego procesu.",
                                        "Proces macierzysty, którego proces potomny się zakończył przechodzi w stan TASK_ZOMBIE.",
                                        "Deskryptory procesów powiązane są w listę."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-007",
                                "type": "multiple",
                                "question": "Określ, które ze zadań dotyczących szeregowania procesów w Linuksie 2.6 są prawdziwe?",
                                "options": [
                                        "Linux realizuje wielozadaniowość wyłącznie w oparci  z kooperacje",
                                        "Działanie planisty O(1) oparte jest na schemacie kolejek ze sprzężeniem zwrotnym",
                                        "Zadania interaktywne otrzymują od planisty O(1) mniejszy kwant czasu niż zadania nieinteraktywne",
                                        "Główną strukturą danych planisty CFS jest drzewo czerwono- czarne",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-008",
                                "type": "multiple",
                                "question": "Które z poniższych zadań dotyczących algorytmu szeregowania O(1) są prawdziwe ?",
                                "options": [
                                        "Wymiana priorytetów zadań sprowadza się do zamiany wskaźników na tablicę aktywną i przeterminowaną",
                                        "Priorytet każdego zadania jest ustalany wyłącznie na podstawie jego poziomu interaktywności",
                                        "Promowane są zadania o wysokim stopniu interaktywności",
                                        "Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesorów wyłącznie, wtedy kiedy kolejka zadań jednych z nich jest pusta",
                                        "Kwanty czasu dla poszczególnych zadań są przeliczane dopiero wówczas, gdy ostatnie z zadań znajdujących się w tablicy priorytetów aktywnych wyczerpie swój kwant czasu"
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-009",
                                "type": "multiple",
                                "question": "Ktre z poniszych zda dotyczcych algorytmu szeregowania O(1) s prawdziwe?",
                                "options": [
                                        "Wymiana priorytetw zada sprowadza si do zamiany wskanikw na tablice aktywn i przeterminowan",
                                        "Priorytet kadego zadania jest ustalany wycznie na podstawie jego interaktywnoci",
                                        "Promowane s zadania o wysokim stopniu interaktywnoci",
                                        "Mechanizm szeregowania dokonuje zrwnowaenia obcienia procesw wycznie wtedy, kiedy kolejka zada jednego z nich jest pusta",
                                        "Kwanty czasu dla poszczeglnych zada s przeliczane dopiero wwczas, gdy ostatnie z zada znajdujcych si w tablicy priorytetw aktywnych wyczerpie swj kwant czasu."
                                ],
                                "correctAnswers": [
                                        0,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-010",
                                "type": "multiple",
                                "question": "Okrel, ktre ze zda dotyczce szeregowania procesw w linuxie 2.6 s prawdziwe",
                                "options": [
                                        "Linux realizuje wielozadaniowo w oparciu o kooperacj",
                                        "Dziaanie planisty O(1) oparte jest na schemacie kolejek ze sprzeniem zwrotnym",
                                        "Zadania  interaktywne otrzymuj od planisty O(1) mniejszy kwant czasu ni zadania nieinteraktywne",
                                        "Gwn struktura planisty CFS jest drzewo czerwono-czarne",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego"
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-011",
                                "type": "multiple",
                                "question": "Czy twierdzenia odnonie wtkw i procesw s prawdziwe?",
                                "options": [
                                        "Za szeregowanie wtkw odpowiada inny mechanizm ni za szeregowanie procesw",
                                        "Kady wtek jdra posiada odrbn przestrze adresow",
                                        "Makrodefinicja current pozwala na szybki dostp do deskryptora biecego procesu",
                                        "Proces macierzysty, ktrego proces macierzysty si zakoczy przechodzi w stan TASK_ZOMBIE"
                                ],
                                "correctAnswers": [
                                        2,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-012",
                                "type": "multiple",
                                "question": "Okrel, ktre ze zda dotyczce szeregowania procesorw w Linuksie 2.6 s prawdziwe? ;",
                                "options": [
                                        "Linuks realizuje wielozadaniowo wycznie w oparciu o kooperacj",
                                        "Dziaanie planisty 0(1) oparte jest na schemacie kolejek ze sprzeniem zwrotnym.",
                                        "Zadania interaktywne otrzymuj od planisty 0(1) mniejszy kwant czasu ni zadanie nieinteraktywne",
                                        "Gwn struktur danych planisty CFS jest drzewo czerwono-czarne.",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego."
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-013",
                                "type": "multiple",
                                "question": "Ktre twierdzenie odnonie wtkw i procesw w systemie Linux s prawdziwe?",
                                "options": [
                                        "Za szeregowanie wtkw odpowiada inny mechanizm jdra ni za szeregowanie procesw",
                                        "Kady wtek jdra posada swoj odrbn przestrze adresow      | nie   ;",
                                        "Makrodefinicja current pozwala na szybki dostp do deskryptora biecego procesu.",
                                        "Proces macierzysty, ktrego proces potomny si zakoczy przechodzi w stan TASK_ZOMBIE",
                                        "Deskryptory procesw powizane s w list."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-014",
                                "type": "multiple",
                                "question": "Ktre z poniszych zda dotyczcych algorytmu szeregowania O(1) jest prawdziwe?;",
                                "options": [
                                        "Wymiana priorytetw zada sprowadza si do zamiany wsk. na tab. aktywn i przeterminowan.",
                                        "Priorytet kadego zadania jest ustalany wycznie na podst. jego poziomu interakt.",
                                        "Promowane s zadania o wysokim stopniu interakt.",
                                        "Mechanizm szeregowania dokonuje zrwnowaenia obcienia procesw wycznie wtedy, gdy kolejka zada 1 z nich jest pusta.",
                                        "Kwanty czasu dla poszcz. zada s przeliczane dopiero gdy ost. z zada w tab wyczerpie swj kwant."
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-015",
                                "type": "multiple",
                                "question": "Okrel, ktre ze zda dot. szeregowania procesw w Linuksie 2.6 s prawdziwe?;",
                                "options": [
                                        "Linux realizuje wielozadaniowo wycznie w oparciu o kooperacj",
                                        "Dziaanie planisty O(1) oparte jest na schemacie kolejek ze sprzeniem zwrotnym",
                                        "Zadania interaktywne otrzymuj od planisty O(1) mniejszy kwant czasu ni zadania nieinteraktywne",
                                        "Gwn struktur danych planisty jest drzewo czerwono-czarne",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego"
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-016",
                                "type": "multiple",
                                "question": "Ktre twierdzenia odnonie wtkw i procesw w systemie Linux s prawdziwe?;",
                                "options": [
                                        "Za szeregowanie wtkw odpowiada inny mechanizm jdra ni za szeregowanie procesw. (???)",
                                        "Kady wtek jdra posiada swoj odrbn przestrze adresow.",
                                        "Makrodefinicja \"current\" powala na szybki dostp do deskryptora biecego procesu.",
                                        "Proces macierzysty, ktrego proces potomny si zakoczy przechodzi w stan TASK_ZOMBIE.",
                                        "Deskryptory procesw powizane s w list."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-017",
                                "type": "single",
                                "question": "Okrel, ktre informacje odnonie zarzdzania procesami w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "deskryptor procesu jest umieszczony na dnie jego stosu w jdrze systemu,",
                                        "makrodefinicja \"current\" zwraca adres deskryptora biecego procesu,",
                                        "proces w stanie TASK_UNINTERRUPTIBLE moe by ustawiony w stanie gotowoci przez dowolny sygna, ktry otrzyma,",
                                        "proces zakoczony ma stan TASK_STOPPED,",
                                        "proces, ktry jest wykonywany ma stan TASK_RUNNING."
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-018",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje o planicie O(1) s prawdziwe:",
                                "options": [
                                        "nowy kwant czasu dla procesu jest ustalany dopiero wtedy, gdy wszystkie procesy w systemie wyczerpi swoje kwanty,",
                                        "kolejka procesw gotowych zawiera wskaniki na dwie tablice priorytetw,",
                                        "kady procesor ma swoj kolejk procesw gotowych,",
                                        "priorytet zwykych procesw jest ustalany wycznie na podstawie stopnia ich interaktywnoci,",
                                        "im wyszy jest priorytet procesu, tym krtszy kwant czasu on otrzymuje."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-019",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje o planicie CFS s prawdziwe:",
                                "options": [
                                        "priorytety procesw s prawie niezmienne,",
                                        "klasa szeregowania SCHED_BATCH jest obsugiwana za pomoc algorytmu rotacyjnego,",
                                        "waga procesu jest odwrotnoci wartoci jego priorytetu,",
                                        "zegar wirtualny jest wprost implementowany w jdrze Linuksa,",
                                        "kolejka procesw gotowych jest zrealizowana w postaci drzewa czerwono-czarnego."
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-020",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi przestrzeni adresowej procesu w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "wszystkie wtki jdra korzystaj z jednego, wsplnego dla nich deskryptora pamici,",
                                        "obiekty zawierajce informacje o obszarach pamici s umieszczone jednoczenie w dwch rnych strukturach danych,",
                                        "sekcje tekstu tworzone s nie tylko dla procesw, ale rwnie dla bibliotek wspdzielonych,",
                                        "deskryptor pamici przechowuje adres startowy i kocowy obszaru argumentw wywoania programu,",
                                        "deskryptory pamici nigdy nie s wspdzielone przez procesy (wtki) uytkownika."
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-021",
                                "type": "single",
                                "question": "Plan przedsiwzicia moe obejmowac",
                                "options": [
                                        "kad i strukture zespou wytwarzajcego oprogramowanie?",
                                        "sposb opracowania oferty przetargowej?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-022",
                                "type": "multiple",
                                "question": "Dekorator/adapter",
                                "options": [
                                        "maj taki sam interfejs jak obiekt tworzony?",
                                        "dekorator . zoona?",
                                        "adapter jest uniwersalny jeeli metody klasy bazowej s nieprzesonite? ??",
                                        "Czy dekorator rozszerza funkfcje klasy bazowej?",
                                        "Czy dekorator jest wzorcem czynnociowym?",
                                        "Adapter uniwersalny czy jest realizowany przez dziedziczenie?"
                                ],
                                "correctAnswers": [
                                        2,
                                        3,
                                        5
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-023",
                                "type": "single",
                                "question": "Czy strategia minimalizacji przy zarzdzaniu zagroeniami",
                                "options": [
                                        "zapobiega wystpieniu?",
                                        "minimalizuje skutki zagroe?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-024",
                                "type": "single",
                                "question": "Czy w agregacji cakowitej",
                                "options": [
                                        "jeden obiekt zawiera si w drugim?",
                                        "jeden obiekt moe istnie bez drugiego?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-025",
                                "type": "single",
                                "question": "Czy + oznacza",
                                "options": [
                                        "private?",
                                        "public?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        }
                ]
        },
        {
                "id": "so-m2",
                "name": "SO: Moduł 2 — Zarządzanie pamięcią",
                "questions": [
                        {
                                "id": "so-m2-001",
                                "type": "multiple",
                                "question": "Które za zdań dotyczących kolejek prac są prawdziwe?",
                                "options": [
                                        "Czynności odroczone wykonywane w ramach kolejek prac są wykonywane w kontekście przerwania",
                                        "Kolejki prac zastąpiły mechanizm dolnych połówek znany jako „kolejki zadań”, który był wykorzystywany we wcześniejszych wersjach jądra Linuksa.",
                                        "Mechanizm kolejek prac pozwala na określenie czasu po upływie którego dana czynność może się rozpocząć",
                                        "Jądro systemu Loniux zawiera specjalną funkcję, której wywołanie pozwala na opróżnienie domyślnej kolejki prac",
                                        "Jeśli w jądrze tworzona jest nowa kolejka prac, to jest równocześnie dla niej tworzony nowy, odrębny wątek roboczy."
                                ],
                                "correctAnswers": [
                                        1,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-002",
                                "type": "multiple",
                                "question": "Zmienna typu „atomic_T” jest 32 bitowa. |    tak",
                                "options": [
                                        "Wszystkie architektury, które obsługuje Linux dostarczają rozkazów maszynowych realizujących operacje niepodzielne na wartościach będących liczbami całkowitymi",
                                        "Rygle pętlowe mogą być stosowane we fragmentach kodu wykonywujących się w kontekście przerwania.",
                                        "Rygle R-W stosujemy w zagadnieniach typu problem czytelników i pisarzy, gdzie faworyzowani są pisarze",
                                        "Zmienne sygnałowe są uproszczoną wersją semaforów."
                                ],
                                "correctAnswers": [
                                        1,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-003",
                                "type": "multiple",
                                "question": "Określ które twierdzenia dotyczące zarządzania czasem w Linuxie są prawdziwe?",
                                "options": [
                                        "Stała HZ dla architektury i386 wynosi 1000.",
                                        "Zawartość zegara czasu rzeczywistego jest odczytywana przez jądro co pewien określony przedział czasu",
                                        "Zmienna ijffies jest nałożona na starsze 32 bity zmiennej ijffies_64.",
                                        "Liczniki dynamiczne ze względu na zbyt małą precyzję nie mogą być wykorzystywane w zadaniach czasu rzeczywistego",
                                        "Listy liczników nie są przez system sortowane."
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-004",
                                "type": "multiple",
                                "question": "Które z zdań dotyczących kolejek prac są prawdziwe?",
                                "options": [
                                        "Czynności odroczone wyk. w ramach kolejek prac są wykonywane w kontekście przerwania",
                                        "Kolejki prac zastąpiły mechanizm dolnych połówek znany jako „kolejki zadań”, który był we wcześ. Linuxach (???)",
                                        "Mechanizm kolejek prac pozwala na określenie czasu po upływie którego dana czynność może się rozpocząć",
                                        "Jądro systemu Linux zawiera specjalną funkcję której wywołanie pozwala na opróżnienie domyślnej kolejki prac",
                                        "Jesli w jądrze tworzona jest nowa kolejka prac to jest równocześnie dla niej tworzony nowy odrębny wątek rob."
                                ],
                                "correctAnswers": [
                                        1,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-005",
                                "type": "multiple",
                                "question": "Określ które twierdzenia dot. zażądania czasem w Linkusie są prawdziwe?",
                                "options": [
                                        "Stała HZ dla architektury i386 wynosi 1000",
                                        "Zawartość zegara czasu rzeczywistego jest odczytywana przez jądro co pewien określony przedział czasu",
                                        "Zmienna jiffies jest nałożona na starsze 32 bity zmiennej „jiffies_64”",
                                        "Liczniki dynam. ze względu na zbyt mała precyzje nie mogą być wykorzystywane w zadaniach czasu rzeczyw.",
                                        "Listy liczników nie są przez system sortowane"
                                ],
                                "correctAnswers": [
                                        0,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-006",
                                "type": "multiple",
                                "question": "Które stwierdzenia są prawidłowe?",
                                "options": [
                                        "Programista jądra powinien się posługiwać zmienną printf.",
                                        "Programista powinien zwracać uwagę na rozmiar stosu jądra.",
                                        "Programista jądra powinien uzywać funkcji rekurencyjnych.",
                                        "Programista nie powinien uzywac funkcji goto.",
                                        "Architektura NUMA jest obsługiwana od wersji jądra 2.6."
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-007",
                                "type": "multiple",
                                "question": "Które ze zdań dotyczące kolejek prac są  prawidłowe",
                                "options": [
                                        "Czynności odroczone wykonywane w ramach kolejek prac są wykonywane w kontekście przerwania",
                                        "Kolejki prac zastąpiły mechanizm dolnych połówek znany jako „kolejki zadań”, który był wykorzystywany we wcześniejszych wersjach jądra Linuksa",
                                        "Mechanizm kolejek prac pozwala na określenie czasu po upływie którego dana czynność może się rozpocząć",
                                        "Jadro systemu Linuks zawiera specjalna funkcje której wywołanie pozwala na opóźnienie domyślniej kolejki prac",
                                        "Jeśli w jądrze tworzona jest nowa kolejka prac, to równocześnie dla niej tworzony nowy odrębny wątek roboczy"
                                ],
                                "correctAnswers": [
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-008",
                                "type": "multiple",
                                "question": "Planowanie projektu",
                                "options": [
                                        "obejmuje skad i struktur osob tworzcych program?",
                                        "obejmuje koszty projektu"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-009",
                                "type": "single",
                                "question": "Czy wzorcem strukturalnym jest",
                                "options": [
                                        "kompozyt?",
                                        "prototyp?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-010",
                                "type": "single",
                                "question": "Czy przy testowaniu programw obiektowych",
                                "options": [
                                        "testowanie jednostkowe ogranicza si do testowania metod klasy?",
                                        "wykonuje sie testy integralnoci?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-011",
                                "type": "multiple",
                                "question": "Diagram przypadkw uycia",
                                "options": [
                                        "jest strukturalny?",
                                        "posiada aktorw?",
                                        "umoliwia zamodelowanie funkcjonalnoci systemu?"
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-012",
                                "type": "multiple",
                                "question": "Model maszyny abstrakcyjnej",
                                "options": [
                                        "to model warstwowy?",
                                        "uatwia przyrostowe tworzenie oprogramowania?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-013",
                                "type": "multiple",
                                "question": "Kontrole",
                                "options": [
                                        "Czy kontrole s metodami statycznymi v&v?",
                                        "Czy automatyczna analiza statyczna zawsze wskazuje dokadne miejsce usterki?",
                                        "Czy kontrole pozwalaj wykry wiele defektw podczas sesji?",
                                        "Czy cakowicie eliminuj konieczno przeprowadzenia testw?",
                                        "Nie pozwalaj okreli cech dynamicznych testowanego programowania?",
                                        "Czy podczas kontroli mona znale wiele bdw?"
                                ],
                                "correctAnswers": [
                                        0,
                                        2,
                                        4,
                                        5
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-014",
                                "type": "single",
                                "question": "Czy Abstract Factory",
                                "options": [
                                        "zwraca obiekty klas strukturalnie podobne?",
                                        "ukrywa tworzone typy klas przed klientem? ??"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-015",
                                "type": "single",
                                "question": "Model kaskadowy",
                                "options": [
                                        "pozwala atwo i maym nakadem pracy wprowadzi do projektu zmiany?",
                                        "jest oparty na dowiadczeniu z innych dziedzin inynierii?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-016",
                                "type": "multiple",
                                "question": "Projektowanie oglne",
                                "options": [
                                        "czy tworzy si wstpujco?",
                                        "czy pozwala przedstawi projektantom zarys systemu?",
                                        "czy dostarcza informacji o oglnej architekturze systemu?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-017",
                                "type": "single",
                                "question": "Model interaktywny",
                                "options": [
                                        "punkt widzenia zewntrzny?",
                                        "zwiazany ze zrebem programu?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-018",
                                "type": "single",
                                "question": "Efektywno",
                                "options": [
                                        "osiga si przez mao gruboziarnistych klas?",
                                        "osiga si przez duo drobnoziarnistych klas?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-019",
                                "type": "multiple",
                                "question": "Zoono cykliczna",
                                "options": [
                                        "czy jest tyle cieek ile instrukcji warunkowych?",
                                        "czy moze byc zamodelowana graficznie?",
                                        "jest rowna liczbie warunkow prostych umieszczonych w testowanym kodzie?",
                                        "pozwala okreli liczbe niezalenych sciezek wykonania?"
                                ],
                                "correctAnswers": [
                                        1,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-020",
                                "type": "single",
                                "question": "Czy testowanie wstpujce",
                                "options": [
                                        "jest typem testowania integracyjnego?",
                                        "umoliwia okrelenie projektu architektonicznego we wczesnej fazie?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-021",
                                "type": "single",
                                "question": "Narzdzia automatycznej analizy statycznej",
                                "options": [
                                        "przeprowadzaj analize przepywu sterowania w programie?",
                                        "zawsze wskazuja miejsce usterki w kodzie?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-022",
                                "type": "single",
                                "question": "Czy dekorator i proxy",
                                "options": [
                                        "maj identyczne interfejsy jak obiekt obudowywany?",
                                        "kontroluj obudowywany obiekt?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-023",
                                "type": "multiple",
                                "question": "Fasada",
                                "options": [
                                        "warstwowe ograniczenie dostpu? ??",
                                        "reprezentuje zoony system?",
                                        "ukrywa cz systemu?"
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-024",
                                "type": "single",
                                "question": "Czy punktem widzenia jest",
                                "options": [
                                        "rdo lub przeznaczenie danych?",
                                        "co na temat pomiarw"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m2-025",
                                "type": "single",
                                "question": "Czy element static na diagramie UML oznacza si przez",
                                "options": [
                                        "podkrelenie?",
                                        "pogrubienie?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        }
                ]
        },
        {
                "id": "so-m3",
                "name": "SO: Moduł 3 — Obsługa przerwań i synchronizacja",
                "questions": [
                        {
                                "id": "so-m3-001",
                                "type": "single",
                                "question": "Które ze stwierdzeń dotyczących obsługi przerwań w Linuksie 2.6 są prawdziwe?",
                                "options": [
                                        "Obsługa przerwań jest podzielona na górną połówkę i dolną połówkę.",
                                        "Procedury obsługi przerwań mogą być wykonywane dowolnie długo",
                                        "Do linii przerwania o określonym numerze może być przypisanych kilka procedur obsługi przerwań",
                                        "W procedurach obsługi przerwań można wywołać funkcje, które ulegają blokowaniu",
                                        "Procedury obsługi przerwań korzystają ze stosu jądra, który ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-002",
                                "type": "multiple",
                                "question": "Które z poniższych stwierdzeń dotyczących środków synchronizacji w jądrze Linuksa 2.6 są prawdziwe?",
                                "options": [
                                        "Wątek wykonania, który przytrzymuje semafor nie może równocześnie przetrzymywać rygla pętlowego.",
                                        "Blokady sekwencyjne pozwalają ustalić, czy operacja odczytu nie została przepleciona z operacją zapisu.",
                                        "Blokada BKL jest blokadą gruboziarnistą.",
                                        "Blokada BKL nie jest rekurencyjna",
                                        "Rygle pętlowe nie są używane w systemach jednoprocesorowych w jądrze, które nie wywłaszczają wątków."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-003",
                                "type": "multiple",
                                "question": "Poniżej umieszczono zdania dotyczące obsługi przerwań w Linuksie 2.6, które z nich są prawdziwe?",
                                "options": [
                                        "Częstotliwości pojawienia się wszystkich przerwań są wykorzystywane do inicjalizowania generatowa liczb losowych",
                                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie.",
                                        "Aby procedura obsługi przerwania mogła być wywołana, musi zostać wcześniej zarejestrowana.",
                                        "Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję „current”",
                                        "Nie jest wymagane, aby funkcje obsługi przerwań były wielobieżne."
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-004",
                                "type": "multiple",
                                "question": "Które ze zdań dotyczących synchronizacji są prawdziwe?",
                                "options": [
                                        "Niektóre operacje niepodzielne mogą być zrealizowane jako pojedyncze rozkazy procesora.",
                                        "Przeplot operacji jest przyczyną występowania problemu sekcji krytycznej.",
                                        "W systemie Linux, w przestrzeni użytkownika wywłaszczenie procesu może zajść tylko w ściśle określonym momencie jego działania",
                                        "Zadanie nigdy nie może być wywłaszczone po zakończeniu obsługi przerwania.",
                                        "Dostęp do zmiennych lokalnych wątków wykonania nie musi podlegać synchronizacji."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-005",
                                "type": "multiple",
                                "question": "Które z tw. dot. Obsługi przerwań w Linuksie 2.6 jest prawdziwe?",
                                "options": [
                                        "Obsługa przerwań podzielona na górną i dolną połówkę,",
                                        "Procedury ob. Przerwań mogą być wykonywane dowolnie długo, (???)",
                                        "Do linii przerwania o określonym numerze może być przypisanych kilka procedur obsługi przerwań  (???)",
                                        "W procedurach obsługi przerwań można wywoływać funkcje, które ulegają blokowaniu",
                                        "Procedury obsługi przerwań korzystają ze stosu jądra, który ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-006",
                                "type": "multiple",
                                "question": "Które z poniższych stwierdzeń dot. środków synchronizacji w jądrze Linuksa 2.6 są prawdziwe?",
                                "options": [
                                        "Wątek wykonania który przetrzymuje semafor nie może równocześnie przetrzymywać rygla pętlowego",
                                        "Blokady sekwencyjne pozwalają ustalić czy operacja odczytu nie została przepleciona z operacją zapisu (???)",
                                        "Blokada BLK jest blokadą gruboziarnistą.",
                                        "Blokada BLK nie jest rekurencyjna",
                                        "Rygle pętlowe nie są używane w systemach 1-procesorowych w jądrze które nie wywłaszcza wątków"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-007",
                                "type": "multiple",
                                "question": "Poniżej umieszczono zdania dotyczące obsługi przerwań przez Linuksa 2.6 – które są prawdziwe?",
                                "options": [
                                        "Częstotliwość pojawiania się wszystkich przerwań są wykorzystywane do inicjalizowania generatora licz los.",
                                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                                        "Aby procedura obsługi przerwania mogła być wywołana musi zostać wcześniej zarejestrowana",
                                        "Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję „current”",
                                        "Nie jest wymagane aby funkcje obsługi przerwań były wielobieżne"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-008",
                                "type": "multiple",
                                "question": "Które zdania dotyczące synchronizacji są prawdziwe?",
                                "options": [
                                        "Niektóre operacje niepodzielne mogą być realizowanie jako pojedyncze rozkazy procesora",
                                        "Przeplot operacji jest przyczyną występowania problemu sekcji krytycznej",
                                        "W systemie Linux, w przestrzeni użytkownika wywłaszczenie procesu może zajść tylko w ściśle określonym monecie jego działania",
                                        "Zadania Nigdy nie może być wywłaszczone po zakończeniu obsługi przerwania",
                                        "Dostęp do zmiennych lokalnych wątków wykonania nie musi podlegać synchronizacji"
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-009",
                                "type": "multiple",
                                "question": "Poniżej umieszczono zadania dotyczące obsługi przerwań przez Linuksa 2.6. Które z nich są prawdziwe?",
                                "options": [
                                        "Częstotliwości pojawiania się wszystkich przerwań są wykorzystywane do inicjalizowania generatora liczb losowych",
                                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                                        "Aby procedura obsługi przerwań mogła być wykonana, musi zostać wcześniej zarejestrowana",
                                        "Procedury obsługi przerwań mogą korzystać z wartości zwracanej przez makrodefinicję „current”",
                                        "Nie jest wymagane, aby funkcje obsługi przerwań były wielobieżne"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-010",
                                "type": "multiple",
                                "question": "Które z poniższych twierdzeń dotyczące środków synchronizacji w jądrze 2.6 są prawidłowe",
                                "options": [
                                        "Wątek wykonania, który przetrzymuje semafor nie może równocześnie przetrzymywać rygla pętli",
                                        "Blokady sekwencyjne pozwalają ustalić, czy operacja odczytu nie została przepleciona z operacją zapisu",
                                        "Blokada BKL jest blokadą gruboziarnistą",
                                        "Blokada BKL nie jest rekurencyjna",
                                        "Rygle pętlowe nie są używane w systemach jednoprocesorowych w jądrze, które nie wywłaszcza wątków"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-011",
                                "type": "multiple",
                                "question": "Które z twierdzeń dotyczących obsługi przerwań w Linuksie 2.6 są prawdziwe",
                                "options": [
                                        "Obsługo przerwań jest podzielona na górną połówkę i dolną połówkę",
                                        "Procedury obsługi przerwań mogą być wykonywane dowolnie długo",
                                        "Do linii przerwania o określonym numerze może być przypisane kilka procedur obsługi przerwań",
                                        "W procedurze obsługi przerwań można wywołać funkcje które ulegają blokowaniu",
                                        "Procedury obsługi przerwań korzystają ze stosu jądra który ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-012",
                                "type": "multiple",
                                "question": "Ktre z twierdze dotyczcych obsugi przerwa w Linuksie 2.6 S prawdziwe?",
                                "options": [
                                        "Obsuga przerwa podzielona jest na grn powk i doln powk",
                                        "Procedury obsugi przerwa mog by wykonywane dowolnie dugo",
                                        "Do linii obsugi przerwania o okrelonym numerze moe by przypisanych kilka procedur obsugi przerwa",
                                        "W procedurach obsugi przerwa mona wywoa funkcje, ktre ulegaj blokowaniu",
                                        "Procedury obsugi przerwa korzystaj ze stosu jdra, ktry ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-013",
                                "type": "multiple",
                                "question": "Ktre z poniszych stwierdze dotyczcych rodkw synchronizacji w jdrze linuxa 2.6 sprawdziwe??",
                                "options": [
                                        "Wtek wykonania, ktry przetrzymuje semafor nie moe rwnoczenie przetrzyma rygla ptlowego",
                                        "Blokady sekwencyjne pozwalaj ustali czy operacja odczytu nie zostaa przepleciona operacjzapisu",
                                        "Blokada BKL jest blokad gruboziarnist",
                                        "Blokada BKL nie jest rekurencyjna",
                                        "Rygle ptlowe nie s uywane w systemach jednoprocesorowych w jdrze, ktre nie wycza wtkw"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-014",
                                "type": "multiple",
                                "question": "Poniej umieszczono zdania dotyczce obsugi przerwa przez Linuksa 2.6. Ktre z nich s prawdziwe?",
                                "options": [
                                        "Numery przerwa mog by przydzielane niektrym urzdzeniom dynamicznie",
                                        "Aby procedura obsugi przerwania moga by wywoana, musi zosta wczeniej zarejestrowana",
                                        "Procedury obsugi przerwania mog korzysta z wartoci zwracanej przez makrodefinicj current",
                                        "Nie jest wymagane, aby procedury obsugi przerwa byy wielobiene"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-015",
                                "type": "multiple",
                                "question": "Ktre z poniszych zda dotyczcych synchronizacji s prawdziwe?? (tu mog si nie zgadza odpowiedzi)",
                                "options": [
                                        "Niektre operacje niepodzielne mog by zrealizowane jak jeden rozkaz",
                                        "Przeplot operacji jest przyczyn wystpowania problemu sekcji krytycznej",
                                        "W systemie linux, w przestrzeni uytkownika wywaszczenie procesu moe zaj tylko w cile okrelonym momencie jego dziaania",
                                        "Zadanie nigdy nie moe by wywaszczone po zakoczeniu obsugi przerwania",
                                        "Dostp do zmiennych lokalnych wtkw nie musi podlega synchronizacji"
                                ],
                                "correctAnswers": [
                                        0,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-016",
                                "type": "single",
                                "question": "Ktre ze stwierdze dotyczcych obsugi przerwa w Linuksie 2.6 s prawdziwe? ;",
                                "options": [
                                        "Obsuga przerwa jest podzielona na grn powk i doln powk.",
                                        "Procedury obsugi przerwa mog by wykonywane dowolnie dugo",
                                        "Do linii przerwania o okrelonym numerze moe by przypisanych kilka procedur obsugi przerwa",
                                        "W procedurach obsugi przerwa mona wywoa funkcje, ktre ulegaj blokowaniu",
                                        "Procedury obsugi przerwa korzystaj ze stosu jdra, ktry ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-017",
                                "type": "multiple",
                                "question": "Ktre z poniszych stwierdze dotyczcych rodkw synchronizacji w jdrze Linuksa 2.6 s prawdziwe? ;",
                                "options": [
                                        "Wtek wykonania, ktry przytrzymuje semafor nie moe rwnoczenie przetrzymywa rygla ptlowego.",
                                        "Blokady sekwencyjne pozwalaj ustali, czy operacja odczytu nie zostaa przepleciona z operacj zapisu.",
                                        "Blokada BKL jest blokad gruboziarnist.",
                                        "Blokada BKL nie jest rekurencyjna",
                                        "Rygle ptlowe nie s uywane w systemach jednoprocesorowych w jdrze, ktre nie wywaszczaj wtkw."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-018",
                                "type": "multiple",
                                "question": "Poniej umieszczono zdania dotyczce obsugi przerwa w Linuksie 2.6, ktre z nich s prawdziwe? ;",
                                "options": [
                                        "Czstotliwoci pojawienia si wszystkich przerwa s wykorzystywane do inicjalizowania generatowa liczb losowych",
                                        "Numery przerwa mog by przydzielane niektrym urzdzeniom dynamicznie.",
                                        "Aby procedura obsugi przerwania moga by wywoana, musi zosta wczeniej zarejestrowana.",
                                        "Procedury obsugi przerwania mog korzysta z wartoci zwracanej przez makrodefinicj current",
                                        "Nie jest wymagane, aby funkcje obsugi przerwa byy wielobiene."
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-019",
                                "type": "multiple",
                                "question": "Ktre ze zda dotyczcych synchronizacji s prawdziwe?",
                                "options": [
                                        "Niektre operacje niepodzielne mog by zrealizowane jako pojedyncze rozkazy procesora.",
                                        "Przeplot operacji jest przyczyn wystpowania problemu sekcji krytycznej.",
                                        "W systemie Linux, w przestrzeni uytkownika wywaszczenie procesu moe zaj tylko w cile okrelonym momencie jego dziaania",
                                        "Zadanie nigdy nie moe by wywaszczone po zakoczeniu obsugi przerwania.",
                                        "Dostp do zmiennych lokalnych wtkw wykonania nie musi podlega synchronizacji."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-020",
                                "type": "multiple",
                                "question": "Ktre z tw. dot. Obsugi przerwa w Linuksie 2.6 jest prawdziwe?;",
                                "options": [
                                        "Obsuga przerwa podzielona na grn i doln powk,",
                                        "Procedury ob. Przerwa mog by wykonywane dowolnie dugo, (???)",
                                        "Do linii przerwania o okrelonym numerze moe by przypisanych kilka procedur obsugi przerwa  (???)",
                                        "W procedurach obsugi przerwa mona wywoywa funkcje, ktre ulegaj blokowaniu",
                                        "Procedury obsugi przerwa korzystaj ze stosu jdra, ktry ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-021",
                                "type": "multiple",
                                "question": "Ktre z poniszych stwierdze dot. rodkw synchronizacji w jdrze Linuksa 2.6 s prawdziwe?;",
                                "options": [
                                        "Wtek wykonania ktry przetrzymuje semafor nie moe rwnoczenie przetrzymywa rygla ptlowego",
                                        "Blokady sekwencyjne pozwalaj ustali czy operacja odczytu nie zostaa przepleciona z operacj zapisu (???)",
                                        "Blokada BLK jest blokad gruboziarnist.",
                                        "Blokada BLK nie jest rekurencyjna",
                                        "Rygle ptlowe nie s uywane w systemach 1-procesorowych w jdrze ktre nie wywaszcza wtkw"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-022",
                                "type": "multiple",
                                "question": "Poniej umieszczono zdania dotyczce obsugi przerwa przez Linuksa 2.6  ktre s prawdziwe?;",
                                "options": [
                                        "Czstotliwo pojawiania si wszystkich przerwa s wykorzystywane do inicjalizowania generatora licz los.",
                                        "Numery przerwa mog by przydzielane niektrym urzdzeniom dynamicznie",
                                        "Aby procedura obsugi przerwania moga by wywoana musi zosta wczeniej zarejestrowana",
                                        "Procedury obsugi przerwania mog korzysta z wartoci zwracanej przez makrodefinicj current",
                                        "Nie jest wymagane aby funkcje obsugi przerwa byy wielobiene"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-023",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi przerwa w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "procedury obsugi przerwa w Linuksie s funkcjami napisanymi w jzyku C,",
                                        "procedury obsugi przerwa s wykonywane w kontekcie przerwania,",
                                        "procedury obsugi przerwa s wywoywane w sposb asynchroniczny,",
                                        "linie zgaszania przerwa (IRQ) mog by wspdzielone,",
                                        "niektre przerwania mog zasila pul entropii jdra."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-024",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce rodkw synchronizacji w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "funkcje realizujce operacje niepodzielne na liczbach cakowitych dziaaj na zmiennych typu \"int\",",
                                        "niepodzielne operacje na bitach przeprowadzane s za pomoc tych samych funkcji co niepodzielne operacje na liczbach cakowitych,",
                                        "rygle ptlowe wprowadzaj wtki oczekujce na ich zwolnienie w stan aktywnego oczekiwania,",
                                        "zwyky rygiel ptlowy moe by przetrzymywany przez kilka wtkw jednoczenie,",
                                        "rygle ptlowe nie s uywane w systemach jednoprocesorowych."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-025",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce pomiaru i synchronizacji wzgldem czasu w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "zegar czasu rzeczywistego (RTC) jest okresowo odczytywany przez jdro systemu,",
                                        "liczb taktw zegara od uruchomienia systemu przechowuje zmienna \"jiffies\",",
                                        "czstotliwo zegara systemowego jest okrelona sta \"HZ\",",
                                        "implementacja procedury obsugi przerwania zegarowego jest cakowicie niezalena od sprztu,",
                                        "warto staej \"HZ\" jest taka sama dla wszystkich platform sprztowych."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        }
                ]
        },
        {
                "id": "so-m4",
                "name": "SO: Moduł 4 — Wywołania systemowe i architektura jądra",
                "questions": [
                        {
                                "id": "so-m4-001",
                                "type": "multiple",
                                "question": "Które ze stwierdzeń dotyczących wywołań systemowych w Linuksie 2.6 są prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywołań systemowych nie jest zalecanym przez twórców jądra sposobem dodawania nowej funkcjonalności.",
                                        "Każde wywoływanie systemowe zwraca wartość typu „long”.",
                                        "Każde wywołanie systemowe musi przyjmować co najmniej jeden argument wywołania",
                                        "Wszystkie funkcje ze standardowej biblioteki języka C korzystają z wywołań systemowych",
                                        "Funkcja realizująca wywołanie systemowe musi być w całości napisana w assemblerze"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-002",
                                "type": "multiple",
                                "question": "Które stwierdzenie dotyczące wywołać systemowych w Linuksie 2,6 są prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywołań systemowych nie jest zalecanym przez twórców jądra  sposobem dodawania nowej funkcjonalności",
                                        "Każde wywołanie systemowe zwraca wartość typu „long”",
                                        "Każde wywołanie systemowe musi przyjmować co najmniej jeden argument wywołania",
                                        "Wszystkie funkcje ze standardowej biblioteki języka C korzystają z wywołań systemowych  ???",
                                        "Funkcja realizująca wywołania systemowe musi być w całości napisana w asemblerze"
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-003",
                                "type": "single",
                                "question": "Potoki czy",
                                "options": [
                                        "nadaj si do systemw interaktywnych?",
                                        "mog by stosowane tylko do systemw sekwencyjnych?"
                                ],
                                "correctAnswers": [],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-004",
                                "type": "multiple",
                                "question": "W systemach interaktywnych",
                                "options": [
                                        "najlepiej stosowac zewnetrze punkty widzenia?",
                                        "Czy stanowia naturalny sposob strukturalizacji procesu?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-005",
                                "type": "multiple",
                                "question": "Podsystem",
                                "options": [
                                        "moe dziaa niezalenie?",
                                        "moe ze soba wspdziaa?",
                                        "pojedynczy podsystem moe by traktowany jako samodzielny?",
                                        "funkcje rnych podsystemw mog dziaa wsplnie?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-006",
                                "type": "single",
                                "question": "Czy systemy z komponentami gruboziarnistymi - uyjemy",
                                "options": [
                                        "gdy chcemy postawi na szybkosc?",
                                        "gdy chcemy postawic na efektywno?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-007",
                                "type": "multiple",
                                "question": "Ktre z poniszych zda dotyczcych wywoa systemowych w Linuks 2.6 s prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywoa systemowych nie jest zalecanym sposobem przez twrcw jdra sposobem dodawania nowej funkcjonalnoci",
                                        "Kade wywoanie systemowe zwraca warto typu long",
                                        "Kade wywoanie systemowe musi zawiera, co najmniej 1 argument wywoania",
                                        "Wszystkie funkcje ze standardowej biblioteki jezyka c korzystaj z woa systemowych",
                                        "Funkcja realizujca wywoania systemowe musi by caoci napisana w asemblerze"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-008",
                                "type": "multiple",
                                "question": "Ktre ze stwierdze dotyczcych wywoa systemowych w Linuksie 2.6 s prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywoa systemowych nie jest zalecanym przez twrcw jdra sposobem dodawania nowej funkcjonalnoci. |",
                                        "Kade wywoywanie systemowe zwraca warto typu long. |    tak ;",
                                        "Kade wywoanie systemowe musi przyjmowa co najmniej jeden argument wywoania",
                                        "Wszystkie funkcje ze standardowej biblioteki jzyka C korzystaj z wywoa systemowych",
                                        "Funkcja realizujca wywoanie systemowe musi by w caoci napisana w assemblerze"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-009",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce wywoa systemowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "wszystkie funkcje z biblioteki \"libc\" korzystaj z wywoa systemowych,",
                                        "wywoania systemowe mog nie przyjmowa adnych argumentw,",
                                        "kade wywoanie systemowe zwraca warto stanowic kod jego wykonania,",
                                        "zazwyczaj wywoania systemowe implementowane s w postaci funkcji napisanych w assemblerze,",
                                        "dodanie do jdra nowego wywoania systemowego wymaga modyfikacji biblioteki \"libc\", aby umoliwi procesom uytkownika korzystanie z niego."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-010",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce wywoani systemowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "adresy wszystkich zarejestrowanych wywoa systemowych s przechowywane w specjalnej tablicy,",
                                        "kod funkcji implementujcej wywoanie systemowe moe by umieszczony w module,",
                                        "dodawanie nowych wywoa systemowych jest zalecan przez programistw jdra Linuksa praktyk,",
                                        "cz procesorw wymaga, aby argumenty do funkcji implementujcych wywoania systemowe byy przekazywane wycznie przez stos,",
                                        "funkcja implementujca wywoanie systemowe musi sprawdza poprawno przekazanych jej argumentw."
                                ],
                                "correctAnswers": [
                                        0,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-011",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce wirtualnego systemu plikw (VFS) w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "VFS napisany jest w jzyku C++,",
                                        "obiekt superbloku moe by stosowany w obsudze systemw plikw, ktre nie maj fizycznej implementacji,",
                                        "obiekty i-wzw zwizane s wycznie z fizycznymi plikami,",
                                        "niektre nieuniksowe systemy plikw nie posiadaj wszystkich informacji, ktre musz by umieszczone w obiekcie i-wza,",
                                        "obiekty wpisw katalogowych maj swoje odpowiedniki na noniku danych."
                                ],
                                "correctAnswers": [
                                        1,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-012",
                                "type": "single",
                                "question": "Chain of responsibility (acuch zobowiza)",
                                "options": [
                                        "czy gwarantuje obsuge zapytania przez co najmniej jeden obiekt?",
                                        "wymiana zmodyfikowanych danych pomidzy obiektami?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-013",
                                "type": "multiple",
                                "question": "Punktem widzenia mog by",
                                "options": [
                                        "odbiorcy usug?",
                                        "rdo lub przeznaczenie danych?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-014",
                                "type": "single",
                                "question": "Czy inynieria programowania",
                                "options": [
                                        "zajmuje si wycznie etapem od zakoczenia tworzenia specyfikacji do oddania programu klientowi?",
                                        "zajmuje si tylko dostarczeniem programu?",
                                        "oznacza tylko program wykonywalny?",
                                        "definiuje oprogramowanie jako kad posta zapisu programu komputerowego?"
                                ],
                                "correctAnswers": [
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-015",
                                "type": "multiple",
                                "question": "Diagram klas",
                                "options": [
                                        "Czy diagram klas jest strukturalny?",
                                        "Czy diagram klas przedstawia zalenoci midzy klasami?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-016",
                                "type": "multiple",
                                "question": "Sie dziaa",
                                "options": [
                                        "czy pozwala wyznaczy ciek krytyczn?",
                                        "czy jest graficznym schematem?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-017",
                                "type": "single",
                                "question": "Weryfikacj jest",
                                "options": [
                                        "czy produkt spenia specyfikacje?",
                                        "czy produkt jest budowany wg ustale klienta?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-018",
                                "type": "single",
                                "question": "Obserwator",
                                "options": [
                                        "Obserwator czy przechodzi przez obserwatorw i uaktualnia stan?",
                                        "Obserwowany dynamicznie dodaje i usuwa obserwatorw?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-019",
                                "type": "multiple",
                                "question": "Etnografia",
                                "options": [
                                        "wymagania wynikajce z rzeczywistego sposobu pracy osb a nie ze sposobu zalecanego przez formalne definicje procesw?",
                                        "wymagania, ktre wynikaja z kooperacji i swiadomowsci czynnoci innych osob?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-020",
                                "type": "single",
                                "question": "Czy model oglny",
                                "options": [
                                        "budowany metoda wstepujaca, obejmuja zasadnicze charakterystyki rzeczywistych systemw?",
                                        "dostarcza informacji o oglnej architekturze systemu?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-021",
                                "type": "single",
                                "question": "Wzorzec obserwator",
                                "options": [
                                        "obserwator wizytuje obserwatorw w celu pobrania aktualnego stanu obiektu obserwowanego?",
                                        "obserwator umoliwia obserwowanemu na dynamiczne odczanie i doczanie obserwatorow?",
                                        "czy obserwator weryfikuje obserwatorw?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-022",
                                "type": "multiple",
                                "question": "Czy Stan/Strategia",
                                "options": [
                                        "pozwalaj na przeczanie w zalenoci od kontekstu lub autorytatywne (normalne przeczanie)?",
                                        "strategia i stan umoliwiaj dokonywanie wybor algorytmu/stanu lub moe on by determinowany samoczynnie w klasie kontekstu?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-023",
                                "type": "single",
                                "question": "Metoda formalna",
                                "options": [
                                        "moe by wszdzie stosowana?",
                                        "oparta na metodach numerycznych?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-024",
                                "type": "single",
                                "question": "Klasy gruboziarniste stosuje si",
                                "options": [
                                        "w efektywnoci?",
                                        "w konserwacji?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-025",
                                "type": "multiple",
                                "question": "Singleton",
                                "options": [
                                        "czy moe by tylko jeden taki obiekt?",
                                        "czy mona utworzy tylko jedn instancje?",
                                        "Czy Singleton jest uywany gdy nie wiadomo na etapie kompilacje jakiej klasy trzeba stworzyc obiekty?",
                                        "Singleton instancja klasy globalna?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3
                                ],
                                "explanation": ""
                        }
                ]
        },
        {
                "id": "so-final",
                "name": "SO: Egzamin końcowy",
                "questions": [
                        {
                                "id": "so-final-001",
                                "type": "single",
                                "question": "Czy do sterowania scentralizowanego naley",
                                "options": [
                                        "model wywoanie-powrt?",
                                        "model sterowania z przerwaniami?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-002",
                                "type": "multiple",
                                "question": "Czy typem w tworzeniu ewolucyjnym",
                                "options": [
                                        "jest tworzenie badawcze?",
                                        "jest tworzenie z porzuceniem?"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-003",
                                "type": "single",
                                "question": "Czy include w diagramie przypadkw uycia uywa si",
                                "options": [
                                        "gdy przypadek uzycia wymaga wykorzystania take innych elementw?",
                                        "gdy jeden przypadek jest rozbudowanym innym przypadkiem?"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-004",
                                "type": "multiple",
                                "question": "Czy",
                                "options": [
                                        "metoda zwinna jest programowaniem ekstremalnym i polega na cigym testowaniu?",
                                        "porednik zdalny kolejkuje zadania?",
                                        "diagram aktywnosci zawiera aktorow?",
                                        "jeden scenariusz jest do jednego przypadku uycia?",
                                        "iterator moze przechodzi po dowolnej kolekcji danych i przeprowadza operacje (dodawanie, usuwanie,pobranie aktualnej danej)?"
                                ],
                                "correctAnswers": [
                                        0,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-005",
                                "type": "multiple",
                                "question": "Inne:",
                                "options": [
                                        "Testowanie wstpujce w kocowej fazie?",
                                        "Minimalizacja strat agodzi skutki?",
                                        "Kontroler znajduje w programach bdy pominicia i niespjnoci? TAK (IP_lec_4 s.17)",
                                        "Punkty widzenia? -> KOCOWI UYTKOWNICY?",
                                        "Porednik wirtualny przechowuje w pamici podrcznej informacje o przedmiotach?",
                                        "Porednik ochraniajcy sprawdza czy wywoujcy ma pozwolenie na dostp?",
                                        "Czy obserwator weryfikuje obserwatorw?",
                                        "obserwujcy nie moe ->"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-006",
                                "type": "single",
                                "question": "Testowanie funkcjonalne",
                                "options": [
                                        "przezroczysta skrzynka?",
                                        "wprowadza si z specyfikacji programu?"
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-007",
                                "type": "multiple",
                                "question": "Ktre ze zda dotyczcych kolejek prac s prawdziwe?",
                                "options": [
                                        "Czynnoci odroczone wykonywane w ramach kolejek prac wykonywane s w kontekcie przerwania",
                                        "Kolejki praczastpiy mechanizm dolnych powek znany, jako kolejki zada, ktry by wykorzystywany we wczeniejszych jdra Linuksa",
                                        "Mechanizm kolejek prac pozwala na okrelenie czasu po upywie, ktrego dana czynno moe si rozpocz",
                                        "Jdro systemu linux zawiera specjaln funkcje, ktra pozwala na oprnienie domylnej kolejki prac",
                                        "Jeli w jdrze tworzona jest nowa kolejka prac, to jest rwnoczenie dla niej tworzony nowy odrbny wtek roboczy"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-008",
                                "type": "multiple",
                                "question": "Pytania INNE:",
                                "options": [
                                        "Algorytm noop realizuje tylko operacje scalania.",
                                        "Alokator plastrowy przechowuje wasne struktury w pamici dedykowanej.",
                                        "Alokator plastrowy przydziela pami na deskryptor.",
                                        "Alokator plastrowy przydziela w pierwszej kolejnoci pami z plastrw pustych.",
                                        "Argumenty wywoa systemowych s przekazywane tylko przez rejestry programowe."
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-009",
                                "type": "multiple",
                                "question": "Ktre za zda dotyczcych kolejek prac s prawdziwe? ;",
                                "options": [
                                        "Czynnoci odroczone wykonywane w ramach kolejek prac s wykonywane w kontekcie przerwania",
                                        "Kolejki prac zastpiy mechanizm dolnych powek znany jako kolejki zada, ktry by  wykorzystywany we wczeniejszych wersjach jdra Linuksa.",
                                        "Mechanizm kolejek prac pozwala na okrelenie czasu po upywie ktrego dana czynno moe si  rozpocz",
                                        "Jdro systemu Loniux zawiera specjaln funkcj, ktrej wywoanie pozwala na oprnienie  domylnej kolejki prac",
                                        "Jeli w jdrze tworzona jest nowa kolejka prac, to jest rwnoczenie dla niej tworzony nowy, odrbny wtek roboczy."
                                ],
                                "correctAnswers": [
                                        1,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-010",
                                "type": "multiple",
                                "question": "Pytania:",
                                "options": [
                                        "Zmienna typu atomic_T jest 32 bitowa.",
                                        "Wszystkie architektury, ktre obsuguje Linux dostarczaj rozkazw maszynowych realizujcych operacje niepodzielne na wartociach bdcych liczbami cakowitymi",
                                        "Rygle ptlowe mog by stosowane we fragmentach kodu wykonywujcych si w kontekcie przerwania",
                                        "Rygle R-W stosujemy w zagadnieniach typu problem czytelnikw i pisarzy, gdzie faworyzowani s pisarze",
                                        "Zmienne sygnaowe s uproszczon wersj semaforw."
                                ],
                                "correctAnswers": [
                                        0,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-011",
                                "type": "multiple",
                                "question": "Okrel ktre twierdzenia dotyczce zarzdzania czasem w Linuxie s prawdziwe? ;",
                                "options": [
                                        "Staa HZ dla architektury i386 wynosi 1000.",
                                        "Zawarto zegara czasu rzeczywistego jest odczytywana przez jdro co pewien okrelony przedzia czasu",
                                        "Zmienna ijffies jest naoona na starsze 32 bity zmiennej ijffies_64.",
                                        "Liczniki dynamiczne ze wzgldu na zbyt ma precyzj nie mog by wykorzystywane w zadaniach czasu rzeczywistego",
                                        "Listy licznikw nie s przez system sortowane."
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-012",
                                "type": "multiple",
                                "question": "Ktre z zda dotyczcych kolejek prac s prawdziwe?;",
                                "options": [
                                        "Czynnoci odroczone wyk. w ramach kolejek prac s wykonywane w kontekcie przerwania",
                                        "Kolejki prac zastpiy mechanizm dolnych powek znany jako kolejki zada, ktry by we wcze. Linuxach (???)",
                                        "Mechanizm kolejek prac pozwala na okrelenie czasu po upywie ktrego dana czynno moe si rozpocz",
                                        "Jdro systemu Linux zawiera specjaln funkcj ktrej wywoanie pozwala na oprnienie domylnej kolejki prac",
                                        "Jesli w jdrze tworzona jest nowa kolejka prac to jest rwnoczenie dla niej tworzony nowy odrbny wtek rob."
                                ],
                                "correctAnswers": [
                                        1,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-013",
                                "type": "multiple",
                                "question": "Okrel ktre twierdzenia dot. zadania czasem w Linkusie s prawdziwe?;",
                                "options": [
                                        "Staa HZ dla architektury i386 wynosi 1000",
                                        "Zawarto zegara czasu rzeczywistego jest odczytywana przez jdro co pewien okrelony przedzia czasu",
                                        "Zmienna jiffies jest naoona na starsze 32 bity zmiennej jiffies_64",
                                        "Liczniki dynam. ze wzgldu na zbyt maa precyzje nie mog by wykorzystywane w zadaniach czasu rzeczyw.",
                                        "Listy licznikw nie s przez system sortowane"
                                ],
                                "correctAnswers": [
                                        0,
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-014",
                                "type": "multiple",
                                "question": "Ktre stwierdzenia s prawidowe?;",
                                "options": [
                                        "Programista jdra powinien si posugiwa zmienn printf.",
                                        "Programista powinien zwraca uwag na rozmiar stosu jdra.",
                                        "Programista jdra powinien uzywa funkcji rekurencyjnych.",
                                        "Programista nie powinien uzywac funkcji goto.",
                                        "Architektura NUMA jest obsugiwana od wersji jdra 2.6."
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-015",
                                "type": "single",
                                "question": "Okrel, ktre informacje dotyczce dolnych powek w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "cakowita liczba przerwa programowych jest ograniczona,",
                                        "przerwania programowe s wykonywane w kontekcie procesu,",
                                        "tasklety s wykonywane w kontekcie procesu,",
                                        "czynnoci z kolejek prac s wykonywane w kontekcie przerwania,",
                                        "mona precyzyjne okreli czas, po ktrym przerwanie programowe powinno by wykonane."
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-016",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce zarzdzania pamici w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "Linux obsuguje systemy wieloprocesorowe o organizacji NUMA,",
                                        "domylnie Linux przydziela pami ze strefy DMA (ZONE_DMA),",
                                        "podstawowym mechanizmem sprztowym wykorzystywanym przez Linuksa do obsugi pamici jest segmentacja,",
                                        "nie we wszystkich platformach sprztowych musi wystpowa strefa pamici wysokiej (ZONE_HIGHMEM),",
                                        "niskopoziomowy mechanizm obsugi pamici umoliwia przydzielenie obszaru pamici o wielkoci jednego bajta."
                                ],
                                "correctAnswers": [
                                        0,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-017",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi urzdze znakowych i blokowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "urzdzenia obsugiwane przez Linuksa s wycznie urzdzeniami fizycznymi,",
                                        "w komputerach klasy PC kontroler jest zawsze czci struktury sprztowej czcej szyn wejcia-wyjcia z urzdzeniem,",
                                        "rejestr moe peni wicej ni jedn funkcj,",
                                        "numer gwny identyfikuje sterownik obsugujcy urzdzenie lub grup urzdze,",
                                        "urzdzenia znakowe adresuj dane sekwencyjnie."
                                ],
                                "correctAnswers": [
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-018",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce warstwy operacji blokowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "wielko bloku w Linuksie jest nieograniczona,",
                                        "kady bufor zawsze jest zwizany z blokiem na noniku danych,",
                                        "bufory s wykorzystywane wycznie do przechowywania danych odczytanych z nonika urzdzenia blokowego,",
                                        "kady z buforw wyposaony jest w nagwek zawierajcy dane niezbdne do zarzdzania nim,",
                                        "nagwek bufora nie przechowuje informacji o operacjach wejcia-wyjcia z jakimi ten bufor jest zwizany."
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-019",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi sieci w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "jdro wykonuje czynnoci zwizane z obsug warstwy cza, sieci i transportowej modelu ISO/OSI,",
                                        "NAPI nigdy nie pozwala na sygnalizowanie odbioru pakietu za pomoc przerwania,",
                                        "przenoszenie bufora pakietu midzy kolejkami jest czasochonne,",
                                        "funkcje zwizane z filtrem sieciowym mog \"wykrada\" niektre pakiety, aby przetworzy je w inny sposb ni pozostae,",
                                        "w filtrze sieciowym, z pojedynczym uchwytem nie moe by skojarzona wicej ni jedna funkcja przetwarzajca."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3
                                ],
                                "explanation": ""
                        }
                ]
        }
],
    "dbVersion": 2
};
