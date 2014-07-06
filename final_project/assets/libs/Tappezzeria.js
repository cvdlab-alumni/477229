	  var tappezzeria = new THREE.Object3D();
	  
	  function createMesh(geom, texture, bump) {
		var mat = new THREE.MeshPhongMaterial({color: 0xffffff});
		if(texture!=null){
			var texture = THREE.ImageUtils.loadTexture("assets/textures/Progetto/" + texture)
			var bump = THREE.ImageUtils.loadTexture("assets/textures/Progetto/" + bump);
			bump.wrapS = THREE.RepeatWrapping;
			bump.wrapT = THREE.RepeatWrapping;
			bump.repeat.set(0.2,0.2);
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(0.2,0.2);
			mat.map = texture;
			mat.bumpMap = bump;
			mat.bumpScale = 0.2;
		}
        geom.computeVertexNormals();
        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }
	  
	  function createShape(shapeX,shapeY,holeX,holeY,texture,bump,rotation,x,y,z){
		var shape = new THREE.Shape();
		var hole = new THREE.Path();
		shape.moveTo(shapeX[0],shapeY[0]);
		for(var i = 1; i < shapeX.length; i++){
			shape.lineTo(shapeX[i],shapeY[i]);
			if(holeX!=null && holeY!=null)
				hole.moveTo(holeX[i],holeY[i]);
		};
		if(holeX!=null && holeY!=null)
			shape.holes.push(hole);
		var shapeGeometry = new THREE.ShapeGeometry(shape);
		var shapeMesh = createMesh(shapeGeometry, texture, bump);
		if(rotation!=null)
			shapeMesh.rotation.y = rotation;
		shapeMesh.position.set(x,y,z);
		//shapeMesh.castShadow = true;
		shapeMesh.receiveShadow = true;
		tappezzeria.add(shapeMesh);
		//scene.add(shapeMesh);
		return shapeMesh;
	  };

	  function istanziaTappezzeria(){
	  
		stanza1Pavimento = createShape([14,0,0,14,14],[14,14,0,0,14],null,null,"mattonellePavimenti.jpg","mattonellePavimenti_bump.jpg",null,1,1.05,15);
		stanza1Pavimento.rotation.x = -Math.PI/2;
		var stanza1Parete1 = createShape([14,0,0,14,14],[10,10,0,0,10],null,null,"blu.jpg",null,Math.PI/2,1.05,1,15);
		var stanza1Parete2 = createShape([14,0,0,14,14],[10,10,0,0,10],null,null,"blu.jpg",null,null,1,1,1.05);
		var stanza1Parete3 = createShape([15,0,0,15,15],[10,10,0,0,10],[2,2,5,5,2],[0,7,7,0,0],"blu.jpg",null,-Math.PI/2,14.95,1,0);
		var stanza1Parete4 = createShape([14,0,0,14,14],[10,10,0,0,10],[4,4,10,10,4],[4,9,9,4,4],"blu.jpg",null,Math.PI,15,1,14.95);
		
		var corridoioPavimento = createShape([26,0,0,26,26],[7,7,0,0,7],null,null,"mattonellePavimenti.jpg","mattonellePavimenti_bump.jpg",null,16,1.05,8);
		corridoioPavimento.rotation.x = -Math.PI/2;
		var corridoioParete1 = createShape([8,0,0,8,8],[10,10,0,0,10],[4,4,7,7,4],[0,7,7,0,0],"rosa.jpg",null,Math.PI/2,16.05,1,9);
		var corridoioParete2 = createShape([26,0,0,26,26],[10,10,0,0,10],[18,18,24,24,18],[0,7,7,0,0],"rosa.jpg",null,null,16,1,1.05);
		var corridoioParete3 = createShape([8,0,0,8,8],[10,10,0,0,10],null,null,"rosa.jpg",null,-Math.PI/2,41.95,1,1);
		var corridoioParete4Parte1 = createShape([9,0,0,9,9],[10,10,0,0,10],[3,3,6,6,3],[0,7,7,0,0],"rosa.jpg",null,Math.PI,42,1,7.95);
		var corridoioParete4Parte2 = createShape([9,0,0,9,9],[10,10,0,0,10],[4,4,7,7,4],[0,7,7,0,0],"rosa.jpg",null,Math.PI,33,1,7.95);
		var corridoioParete4Parte3 = createShape([8,0,0,8,8],[10,10,0,0,10],[1,1,4,4,1],[0,7,7,0,0],"rosa.jpg",null,Math.PI,24,1,7.95);
		
		var cucinaPavimento = createShape([8,0,0,8,8],[14,14,0,0,14],null,null,"mattonellePavimenti.jpg","mattonellePavimenti_bump.jpg",null,16,1.05,23);
		cucinaPavimento.rotation.x = -Math.PI/2;
		var cucinaParete1 = createShape([14,0,0,14,14],[8,8,0,0,8],null,null,"mattonelleParetiCucina.jpg","mattonelleParetiCucina_bump.jpg",Math.PI/2,16.05,1,23);
		var cucinaParete2 = createShape([8,0,0,8,8],[8,8,0,0,8],[4,4,7,7,4],[0,7,7,0,0],"mattonelleParetiCucina.jpg","mattonelleParetiCucina_bump.jpg",null,16,1,9.05);
		var cucinaParete3 = createShape([14,0,0,14,14],[8,8,0,0,8],null,null,"mattonelleParetiCucina.jpg","mattonelleParetiCucina_bump.jpg",-Math.PI/2,23.95,1,9);
		var cucinaParete4 = createShape([8,0,0,8,8],[8,8,0,0,8],[2,2,6,6,2],[4,8,8,4,4],"mattonelleParetiCucina.jpg","mattonelleParetiCucina_bump.jpg",Math.PI,24,1,21.95);
		
		var bagnoPavimento = createShape([8,0,0,8,8],[14,14,0,0,14],null,null,"mattonellePavimentoBagno.jpg","mattonellePavimentoBagno_bump.jpg",null,25,1.05,23);
		bagnoPavimento.rotation.x = -Math.PI/2;
		var bagnoParete1 = createShape([14,0,0,14,14],[8,8,0,0,8],null,null,"mattonelleParetiBagno.jpg","mattonelleParetiBagno_bump.jpg",Math.PI/2,25.05,1,23);
		var bagnoParete2 = createShape([8,0,0,8,8],[8,8,0,0,8],[1,1,4,4,1],[0,7,7,0,0],"mattonelleParetiBagno.jpg","mattonelleParetiBagno_bump.jpg",null,25,1,9.05);
		var bagnoParete3 = createShape([14,0,0,14,14],[8,8,0,0,8],null,null,"mattonelleParetiBagno.jpg","mattonelleParetiBagno_bump.jpg",-Math.PI/2,32.95,1,9);
		var bagnoParete4 = createShape([8,0,0,8,8],[8,8,0,0,8],[2,2,6,6,2],[4,8,8,4,4],"mattonelleParetiBagno.jpg","mattonelleParetiBagno_bump.jpg",Math.PI,33,1,21.95);
		
		var stanza2Pavimento = createShape([14,0,0,14,14],[14,14,0,0,14],null,null,"mattonellePavimenti.jpg","mattonellePavimenti_bump.jpg",null,34,1.05,23);
		stanza2Pavimento.rotation.x = -Math.PI/2;
		var stanza2Parete1 = createShape([14,0,0,14,14],[10,10,0,0,10],null,null,"rosa.jpg",null,Math.PI/2,34.05,1,23);
		var stanza2Parete2 = createShape([14,0,0,14,14],[10,10,0,0,10],[2,2,5,5,2],[0,7,7,0,0],"rosa.jpg",null,null,34,1,9.05);
		var stanza2Parete3 = createShape([14,0,0,14,14],[10,10,0,0,10],null,null,"rosa.jpg",null,-Math.PI/2,47.95,1,9);
		var stanza2Parete4Parte1 = createShape([8,0,0,8,8],[10,10,0,0,10],[2,2,5,5,2],[4,9,9,4,4],"rosa.jpg",null,Math.PI,41,1,21.95);
		var stanza2Parete4Parte2 = createShape([7,0,0,7,7],[10,10,0,0,10],[2,2,5,5,2],[4,9,9,4,4],"rosa.jpg",null,Math.PI,48,1,21.95);
		
		var soffittoCamera1 = createShape([14,0,0,14,14],[14,14,0,0,14],null,null,null,null,1,11,1);
		soffittoCamera1.rotation.x = Math.PI/2;
		var soffittoCorridoio = createShape([26,0,0,26,26],[7,7,0,0,7],null,null,null,null,16,11,1);
		soffittoCorridoio.rotation.x = Math.PI/2;
		var soffittoCucina = createShape([8,0,0,8,8],[14,14,0,0,14],null,null,null,null,16,11,9);
		soffittoCucina.rotation.x = Math.PI/2;
		var soffittoBagno = createShape([8,0,0,8,8],[14,14,0,0,14],null,null,null,null,25,11,9);
		soffittoBagno.rotation.x = Math.PI/2;
		var soffittoCamera2 = createShape([14,0,0,14,14],[14,14,0,0,14],null,null,null,null,34,11,9);
		soffittoCamera2.rotation.x = Math.PI/2;
		
		return tappezzeria;
		}
