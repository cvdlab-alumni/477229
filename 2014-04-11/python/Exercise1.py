from larcc import *

#DEFINISCO I VERTICI PER PAVIMENTO E PARETI PER IL SOLO PRIMO PIANO

V = [[3,3],[15,3],[4,4],[14,4],[4,14],[14,14],[3,15],[15,15]]

#CREO IL PAVIMENTO

PAVIMENTOV = [[2,3,4,5]]
MODELPAVIMENTO = V,PAVIMENTOV
PAVIMENTO = PROD([STRUCT(MKPOLS(MODELPAVIMENTO)),Q(1)])

#CREO LE PARETI

PARETIV = [[0,1,2,3],[0,2,4,6],[1,3,5,7],[4,5,6,7]]
MODELPARETI = V,PARETIV
PARETEINFERIORE = COLOR(BLUE)(PROD([STRUCT(MKPOLS(MODELPARETI)),Q(2)]))
PARETESUPERIORE = COLOR(WHITE)(T(3)(2)(PROD([STRUCT(MKPOLS(MODELPARETI)),Q(2)])))
PARETI = STRUCT([PARETEINFERIORE,PARETESUPERIORE])

#CREO LA BASE DELLA STRUTTURA

BASE = STRUCT([PAVIMENTO,PARETI])

#CREO IL TETTO

TV = [[1,1,0],[17,1,0],[4,4,2],[14,4,2],[4,4,0],[14,4,0],[1,17,0],[4,14,0],[4,14,2],[14,14,0],[14,14,2],[17,17,0]]
TETTO = T(3)(4)(STRUCT([JOIN(AA(MK)(TV))]))

#ASSEMBLO IL PRIMO PIANO

PRIMOPIANO = STRUCT([TETTO,BASE])

#REPLICO IL PRIMO PIANO PER CREARE L'INTERA STRUTTURA

SECONDOPIANO = T([1,2,3])([1.5,1.5,6])(S([1,2,3])([0.83,0.83,0.83])(PRIMOPIANO))
TERZOPIANO = T([1,2,3])([2.8,2.8,11])(S([1,2,3])([0.69,0.69,0.75])(PRIMOPIANO))
QUARTOPIANO = T([1,2,3])([3.9,3.9,15.5])(S([1,2,3])([0.57,0.57,0.75])(PRIMOPIANO))

#CREO LA CIMA

CV = [[0,0,0],[2,0,0],[0,2,0],[2,2,0],[1,0,1],[1,2,1]]
PUNTA = T([1,2,3])([4,4,6])(S([1,2,3])([5,5,2])(STRUCT([JOIN(AA(MK)(CV))])))
CIMA = T([1,2,3])([4.5,4.5,20])(S([1,2,3])([0.5,0.5,0.75])(STRUCT([PUNTA,PRIMOPIANO])))

#RISULTATO

MODEL = STRUCT([PRIMOPIANO,SECONDOPIANO,TERZOPIANO,QUARTOPIANO,CIMA])
VIEW(MODEL)