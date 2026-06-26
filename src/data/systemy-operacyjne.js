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
                                "type": "single",
                                "question": "Które z poniższych zdań dotyczących algorytmu szeregowania O(1) są prawdziwe?",
                                "options": [
                                        "Wymiana priorytetów zadań sprowadza się do zamiany wskaźników na tablicę aktywną i",
                                        "Priorytet każdego zadania jest ustalany wyłącznie na podstawie jego poziomu interaktywności",
                                        "Promowane są zadania o wysokim stopniu interaktywności",
                                        "Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesorów wyłącznie wtedy",
                                        "Kwanty czasu dla poszczególnych zadań są przeliczane dopiero wówczas, gdy ostatnie z zadań"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** przeterminowaną Wymiana „starych” priorytetów na „nowe” sprowadza się wyłącznie do wymiany wskaźników na tablicę aktywną i przeterminowaną. (Wykład 3)\n• **Opcja b) (NIE):** Priorytet każdego „zwykłego” zadania jest ustalany na podstawie priorytetu statycznego, jakim jest poziom uprzejmości oraz na podstawie stopnia interaktywności procesu. (Wykład 3)\n• **Opcja c) (NIE):** Jądro Linuksa promuje zadania o dużym stopniu interaktywności. (Wykład 3)\n• **Opcja d) (NIE):** kiedy kolejka zadań jednego z nich jest pusta W systemach wieloprocesorowych zadania są kojarzone z poszczególnymi procesorami, ale czasem może zajść potrzeba zrównoważenia pracy systemu, wówczas część zadań z kolejki  procesów gotowych procesora może zostać przeniesiona do kolejek  innych procesorów lub odwrotnie.  Mogą być dwie przyczyny takiego zdarzenia. Pierwsza zachodzi wtedy, ki edy w kolejce któregoś z procesorów nie ma żadnych zdań,  wówczas mogą one być przeniesione z kolejek innych procesorów. Druga to wywołanie load_balance()  za pomocą przerwania zegarowego. W tym przypadku zadanie równoważenia obciążenia jest bardziej skomp likowane. W skrócie polega ono na znalezieniu najbardziej obciążonej kolejki (ponad 25% obciążenia wszystkich kolejek w systemie) i rozłożeniu tego obciążenia na pozostałe procesory.  (Wykład 3)\n• **Opcja e) (NIE):** znajdujących się w tablicy priorytetów aktywnych wyczerpie swój kwant czasu Kwanty czasu zadań są przeliczane zaraz po ich wyczerpaniu przez zadanie i zanim zadanie trafi do tablicy przeterminowanej. (Wykład 3)"
                        },
                        {
                                "id": "so-m1-002",
                                "type": "single",
                                "question": "Określ które ze zdań dotyczące szeregowania procesów w Linuxie 2.6 są prawdziwe?",
                                "options": [
                                        "Linux realizuje wielozadaniowość wyłącznie w oparciu o kooperacje",
                                        "Działanie planisty O(1) oparte jest na schemacie kolejek ze sprzężeniem zwrotnym",
                                        "Zadania interaktywne otrzymują od planisty O(1) mniejszy kwant czasu niż zadania",
                                        "Główną strukturą danych planisty CFS jest drzewo czerwono-czarne",
                                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego"
                                ],
                                "correctAnswers": [],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** Istnieją dwa typy systemów wielozadaniowych: systemy wielozadaniowe z kooperacją (bez wywłaszczania) i systemy wielozadaniowe z wywłaszczaniem. W systemach pierwszego typu proces zawsze dobrowolnie zrzeka się procesora i oddaje sterowanie do systemu operacyjnego. Drugi typ systemów kontroluje wykorzystanie procesora  przez realizowane zadania i może przerywać ich działanie. Zapobieg a to sytuacji, w której pojedynczy proces mógłby zmonopolizować dostęp do procesora. Linux jak  większość współczesnych systemów operacyjnych realizuje wielozadaniowość z wywłaszczaniem. (Wykład 3)\n• **Opcja b) (NIE):** Schemat   szeregowania   jaki   zastosowano  w  tym  systemie  opiera  się na  schemacie wielopoziomowych kolejek  ze sprzężeniem  zwrotnym.  (Wykład 3)\n• **Opcja c) (NIE):** nieinteraktywne Jądro Linuksa promuje zadania o dużym  stopniu interaktywności. Takie zadania po wykorzystaniu swojego kwantu czasu nie trafiają od razu do tablicy przeterminowanej, ale otrzymują drugą szansę i są  umieszczane w tablicy aktywnej, na końcu tej samej listy, na której były poprzednio (dostają ten sam kwant czasu, co przed wykonaniem)  (Wykład 3)\n• **Opcja d) (NIE):** W planiście  CFS  tablice priorytetów zostały zastąpione drzewem czerwono-czarnym. (Wykład 3)"
                        },
                        {
                                "id": "so-m1-003",
                                "type": "single",
                                "question": "Które twierdzenia odnośnie wątków i procesów w systemie Linux są prawdziwe?",
                                "options": [
                                        "Za szeregowanie wątków odpowiada inny mechanizm jądra niż za szeregowanie procesów",
                                        "Każdy wątek jądra posiada swoją odrębną przestrzeń adresową",
                                        "Makrodefinicja „current” pozwala na szybki dostęp do deskryptora bieżącego procesu",
                                        "Proces macierzysty, którego proces potomny się zakończył przechodzi w stan TASK_ZOMBIE",
                                        "Deskryptory procesów powiązane są w listę"
                                ],
                                "correctAnswers": [],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** W przeciwieństwie do wielu innych systemów operacyjnych Linux obsługuje wątki, ale nie odróżnia ich od zwykłych procesów. (Wykład 2)\n• **Opcja b) (NIE):** Wątki jądra nie mają własnej przestrzeni  adresowej,  działają  w obrębie przestrzeni   jądra. (Wykład 2)\n• **Opcja c) (NIE):** W  jądrze  zdefiniowana jest makrodefinicja o nazwie „current”, która pozwala na szybki dostęp do deskryptora bieżącego procesu. (Wykład 2)\n• **Opcja d) (NIE):** Jeśli  proces macierzysty zakończy się przed procesem potomnym, to ten  ostatni pozostanie w stanie zombie. (…) TASK_ZOMBIE  – proces  zakończył   się,  w  systemie  został   jednak  jego deskryptor,  który  jest  usuwany  przez proces macierzysty poprzez wywołanie o nazwie „wait4()”,(Wykład 2)\n• **Opcja e) (NIE):** Deskryptory procesów s  powi zane ze sob  w dwukierunkową listę  procesów. (Wykład 2)"
                        },
                        {
                                "id": "so-m1-004",
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
                                "id": "so-m1-005",
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
                                "explanation": "Wyjaśnienia:\n• Szeregowanie, w kontekście systemów operacyjnych, to podejmowanie decyzji dotyczących\nprzydzielania zasobów procesom. Zazwyczaj, ale nie zawsze, pojęcie to oznacza szeregowanie\nprocesów, czyli decydowanie o przydziale CPU określonemu procesowi. Linux pozwala procesom\nużytkownika tworzyć wątki, ale w przeciwieństwie do innych systemów operacyjnych nie posiada\nżadnych podsystemów, które przeznaczone byłyby wyłącznie do ich obsługi. W przypadku Linuksa\nwątek użytkownika jest po prostu procesem użytkownika, który zawsze współdzieli większość swoich\nzasobów, włącznie z przestrzenią adresową, z innymi procesami-wątkami (jego rodzeństwem).\n• Wątki jądra współdzielą przestrzeń adresową z resztą jądra, nie mają własnej.\n• Makro current, zwraca adres deskryptora bieżącego procesu. W tym przypadku słowo „bieżącego”\nnależy rozumieć jako „tego, który uaktywnił kod jądra”.\n• Proces, którego proces macierzysty się zakończył może utknąć w stanie zombie. Wówczas jest\nadoptowany przez proces init (lub jego nowszy odpowiednik) lub przez proces, który należy do tej\nsamej grupy co rodzic. Czyli w stan TASK_ZOMBIE może przejść proces potomny, a nie proces\nmacierzysty.\n• Deskryptory wszystkich procesów użytkownika są połączone w cykliczną listę dwukierunkową."
                        },
                        {
                                "id": "so-m1-006",
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
                                "id": "so-m1-007",
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
                                "id": "so-m1-008",
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
                                "id": "so-m1-009",
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
                                "id": "so-m1-010",
                                "type": "multiple",
                                "question": "Określ, które informacje odnośnie zarządzania procesami w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "deskryptor procesu jest umieszczony na dnie jego stosu w jądrze systemu.",
                                        "makrodefinicja \"current\" zwraca adres deskryptora bieżącego procesu.",
                                        "proces w stanie TASK_UNINTERRUPTIBLE może być ustawiony w stanie gotowości przez dowolny sygnał",
                                        "proces zakończony ma stan TASK_STOPPED.",
                                        "proces, który jest wykonywany ma stan TASK_RUNNING."
                                ],
                                "correctAnswers": [
                                        1,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• Deskryptor procesu był na dnie stosu jądra w Linuxie przed wersją 2.6. Od 2.6 w górę jest on w pliku\nnagłówkowym linux/sched.h\n• Makro current zwraca adres deskryptora bieżącego procesu, czyli tego, który uaktywnił kod jądra\n• Proces w stanie TASK_UNINTERRUPTIBLE oczekuje na zdarzenie (śpi) i może być wybudzony tylko\nprzez sygnał z nim związany. Przez dowolny sygnał może być wybudzony proces w stanie\nTASK_INTERRUPTIBLE\n• Stan TASK_STOPPED ma proces wstrzymany przez sygnał. Zakończony proces może mieć stany\nEXIT_ZOMBIE lub EXIT_DEAD, ale po całkowitym poprawnym zakończeniu znika po nim wszelki ślad.\n• Stan TASK_RUNNING oznacza, że proces jest aktywny lub gotów do wykonania. Jądro nie rozróżnia\ntych dwóch przypadków, więc widząc ten stan nie możemy określić czy jest wykonywany. Ale jeśli\nwiemy, że proces jest wykonywany to znaczy, że ma stan TASK_RUNNING."
                        },
                        {
                                "id": "so-m1-011",
                                "type": "multiple",
                                "question": "Określ, które informacje o planiście O(1) są prawdziwe:",
                                "options": [
                                        "nowy kwant czasu dla procesu jest ustalany dopiero wtedy, gdy wszystkie procesy w systemie wyczerpią",
                                        "kolejka procesów gotowych zawiera wskaźniki na dwie tablice priorytetów.",
                                        "każdy procesor ma swoją kolejkę procesów gotowych.",
                                        "priorytet zwykłych procesów jest ustalany wyłącznie na podstawie stopnia ich interaktywności.",
                                        "im wyższy jest priorytet procesu, tym krótszy kwant czasu on otrzymuje."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": "Wyjaśnienia:\n• W Uniksie priorytety dla procesów były wyliczane na nowo dopiero po tym, kiedy wszystkie uległy\nprzeterminowaniu, czyli nowe kwanty były wyliczane jak się skończyły dla wszystkich procesów.\nLinux przydziela nowy priorytet (a tym samym nowy kwant czasu) jeśli zarówno proces macierzysty,\njak i potomny uległy przeterminowaniu. Poza tym Linux wylicza nowy priorytet dla procesu typu\nSCHED_OTHER, zaraz po tym, jak staje się on przeterminowany. Pytanie podchwytliwe, ale kluczem\njest wiedza, gdzie występował planista O(1). Był używany w jądrze Linuksa od wersji 2.6.0 do 2.6.22,\nsam w sobie bazuje na oryginalnym planiście systemu Unix, ale nigdy nie występował w tamtym\nsystemie.\n• Kolejka procesów czekających na przydział procesora (gotowych do wykonania) ma wskaźniki na\ndwie tablice priorytetów: tablicę priorytetów aktywnych i tablicę priorytetów przeterminowanych.\n• Planista O(1) dla każdego CPU w systemie tworzy kolejkę procesów czekających na przydział\nprocesora (gotowych do wykonania).\n• Zwykłe procesy otrzymują priorytety od 100 (najwyższy) do 139 (najniższy). Interaktywność wpływa\nna priorytet. Priorytety mało interaktywnych procesów są zmniejszane o +5, a priorytety bardziej\ninteraktywnych podnoszone o −5. Im więcej proces oczekuje (względem faktycznego korzystania z\nCPU), tym bardziej jest interaktywny.\n• Im wyższy priorytet statyczny (czyli im niższa liczba - poziom uprzejmości od -20 do 19, domyślnie 0)\ntym dłuższy kwant czasu otrzymuje procesor. Oprócz tego jest też priorytet dynamiczny (dodawany\ndo statycznego, ustalany po każdej rundzie szeregowania). Tu również procesy interaktywne\notrzymują dłuższe kwanty czasu."
                        },
                        {
                                "id": "so-m1-012",
                                "type": "multiple",
                                "question": "Określ, które informacje o planiście CFS są prawdziwe:",
                                "options": [
                                        "priorytety procesów są prawie niezmienne.",
                                        "klasa szeregowania SCHED_BATCH jest obsługiwana za pomocą algorytmu rotacyjnego.",
                                        "waga procesu jest odwrotnością wartości jego priorytetu.",
                                        "zegar wirtualny jest wprost implementowany w jądrze Linuksa.",
                                        "kolejka procesów gotowych jest zrealizowana w postaci drzewa czerwono-czarnego."
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• Priorytety procesów od czasu wprowadzenia mechanizmu CFS stały się prawie niezmienne. Służą one\ndo określenia tak zwanej wagi procesu.\n• SCHED_BATCH jest to klasa procesów niskopriorytetowych ograniczonych przez procesor, które\nobsługiwane są przez planistę CFS.\n• Waga dla domyślnego priorytetu (poziom uprzejmości 0) wynosi 1024. Wagi procesów o wyższych\npriorytetach są wyliczone poprzez mnożenie tej wartości przez kolejne potęgi liczby 1,25. Wagi\nprocesów o niższych priorytetach są wyliczone poprzez dzielenie tej wartości przez kolejne potęgi\nliczby 1,25.\n• Zegar wirtualny, który jest jednym z elementów wyznaczających czas, przez który proces bieżący\nkorzystał z procesora nie został wprost zaimplementowany w jądrze Linuksa.\n• Kolejka procesów gotowych, w przypadku planisty CFS, jest zaimplementowana w postaci drzewa\nczerwono-czarnego. Jest to rodzaj wyważonego drzewa BST, w którym każdy węzeł ma dodatkową\ncechę nazywaną kolorem."
                        },
                        {
                                "id": "so-m1-013",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące obsługi przestrzeni adresowej procesu w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "wszystkie wątki jądra korzystają z jednego, wspólnego dla nich deskryptora pamięci.",
                                        "obiekty zawierające informacje o obszarach pamięci są umieszczone jednocześnie w dwóch różnych",
                                        "sekcje tekstu tworzone są nie tylko dla procesów, ale również dla bibliotek współdzielonych.",
                                        "deskryptor pamięci przechowuje adres startowy i końcowy obszaru argumentów wywołania programu.",
                                        "deskryptory pamięci nigdy nie są współdzielone przez procesy (wątki) użytkownika."
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        3
                                ],
                                "explanation": "Wyjaśnienia:\n• Informacje na temat przestrzeni adresowej pojedynczego procesu przechowuje jego deskryptor\npamięci. Wątki jądra nie mają własnej przestrzeni adresowej i własnego deskryptora pamięci. Jednak\nrównież muszą odwoływać się do pamięci operacyjnej, aby móc wykonywać swoje zadania, dlatego\nteż korzystają z deskryptorów pamięci poprzednio zaszeregowanych procesów użytkownika.\n• Dwa pola deskryptora pamięci są związane z osobnymi strukturami danych, które przechowują tę\nsamą informację, ale w różny sposób. Pierwszym z nich jest pole mmap przechowujące adres listy\nzawierającej dane o wszystkich obszarach pamięci. Drugim jest pole mm_rb przechowujące adres\nkorzenia drzewa czerwono-czarnego, które zawiera te same dane co lista, ale oferuje krótszy czas ich\nwyszukiwania, niż lista. Za to listę prościej jest przeglądać sekwencyjnie.\n• Sekcje tekstu i sekcje danych tylko do odczytu mogą być współdzielone zarówno przez procesy, jak i\nbiblioteki współdzielone.\n• Deskryptor pamięci zawiera wiele pól, między innymi pola przechowujące początkowe i końcowe\nadresy sekcji tekstu, danych, stosu, obszaru pamięci przechowującego argumenty wiersza poleceń i\nobszaru pamięci przechowującego zmienne środowiskowe.\n• Wątki przestrzeni jądra, lub po prostu wątki jądra, nie mają swojej własnej przestrzeni adresowej,\nwspółdzielą ją z jądrem. W związku z tym nie mają również deskryptorów pamięci. Wartość pola mm\nw ich deskryptorach procesów wynosi null. Jednakże, aby się mogły wykonywać, wątki jądra muszą\nodwoływać się do pamięci. W tym celu korzystają z deskryptora pamięci procesu użytkownika, który\nkorzystał z CPU tuż przed nimi."
                        },
                        {
                                "id": "so-m1-014",
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
                                "id": "so-m1-015",
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
                                "id": "so-m1-016",
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
                                "id": "so-m1-017",
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
                                "id": "so-m1-018",
                                "type": "multiple",
                                "question": "Ktre twierdzenie odnonie wtkw i procesw w systemie Linux s prawdziwe?",
                                "options": [
                                        "Za szeregowanie wtkw odpowiada inny mechanizm jdra ni za szeregowanie procesw",
                                        "Kady wtek jdra posada swoj odrbn przestrze adresow      | nie",
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
                                "id": "so-m1-019",
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
                                "id": "so-m1-020",
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
                                "id": "so-m1-021",
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
                                "id": "so-m1-022",
                                "type": "multiple",
                                "question": "Czy twierdzenia odnośnie wątków i procesów są prawdziwe?",
                                "options": [
                                        "Za szeregowanie wątków odpowiada inny mechanizm niż za szeregowanie procesów",
                                        "Każdy wątek jądra posiada odrębną przestrzeń adresową",
                                        "Makrodefinicja current pozwala na szybki dostęp do deskryptora bieżącego procesu",
                                        "Proces macierzysty, którego proces macierzysty się zakończył przechodzi w stan TASK_ZOMBIE"
                                ],
                                "correctAnswers": [
                                        2,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-023",
                                "type": "single",
                                "question": "Okrel, ktre informacje odnonie zarzdzania procesami w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "deskryptor procesu jest umieszczony na dnie jego stosu w jdrze systemu",
                                        "makrodefinicja \"current\" zwraca adres deskryptora biecego procesu",
                                        "proces w stanie TASK_UNINTERRUPTIBLE moe by ustawiony w stanie gotowoci przez dowolny sygna, ktry otrzyma",
                                        "proces zakoczony ma stan TASK_STOPPED",
                                        "proces, ktry jest wykonywany ma stan TASK_RUNNING."
                                ],
                                "correctAnswers": [
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-024",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje o planicie O(1) s prawdziwe:",
                                "options": [
                                        "nowy kwant czasu dla procesu jest ustalany dopiero wtedy, gdy wszystkie procesy w systemie wyczerpi swoje kwanty",
                                        "kolejka procesw gotowych zawiera wskaniki na dwie tablice priorytetw",
                                        "kady procesor ma swoj kolejk procesw gotowych",
                                        "priorytet zwykych procesw jest ustalany wycznie na podstawie stopnia ich interaktywnoci",
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
                                "id": "so-m1-025",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje o planicie CFS s prawdziwe:",
                                "options": [
                                        "priorytety procesw s prawie niezmienne",
                                        "klasa szeregowania SCHED_BATCH jest obsugiwana za pomoc algorytmu rotacyjnego",
                                        "waga procesu jest odwrotnoci wartoci jego priorytetu",
                                        "zegar wirtualny jest wprost implementowany w jdrze Linuksa",
                                        "kolejka procesw gotowych jest zrealizowana w postaci drzewa czerwono-czarnego."
                                ],
                                "correctAnswers": [
                                        0,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m1-026",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi przestrzeni adresowej procesu w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "wszystkie wtki jdra korzystaj z jednego, wsplnego dla nich deskryptora pamici",
                                        "obiekty zawierajce informacje o obszarach pamici s umieszczone jednoczenie w dwch rnych strukturach danych",
                                        "sekcje tekstu tworzone s nie tylko dla procesw, ale rwnie dla bibliotek wspdzielonych",
                                        "deskryptor pamici przechowuje adres startowy i kocowy obszaru argumentw wywoania programu",
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
                                "id": "so-m1-027",
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
                                "id": "so-m1-028",
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
                                "id": "so-m1-029",
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
                                "id": "so-m1-030",
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
                                "id": "so-m1-031",
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
                        },
                        {
                                "id": "so-m1-032",
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
                                "id": "so-m1-033",
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
                                "id": "so-m1-034",
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
                                "id": "so-m1-035",
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
                                "question": "Które ze zdań dotyczących kolejek prac są prawdziwe?",
                                "options": [
                                        "Czynności odroczone wykonywane w ramach kolejek prac są wykonywane w kontekście",
                                        "Kolejki prac zastąpiły mechanizm dolnych połówek znany jako „kolejki zadań”, który był",
                                        "Mechanizm kolejek prac pozwala na określenie czasu po upływie którego dana czynność może się",
                                        "Jądro systemu Linux zawiera specjalną funkcję, której wywołanie pozwala na opróżnienie",
                                        "Jeśli w jądrze tworzona jest nowa kolejka prac, to jest równocześnie dla niej tworzony nowy"
                                ],
                                "correctAnswers": [
                                        1,
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** przerwania Dzięki  tym mechanizmom czynności  czasochłonne nie są wykonywane bezpośrednio w procedurze obsługi  przerwania,  ale są odraczane do czasu kiedy system będzie mniej  obciążony  (najczęściej  zaraz po odblokowaniu przerwań).  (Wykład 7)\n• **Opcja b) (TAK):** wykorzystywany we wcześniejszych wersjach jądra Linuksa W jądrze Linuksa w wersji 2.6  istnieją cztery mechanizmy będące częściami  systemu dolnych połówek:  przerwania programowe  i tasklety, które wyparły mechanizm BH5  oraz kolejki  prac (ang.  work queue), które wyparły kolejki zadań (ang. task queue). (Wykład 7) - Przerwania programowe i tasklety wyparły mechanizm BH (dolnych połówek) - Kolejki prac wyparły kolejki zadań\n• **Opcja c) (TAK):** rozpocząć Istnieje również mechanizm liczników, które pozwalają odroczyć czynności na określony czas, ale ich opis  zostanie przełożony na później.  (…) Dolne  połówki  gwarantują  przełożenie wykonania  złożonych czynności  związanych z obsługą przerwania na później, ale nie określają kiedy dokładnie to wykonanie nastąpi  (…) Niektóre mechanizmy dolnych połówek pozwalają określić po jakim czasie powinny być wykonane zlecone im czynności, ale nie gwarantują dokładności.\n• **Opcja d) (TAK):** domyślnej kolejki prac Czasem  konieczne  może   się   okazać  wymuszenie   opróżnienia  domyślnej kolejki prac. Dokonujemy tego za pomocą funkcji  flush_scheduled_work().  (Wykład 7)\n• **Opcja e) (TAK):** odrębny wątek roboczy Nowe kolejki prac tworzone są za pomocą create_workqueue(). Dla każdej utworzonej w ten sposób kolejki tworzony jest również osobny wątek roboczy. (Wykład 7) Systemy Operacyjne 2 – A. Chrobot"
                        },
                        {
                                "id": "so-m2-002",
                                "type": "single",
                                "question": "Określ które twierdzenia dot. zażądania czasem w Linkusie są prawdziwe?",
                                "options": [
                                        "Stała HZ dla architektury i386 wynosi 1000",
                                        "Zawartość zegara czasu rzeczywistego jest odczytywana przez jądro co pewien określony przedział",
                                        "Zmienna jiffies jest nałożona na starsze 32 bity zmiennej „jiffies_64”",
                                        "Liczniki dynam. ze względu na zbyt mała precyzje nie mogą być wykorzystywane w zadaniach",
                                        "Listy liczników nie są przez system sortowane"
                                ],
                                "correctAnswers": [],
                                "explanation": "Wyjaśnienia:\n• **Opcja b) (NIE):** czasu Jądro obsługuje również mechanizm zegara czasu rzeczywistego (RTC) z którego pracy korzystają  głównie aplikacje użytkowników. Zegar ten przechowuje i aktualizuje informacje o bieżącej dacie i godzinie. Jego zawartość jest odczytywana i umieszczana w zmiennej  xtime podczas rozruchu systemu. Jądro nie odczytuje już więcej zawartości zegara czasu rzeczywistego, ale samo aktualizuje zawartość tej zmiennej i ewentualnie może  aktualizować zawartość samego RTC. (Wykład 9)\n• **Opcja c) (NIE):** Kiedy od jądra 2.4 zaczęto stosować stałą HZ=1000, to okres ten skrócił się do 49,7 dnia,  dlatego też twórcy jądra zastosowali rozwiązanie polegające na „nałożeniu” 32  – bitowej zmiennej jiffies na zmienną jiffies_64, która ma rozmiar 64 – bitów. Odwołanie się więc do zmiennej jiffies w architekturach 32 – bitowych daje wartość  jej  młodszego słowa ,  w architekturach 64 – bitowych  jej  pełną wartość.   (Wykład 9)\n• **Opcja d) (NIE):** czasu rzeczyw. Liczniki, zwane licznikami dynamicznymi lub licznikami jądra pozwalają opóźnić wykonanie określonych czynności o ustaloną ilość czasu począwszy od chwili bieżącej.  Nie  jest to mechanizm precyzyjny  i  mogą zdarzać się niedokładności  rzędu rozmiaru okresu,  więc nie powinny one być stosowa ne do zadań czasu rzeczywistego, niemniej  większości  przypadków nadają się one do zastosowania. (Wykład 9)\n• **Opcja e) (NIE):** Aby   uniknąć   sortowania   listy   liczników  i  kosztownego  przeglądania   jest   ona   podzielona na pięć grup, pod względem czasu po jakim trzeba będzie wywołać funkcje zgromadzonych na niej liczników. Wykład 9) Systemy Operacyjne 2 – A. Chrobot"
                        },
                        {
                                "id": "so-m2-003",
                                "type": "single",
                                "question": "Brak pytania",
                                "options": [
                                        "Zmienna typu „atomic_T” jest 32 bitowa.",
                                        "Wszystkie architektury, które obsługuje Linux dostarczają rozkazów maszynowych realizujących",
                                        "Rygle pętlowe mogą być stosowane we fragmentach kodu wykonywujących się w kontekście",
                                        "Rygle R-W stosujemy w zagadnieniach typu problem czytelników i pisarzy, gdzie faworyzowani są",
                                        "Zmienne sygnałowe są uproszczoną wersją semaforów."
                                ],
                                "correctAnswers": [
                                        2
                                ],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** atomic_t, mimo, że zbudowany  jest na typie „int” ( 32 – bitowym) pozwala na przechowywanie wartości 24 -bitowych (3 bajty). (Wykład 8)\n• **Opcja b) (NIE):** operacje niepodzielne na wartościach będących liczbami całkowitymi. Oprócz operacji niepodzielnych na liczbach całkowitych jądro dostarcza funkcji realizujących niepo dzielne operacje na pojedynczych bitach. (Wykład 8)\n• **Opcja c) (TAK):** przerwania. Rygle pętlowe mogą być używane w procedurach obsługi  przerwań,  ale  tylko wraz z wyłączeniem  lokalnego systemu przerwań,  aby uniknąć  zakleszczeń.  (Wykład 8)\n• **Opcja d) (NIE):** pisarze. Jeśli problem, który chcemy rozwiązać sprowadza się do problemu pisarzy i czytelników, a ściślej do wersji tego problemu, gdzie faworyzowani są czytelnicy, to możemy zastosować rygle pętlowe R-W.\n• **Opcja e) (NIE):** Zmienne sygnałowe służą do synchronizacji pracy zadań i są uproszczoną wersją semaforów.  (Wykład 8)"
                        },
                        {
                                "id": "so-m2-004",
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
                                "id": "so-m2-005",
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
                                "id": "so-m2-006",
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
                                "id": "so-m2-007",
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
                                "id": "so-m2-008",
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
                                "explanation": "Wyjaśnienia:\n• Ponieważ jądro systemu z definicji ma być wydajne pod względem wykorzystania pamięci i szybkości\ndziałania, to przeglądając kod źródłowy Linuksa możemy znaleźć wiele fragmentów, które łamią\nniektóre przyjęte kanony dobrze napisanego oprogramowania (jak choćby nieużywanie instrukcji\ngoto). Programiści jądra często używają osławionej instrukcji goto, zazwyczaj w celach optymalizacji\nefektywności lub obsługi wyjątków.\n• Linux obsługuje symetryczne przetwarzanie wieloprocesorowe (SMP) oraz architekturę NUMA, co\nnie jest cechą wszystkich Uniksów. Wsparcie dla NUMA jest od wersji 2.6 jądra.\n• Częstotliwość zegara systemowego jest określana przez stałą HZ. Okres zegara jest odwrotnością tej\nstałej. Jej wartość, w przypadku większości platform obsługiwanych przez Linuksa, wynosi 100. Do\nwyjątków zaliczają się komputery bazujące na procesorach x86. W ich przypadku ta stała także miała\nwartość 100 (okres 10ms), ale w serii 2.4 jądra zmieniono ją na 1000 (okres 1ms), aby zaspokoić\npotrzeby multimedialnego oprogramowania użytkowego. Dla architektury i386 stała HZ również\nwynosi 1000.\n• Rozdzielczość liczników czasu niskiej rozdzielczości jest rzędu okresu zegara systemowego, a więc\nzgodnie z częstotliwością określaną przez stałą HZ, opiera się na wartościach mikrosekund.\n• Aplikacje użytkowe zakładają, że wartość stałej HZ jest równa 100. Jest to prawdą dla większości\nplatform sprzętowych, z pewnymi wyjątkami, takimi jak komputery bazujące na procesorach x86 lub\nDEC Alpha. Z powodu takich systemów komputerowych programiści jądra zdefiniowali odrębną stałą\no nazwie USER_HZ, której wartość określa częstotliwość zegara systemowego oczekiwaną przez\naplikacje użytkownika. Ale prawdziwa stała HZ jest zależy od architektury sprzętowej i niezmienna\ndla użytkownika."
                        },
                        {
                                "id": "so-m2-009",
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
                                "id": "so-m2-010",
                                "type": "single",
                                "question": "Określ, które informacje dotyczące dolnych połówek w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "całkowita liczba przerwań programowych jest ograniczona.",
                                        "przerwania programowe są wykonywane w kontekście procesu.",
                                        "tasklety są wykonywane w kontekście procesu.",
                                        "czynności z kolejek prac są wykonywane w kontekście przerwania.",
                                        "można precyzyjne określić czas, po którym przerwanie programowe powinno być wykonane."
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": "Wyjaśnienia:\n• Przerwania programowe są statycznie deklarowane, co oznacza, że nie mogą być używane w\nmodułach jądra. Ich liczba jest ograniczona do 32.\n• Wszystkie przerwania programowe są wykonywane w kontekście przerwania.\n• Tasklety są dolnymi połówkami wykonywanymi w kontekście przerwania i dostępnymi z poziomu\nmodułu jądra.\n• Kolejki prac są implementacją dolnych połówek działającą w kontekście procesu.\n• Niektóre mechanizmy dolnych połówek pozwalają określić po jakim czasie powinny być wykonane\nzlecone im czynności, ale nie gwarantują dokładności."
                        },
                        {
                                "id": "so-m2-011",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące zarządzania pamięcią w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "Linux obsługuje systemy wieloprocesorowe o organizacji NUMA.",
                                        "domyślnie Linux przydziela pamięć ze strefy DMA (ZONE_DMA).",
                                        "podstawowym mechanizmem sprzętowym wykorzystywanym przez Linuksa do obsługi pamięci jest",
                                        "nie we wszystkich platformach sprzętowych musi występować strefa pamięci wysokiej",
                                        "niskopoziomowy mechanizm obsługi pamięci umożliwia przydzielenie obszaru pamięci o wielkości"
                                ],
                                "correctAnswers": [
                                        0,
                                        3
                                ],
                                "explanation": "Wyjaśnienia:\n• Linux obsługuje systemy wieloprocesorowe bazujące na architekturach NUMA i SMP.\n• Jądro, jeśli nie jest to określone w wywołaniu alokatora, przydziela domyślnie pamięć ze strefy\nZONE_NORMAL, chyba że nie ma tam już wolnych stron. Wówczas strony są przydzielane z dowolnej\nz pozostałych stref. Strefa ZONE_DMA zawiera strony używane do transmisji DMA przez urządzenia\nbazujące na magistrali ISA, które mogą korzystać jedynie z pierwszych 16MiB RAM (ta magistrala jest\n24-bitowa). Dodatkowo ten obszar pamięci musi być fizycznie ciągły, bo te urządzenia nie używają\npamięci wirtualnej. Strefa ta istnieje tylko z przyczyn historycznych.\n• Główna gałąź jądra używa stronicowania jako podstawowego systemu zarządzania pamięcią, bo jest\nono dostępne na większości przez nie obsługiwanych platform sprzętowych.\n• ZONE_HIGHMEM – strefa grupująca strony w wysokiej pamięci (dla 32­bitowych procesorów rodziny\nx86 jest to pamięć fizyczna powyżej 896MB, na innych może nie występować). Platformy 64-bitowe\nzazwyczaj używają stref ZONE_DMA, ZONE_NORMAL i ZONE_DMA32. Współcześnie nie ma potrzeby\nstosowania strefy ZONE_HIGHMEM w takich platformach sprzętowych.\n• Jądro Linuksa ma niskopoziomowy alokator pamięci, nazywany alokatorem strefowym,\nprzydzielający pamięć fizycznie ciągłymi obszarami, których rozmiar stanowi wielokrotność\nrozmiaru strony wyrażoną potęgą dwójki. Rozmiar strony zazwyczaj ma 4096 bajtów."
                        },
                        {
                                "id": "so-m2-012",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące obsługi urządzeń znakowych i blokowych w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "urządzenia obsługiwane przez Linuksa są wyłącznie urządzeniami fizycznymi.",
                                        "w komputerach klasy PC kontroler jest zawsze częścią struktury sprzętowej łączącej szynę wejścia-",
                                        "rejestr może pełnić więcej niż jedną funkcję.",
                                        "numer główny identyfikuje sterownik obsługujący urządzenie lub grupę urządzeń.",
                                        "urządzenia znakowe adresują dane sekwencyjnie."
                                ],
                                "correctAnswers": [
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• Jednym z zadań Wirtualnego Systemu Plików jest obsługa urządzeń wejścia-wyjścia. Słowo\n„urządzenie” w tym kontekście nie musi koniecznie oznaczać fizyczny sprzęt. Może to być także\nwirtualne urządzenie nazywane także pseudo-urządzeniem.\n• Każde urządzenie jest połączone z komputerem poprzez szyny wejścia-wyjścia mające trzy składowe\nsię: magistralę danych, sterującą i adresową. Procesory rodziny Pentium wykorzystują 16 lub 32 linie\nszyny adresowej i 8, 16, 32 lub 64 linie magistrali danych. Szyna nie jest bezpośrednio połączona z\nurządzeniem, ale poprzez odpowiednią strukturę sprzętową składającą się z maksymalnie trzech\nkomponentów: portów wejścia-wyjścia, interfejsu i/lub kontrolera.\n• Niekiedy pojedynczy rejestr może pełnić dwie funkcje, jak ma to miejsce w przypadku klawiatury,\ngdzie rejestr stanu jest jednocześnie rejestrem sterującym, a rejestr wejściowy pełni rolę rejestru\nwyjściowego.\n• Numer główny identyfikuje sterownik odpowiedzialny w jądrze za obsługę rodziny urządzeń (np.\ndrukarek). Numer poboczny określa konkretne urządzenie obsługiwane przez ten sterownik.\n• Urządzenia znakowe adresują dane (zazwyczaj) sekwencyjnie i mogą je przesyłać względnie małymi\nporcjami, np. o rozmiarze kilku bajtów. Rozmiar ten może być inny dla każdej transmisji. Przykładem\ntakich urządzeń są mysz i klawiatura."
                        },
                        {
                                "id": "so-m2-013",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące warstwy operacji blokowych w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "wielkość bloku w Linuksie jest nieograniczona.",
                                        "każdy bufor zawsze jest związany z blokiem na nośniku danych.",
                                        "bufory są wykorzystywane wyłącznie do przechowywania danych odczytanych z nośnika urządzenia",
                                        "każdy z buforów wyposażony jest w nagłówek zawierający dane niezbędne do zarządzania nim.",
                                        "nagłówek bufora nie przechowuje informacji o operacjach wejścia-wyjścia z jakimi ten bufor jest"
                                ],
                                "correctAnswers": [
                                        1,
                                        3,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• Urządzenia blokowe przechowują dane w sektorach, które najczęściej mają wielkość 512 bajtów\n(choć nie jest to regułą). Sektor jest równocześnie najmniejszą jednostką danych urządzenia\nblokowego, którą można zaadresować. Pojedyncza operacja wejścia-wyjścia może obejmować jeden\nlub większą liczbę sektorów. Większość systemów operacyjnych nie posługuje się bezpośrednio\nsektorami, ale łączy je w zazwyczaj większe jednostki zwane blokami. Rozmiar bloku jest parzystą\nwielokrotnością rozmiaru sektora. W systemie Linux przyjęto, celem uproszczenia kodu jądra, że\nbloki będą miały wielkość mniejszą lub równą jednej stronie.\n• Bloki na dane pochodzące z odczytu lub zawierające dane do zapisu na urządzeniu blokowym są\numieszczone w pamięci operacyjnej, w buforach.\n• Bloki na dane pochodzące z odczytu lub zawierające dane do zapisu na urządzeniu blokowym są\numieszczone w pamięci operacyjnej, w buforach.\n• Każdy z buforów wyposażony jest w nagłówek, określony strukturą typu struct buffer_head,\nprzechowujący dane niezbędne do prawidłowego zarządzania buforem.\n• Nagłówek bufora w wersjach jądra systemu wcześniejszych niż 2.6 przechowywał również informacje\ndotyczące operacji I/O, w których uczestniczył bufor. Taka sytuacja powodowała niską efektywność\ntych operacji, gdyż pojedynczy zapis lub odczyt z urządzenia wymagał posłużenia się kilkoma\nnagłówkami. Dodatkowo rozmiar nagłówka był porównywalny z rozmiarem bufora, który opisywał.\nW nowszych wersjach jądra postanowiono więc „odchudzić” nagłówek bufora i stworzyć nową\nstrukturę, o nazwie BIO, która osobno przechowuje dane związane z operacjami wejścia-wyjścia."
                        },
                        {
                                "id": "so-m2-014",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące obsługi sieci w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "jądro wykonuje czynności związane z obsługą warstwy łącza, sieci i transportowej modelu ISO/OSI.",
                                        "NAPI nigdy nie pozwala na sygnalizowanie odbioru pakietu za pomocą przerwania.",
                                        "przenoszenie bufora pakietu między kolejkami jest czasochłonne.",
                                        "funkcje związane z filtrem sieciowym mogą \"wykradać\" niektóre pakiety, aby przetworzyć je w inny",
                                        "w filtrze sieciowym, z pojedynczym uchwytem nie może być skojarzona więcej niż jedna funkcja"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3
                                ],
                                "explanation": "Wyjaśnienia:\n• Podsystem jądra Linuksa odpowiedzialny za komunikację sieciową składa się z trzech części, które\nodpowiadają trzem warstwom modelu ISO/OSI — warstwie łącza danych, warstwie sieciowej i\nwarstwie transportowej.\n• We wczesnych wersjach sterowników urządzeń sieciowych odebranie każdego pakietu było\nsygnalizowane przerwaniem. Prowadziło to do dużego obciążenia systemu w przypadku dużego\nruchu sieciowego. Dlatego w wersjach 2.5/2.6 jądra wprowadzono nowe API dla sterowników takich\nurządzeń, które określono mianem NAPI (New API). Umożliwia ono przełączenie urządzenia w tryb\nprzeglądania (ang. polling), co pozwala mu zakumulować większą liczbę pakietów, które w\npóźniejszym terminie zostaną przetworzone przez jądro. Dzięki temu spada liczba generowanych\nprzez nie przerwań i tym samym obciążenie systemu. NAPI nie pozwala na sygnalizowanie odbioru\npakietu za pomocą przerwania.\n• Bufor pakietu jest tak zaprojektowany, aby mógł być efektywnie przenoszony między kolejkami. Jeśli\nzachodzi potrzeba skopiowania go, to wystarczy tylko powielić jego nagłówek, który ma trzy pola\nwskazujące na prywatne nagłówki przechowujące metadane związane z trzema warstwami modelu\nISO/OSI.\n• Funkcja NF_STOLEN „wykrada” pakiet, co oznacza, że będzie on przetwarzany w inny sposób niż\npozostałe pakiety.\n• Pole list struktury nf_hook_ops służy do łączenia takich struktur w listę, co umożliwia skojarzenie z\njednym uchwytem kilku funkcji przetwarzających."
                        },
                        {
                                "id": "so-m2-015",
                                "type": "multiple",
                                "question": "Pytania INNE:",
                                "options": [
                                        "Algorytm noop realizuje tylko operacje scalania.",
                                        "Alokator plastrowy przechowuje własne struktury w pamięci dedykowanej.",
                                        "Alokator plastrowy przydziela pamięć na deskryptor.",
                                        "Alokator plastrowy przydziela w pierwszej kolejności pamięć z plastrów pustych.",
                                        "Argumenty wywołań systemowych są przekazywane tylko przez rejestry programowe."
                                ],
                                "correctAnswers": [
                                        0,
                                        2
                                ],
                                "explanation": "Wyjaśnienia:\n• Czwarty mechanizm szeregowania żądań I/O jest bardzo prosty w działaniu – realizuje wyłącznie\noperację scalania. Ten planista nosi nazwę noop od angielskiego słowa no-operations.\n• W Linuksie alokator plastrowy tworzy pamięci podręczne (bufory) dwóch rodzajów: ogólne i\ndedykowane. Z pamięci ogólnych korzysta on sam, z dedykowanych – pozostałe części jądra.\n• Systemy operacyjne przechowują wszystkie informacje o każdym pojedynczym procesie w\ndeskryptorze procesu. W przypadku Linuksa jest to struktura typu struct task_struct zdefiniowana w\npliku nagłówkowym linux/sched.h. Pamięć na takie struktury jest przydzielana przez alokator\nplastrowy.\n• Obiekty są przydzielane z plastrów częściowo zajętych. Jeśli ich nie ma, to z plastrów pustych.\n• Argumenty wywołania systemowego  przekazywane są do system_call() za pomocą rejestrów ebx,\necx, edx, esi i edi."
                        },
                        {
                                "id": "so-m2-016",
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
                                "id": "so-m2-017",
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
                                "id": "so-m2-018",
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
                                "id": "so-m2-019",
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
                                "id": "so-m2-020",
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
                                "id": "so-m2-021",
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
                                "id": "so-m2-022",
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
                                "id": "so-m2-023",
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
                                "id": "so-m2-024",
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
                                "id": "so-m2-025",
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
                                "id": "so-m2-026",
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
                                "id": "so-m2-027",
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
                                "id": "so-m2-028",
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
                                "id": "so-m2-029",
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
                                "id": "so-m2-030",
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
                                "id": "so-m2-031",
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
                        },
                        {
                                "id": "so-m2-032",
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
                                "id": "so-m2-033",
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
                                "id": "so-m2-034",
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
                                "id": "so-m2-035",
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
                                "question": "Które z twierdzeń dotyczących obsługi przerwań w Linuxie 2.6 są prawdziwe?",
                                "options": [
                                        "Obsługa przerwań jest podzielona na górną połówkę i dolną połówkę",
                                        "Procedury obsługi przerwań mogą być wykonywane dowolnie długo",
                                        "Do linii przerwania o określonym numerze może być przypisanych kilka procedur obsługi przerwań",
                                        "W procedurach obsługi przerwań można wywołać funkcje, które ulegają blokowaniu",
                                        "Procedury obsługi przerwań korzystają ze stosu jądra, który ma nieograniczony rozmiar"
                                ],
                                "correctAnswers": [],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** Z tego powodu kod obsługi przerwań jest podzielony na dwie części  zwane  górną  połówką  i  dolną  połówką.(Wykład 5)\n• **Opcja b) (NIE):** Procedura obsługi  przerwania  wywoływana jest w sposób asynchroniczny i dlatego ważnym jest, aby jej wykonanie zostało zakończone w jak najkrótszym czasie (Wykład 5)\n• **Opcja c) (NIE):** SA_SHIRQ – określa możliwość współdzielenia linii przerwania z innymi procedurami obsługi przerwań  (Wykład 5)\n• **Opcja d) (NIE):** Procedury obsługi  przerwań są wywoływane w kontekście przerwania,  co oznacza,  że nie  są dozwolone w nich wywołania funkcji  blokujących oraz nie  jest ważna wartość  (ang.   invalid)  zwracana przez makrodefinicję  current. (Wykład 5)\n• **Opcja e) (NIE):** Procedury obsługi  przerwania muszą wykonywać  się  szybko,  aby nie blokować  kolejnych zgłoszeń  przerwania  na   tej samej   linii.  Korzystają  one  ze  stosu  jądra,  który  jest  ograniczony  do  8KB w 32 –  bitowych  architekturach PC  i  do 16KB w 64  – bitowych architekturach Alpha. (Wykład 5) Systemy Operacyjne 2 – A. Chrobot"
                        },
                        {
                                "id": "so-m3-002",
                                "type": "multiple",
                                "question": "Które z poniższych twierdzeń dotyczących środków synchronizacji w jądrze Linuksa 2.6 są prawdziwe?",
                                "options": [
                                        "Wątek wykonania, który przetrzymuje semafor nie może równocześnie przetrzymywać rygla",
                                        "Blokady sekwencyjne pozwalają ustalić, czy operacja odczytu nie została przepleciona z operacją",
                                        "Blokada BKL jest blokadą gruboziarnistą",
                                        "Blokada BKL nie jest rekurencyjna",
                                        "Rygle pętlowe nie są używane w systemach jednoprocesorowych w jądrze, które nie wywłaszcza"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** pętlowego Semafory nie mogą być przetrzymywane przez wątki, które już przetrzymują rygle pętlowe.  (Wykład 8)\n• **Opcja b) (TAK):** zapisu Blokady sekwencyjne w prosty sposób pozwalają określić czy operacja odczytu nie została przepleciona z operacją zapisu. (Wykład 8)\n• **Opcja c) (NIE):** Blokada BKL (ang. Big Kernel Lock)  miała  być   rozwiązaniem przejściowym ,  które miało być   zastąpione blokadami o mniejszej ziarnistości. (Wykład 8)\n• **Opcja d) (NIE):** Ponadto BKL jest rekurencyjna, wyłącza wywłaszczanie jądra i można  wykorzystywać ją jedynie w kontekście procesu. (Wykład 8)\n• **Opcja e) (TAK):** wątków Należy również pamiętać,  że rygle nie są rekurencyjne  i  nie są  stosowane w systemach jednoprocesorowych (kompilator wstawia w ich miejsce puste instrukcje lub jeśli podczas kompilacji włączona jest opcja wywłaszczania jądra  zastępuje je funkcjami włączającymi i wyłączającymi wywłaszczanie jądra, opisanymi niżej).  (Wykład 8)"
                        },
                        {
                                "id": "so-m3-003",
                                "type": "single",
                                "question": "Poniżej umieszczono zdania dotyczące obsługi przerwań przez Linuksa 2.6. Które z nich są prawdziwe?",
                                "options": [
                                        "Częstotliwości pojawiania się wszystkich przerwań są wykorzystywane do inicjalizowania",
                                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                                        "Aby procedura obsługi przerwania mogła być wywołana, musi zostać wcześniej zarejestrowana",
                                        "Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję „current”",
                                        "Nie jest wymagane, aby funkcje obsługi przerwań były wielobieżne"
                                ],
                                "correctAnswers": [],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** generatora liczb losowych\n• **Opcja b) (NIE):** W komputerach  kompatybilnych z IBM PC część przerwań jest na stałe przypisana pewnym urządzeniom, a część – w szczególności dla tych urządzeń, które są podłączone z systemem  przez magistralę PCI     lub  nowsze  szyny,   takie  jak PCI - Express,  USB –  jest  przydzielana w  sposób dynamiczny. (Wykład 6)\n• **Opcja c) (NIE):** Każda procedura obsługi przerwania musi zostać zarejestrowana za pośrednictwem funkcji request_irq, która kojarzy funkcję z przerwaniem i uaktywnia daną linię (Wykład 6)\n• **Opcja d) (NIE):** Procedury obsługi przerwań  są wywoływane w kontekście przerwania, co oznacza, że nie są dozwolone w nich wywołania funkcji blokujących oraz nie jest poprawna (ang.   invalid)  wartość  zwracana przez makrodefinicję  current.  (Wykład 6)\n• **Opcja e) (NIE):** Funkcje obsługi przerwań są definiowane  według następującego prototypu (…) Nie wymaga się,  aby funkcje te były wielobieżne,  gdyż wywołanie funkcji powoduje zablokowanie linii z nią związanej. (Wykład 6) Systemy Operacyjne 2 – A. Chrobot"
                        },
                        {
                                "id": "so-m3-004",
                                "type": "single",
                                "question": "Które ze zdań dotyczących synchronizacji są prawdziwe?",
                                "options": [
                                        "Niektóre operacje niepodzielne mogą  być zrealizowane jako pojedyncze rozkazy procesora",
                                        "Przeplot operacji jest przyczyną występowania problemu sekcji krytycznej",
                                        "W system ie Linux w przestrzeni użytkownika wywłaszczenie procesu może zajść tylko w ściśle",
                                        "Zadanie nigdy nie może być wywłaszczone po zakończeniu obsługi przerwania",
                                        "Dostęp do zmiennych lokalnych wątków wykonania nie musi podlegać synchronizacji"
                                ],
                                "correctAnswers": [],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** Operacje niepodzielne (atomowe) na zmiennych prostych typów są zazwyczaj realizowane za pomocą instrukcji maszynowych właściwych dla architektury procesora. (Wykład 8)\n• **Opcja b) (NIE):** Sytuację gdy dla współbieżnie działających elementów aplikacji (wątków lub procesów) pewna operacja może być w danym momencie czasu wykonywana jedynie przez jeden z nich, nazywamy wzajemnym wykluczaniem. W przypadku gdy jakiś element wykonuje operację podlegającą wzajemnemu wykluczaniu (tzw. sekcję krytyczną ), inne elementy próbujące w tym samym czasie wykonywać tę operację muszą zostać zablokowane, aż do jej zakończenia przez pierwszy z nich.\n• **Opcja c) (NIE):** określonym momencie jego działania\n• **Opcja e) (NIE):** W przypadkach gdy trzeba chronić dane,  które są widziane przez  jeden procesor przed dostępem współbieżnym można zrezygnować z rygli  pętlowych i  zastosować zwykłe zablokowanie wywłaszczania."
                        },
                        {
                                "id": "so-m3-005",
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
                                "id": "so-m3-006",
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
                                "explanation": "Wyjaśnienia:\n• Semafory nie mogą być przetrzymywane przez wątki, które już przetrzymują rygle pętlowe.\n• Blokady sekwencyjne w prosty sposób pozwalają określić, czy operacja odczytu nie została\nprzepleciona z operacją zapisu. Przed odczytem jest zapamiętywana wartość licznika. Po wykonaniu\ntej operacji odczytywany jest ponownie licznik i jego wartość porównywana jest z wartością\npoprzednią. Jeśli te wartości są takie same, to można być pewnym, że odczyt nie został przepleciony\nprzez zapis.\n• BKL miała być rozwiązaniem przejściowym, które miało być zastąpione blokadami o mniejszej\nziarnistości.\n• Blokada BKL jest rekurencyjna, wyłącza wywłaszczanie jądra i może być używana tylko w kontekście\nprocesu.\n• Rygle pętlowe nie są rekurencyjne i nie są stosowane w systemach jednoprocesorowych - kompilator\nwstawia w ich miejsce puste instrukcje lub, jeśli podczas kompilacji włączona jest opcja\nwywłaszczania wątków jądra, zastępuje je funkcjami włączającymi i wyłączającymi ich\nwywłaszczanie."
                        },
                        {
                                "id": "so-m3-007",
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
                                "id": "so-m3-008",
                                "type": "multiple",
                                "question": "Które z tw. dot. Obsługi przerwań w Linuksie 2.6 jest prawdziwe?",
                                "options": [
                                        "Obsługa przerwań podzielona na górną i dolną połówkę",
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
                                "id": "so-m3-009",
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
                                "id": "so-m3-010",
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
                                "id": "so-m3-011",
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
                                "id": "so-m3-012",
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
                                "id": "so-m3-013",
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
                                "id": "so-m3-014",
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
                                "explanation": "Wyjaśnienia:\n• Współczesne systemy operacyjne dzielą obsługę przerwań sprzętowych na dwie części: górną i dolną\npołówkę.\n• Górną połówkę stanowią procedury obsługi przerwań, które muszą działać szybko, ponieważ linia\nIRQ z nimi związana, a niekiedy nawet cały system przerwań są wyłączone w trakcie ich\nwykonywania. Zazwyczaj wykonują one tylko niezbędne prace związane z obsługą przerwania, a\npozostałe czynności są odraczane i wykonywane w dolnej połówce.\n• Współczesne urządzenia, używające takich magistral jak USB, PCI, PCI–Express potrzebują dużej\nliczby przerwań, które są przydzielane im dynamicznie (niektóre przerwania są przydzielane\nstatycznie z powodów historycznych). To oznacza, że wiele linii IRQ musi być współdzielone przez te\nurządzenia, co prowadzi do wielu problemów.\n• Procedury obsługi przerwań są wywoływane w kontekście przerwania, co oznacza, że nie są\ndozwolone w nich wywołania funkcji blokujących oraz nie jest przydatna (poza procedurami obsługi\nwyjątków) wartość zwracana przez makrodefinicję current.\n• Procedury obsługi przerwań używają stosu jądra procesu, tak jak inne funkcje jądra. Wielkość stosu\njądra jest ograniczona do dwóch stron, więc w przypadku procesorów x86 ma on rozmiar 8KiB, a dla\nprocesorów Alpha, 16KiB."
                        },
                        {
                                "id": "so-m3-015",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące obsługi przerwań w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "procedury obsługi przerwań w Linuksie są funkcjami napisanymi w języku C.",
                                        "procedury obsługi przerwań są wykonywane w kontekście przerwania.",
                                        "procedury obsługi przerwań są wywoływane w sposób asynchroniczny.",
                                        "linie zgłaszania przerwań (IRQ) mogą być współdzielone.",
                                        "niektóre przerwania mogą zasilać pulę entropii jądra."
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• Kiedy procesor otrzymuje sygnał przerwania, to automatycznie przełącza się w tryb systemowy (o ile\njuż w nim nie był) i wykonuje zależny od jego architektury kod jądra, napisany w assemblerze, który\nodkłada na stos jądra procesu wartości rejestrów i przygotowuje środowisko do wykonania funkcji\nnapisanych w języku C. Tymi funkcjami są procedury obsługi przerwań.\n• Procedury obsługi przerwań w Linuksie wykonywane są w kontekście przerwania. Oznacza to, że ich\ndziałanie podlega kilku ograniczeniom. Przede wszystkim muszą one działać szybko, ponieważ\nobsługa przerwania może wstrzymywać inne istotne operacje w jądrze lub przestrzeni użytkownika.\nProcedura obsługi przerwania nie jest związana z żadnym procesem, w związku z tym nie może\nwywołać żadnych funkcji powodujących przejście procesu w stan oczekiwania.\n• Źródłem zdarzenia obsługiwanego przez jądro może być także urządzenia peryferyjne. Takie\nzdarzenia nazywane są przerwaniami i są asynchroniczne w stosunku do operacji wykonywanych\nprzez jądro. Oznacza to, że mogą one przerwać wykonywanie istotnych czynności, zatem muszą być\nszybko obsłużone. Z uwagi na to, kod jądra zajmujący się tym działaniem (tak zwana procedura\nobsługi przerwania) jest wykonywany w kontekście przerwania, który nie jest związany z żadnym\nprocesem użytkownika.\n• Współczesne urządzenia, używające takich magistral jak USB, PCI, PCI–Express potrzebują dużej\nliczby przerwań, które są przydzielane im dynamicznie (niektóre przerwania są przydzielane\nstatycznie z powodów historycznych). To oznacza, że wiele linii IRQ musi być współdzielone przez te\nurządzenia, co prowadzi do wielu problemów.\n• Współcześnie wszystkie przerwania wnoszą wkład do puli entropii, ale nie bezpośrednio. W ramach\nobsługi przerwania jądro odczytuje kilka wartości z różnych zasobów, które są dobrymi źródłami\nlosowości, jak np. niektóre rejestry CPU."
                        },
                        {
                                "id": "so-m3-016",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące środków synchronizacji w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "funkcje realizujące operacje niepodzielne na liczbach całkowitych działają na zmiennych typu \"int\".",
                                        "niepodzielne operacje na bitach przeprowadzane są za pomocą tych samych funkcji co niepodzielne",
                                        "rygle pętlowe wprowadzają wątki oczekujące na ich zwolnienie w stan aktywnego oczekiwania.",
                                        "zwykły rygiel pętlowy może być przetrzymywany przez kilka wątków jednocześnie.",
                                        "rygle pętlowe nie są używane w systemach jednoprocesorowych."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": "Wyjaśnienia:\n• Aby ujednolicić i zapewnić atomowe operacje dla wszystkich obsługiwanych procesorów, programiści\njądra Linuksa stworzyli typ abstrakcyjny atomic_t. Zmienne tego typu przechowują liczby całkowite,\nzamiast int.\n• Jądro dostarcza osobnych funkcji i makrodefinicji realizujących niepodzielne operacje na\npojedynczych bitach. Makra i funkcje, które implementują niepodzielne operacje na bitach nie\nwymagają specjalnego typu danych.\n• Dany rygiel może przetrzymywać tylko jeden wątek wykonania (zasada wzajemnego wykluczania),\nnatomiast inne wątki chcące skorzystać z chronionego zasobu wykonują aktywne oczekiwanie, czyli\nw pętli oczekują, aż rygiel zostanie zwolniony i jeden z nich będzie mógł uzyskać dostęp do zasobu.\n• Jeśli wątek wykonania próbuje zająć zwykły rygiel pętlowy, który został wcześniej uzyskany przez\ninny wątek, to będzie musiał w pętli sprawdzać, czy ten rygiel został już zwolniony. Są również rygle\npętlowe R-W (ang. Reader–Writer Spin Locks lub R–W Spin Locks). Służą do rozwiązywania\npierwszego problemu czytelników i pisarzy, w którym czytelnicy mają priorytet. Ich API ma osobne\nfunkcje i makra dla wątków-pisarzy i dla wątków-czytelników. Rygiel pętlowy R-W może być zajęty\nprzez więcej niż jednego czytelnika lub nawet kilkukrotnie przez tego samego czytelnika (w tym\nwypadku rygiel R-W jest rekurencyjny).\n• Mimo, że rygle pętlowe są najczęściej używanym rodzajem blokad w kodzie źródłowym jądra\nLinuksa, to w jego wersji skompilowanej występują tylko dla systemów wieloprocesorowych."
                        },
                        {
                                "id": "so-m3-017",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące pomiaru i synchronizacji względem czasu w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "zegar czasu rzeczywistego (RTC) jest okresowo odczytywany przez jądro systemu.",
                                        "liczbę taktów zegara od uruchomienia systemu przechowuje zmienna \"jiffies\".",
                                        "częstotliwość zegara systemowego jest określona stałą \"HZ\".",
                                        "implementacja procedury obsługi przerwania zegarowego jest całkowicie niezależna od sprzętu.",
                                        "wartość stałej \"HZ\" jest taka sama dla wszystkich platform sprzętowych."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": "Wyjaśnienia:\n• Zwykle informacja o bieżącym czasie jest dostarczana przez urządzenie sprzętowe, które jest\nodczytywane przez jądro w trakcie startu systemu, a potem tylko aktualizowana przez procedurę\nobsługi przerwania zegarowego.\n• Liczba przerwań zegarowych wygenerowanych od uruchomienia systemu komputerowego jest\nprzechowywana w 64-bitowej zmiennej jiffies.\n• Częstotliwość zegara systemowego jest określana przez stałą HZ (hertz).\n• W przypadku platform, które wymagają oszczędności energii, jak systemy wbudowane i laptopy,\njądro może zostać skonfigurowane w taki sposób, aby ignorowało stałą HZ i generowało zdarzenia\nczasowe tylko wtedy, gdy są one potrzebne.\n• Wartość stałej HZ w przypadku większości platform obsługiwanych przez Linuksa wynosi 100. Do\nwyjątków zaliczają się komputery bazujące na procesorach x86. W ich przypadku ta stała także miała\nwartość 100 (okres 10ms), ale w serii 2.4 jądra zmieniono ją na 1000 (okres 1ms), aby zaspokoić\npotrzeby multimedialnego oprogramowania użytkowego. Niestety, spowodowała ona także wzrost\nobciążenia CPU obsługą większej liczby przerwań zegarowych. Dodatkowo, opisywana zmiana\nspowodowała problemy z obsługą protokołu NTP (ang. Network Time Protocol). Ostatecznie wartość\nstałej HZ dla komputerów z procesorami x86 została ustalona na 250 (okres 4ms). Wymogi aplikacji\nmultimedialnych zostały spełnione przy użyciu liczników czasu wysokiej rozdzielczości."
                        },
                        {
                                "id": "so-m3-018",
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
                                "id": "so-m3-019",
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
                                "id": "so-m3-020",
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
                                "id": "so-m3-021",
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
                                "id": "so-m3-022",
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
                                "id": "so-m3-023",
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
                                "id": "so-m3-024",
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
                                "id": "so-m3-025",
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
                                "id": "so-m3-026",
                                "type": "multiple",
                                "question": "Ktre z tw. dot. Obsugi przerwa w Linuksie 2.6 jest prawdziwe?;",
                                "options": [
                                        "Obsuga przerwa podzielona na grn i doln powk",
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
                                "id": "so-m3-027",
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
                                "id": "so-m3-028",
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
                                "id": "so-m3-029",
                                "type": "multiple",
                                "question": "Które z poniższych stwierdzeń dotyczących środków synchronizacji w jądrze linux’a 2.6 sąprawdziwe??",
                                "options": [
                                        "Wątek wykonania, który przetrzymuje semafor nie może równocześnie przetrzyma rygla pętlowego",
                                        "Blokady sekwencyjne pozwalają ustalić czy operacja odczytu nie została przepleciona operacjązapisu",
                                        "Blokada BKL jest blokadą gruboziarnistą",
                                        "Blokada BKL nie jest rekurencyjna",
                                        "Rygle pętlowe nie są używane w systemach jednoprocesorowych w jądrze, które nie wyłącza wątków"
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
                                "id": "so-m3-030",
                                "type": "multiple",
                                "question": "Poniżej umieszczono zdania dotyczące obsługi przerwań przez Linuksa 2.6. Które z nich są prawdziwe? -Częstotliwości pojawiania się wszystkich przerwań są wykorzystywane do inicjalizowania generatora liczb losowych",
                                "options": [
                                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                                        "Aby procedura obsługi przerwania mogła być wywołana, musi zostać wcześniej zarejestrowana",
                                        "Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję current",
                                        "Nie jest wymagane, aby procedury obsługi przerwań były wielobieżne"
                                ],
                                "correctAnswers": [
                                        0,
                                        1,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-031",
                                "type": "multiple",
                                "question": "Które z poniższych zdań dotyczących synchronizacji są prawdziwe?? (tu mogą się nie zgadzać odpowiedzi)",
                                "options": [
                                        "Niektóre operacje niepodzielne mogą by zrealizowane jak jeden rozkaz",
                                        "Przeplot operacji jest przyczyną występowania problemu sekcji krytycznej",
                                        "W systemie linux, w przestrzeni użytkownika wywłaszczenie procesu może zajść tylko w ściśle określonym momencie jego działania",
                                        "Zadanie nigdy nie może być wywłaszczone po zakończeniu obsługi przerwania",
                                        "Dostęp do zmiennych lokalnych wątków nie musi podlega synchronizacji"
                                ],
                                "correctAnswers": [
                                        0,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-032",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi przerwa w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "procedury obsugi przerwa w Linuksie s funkcjami napisanymi w jzyku C",
                                        "procedury obsugi przerwa s wykonywane w kontekcie przerwania",
                                        "procedury obsugi przerwa s wywoywane w sposb asynchroniczny",
                                        "linie zgaszania przerwa (IRQ) mog by wspdzielone",
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
                                "id": "so-m3-033",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce rodkw synchronizacji w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "funkcje realizujce operacje niepodzielne na liczbach cakowitych dziaaj na zmiennych typu \"int\"",
                                        "niepodzielne operacje na bitach przeprowadzane s za pomoc tych samych funkcji co niepodzielne operacje na liczbach cakowitych",
                                        "rygle ptlowe wprowadzaj wtki oczekujce na ich zwolnienie w stan aktywnego oczekiwania",
                                        "zwyky rygiel ptlowy moe by przetrzymywany przez kilka wtkw jednoczenie",
                                        "rygle ptlowe nie s uywane w systemach jednoprocesorowych."
                                ],
                                "correctAnswers": [
                                        2,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-034",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce pomiaru i synchronizacji wzgldem czasu w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "zegar czasu rzeczywistego (RTC) jest okresowo odczytywany przez jdro systemu",
                                        "liczb taktw zegara od uruchomienia systemu przechowuje zmienna \"jiffies\"",
                                        "czstotliwo zegara systemowego jest okrelona sta \"HZ\"",
                                        "implementacja procedury obsugi przerwania zegarowego jest cakowicie niezalena od sprztu",
                                        "warto staej \"HZ\" jest taka sama dla wszystkich platform sprztowych."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m3-035",
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
                        }
                ]
        },
        {
                "id": "so-m4",
                "name": "SO: Moduł 4 — Wywołania systemowe i architektura jądra",
                "questions": [
                        {
                                "id": "so-m4-001",
                                "type": "single",
                                "question": "Które ze stwierdzeń dotyczących wywołań systemowych w Linuksie 2.6 są prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywołań systemowych nie jest zalecanym przez twórców jądra sposobem",
                                        "Każde wywołanie systemowe zwraca wartość typu „long”",
                                        "Każde wywołanie systemowe musi przyjmować co najmniej jeden argument wywołania",
                                        "Wszystkie funkcje ze standardowej biblioteki języka C korzystają z wywołań systemowych",
                                        "Funkcja realizująca wywołanie systemowe musi być w całości napisana w assemblerze"
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** dodawania nowej funkcjonalności Dodanie do jądra nowych wywołań systemowych jest kuszącym pomysłem, jednakże wśród twórców jądra Linuksa panuje silna tendencja, aby t ego nie robić. Po dokładnych  rozważaniach można określić następującą listę wad i zalet tworzenia nowych wywołań jądra (Wykład 5)\n• **Opcja b) (NIE):** Każde wywołanie systemowe zwraca wartość typu long, która  stanowi kod błędu. Najczęściej poprawne zakończenie wywołania sygnalizowane jest wartością zero, a wykonanie błędne wartością ujemną.  (Wykład 5)\n• **Opcja c) (NIE):** Wywołania systemowe podobnie jak zwykłe funkcje mogą przyjmować pewną liczbę argumentów wywołania,  lub nie przyjmować ich w ogóle. (Wykład 5)\n• **Opcja e) (NIE):** Zadania  użytkownika nie  wywołują najczęściej bezpośrednio wywołań systemowych lecz robią to za pomocą podprogramów języka wysokiego poziomu. (Wykład 5) Systemy Operacyjne 2 – A. Chrobot"
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
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące wywołań systemowych w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "wszystkie funkcje z biblioteki \"libc\" korzystają z wywołań systemowych.",
                                        "wywołania systemowe mogą nie przyjmować żadnych argumentów.",
                                        "każde wywołanie systemowe zwraca wartość stanowiącą kod jego wykonania.",
                                        "zazwyczaj wywołania systemowe implementowane są w postaci funkcji napisanych w assemblerze.",
                                        "dodanie do jądra nowego wywołania systemowego wymaga modyfikacji biblioteki \"libc\", aby umożliwić"
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": "Wyjaśnienia:\n• API Linuksa jest w większości zaimplementowane w standardowej bibliotece języka C, nazywanej w\nLinuksie glibc (libc w Uniksie). Niektóre z funkcji w niej dostępnych nie używają żadnych wywołań\nsystemowych, np. strcpy().\n• Wywołania systemowe podobnie jak zwykłe funkcje mogą przyjmować pewną liczbę argumentów,\nlub nie przyjmować ich w ogóle.\n• Każde wywołanie systemowe zwraca wartość typu long, która stanowi kod wykonania.\n• Wywołanie systemowe implementowane jest za pomocą funkcji napisanej w języku C.\n• W wersjach jądra od 2.6.18 wywołania systemowe uruchamia się funkcją syscall()."
                        },
                        {
                                "id": "so-m4-004",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące wirtualnego systemu plików (VFS) w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "VFS napisany jest w języku C++.",
                                        "obiekt superbloku może być stosowany w obsłudze systemów plików, które nie mają fizycznej",
                                        "obiekty i-węzłów związane są wyłącznie z fizycznymi plikami.",
                                        "niektóre nieuniksowe systemy plików nie posiadają wszystkich informacji, które muszą być umieszczone",
                                        "obiekty wpisów katalogowych mają swoje odpowiedniki na nośniku danych."
                                ],
                                "correctAnswers": [
                                        1,
                                        3
                                ],
                                "explanation": "Wyjaśnienia:\n• VFS jest w całości zaimplementowany w języku C, ale oparty jest na modelu obiektowym.\n• Wszystkie dane o zamontowanym systemie plików są przechowywane w obiekcie superbloku.\nZazwyczaj odpowiadają one informacjom umieszczonym w superbloku systemu plików w urządzeniu\npamięci masowej. Istnieją jednak systemy plików utrzymywane całkowicie w RAM, jak sysfs i procfs,\nktóre nie mają fizycznego superbloku. W ich przypadku zawartość obiektu superbloku jest całkowicie\nwygenerowana.\n• Obiekty i-węzłów mogą być związane nie tylko z fizycznymi plikami, ale również z plikami\nspecjalnymi, np. plikami urządzeń lub kolejek FIFO.\n• W systemach plików kompatybilnych z Uniksem obiekty i-węzłów reprezentują bloki i-węzłów, ale w\nprzypadku innych systemów dane dla tych obiektów są pobierane bezpośrednio z plików lub innych\nmiejsc na nośniku. Są również systemy plików, które nie mają wszystkich danych wymaganych przez\nobiekty i-węzłów. Wtedy używane są wartości domyślne.\n• Obiekty wpisów katalogowych (dentry) są związane z każdą nazwą, która pojawia się w ścieżce.\nObiekty dentry reprezentują również nazwy plików znajdujące się na końcach niektórych ścieżek i\npunkty montowania, które mogą występować w ścieżkach. Te obiekty nie mają swoich\nodpowiedników na nośniku. Są one tworzone na bieżąco, podczas analizy ścieżek i niezbędne do\nprzeprowadzania operacji specyficznych dla katalogów, takich jak poruszanie się po drzewie\nkatalogów."
                        },
                        {
                                "id": "so-m4-005",
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
                                "id": "so-m4-006",
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
                                "id": "so-m4-007",
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
                                "id": "so-m4-008",
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
                                "id": "so-m4-009",
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
                                "id": "so-m4-010",
                                "type": "multiple",
                                "question": "Ktre ze stwierdze dotyczcych wywoa systemowych w Linuksie 2.6 s prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywoa systemowych nie jest zalecanym przez twrcw jdra sposobem dodawania nowej funkcjonalnoci. |",
                                        "Kade wywoywanie systemowe zwraca warto typu long. |    tak",
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
                                "id": "so-m4-011",
                                "type": "multiple",
                                "question": "Określ, które informacje dotyczące wywołani systemowych w Linuksie 3.0 i nowszych są prawdziwe:",
                                "options": [
                                        "adresy wszystkich zarejestrowanych wywołań systemowych są przechowywane w specjalnej tablicy",
                                        "kod funkcji implementującej wywołanie systemowe może być umieszczony w module",
                                        "dodawanie nowych wywołań systemowych jest zalecaną przez programistów jądra Linuksa praktyką",
                                        "część procesorów wymaga, aby argumenty do funkcji implementujących wywołania systemowe były przekazywane wyłącznie przez stos",
                                        "funkcja implementująca wywołanie systemowe musi sprawdzać poprawność przekazanych jej argumentów."
                                ],
                                "correctAnswers": [
                                        0,
                                        3,
                                        4
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-012",
                                "type": "multiple",
                                "question": "Które z poniższych zdań dotyczących wywołań systemowych w Linuks 2.6 są prawdziwe?",
                                "options": [
                                        "Dodawanie nowych wywołań systemowych nie jest zalecanym sposobem przez twórców jądra sposobem dodawania nowej funkcjonalności",
                                        "Każde wywołanie systemowe zwraca wartość typu long",
                                        "Każde wywołanie systemowe musi zawiera, co najmniej 1 argument wywołania",
                                        "Wszystkie funkcje ze standardowej biblioteki jezyka c korzystają z wołań systemowych",
                                        "Funkcja realizująca wywołania systemowe musi być całości napisana w asemblerze"
                                ],
                                "correctAnswers": [
                                        0,
                                        1
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-013",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce wywoa systemowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "wszystkie funkcje z biblioteki \"libc\" korzystaj z wywoa systemowych",
                                        "wywoania systemowe mog nie przyjmowa adnych argumentw",
                                        "kade wywoanie systemowe zwraca warto stanowic kod jego wykonania",
                                        "zazwyczaj wywoania systemowe implementowane s w postaci funkcji napisanych w assemblerze",
                                        "dodanie do jdra nowego wywoania systemowego wymaga modyfikacji biblioteki \"libc\", aby umoliwi procesom uytkownika korzystanie z niego."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-014",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce wywoani systemowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "adresy wszystkich zarejestrowanych wywoa systemowych s przechowywane w specjalnej tablicy",
                                        "kod funkcji implementujcej wywoanie systemowe moe by umieszczony w module",
                                        "dodawanie nowych wywoa systemowych jest zalecan przez programistw jdra Linuksa praktyk",
                                        "cz procesorw wymaga, aby argumenty do funkcji implementujcych wywoania systemowe byy przekazywane wycznie przez stos",
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
                                "id": "so-m4-015",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce wirtualnego systemu plikw (VFS) w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "VFS napisany jest w jzyku C++",
                                        "obiekt superbloku moe by stosowany w obsudze systemw plikw, ktre nie maj fizycznej implementacji",
                                        "obiekty i-wzw zwizane s wycznie z fizycznymi plikami",
                                        "niektre nieuniksowe systemy plikw nie posiadaj wszystkich informacji, ktre musz by umieszczone w obiekcie i-wza",
                                        "obiekty wpisw katalogowych maj swoje odpowiedniki na noniku danych."
                                ],
                                "correctAnswers": [
                                        1,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-m4-016",
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
                                "id": "so-m4-017",
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
                                "id": "so-m4-018",
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
                                "id": "so-m4-019",
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
                                "id": "so-m4-020",
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
                                "id": "so-m4-021",
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
                                "id": "so-m4-022",
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
                                "id": "so-m4-023",
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
                                "id": "so-m4-024",
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
                                "id": "so-m4-025",
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
                                "id": "so-m4-026",
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
                                "id": "so-m4-027",
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
                                "id": "so-m4-028",
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
                                "id": "so-m4-029",
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
                                "id": "so-m4-030",
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
                                "id": "so-m4-031",
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
                        },
                        {
                                "id": "so-m4-032",
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
                                "id": "so-m4-033",
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
                                "id": "so-m4-034",
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
                                "id": "so-m4-035",
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
                        }
                ]
        },
        {
                "id": "so-final",
                "name": "SO: Egzamin końcowy",
                "questions": [
                        {
                                "id": "so-final-001",
                                "type": "multiple",
                                "question": "Ktre stwierdzenia s prawidowe?; Mechanizm RCU posuguje si wskanikami.",
                                "options": [
                                        "Kod w mechanizmie RCU moe ulec zawieszeniu.",
                                        "Odczyty w mechanizmie RCU powinny byc czste, a zapisy sporadyczne.",
                                        "Rygle ptlowe powinny by stosowane wszdzie tam, gdzie nie mona zawiesi wtku i gdzie czas przeczania kontekstu byby niewspmiernie duszy z czasem aktywnego oczekiwania.",
                                        "Rygle ptlowe s rekurencyjne."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-002",
                                "type": "multiple",
                                "question": "Które stwierdzenia są prawidłowe?; Mechanizm RCU posługuje się wskaźnikami.",
                                "options": [
                                        "Kod w mechanizmie RCU może ulec zawieszeniu.",
                                        "Odczyty w mechanizmie RCU powinny byc częste, a zapisy sporadyczne.",
                                        "Rygle pętlowe powinny być stosowane wszędzie tam, gdzie nie można zawiesić wątku i gdzie czas przełączania kontekstu byłby niewspółmiernie dłuższy z czasem aktywnego oczekiwania.",
                                        "Rygle pętlowe są rekurencyjne."
                                ],
                                "correctAnswers": [
                                        1,
                                        2
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-003",
                                "type": "single",
                                "question": "Okrel, ktre informacje dotyczce dolnych powek w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "cakowita liczba przerwa programowych jest ograniczona",
                                        "przerwania programowe s wykonywane w kontekcie procesu",
                                        "tasklety s wykonywane w kontekcie procesu",
                                        "czynnoci z kolejek prac s wykonywane w kontekcie przerwania",
                                        "mona precyzyjne okreli czas, po ktrym przerwanie programowe powinno by wykonane."
                                ],
                                "correctAnswers": [
                                        0
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-004",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce zarzdzania pamici w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "Linux obsuguje systemy wieloprocesorowe o organizacji NUMA",
                                        "domylnie Linux przydziela pami ze strefy DMA (ZONE_DMA)",
                                        "podstawowym mechanizmem sprztowym wykorzystywanym przez Linuksa do obsugi pamici jest segmentacja",
                                        "nie we wszystkich platformach sprztowych musi wystpowa strefa pamici wysokiej (ZONE_HIGHMEM)",
                                        "niskopoziomowy mechanizm obsugi pamici umoliwia przydzielenie obszaru pamici o wielkoci jednego bajta."
                                ],
                                "correctAnswers": [
                                        0,
                                        3
                                ],
                                "explanation": ""
                        },
                        {
                                "id": "so-final-005",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi urzdze znakowych i blokowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "urzdzenia obsugiwane przez Linuksa s wycznie urzdzeniami fizycznymi",
                                        "w komputerach klasy PC kontroler jest zawsze czci struktury sprztowej czcej szyn wejcia-wyjcia z urzdzeniem",
                                        "rejestr moe peni wicej ni jedn funkcj",
                                        "numer gwny identyfikuje sterownik obsugujcy urzdzenie lub grup urzdze",
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
                                "id": "so-final-006",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce warstwy operacji blokowych w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "wielko bloku w Linuksie jest nieograniczona",
                                        "kady bufor zawsze jest zwizany z blokiem na noniku danych",
                                        "bufory s wykorzystywane wycznie do przechowywania danych odczytanych z nonika urzdzenia blokowego",
                                        "kady z buforw wyposaony jest w nagwek zawierajcy dane niezbdne do zarzdzania nim",
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
                                "id": "so-final-007",
                                "type": "multiple",
                                "question": "Okrel, ktre informacje dotyczce obsugi sieci w Linuksie 3.0 i nowszych s prawdziwe:",
                                "options": [
                                        "jdro wykonuje czynnoci zwizane z obsug warstwy cza, sieci i transportowej modelu ISO/OSI",
                                        "NAPI nigdy nie pozwala na sygnalizowanie odbioru pakietu za pomoc przerwania",
                                        "przenoszenie bufora pakietu midzy kolejkami jest czasochonne",
                                        "funkcje zwizane z filtrem sieciowym mog \"wykrada\" niektre pakiety, aby przetworzy je w inny sposb ni pozostae",
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
    "dbVersion": 3
};
