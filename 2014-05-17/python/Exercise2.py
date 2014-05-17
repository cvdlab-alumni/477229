from larcc import *

def cellNumbering (larModel,hpcModel):
   V,CV = larModel
   def cellNumbering0 (cellSubset,color=WHITE,scalingFactor=1,appo=0):
      text = TEXTWITHATTRIBUTES (TEXTALIGNMENT='centre', TEXTANGLE=0, 
                     TEXTWIDTH=0.1*scalingFactor, 
                     TEXTHEIGHT=0.2*scalingFactor, 
                     TEXTSPACING=0.025*scalingFactor)
      hpcList = [hpcModel]
      for cell in cellSubset:
         point = CCOMB([V[v] for v in CV[cell]])
         hpcList.append(T([1,2,3])(point)(COLOR(color)(text(str(cell+appo)))))
      return STRUCT(hpcList)
   return cellNumbering0

#PREPARAZIONE PRIMO BLOCCO

contacelle = 0

masterBlocco1 = assemblyDiagramInit([2,3,2])([[1,14],[1,14,1],[1,10]])
V,CV = masterBlocco1
hpcBlocco1 = SKEL_1(STRUCT(MKPOLS(masterBlocco1)))
hpcBlocco1 = cellNumbering (masterBlocco1,hpcBlocco1)(range(len(CV)),CYAN,2)
hpcBlocco1 = T(2)(7)(hpcBlocco1)
VIEW(hpcBlocco1)

diagramBlocco1 = assemblyDiagramInit([3,1,3])([[4,6,4],[1],[4,5,1]])
masterBlocco1 = diagram2cell(diagramBlocco1,masterBlocco1,7)
hpcBlocco1 = SKEL_1(STRUCT(MKPOLS(masterBlocco1)))
hpcBlocco1 = cellNumbering(masterBlocco1,hpcBlocco1)(range(len(masterBlocco1[1])),CYAN,2)
VIEW(hpcBlocco1)

#RIMOZIONE DELLA FINESTRA E DELL'INTERNO DELLA STANZA

toRemove = [8,15]
masterBlocco1 = masterBlocco1[0],[cell for k,cell in enumerate(masterBlocco1[1]) if not (k in toRemove)]
masterBlocco1 = T(2)(7)(STRUCT(MKPOLS(masterBlocco1)))
VIEW(masterBlocco1)

#PREPARAZIONE DEL SECONDO BLOCCO

contacelle = len(CV)

masterBlocco2 = assemblyDiagramInit([7,3,2])([[1,8,1,8,1,14,1],[1,14,1],[1,10]])
V,CV = masterBlocco2
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering (masterBlocco2,hpcBlocco2)(range(len(CV)),CYAN,2,contacelle)
hpcBlocco2 = T(1)(15)(hpcBlocco2)
VIEW(hpcBlocco2)

#SVUOTAMENTO DELLE 3 STANZE DEL SECONDO BLOCCO

toRemove = [9,21,33]
masterBlocco2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
VIEW(masterBlocco2)

toMerge = 7
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco2 = assemblyDiagramInit([3,1,3])([[2,4,2],[1],[4,5,1]])
masterBlocco2 = diagram2cell(diagramBlocco2,masterBlocco2,toMerge)
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering(masterBlocco2,hpcBlocco2)(range(len(masterBlocco2[1])),CYAN,2)
VIEW(hpcBlocco2)

#RIMOZIONE DELLE VARIE FINESTRE

toRemove = [42]
masterBlocco2 = masterBlocco2[0],[cell for k,cell in enumerate(masterBlocco2[1]) if not (k in toRemove)]
VIEW(masterBlocco2)

toMerge = 17
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco2 = assemblyDiagramInit([3,1,3])([[2,4,2],[1],[4,5,1]])
masterBlocco2 = diagram2cell(diagramBlocco2,masterBlocco2,toMerge)
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering(masterBlocco2,hpcBlocco2)(range(len(masterBlocco2[1])),CYAN,2)
VIEW(hpcBlocco2)

toRemove = [49]
masterBlocco2 = masterBlocco2[0],[cell for k,cell in enumerate(masterBlocco2[1]) if not (k in toRemove)]
VIEW(masterBlocco2)

toMerge = 27
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco2 = assemblyDiagramInit([5,1,3])([[2,4,2,4,2],[1],[4,5,1]])
masterBlocco2 = diagram2cell(diagramBlocco2,masterBlocco2,toMerge)
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering(masterBlocco2,hpcBlocco2)(range(len(masterBlocco2[1])),CYAN,2)
VIEW(hpcBlocco2)

