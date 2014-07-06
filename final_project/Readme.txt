Il lavoro è stato svolto importando un appartamento creato con larcc e aggiungendo altri dettagli con three.js.
Tutte le specifiche generali del corso sono state rispettate con l'inserimento di geometrie di ogni tipo e con
l'eventuale aggiunta di texture, luci, .obj esterni, shape con eventuali buchi, telecamera in prima persona
controllabile da tastiera, animazioni, interazioni con gli oggetti. In particolare: le texture sono applicate 
a pavimenti e a pareti e nel caso di mattonelle è stato usato un bump per mostrare la profondità; le luci sono
state implementate come spotlight con l'idea iniziale di poter inserire le ombre ma ciò non è stato possibile per 
un limite fisico del pc(suppongo); sono stati importati oggetti esterni .obj per cercare di dare ulteriore dettaglio
alla casa ma non sono riuscito a trovarne quanto desideravo che funzionassero sia come forma che come materiale, 
quindi il dettaglio purtroppo è basso; uno di questi .obj è una tv a cui ho applicato una geometry per poter applicare
un video attivabile tramite l'interazione con il mouse; le animazioni riguardano porte e finestre in modo da avere
un effetto "reale" del movimento e sono attivabili tramite le relative maniglie; per la costruzione dei paralumi
ho usato una libreria esterna ThreeCSG per l'implementazione di funzioni di differenza, unione o intersezione di
oggetti mesh; la telecamera in prima persona, attivabile tramite l'apposito tasto sulla gui, è stata creata come 
"chase" camera, ovvero una camera che "insegue" un target comandabile da tastiera. In particolare i tasti w-a-s-d
permettono di andare avanti/indietro o ruotare a destra/sinistra mentre q-e permettono di muoversi lateralmente a
destra/sinistra. Per questa camera è stata inserita una libreria esterna THREEx.KeyboardState che permetteva l'input
da tastiera.