from pyplasm import *

#COSTRUZIONE DEI PIANI

verts00 = [[0,0,0],[12,0,0],[12,12,0],[0,12,0]]
verts01 = [[0,0],[12,0],[12,12],[0,12]]
verts02 = [[-1,-1],[13,-1],[13,13],[-1,13]]
floor0 = JOIN(AA(MK)(verts00))
floor1_base = JOIN(AA(MK)(verts01))
floor1_tegole = DIFFERENCE([JOIN(AA(MK)(verts02)),floor1_base])
floor1 = STRUCT([COLOR([0,255,0])(floor1_base),COLOR([0,0,0])(floor1_tegole)])

verts10 = [[1,1,3],[11,1,3],[11,11,3],[1,11,3]]
verts11 = [[1,1],[11,1],[11,11],[1,11]]
verts12 = [[0,0],[12,0],[12,12],[0,12]]
verts13 = [[1,4],[2,4],[1,8],[2,8]]
floor2 = JOIN(AA(MK)(verts10))
floor3_casetta = JOIN(AA(MK)(verts13))
floor3_base = DIFFERENCE([JOIN(AA(MK)(verts11)),floor3_casetta])
floor3_tegole = DIFFERENCE([JOIN(AA(MK)(verts12)),floor3_base,floor3_casetta])
floor3 = STRUCT([COLOR([0,0,255])(floor3_base),COLOR([0,0,0])(floor3_tegole),COLOR([255,255,255])(floor3_casetta)])

verts20 = [[2,2,6],[10,2,6],[10,10,6],[2,10,6]]
verts21 = [[2,2],[10,2],[10,10],[2,10]]
verts22 = [[1,1],[11,1],[11,11],[1,11]]
verts23 = [[2,5],[3,5],[2,7],[3,7]]
verts24 = [[9,5],[10,5],[9,7],[10,7]]
verts25 = [[4,2],[8,2],[4,3],[8,3]]
verts26 = [[4,9],[8,9],[4,10],[8,10]]
floor4 = JOIN(AA(MK)(verts20))
floor5_casette_piccole = STRUCT([JOIN(AA(MK)(verts23)),JOIN(AA(MK)(verts24))])
floor5_casette_grandi = STRUCT([JOIN(AA(MK)(verts25)),JOIN(AA(MK)(verts26))])
floor5_base = DIFFERENCE([JOIN(AA(MK)(verts21)),floor5_casette_piccole,floor5_casette_grandi])
floor5_tegole = DIFFERENCE([JOIN(AA(MK)(verts22)),floor5_base,floor5_casette_piccole,floor5_casette_grandi])
floor5 = STRUCT([COLOR([255,0,0])(floor5_base),COLOR([0,0,0])(floor5_tegole),COLOR([255,255,255])(floor5_casette_piccole),COLOR([255,255,255])(floor5_casette_grandi)])

verts30 = [[3,3,9],[9,3,9],[9,9,9],[3,9,9]]
verts31 = [[3,3],[9,3],[9,9],[3,9]]
verts32 = [[2,2],[10,2],[10,10],[2,10]]
floor6 = JOIN(AA(MK)(verts30))
floor7_base = JOIN(AA(MK)(verts31))
floor7_tegole = DIFFERENCE([JOIN(AA(MK)(verts32)),floor7_base])
floor7 = STRUCT([COLOR([255,0,255])(floor7_base),COLOR([0,0,0])(floor7_tegole)])

verts40 = [[4,4,12],[8,4,12],[8,8,12],[4,8,12]]
verts41 = [[4,4],[8,4],[8,8],[4,8]]
verts42 = [[3,3],[9,3],[9,9],[3,9]]
floor8 = JOIN(AA(MK)(verts40))
floor9_base = JOIN(AA(MK)(verts41))
floor9_tegole = DIFFERENCE([JOIN(AA(MK)(verts42)),floor9_base])
floor9 = STRUCT([COLOR([0,255,255])(floor9_base),COLOR([0,0,0])(floor9_tegole)])

two_hand_half_model = STRUCT([COLOR([0,255,0])(floor0),T(3)(2)(floor1),COLOR([0,0,255])(floor2),T(3)(5)(floor3),COLOR([255,0,0])(floor4),
					T(3)(8)(floor5),COLOR([255,0,255])(floor6),T(3)(11)(floor7),COLOR([0,255,255])(floor8),T(3)(14)(floor9)])
VIEW(two_hand_half_model)