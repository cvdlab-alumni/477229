	  function createLampadario(){
	  
	  var lampadario = new THREE.Object3D();
	  
	  spotLight1 = new THREE.SpotLight(0xffffff,2.5,15);
	  spotLight1.angle = 180 * Math.PI/180;	  
	  spotLight1.exponent = 0;
	  spotLight1.shadowCameraNear = 1;
      spotLight1.shadowCameraFar = 1000;
	  spotLight1.shadow;
	  spotLight1.shadowCameraFov = 90;
	  spotLight1.position.set(0,0,0);
	  spotLight1.target.position.set(1000,0,0);

      var spotLight2 = spotLight1.clone();
      spotLight2.target.position.set(-1000,0,0);
	  
	  var spotLight3 = spotLight1.clone();
	  spotLight3.target.position.set(0,0,-1000);
	  
	  var spotLight4 = spotLight1.clone();
	  spotLight4.target.position.set(0,0,1000);
	  
	  var lampadinaGeometry = new THREE.SphereGeometry(0.5,10,10);
	  var lampadinaMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, side:1 ,transparent: true, opacity: 1});
	  var lampadina = new THREE.Mesh(lampadinaGeometry,lampadinaMaterial);
	  lampadina.position.set(0,0,0);
	  
	  var giunturaGeometry = new THREE.TorusGeometry(0.21,0.2,10,10);
	  var giunturaMaterial = new THREE.MeshLambertMaterial({color: 0xeeeeee});
	  var giuntura = new THREE.Mesh(giunturaGeometry,giunturaMaterial);
	  giuntura.position.set(0,0.5,0);
	  giuntura.rotation.x = Math.PI/2;
	  
	  var filoGeometry = new THREE.CylinderGeometry(0.2,0.2,3,10,10);
	  var filoMaterial = new THREE.MeshLambertMaterial({color: 0xeeeeee});
	  var filo = new THREE.Mesh(filoGeometry,filoMaterial);
	  filo.position.set(0,2,0);
	  
	  var paralumeGeometry1 = new THREE.CylinderGeometry(1,2,3,10,10);
	  var paralumeMaterial1 = new THREE.MeshLambertMaterial({color: 0xeeeeee});
	  var paralume1 = new THREE.Mesh(paralumeGeometry1,paralumeMaterial1);
	  var paralume1_bsp = new ThreeBSP( paralume1 );
	  
	  var paralumeGeometry2 = new THREE.CylinderGeometry(0.9,1.9,3,10,10);
	  var paralumeMaterial2 = new THREE.MeshLambertMaterial({color: 0xeeeeee});
	  var paralume2 = new THREE.Mesh(paralumeGeometry2,paralumeMaterial2);
	  var paralume2_bsp = new ThreeBSP( paralume2 );
	  
	  var subtract_bsp1 = paralume1_bsp.subtract( paralume2_bsp );
	  var result1 = subtract_bsp1.toMesh( new THREE.MeshLambertMaterial({ color: 0xaaaaaa}) );
	  result1.geometry.computeVertexNormals();
	  result1.castShadow = true;
	  
	  var sostegnoGeometry = new THREE.BoxGeometry(0.1,1.2,0.1);
	  var sostegnoMaterial = new THREE.MeshLambertMaterial({color: 0xeeeeee});
	  var sostegno = new THREE.Mesh(sostegnoGeometry,sostegnoMaterial);
	  sostegno.rotation.x = Math.PI/4;
	  sostegno.position.set(0,1,0.5);
	  
	  var sostegno1 = new THREE.Object3D();
	  sostegno1.add(sostegno);
	  
	  var sostegno2 = sostegno1.clone();
	  sostegno2.rotation.y = Math.PI/2;
	  
	  var sostegno3 = sostegno1.clone();
	  sostegno3.rotation.y = Math.PI;
	  
	  var sostegno4 = sostegno1.clone();
	  sostegno4.rotation.y = -Math.PI/2;
	  
	  lampadario.add(spotLight1);
	  lampadario.add(filo);
	  lampadario.add(lampadina);
	  lampadario.add(giuntura);
	  lampadario.add(sostegno1);
	  lampadario.add(sostegno2);
	  lampadario.add(sostegno3);
	  lampadario.add(sostegno4);
	  lampadario.add(result1);
	  
	  
	  lampadario.scale.set(0.8,0.8,0.8);

	  return lampadario;

	  
	  };