toRemove = [56,62]
masterBlocco2 = masterBlocco2[0],[cell for k,cell in enumerate(masterBlocco2[1]) if not (k in toRemove)]
VIEW(masterBlocco2)

#RIMOZIONE DELLE VARIE PORTE

toMerge = 9
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco2 = assemblyDiagramInit([3,1,2])([[4,3,1],[1],[7,3]])
masterBlocco2 = diagram2cell(diagramBlocco2,masterBlocco2,toMerge)
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering(masterBlocco2,hpcBlocco2)(range(len(masterBlocco2[1])),CYAN,2)
VIEW(hpcBlocco2)

toRemove = [66]
masterBlocco2 = masterBlocco2[0],[cell for k,cell in enumerate(masterBlocco2[1]) if not (k in toRemove)]
VIEW(masterBlocco2)

toMerge = 18
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco2 = assemblyDiagramInit([3,1,2])([[1,3,4],[1],[7,3]])
masterBlocco2 = diagram2cell(diagramBlocco2,masterBlocco2,toMerge)
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering(masterBlocco2,hpcBlocco2)(range(len(masterBlocco2[1])),CYAN,2)
VIEW(hpcBlocco2)

toRemove = [70]
masterBlocco2 = masterBlocco2[0],[cell for k,cell in enumerate(masterBlocco2[1]) if not (k in toRemove)]
VIEW(masterBlocco2)

toMerge = 27
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco2 = assemblyDiagramInit([3,1,2])([[2,3,9],[1],[7,3]])
masterBlocco2 = diagram2cell(diagramBlocco2,masterBlocco2,toMerge)
hpcBlocco2 = SKEL_1(STRUCT(MKPOLS(masterBlocco2)))
hpcBlocco2 = cellNumbering(masterBlocco2,hpcBlocco2)(range(len(masterBlocco2[1])),CYAN,2)
VIEW(hpcBlocco2)

toRemove = [74]
masterBlocco2 = masterBlocco2[0],[cell for k,cell in enumerate(masterBlocco2[1]) if not (k in toRemove)]
masterBlocco2 = T(1)(15)(STRUCT(MKPOLS(masterBlocco2)))
VIEW(masterBlocco2)

#PREPARAZIONE DEL TERZO BLOCCO

contacelle += len(CV)

masterBlocco3 = assemblyDiagramInit([3,2,2])([[1,26,1],[7,1],[1,10]])
V,CV = masterBlocco3
hpcBlocco3 = SKEL_1(STRUCT(MKPOLS(masterBlocco3)))
hpcBlocco3 = cellNumbering (masterBlocco3,hpcBlocco3)(range(len(CV)),CYAN,2,contacelle)
hpcBlocco3 = T([1,2])([15,15])(hpcBlocco3)
VIEW(hpcBlocco3)

#SVUOTAMENTO DELL'ULTIMO BLOCCO

toRemove = [5]
masterBlocco3 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
VIEW(masterBlocco3)

toMerge = 1
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco3 = assemblyDiagramInit([1,3,2])([[1],[4,2,1],[7,3]])
masterBlocco3 = diagram2cell(diagramBlocco3,masterBlocco3,toMerge)
hpcBlocco3 = SKEL_1(STRUCT(MKPOLS(masterBlocco3)))
hpcBlocco3 = cellNumbering(masterBlocco3,hpcBlocco3)(range(len(masterBlocco3[1])),CYAN,2)
VIEW(hpcBlocco3)

#RIMOZIONE DELLE PORTE

toRemove = [12]
masterBlocco3 = masterBlocco3[0],[cell for k,cell in enumerate(masterBlocco3[1]) if not (k in toRemove)]
VIEW(masterBlocco3)

toMerge = 5
cell = MKPOL([masterBlocco2[0],[[v+1 for v in  masterBlocco2[1][toMerge]]],None])

diagramBlocco3 = assemblyDiagramInit([3,1,2])([[16,8,2],[1],[7,3]])
masterBlocco3 = diagram2cell(diagramBlocco3,masterBlocco3,toMerge)
hpcBlocco3 = SKEL_1(STRUCT(MKPOLS(masterBlocco3)))
hpcBlocco3 = cellNumbering(masterBlocco3,hpcBlocco3)(range(len(masterBlocco3[1])),CYAN,2)
VIEW(hpcBlocco3)

toRemove = [16]
masterBlocco3 = masterBlocco3[0],[cell for k,cell in enumerate(masterBlocco3[1]) if not (k in toRemove)]
masterBlocco3 = T([1,2])([15,15])(STRUCT(MKPOLS(masterBlocco3)))
VIEW(masterBlocco3)

#VISUALIZZAZIONE D'INSIEME

VIEW(STRUCT([hpcBlocco1,hpcBlocco2,hpcBlocco3]))

