function creaOggetti(){

	var oggetti3D = new THREE.Object3D();
	var loaderObj = new THREE.OBJLoader();
	var loaderObjMtl = new THREE.OBJMTLLoader();

		function createMesh(geom, texture,repeat) {
		var mat = new THREE.MeshLambertMaterial({color: 0xffffff});
		if(texture!=null){
			var texture = THREE.ImageUtils.loadTexture("assets/textures/Progetto/" + texture);
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(repeat,repeat);
			mat.map = texture;
		}
        geom.computeVertexNormals();
        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }
	  
	  function caricaObj(percorso,texture,scale,posX,posY,posZ,rotX,rotY,rotZ,repeat){
		
		loaderObj.load(percorso, function (obj) {
			global_o = obj;
			var mesh = createMesh(obj.children[0].geometry,texture,repeat);
			mesh.scale.set(scale,scale,scale);
			mesh.position.set(posX,posY,posZ);
			if(rotX!=null)
				mesh.rotation.x = rotX;
			if(rotY!=null)
				mesh.rotation.y = rotY;
			if(rotZ!=null)
				mesh.rotation.z = rotZ;
			oggetti3D.add(mesh);
      });
	  };
	  
	  function caricaObjMtl(percorsoObj,percorsoMtl,scale,posX,posY,posZ,rotX,rotY,rotZ){
		
		loaderObjMtl.load(percorsoObj,percorsoMtl, function (obj) {
			global_o = obj;
			var mesh = obj.children[0];
			mesh.scale.set(scale,scale,scale);
			mesh.position.set(posX,posY,posZ);
			if(rotX!=null)
				mesh.rotation.x = rotX;
			if(rotY!=null)
				mesh.rotation.y = rotY;
			if(rotZ!=null)
				mesh.rotation.z = rotZ;
			oggetti3D.add(mesh);
      });
	  };
	
	var loader = new THREE.OBJLoader();
      loader.load('assets/models/ProgettoFinale.obj', function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xeeeeee});
        material.side = THREE.DoubleSide;
        obj.children[0].material = material;
        mesh = obj.children[0];
		
		mesh.rotation.x = -Math.PI/2;
		mesh.position.z = 23;
      
		oggetti3D.add(mesh);
      });
	  
	  caricaObj('assets/models/Scrivania/ModernDeskOBJ.obj',"LegnoScrivania.jpg",0.1,2,1,4,null,Math.PI/2,null,0.2);
	  caricaObjMtl('assets/models/LCD/LCD_TV.obj', 'assets/models/LCD/LCD_TV.mtl',3,2,5.8,6,null,Math.PI/2,null);  
	  caricaObj('assets/models/office_chair/office_chair.obj',"Nero.jpg",2,4,1,6,null,-Math.PI/2,null,0.2);
	  caricaObj('assets/models/sofa/sofa1.obj',"pelleDivano.jpg",0.04,20,1,1,null,null,null,0.05);
	  
	  var loader = new THREE.OBJMTLLoader();
      loader.load('assets/models/sedia3/white_kitchen_chair.obj','assets/models/sedia3/white_kitchen_chair.mtl', function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xeeeeee});
        material.side = THREE.DoubleSide;
        obj.children[0].material = material;
        mesh = obj.children[0];
		
		//mesh.rotation.x = -Math.PI/2;
		mesh.position.set(20,3,11.7);
		mesh.scale.set(0.05,0.05,0.05);
		
		mesh2 = mesh.clone();
		mesh2.rotation.y = Math.PI;
		mesh2.scale.set(0.05,0.05,0.05);
		mesh2.position.set(16.5,3,20.2);
       
		oggetti3D.add(mesh);
		oggetti3D.add(mesh2);
      });
	  
	  var loader = new THREE.OBJLoader();
      loader.load('assets/models/tavolo/table2.obj',function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xeeeeee});
        material.side = THREE.DoubleSide;
        obj.children[0].material = material;
        mesh = obj.children[0];
		
		//mesh.rotation.x = -Math.PI/2;
		mesh.position.set(18,1,17);
		mesh.scale.set(0.5,1,0.5);
      
		oggetti3D.add(mesh);
      });
	  
	  var loader = new THREE.OBJMTLLoader();
      loader.load('assets/models/portaCD/CDrack.obj','assets/models/portaCD/CDrack.mtl', function (obj) {

        global_o = obj;

        var material = new THREE.MeshLambertMaterial({color: 0xeeeeee});
        material.side = THREE.DoubleSide;
        obj.children[0].material = material;
        mesh = obj.children[0];
		
		//mesh.rotation.x = -Math.PI/2;
		mesh.position.set(20,3,11.7);
		mesh.scale.set(10,10,10);
       
		oggetti3D.add(mesh);
      });
	  
	  return oggetti3D;
};