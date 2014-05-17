from larcc import *

def merging_numbering_elimination(diagrams,master,toRemove,toMerge) :
	for i in range(len(diagrams)) :
		V,CV = master
		massimo = len(CV)-1 #salvo il numero di cella massimo
		master = diagram2cell(diagrams[i],master,toMerge[i])
		V,CV = master 
		for j in range(len(toRemove[i])) :
			toRemove[i][j] += massimo #aggiorno i toRemove
		master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove[i])]
	return master 

master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
V,CV = master
toRemove = [13,33,17,37]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]  #tolgo la cella num 13,33,17,37 da CV

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

toRemove = [[5],[6]]
toMerge = [11,12]
diagram1 = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])
diagram2 = assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])
diagrams = [diagram1,diagram2]

master = merging_numbering_elimination(diagrams,master,toRemove,toMerge)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)