appartamento = STRUCT([masterBlocco1,masterBlocco2,masterBlocco3])
appartamento_bis = S(1)(-1)(appartamento)
appartamenti = T(2)(-39)(STRUCT([appartamento_bis,appartamento]))
appartamenti_bis = S(2)(-1)(appartamenti)

pianerottolo1 = CUBOID([43,16,1])
pianerottolo2 = STRUCT([S(1)(-1)(pianerottolo1),pianerottolo1])
pianerottolo = STRUCT([S(2)(-1)(pianerottolo2),pianerottolo2])

tromba_scale1 = CUBOID([10,8,1])
tromba_scale2 = STRUCT([S(1)(-1)(tromba_scale1),tromba_scale1])
tromba_scale = STRUCT([S(2)(-1)(tromba_scale2),tromba_scale2])

pareti_pianerottolo1 = T([1,2])([43,-16])(CUBOID([1,32,10]))
pareti_pianerottolo = STRUCT([S(1)(-1)(pareti_pianerottolo1),pareti_pianerottolo1])

pianerottolo = DIFFERENCE([pianerottolo,tromba_scale])
piano = STRUCT([appartamenti,appartamenti_bis,pianerottolo,pareti_pianerottolo])
appo = [T(3)(11),piano]
edificio = COLOR([0.97,0.27,0.05])(STRUCT(NN(10)(appo)))

#SCALA

gradino = CUBOID([2,8,1])
appo = [T([1,3])([2,1]),gradino]
meta_scala = T([1,3])([-2,-1])(STRUCT(NN(10)(appo)))
scala = STRUCT([meta_scala,T([1,3])([20,11])(R([1,2])(PI)(meta_scala))])
appo2 = [T(3)(22),scala]
scala = T([1,3])([-10,-10])(STRUCT(NN(5)(appo2)))

condominio = STRUCT([edificio,scala,T(3)(11)(tromba_scale)])

#TETTO

tetto = CUBOID([49,39,1])
tetto = STRUCT([S(1)(-1)(tetto),tetto])
tetto = T(3)(121)(STRUCT([S(2)(-1)(tetto),tetto]))

antitetto1 = T([2,3])([32,121])(STRUCT([CUBOID([15,7,1]),S(1)(-1)(CUBOID([15,7,1]))]))
antitetto1 = STRUCT([antitetto1,S(2)(-1)(antitetto1)])

antitetto2 = T([1,3])([44,121])(STRUCT([CUBOID([5,23,1]),S(2)(-1)(CUBOID([5,23,1]))]))
antitetto2 = STRUCT([antitetto2,S(1)(-1)(antitetto2)])
tetto = DIFFERENCE([tetto,antitetto1])
tetto = DIFFERENCE([tetto,antitetto2])
tromba_scale = T(3)(121)(tromba_scale)
tetto = DIFFERENCE([tetto,tromba_scale])
tetto = COLOR([0.97,0.27,0.05])(tetto)

palazzo = STRUCT([condominio,tetto])

#MARE

b2 = BEZIER(S1)([[0,0,0],[0,0,1]])
b3 = BEZIER(S1)([[2,0,0],[2,0,1]])
b4 = BEZIER(S1)([[2,1,0],[2,1,1]])
b5 = BEZIER(S1)([[4,1,0],[4,1,1]])
b6 = BEZIER(S1)([[4,0,0],[4,0,1]])
b7 = BEZIER(S1)([[6,0,0],[6,0,1]])
b8 = BEZIER(S1)([[6,1,0],[6,1,1]])

controls = [b2,b3,b4,b5,b6,b7,b8]
knots = [0,0,1,2,3,4,5,6,7,7]
tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
dom = larIntervals([12,16],'simplex')([1,5])
obj = larMap(tbspline)(dom)

onda = R([2,3])(PI/2)(STRUCT(MKPOLS(obj)))
appo = [T(1)(4),onda]
ondeA = STRUCT(NN(10)(appo))
ondeB = T([1,2])([1,1])(STRUCT(NN(10)(appo)))
ondeC = T([1,2])([2,2])(STRUCT(NN(10)(appo)))

appoA = [T(2)(3),ondeA]
mareA = COLOR([0.05,0.51,0.97])(STRUCT(NN(10)(appoA)))

appoB = [T(2)(3),ondeB]
mareB = COLOR(BLUE)(STRUCT(NN(10)(appoB)))

appoC = [T(2)(3),ondeC]
mareC = COLOR([0.05,0.97,0.97])(STRUCT(NN(10)(appoC)))

mare = T([1,2])([-250,-180])(S([1,2,3])([10,10,10])(STRUCT([mareC,mareA,mareB])))

VIEW(STRUCT([palazzo,mare]))