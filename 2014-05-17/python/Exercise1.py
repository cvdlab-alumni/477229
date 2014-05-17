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
#masterBlocco2 = T(2)(7)(STRUCT(MKPOLS(masterBlocco2)))
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
#masterBlocco2 = T(2)(7)(STRUCT(MKPOLS(masterBlocco2)))
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
#masterBlocco2 = T(2)(7)(STRUCT(MKPOLS(masterBlocco2)))
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
#masterBlocco2 = T(2)(7)(STRUCT(MKPOLS(masterBlocco2)))
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
#masterBlocco2 = T(2)(7)(STRUCT(MKPOLS(masterBlocco2)))
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
#masterBlocco2 = T(2)(7)(STRUCT(MKPOLS(masterBlocco2)))
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
#masterBlocco3 = T(2)(7)(STRUCT(MKPOLS(masterBlocco3)))
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
#masterBlocco3 = T([1,2])([15,15])(STRUCT(MKPOLS(masterBlocco3)))
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

VIEW(STRUCT([masterBlocco1,masterBlocco2,masterBlocco3]))