from larcc import *

#DEFINIZIONE DI FUNZIONI

def larDomain(shape):
	V,CV = larSimplexGrid(shape)
	V = scalePoints(V, [1./d for d in shape])
	return V,CV

def larIntervals(shape):
	def larIntervals0(size):
		V,CV = larDomain(shape)
		V = scalePoints(V, [scaleFactor for scaleFactor in size])
		return V,CV
	return larIntervals0

def larMap(coordFuncs):
	def larMap0(domain):
		V,CV = domain
		V = TRANS(CONS(coordFuncs)(V)) # plasm CONStruction
		return V,CV
	return larMap0

def larCylinder(params):
	radius,height= params
	def larCylinder0(shape=[36,1]):
		domain = larIntervals(shape)([PI,1])
		V,CV = domain
		x = lambda V : [radius*COS(p[0]) for p in V]
		y = lambda V : [radius*SIN(p[0]) for p in V]
		z = lambda V : [height*p[1] for p in V]
		mapping = [x,y,z]
		model = larMap(mapping)(domain)
		return model
	return larCylinder0

def larRod(params):
	radius,height= params
	def larRod0(shape=[36,1]):
		V,CV = checkModel(larCylinder(params)(shape))
		return V,[range(len(V))]
	return larRod0

#DEFINISCO I VERTICI PER PAVIMENTO E PARETI PER IL SOLO PRIMO PIANO

V = [[3,3],[15,3],[4,4],[14,4],[4,14],[14,14],[3,15],[15,15]]

#CREO IL PAVIMENTO

PAVIMENTOV = [[2,3,4,5]]
MODELPAVIMENTO = V,PAVIMENTOV
PAVIMENTO = PROD([STRUCT(MKPOLS(MODELPAVIMENTO)),Q(1)])

#CREO LE PARETI

PARETIV = [[0,1,2,3],[0,2,4,6],[1,3,5,7],[4,5,6,7]]
MODELPARETI = V,PARETIV
PARETEINFERIORE = COLOR([0.184,0.309,0.334])(PROD([STRUCT(MKPOLS(MODELPARETI)),Q(2)]))
PARETESUPERIORE = COLOR(WHITE)(T(3)(2)(PROD([STRUCT(MKPOLS(MODELPARETI)),Q(2)])))

#IMPOSTAZIONE DELLA GRIGLIA(TEXTURE)

PIASTRELLA = CUBOID([0.5,0.1,0.5])
MIDPIASTRELLE = [T(1)(0.6),PIASTRELLA]
RIGAPIASTRELLE = STRUCT(NN(20)(MIDPIASTRELLE))
TRIDPIASTRELLE = [T(3)(0.6),RIGAPIASTRELLE]
PARETEPIASTRELLE = STRUCT(NN(3)(TRIDPIASTRELLE))
PARETENOPIASTRELLE = STRUCT([CUBOID([12.2,0.1,2])])
PARETEFINALE = DIFFERENCE([PARETENOPIASTRELLE,T([1,3])([-.5,-.5])(PARETEPIASTRELLE)])

PARETESUD = T([1,2])([2.9,2.9])(PARETEFINALE)
PARETENORD = T([1,2])([2.9,15.1])PARETEFINALE)
PARETEEST = T([1,2])([3,2.9])(R([1,2])(PI/2)(PARETEFINALE))
PARETEOVEST = T([1,2])([15.1,2.9])(R([1,2])(PI/2)(PARETEFINALE))
GRIGLIA = COLOR([0.184,0.309,0.384])(STRUCT([PARETESUD,PARETEEST,PARETEOVEST,PARETENORD]))
PARETEINFERIORE = STRUCT([GRIGLIA,PARETEINFERIORE])

PARETI = STRUCT([PARETEINFERIORE,PARETESUPERIORE])

#CREO LA BASE DELLA STRUTTURA

BASE = STRUCT([PAVIMENTO,PARETI])

#CREO IL TETTO

TV = [[1,1,0],[17,1,0],[4,4,2],[14,4,2],[4,4,0],[14,4,0],[1,17,0],[4,14,0],[4,14,2],[14,14,0],[14,14,2],[17,17,0]]
TETTO = T(3)(4)(STRUCT([JOIN(AA(MK)(TV))]))

#CREAZIONE DELLE TEGOLE PER IL TETTO

TEGOLA = R([3,2])(5*PI/16)(R([2,2])(PI)(STRUCT(MKPOLS(larRod([0.2,1.5])([18,1])))))
MIDTEGOLA = [T(1)(0.4),TEGOLA]
RIGATEGOLE1 = T([1,2,3])([1,1,4])(STRUCT(NN(39)(MIDTEGOLA)))
RIGATEGOLE2 = T([1,2,3])([1.8,1.8,4.8])(STRUCT(NN(35)(MIDTEGOLA)))
RIGATEGOLE3 = T([1,2,3])([2.6,2.6,5.6])(STRUCT(NN(31)(MIDTEGOLA)))

TETTOSUD = STRUCT([RIGATEGOLE1,RIGATEGOLE2,RIGATEGOLE3])
TETTONORD = T([1,2,3])([18,18,0])(R([1,2])(PI)(TETTOSUD))
TETTOEST = T([1,2,3])([18,0,0])(R([1,2])(PI/2)(TETTOSUD))
TETTOOVEST = T([1,2,3])([0,18,0])(R([1,2])(-PI/2)(TETTOSUD))

TETTOTEGOLE = COLOR([0.497,0.858,0.858])(STRUCT([TETTOSUD,TETTONORD,TETTOOVEST,TETTOEST]))

TETTOFINALE = STRUCT([TETTOTEGOLE,TETTO])

#ASSEMBLO IL PRIMO PIANO

PRIMOPIANO = STRUCT([TETTOFINALE,BASE])

#REPLICO IL PRIMO PIANO PER CREARE L'INTERA STRUTTURA

SECONDOPIANO = T([1,2,3])([1.5,1.5,6])(S([1,2,3])([0.83,0.83,0.83])(PRIMOPIANO))
TERZOPIANO = T([1,2,3])([2.8,2.8,11])(S([1,2,3])([0.69,0.69,0.75])(PRIMOPIANO))
QUARTOPIANO = T([1,2,3])([3.9,3.9,15.5])(S([1,2,3])([0.57,0.57,0.75])(PRIMOPIANO))

#CREO LA CIMA

CV = [[0,0,0],[2,0,0],[0,2,0],[2,2,0],[1,0,1],[1,2,1]]
PUNTA = COLOR([0.184,0.309,0.334])(T([1,2,3])([4,4,6])(S([1,2,3])([5,5,3])(STRUCT([JOIN(AA(MK)(CV))]))))
CIMA = T([1,2,3])([4.5,4.5,20])(S([1,2,3])([0.5,0.5,0.6])(STRUCT([PUNTA,PRIMOPIANO])))

#CREARE LE TEGOLE ANCHE PER LA CIMA DELLA COSTRUZIONE

TEGOLA = R([3,2])(5*PI/16)(R([2,2])(PI)(STRUCT(MKPOLS(larRod([0.2,1.5])([18,1])))))
MIDTEGOLA = [T(1)(0.4),TEGOLA]
RIGATEGOLE1 = T([1,2,3])([12,6.2,23.3])(R([1,2])(PI/2)(STRUCT(NN(13)(MIDTEGOLA))))
RIGATEGOLE2 = T([1,2,3])([11.1,6.2,24.1])(R([1,2])(PI/2)(STRUCT(NN(13)(MIDTEGOLA))))
RIGATEGOLE3 = T([1,2,3])([10.2,6.2,24.9])(R([1,2])(PI/2)(STRUCT(NN(13)(MIDTEGOLA))))

TETTOEST = STRUCT([RIGATEGOLE1,RIGATEGOLE2,RIGATEGOLE3])
TETTOOVEST = T([1,2,3])([18,18,0])(R([1,2])(PI)(STRUCT([RIGATEGOLE1,RIGATEGOLE2,RIGATEGOLE3])))

TETTOCIMA = COLOR([0.497,0.858,0.858])(STRUCT([TETTOEST,TETTOOVEST]))

CIMA = STRUCT([CIMA,TETTOCIMA])

#DETTAGLI PER LA CIMA

TRIV1 = [[0,0,0],[0,1,0],[6,0,6],[6,1,6],[12,0,0],[12,1,0]]
TRIANGOLO1 = STRUCT([JOIN(AA(MK)(TRIV1))])
TRIV2 = [[2,0,1],[2,1,1],[6,0,5],[6,1,5],[10,0,1],[10,1,1]]
TRIANGOLO2 = STRUCT([JOIN(AA(MK)(TRIV2))])
TRIANGOLO = DIFFERENCE([TRIANGOLO1,T(1)(0)(TRIANGOLO2)])

TRIANGOLOSUD = T([1,2,3])([6.5,6.3,23.85])(S([1,2,3])([0.42,0.4,0.3])(TRIANGOLO))
TRIANGOLONORD = T(2)(5)(TRIANGOLOSUD)

CIMA = STRUCT([CIMA,TRIANGOLOSUD,TRIANGOLONORD])

#RISULTATO

MODEL = STRUCT([PRIMOPIANO,SECONDOPIANO,TERZOPIANO,QUARTOPIANO,CIMA])
VIEW(MODEL)