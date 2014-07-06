	  function createBox(x,y,z,color,texture){
		var boxGeometry = new THREE.BoxGeometry( x, y, z );
		var boxMaterial = new THREE.MeshLambertMaterial({ color: color});
		if(texture!=null)
			boxMaterial.map = THREE.ImageUtils.loadTexture("assets/textures/Progetto/" + texture);
		var boxMesh = new THREE.Mesh( boxGeometry,boxMaterial );
		boxMesh.castShadow = true;
		boxMesh.receiveShadow = true;
		return boxMesh;
	  };
	  
	  function createCylinder(radius,height,polys,color,texture){
		var cylGeometry = new THREE.CylinderGeometry(radius, radius,height ,polys);
		var cylMaterial = new THREE.MeshLambertMaterial({ color: color});
		if(texture!=null)
			cylMaterial.map = THREE.ImageUtils.loadTexture("assets/textures/Progetto/" + texture);
		var cylMesh = new THREE.Mesh( cylGeometry,cylMaterial );
		cylMesh.castShadow = true;
		cylMesh.receiveShadow = true;
		return cylMesh;
	  };
	  
	  function createSphere(radius,polys,color,texture){
		var sphereGeometry = new THREE.SphereGeometry( radius, polys, polys);
		var sphereMaterial = new THREE.MeshLambertMaterial({ color: color});
		if(texture!=null)
			sphereMaterial.map = THREE.ImageUtils.loadTexture("assets/textures/Progetto/" + texture);
		var sphereMesh = new THREE.Mesh( sphereGeometry,sphereMaterial );
		sphereMesh.castShadow = true;
		sphereMesh.receiveShadow = true;
		return sphereMesh;
	  };

	  function createPorta(orientation){
	  
		var cube_mesh = createBox(3,7,1,0xaaaaaa,null);
		var cube_bsp = new ThreeBSP( cube_mesh );

		var cube_mesh0 = createBox(2.8, 6.9, 1,0xaaaaaa,null);
		cube_mesh0.position.y = -0.05;
		var cube_bsp0 = new ThreeBSP( cube_mesh0 );
		
		var subtract_bsp1 = cube_bsp.subtract( cube_bsp0 );
		var result1 = subtract_bsp1.toMesh( new THREE.MeshLambertMaterial({ color: 0xaaaaaa}) );
		result1.geometry.computeVertexNormals();
		
		var internoPortaMesh = createBox(2.8,6.9,0.8,0xaaaaaa,"LegnoPorta.jpg");
		internoPortaMesh.position.x = -1.4*orientation;
		internoPortaMesh.position.z = -0.4;

		var baseManigliaMesh = createCylinder(0.15,0.1,40,0x696969,null);
		baseManigliaMesh.rotation.x = Math.PI/2;

		var manigliaMesh1 = createCylinder(0.08,0.2,40,0x696969,null);
		manigliaMesh1.position.z = 0.1;
		manigliaMesh1.rotation.x = Math.PI/2;
		
		var manigliaMesh2 = createCylinder(0.08,0.6,40,0x696969,null);
		manigliaMesh2.position.z = 0.2;
		manigliaMesh2.position.x = 0.3*orientation;
		manigliaMesh2.rotation.z = Math.PI/2;
		
		manigliaMesh2.interact = function(){
			if(manigliaMesh2.parent.parent.rotation.z == 0)
				manigliaMesh2.parent.parent.rotation.z = -orientation*Math.PI/6;
			else
				manigliaMesh2.parent.parent.rotation.z = 0;
		};
		
		var manigliaMesh3 = createSphere(0.08,20,0x696969,null);
		manigliaMesh3.position.z = 0.2;
		manigliaMesh3.position.x = 0.6*orientation;
		
		var manigliaMesh4 = createSphere(0.08,20,0x696969,null);
		manigliaMesh4.position.z = 0.2;
		
		var maniglia1 = new THREE.Object3D();
		maniglia1.add(manigliaMesh1);
		maniglia1.add(manigliaMesh2);
		maniglia1.add(manigliaMesh3);
		maniglia1.add(manigliaMesh4);
		maniglia1.add(baseManigliaMesh);
		
		//maniglia2 = maniglia1.clone();
		var manigliaMesh2Clone = manigliaMesh2.clone();
		
		var maniglia2 = new THREE.Object3D();
		maniglia2.add(manigliaMesh1.clone());
		maniglia2.add(manigliaMesh2Clone);
		maniglia2.add(manigliaMesh3.clone());
		maniglia2.add(manigliaMesh4.clone());
		maniglia2.add(baseManigliaMesh.clone());
		maniglia2.rotation.x = Math.PI;
		maniglia2.position.z = -0.8;
		
		var manigliaRotante = new THREE.Object3D();
		manigliaRotante.add(maniglia1);
		manigliaRotante.add(maniglia2);
		//manigliaRotante.rotation.z = -Math.PI/6;
		
		var serratura_mesh0 = createCylinder(0.15,0.1,40,0x696969,null);
		var serratura_bsp0 = new ThreeBSP( serratura_mesh0 );

		var serratura_mesh1 = createCylinder(0.05,0.1,40,0x696969,null);
		serratura_mesh1.position.z = 0.03;
		var serratura_bsp1 = new ThreeBSP( serratura_mesh1 );
		
		var serratura_mesh2 = createCylinder(0.03,0.1,40,0x696969,null);
		serratura_mesh2.scale.z = 2;
		serratura_mesh2.position.z = -0.02;
		var serratura_bsp2 = new ThreeBSP( serratura_mesh2 );
		
		var subtract_bsp2 = serratura_bsp0.subtract( serratura_bsp1 );
		var subtract_bsp2 = subtract_bsp2.subtract( serratura_bsp2 );
		var result2 = subtract_bsp2.toMesh( new THREE.MeshLambertMaterial({ color: 0x696969}) );
		result2.geometry.computeVertexNormals();
		result2.rotation.x = -Math.PI/2;
		
		var fondoNeroMesh = createCylinder(0.1,0.01,40,0x000000,null);
		fondoNeroMesh.rotation.x = Math.PI/2;
		
		var serratura1 = new THREE.Object3D();
		serratura1.position.y = -0.4;
		serratura1.add(fondoNeroMesh);
		serratura1.add(result2);
		
		var serratura2 = serratura1.clone();
		serratura2.rotation.y = Math.PI;
		serratura2.position.z = -0.8;
		
		var manigliaCompleta = new THREE.Object3D();
		manigliaCompleta.add(manigliaRotante);
		manigliaCompleta.position.z = 0.0;
		manigliaCompleta.position.x = -2.5*orientation;
		manigliaCompleta.add(serratura1);
		manigliaCompleta.add(serratura2);
		
		var pernoPorta = new THREE.Object3D();
		pernoPorta.add(internoPortaMesh);
		pernoPorta.add(manigliaCompleta);
		//pernoPorta.position.y = 3.5;
		//pernoPorta.rotation.y = Math.PI/2*orientation;
		pernoPorta.position.set(1.4*orientation,3.45,0.4);
		
		var bordoPortaMesh1 = createCylinder(0.1,3.2,40,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh1.position.y = 3.6;
		bordoPortaMesh1.position.z = 0.5;
		bordoPortaMesh1.rotation.z = Math.PI/2;
		bordoPortaMesh1.scale.x = 2;
		
		var bordoPortaMesh2 = createCylinder(0.1,7.1,40,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh2.position.x = 1.6;
		bordoPortaMesh2.position.y = 0.05;
		bordoPortaMesh2.position.z = 0.5;
		bordoPortaMesh2.scale.x = 2;
		
		var bordoPortaMesh3 = createCylinder(0.1,7.1,40,0xaaaaaa,"LegnoPorta.jpg");
		var bordoPortaMesh3 = bordoPortaMesh2.clone();
		bordoPortaMesh3.position.x = -1.6;

		var bordoPortaMesh4 = createSphere(0.1,20,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh4.scale.x = 2;
		bordoPortaMesh4.scale.y = 2;
		bordoPortaMesh4.position.set(1.6,3.6,0.5);
		
		var bordoPortaMesh5 = createSphere(0.1,20,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh5.scale.x = 2;
		bordoPortaMesh5.scale.y = 2;
		bordoPortaMesh5.position.set(-1.6,3.6,0.5);
		
		var bordo1 = new THREE.Object3D();
		bordo1.add(bordoPortaMesh1);
		bordo1.add(bordoPortaMesh2);
		bordo1.add(bordoPortaMesh3);
		bordo1.add(bordoPortaMesh4);
		bordo1.add(bordoPortaMesh5);
		
		var bordo2 = bordo1.clone();
		bordo2.rotation.y = Math.PI;
		
		var planeGeometry = new THREE.PlaneGeometry(3,1);
		var planeMaterial = new THREE.MeshLambertMaterial({color: 0xaaaaaa, side:THREE.DoubleSide});
		var planeMesh = new THREE.Mesh(planeGeometry,planeMaterial);
		planeMesh.rotation.x = Math.PI/2;
		planeMesh.position.set(0,-3.55,0);
		
		var bordoPorta = new THREE.Object3D();
		bordoPorta.add(bordo1);
		bordoPorta.add(bordo2);
		bordoPorta.add(result1);
		bordoPorta.add(planeMesh);
		bordoPorta.position.y = 3.5;
		
		var bordoEPorta = new THREE.Object3D();
		bordoEPorta.add(bordoPorta);
		bordoEPorta.add(pernoPorta);
		//bordoEPorta.position.y = 3.5;
		//bordoEPorta.orientation = orientation;
		//scene.add(bordoEPorta);
		
		var animatorApertura = null;
		var animatorChiusura = null;
        var duration = 1; // sec
        var loopAnimation = false;
		
		function initAnimazioneAperturaPorta(orientation) {
        animatorApertura = new KF.KeyFrameAnimator();
        animatorApertura.init({ 
          interps:
            [
              {
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
                  { x : 0 , y: 0,z:-orientation*Math.PI/6},
                  { x : 0 , y:0,z:0}
                ],
                target: manigliaRotante.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: Math.PI/2*orientation,z:0},
                ],
                target: pernoPorta.rotation
              },
            ],
          loop: loopAnimation,
          duration: duration * 1000,
          easing: TWEEN.Easing.Linear.None
        });
      }
	  
	  function initAnimazioneChiusuraPorta(orientation) {
        animatorChiusura = new KF.KeyFrameAnimator();
        animatorChiusura.init({ 
          interps:
            [
              {
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
                  { x : 0 , y: 0,z:-orientation*Math.PI/6},
                  { x : 0 , y:0,z:0}
                ],
                target: manigliaRotante.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: Math.PI/2*orientation,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
                ],
                target: pernoPorta.rotation
              },
            ],
          loop: loopAnimation,
          duration: duration * 1000,
          easing: TWEEN.Easing.Linear.None
        });
      }

      initAnimazioneAperturaPorta(orientation);
	  initAnimazioneChiusuraPorta(orientation);
	  
	  manigliaMesh2Clone.interact = function(){
			if(manigliaMesh2Clone.parent.parent.parent.parent.rotation.y == 0){
				animatorApertura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = Math.PI/2;
				}
			else{
				animatorChiusura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = 0;
				}
		};
		
		manigliaMesh2.interact = function(){
			if(manigliaMesh2Clone.parent.parent.parent.parent.rotation.y == 0){
				animatorApertura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = Math.PI/2;
				}
			else{
				animatorChiusura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = 0;
				}
		};
		
		return bordoEPorta;
		
	};
	
	function createEntrata(){
	  
		var cube_mesh = createBox(6,7,1,0xaaaaaa,null);
		var cube_bsp = new ThreeBSP( cube_mesh );

		var cube_mesh0 = createBox(5.8, 6.9, 1,0xaaaaaa,null);
		cube_mesh0.position.y = -0.05;
		var cube_bsp0 = new ThreeBSP( cube_mesh0 );
		
		var subtract_bsp1 = cube_bsp.subtract( cube_bsp0 );
		var result1 = subtract_bsp1.toMesh( new THREE.MeshLambertMaterial({ color: 0xaaaaaa}) );
		result1.geometry.computeVertexNormals();
		
		var internoPortaMesh = createBox(2.9,6.9,0.8,0xaaaaaa,"LegnoPorta.jpg");
		internoPortaMesh.position.x = 1.4;
		internoPortaMesh.position.z = -0.4;

		var baseManigliaMesh = createCylinder(0.15,0.1,40,0x696969,null);
		baseManigliaMesh.rotation.x = Math.PI/2;

		var manigliaMesh1 = createCylinder(0.08,0.2,40,0x696969,null);
		manigliaMesh1.position.z = 0.1;
		manigliaMesh1.rotation.x = Math.PI/2;
		
		var manigliaMesh2 = createCylinder(0.08,0.6,40,0x696969,null);
		manigliaMesh2.position.z = 0.2;
		manigliaMesh2.position.x = -0.3;
		manigliaMesh2.rotation.z = Math.PI/2;
		
		
		
		var manigliaMesh3 = createSphere(0.08,20,0x696969,null);
		manigliaMesh3.position.z = 0.2;
		manigliaMesh3.position.x = -0.6;
		
		var manigliaMesh4 = createSphere(0.08,20,0x696969,null);
		manigliaMesh4.position.z = 0.2;
		
		var maniglia1 = new THREE.Object3D();
		maniglia1.add(manigliaMesh1);
		maniglia1.add(manigliaMesh2);
		maniglia1.add(manigliaMesh3);
		maniglia1.add(manigliaMesh4);
		maniglia1.add(baseManigliaMesh);
		
		//var maniglia2 = maniglia1.clone();
		var manigliaMesh2Clone = manigliaMesh2.clone();
		
		var maniglia2 = new THREE.Object3D();
		maniglia2.add(manigliaMesh1.clone());
		maniglia2.add(manigliaMesh2Clone);
		maniglia2.add(manigliaMesh3.clone());
		maniglia2.add(manigliaMesh4.clone());
		maniglia2.add(baseManigliaMesh.clone());
		maniglia2.rotation.x = Math.PI;
		maniglia2.position.z = -0.8;
		
		var manigliaRotante = new THREE.Object3D();
		manigliaRotante.add(maniglia1);
		manigliaRotante.add(maniglia2);
		//manigliaRotante.rotation.z = -Math.PI/6;
		
		var serratura_mesh0 = createCylinder(0.15,0.1,40,0x696969,null);
		var serratura_bsp0 = new ThreeBSP( serratura_mesh0 );

		var serratura_mesh1 = createCylinder(0.05,0.1,40,0x696969,null);
		serratura_mesh1.position.z = 0.03;
		var serratura_bsp1 = new ThreeBSP( serratura_mesh1 );
		
		var serratura_mesh2 = createCylinder(0.03,0.1,40,0x696969,null);
		serratura_mesh2.scale.z = 2;
		serratura_mesh2.position.z = -0.02;
		var serratura_bsp2 = new ThreeBSP( serratura_mesh2 );
		
		var subtract_bsp2 = serratura_bsp0.subtract( serratura_bsp1 );
		var subtract_bsp2 = subtract_bsp2.subtract( serratura_bsp2 );
		var result2 = subtract_bsp2.toMesh( new THREE.MeshLambertMaterial({ color: 0x696969}) );
		result2.geometry.computeVertexNormals();
		result2.rotation.x = -Math.PI/2;
		
		var fondoNeroMesh = createCylinder(0.1,0.01,40,0x000000,null);
		fondoNeroMesh.rotation.x = Math.PI/2;
		
		var serratura1 = new THREE.Object3D();
		serratura1.position.y = -0.4;
		serratura1.add(fondoNeroMesh);
		serratura1.add(result2);
		
		var serratura2 = serratura1.clone();
		serratura2.rotation.y = Math.PI;
		serratura2.position.z = -0.8;
		
		var manigliaCompleta = new THREE.Object3D();
		manigliaCompleta.add(manigliaRotante);
		manigliaCompleta.position.z = 0.0;
		manigliaCompleta.position.x = 2.5;
		manigliaCompleta.add(serratura1);
		manigliaCompleta.add(serratura2);
		
		var pernoPorta = new THREE.Object3D();
		pernoPorta.add(internoPortaMesh);
		pernoPorta.add(manigliaCompleta);
		//pernoPorta.position.y = 3.5;
		//pernoPorta.rotation.y = -Math.PI/2;
		pernoPorta.position.set(-2.85,3.45,0.4);
		
		var bordoPortaMesh1 = createCylinder(0.1,6.2,40,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh1.position.y = 3.6;
		bordoPortaMesh1.position.z = 0.5;
		bordoPortaMesh1.rotation.z = Math.PI/2;
		bordoPortaMesh1.scale.x = 2;
		
		var bordoPortaMesh2 = createCylinder(0.1,7.1,40,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh2.position.x = 3.1;
		bordoPortaMesh2.position.y = 0.05;
		bordoPortaMesh2.position.z = 0.5;
		bordoPortaMesh2.scale.x = 2;
		
		var bordoPortaMesh3 = createCylinder(0.1,7.1,40,0xaaaaaa,"LegnoPorta.jpg");
		var bordoPortaMesh3 = bordoPortaMesh2.clone();
		bordoPortaMesh3.position.x = -3.1;

		var bordoPortaMesh4 = createSphere(0.1,20,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh4.scale.x = 2;
		bordoPortaMesh4.scale.y = 2;
		bordoPortaMesh4.position.set(3.1,3.6,0.5);
		
		var bordoPortaMesh5 = createSphere(0.1,20,0xaaaaaa,"LegnoPorta.jpg");
		bordoPortaMesh5.scale.x = 2;
		bordoPortaMesh5.scale.y = 2;
		bordoPortaMesh5.position.set(-3.1,3.6,0.5);
		
		var bordo1 = new THREE.Object3D();
		bordo1.add(bordoPortaMesh1);
		bordo1.add(bordoPortaMesh2);
		bordo1.add(bordoPortaMesh3);
		bordo1.add(bordoPortaMesh4);
		bordo1.add(bordoPortaMesh5);
		
		var bordo2 = bordo1.clone();
		bordo2.rotation.y = Math.PI;
		
		var planeGeometry = new THREE.PlaneGeometry(6,1);
		var planeMaterial = new THREE.MeshLambertMaterial({color: 0xaaaaaa, side:THREE.DoubleSide});
		var planeMesh = new THREE.Mesh(planeGeometry,planeMaterial);
		planeMesh.rotation.x = Math.PI/2;
		planeMesh.position.set(0,-3.5,0);
		
		var internoPortaMesh2 = createBox(2.9,6.9,0.8,0xaaaaaa,"LegnoPorta.jpg");
		internoPortaMesh2.position.x = 1.45;
		internoPortaMesh2.position.y = -0.05;
		
		var bordoPorta = new THREE.Object3D();
		bordoPorta.add(bordo1);
		bordoPorta.add(bordo2);
		bordoPorta.add(result1);
		bordoPorta.add(planeMesh);
		bordoPorta.add(internoPortaMesh2);
		bordoPorta.position.y = 3.5;
		
		var bordoEPorta = new THREE.Object3D();
		bordoEPorta.add(bordoPorta);
		bordoEPorta.add(pernoPorta);
		//bordoEPorta.position.y = 3.5;
		//bordoEPorta.orientation = orientation;
		//scene.add(bordoEPorta);
		
		var animatorApertura = null;
		var animatorChiusura = null;
        var duration = 1; // sec
        var loopAnimation = false;
		
		function initAnimazioneAperturaPorta() {
        animatorApertura = new KF.KeyFrameAnimator();
        animatorApertura.init({ 
          interps:
            [
              {
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
                  { x : 0 , y: 0,z:Math.PI/6},
                  { x : 0 , y:0,z:0}
                ],
                target: manigliaRotante.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: -Math.PI/2,z:0},
                ],
                target: pernoPorta.rotation
              },
            ],
          loop: loopAnimation,
          duration: duration * 1000,
          easing: TWEEN.Easing.Linear.None
        });
      }
	  
	  function initAnimazioneChiusuraPorta() {
        animatorChiusura = new KF.KeyFrameAnimator();
        animatorChiusura.init({ 
          interps:
            [
              {
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
                  { x : 0 , y: 0,z:Math.PI/6},
                  { x : 0 , y:0,z:0}
                ],
                target: manigliaRotante.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: -Math.PI/2,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
                ],
                target: pernoPorta.rotation
              },
            ],
          loop: loopAnimation,
          duration: duration * 1000,
          easing: TWEEN.Easing.Linear.None
        });
      }

      initAnimazioneAperturaPorta();
	  initAnimazioneChiusuraPorta();
		
		manigliaMesh2.interact = function(){
			if(manigliaMesh2Clone.parent.parent.parent.parent.rotation.y == 0){
				animatorApertura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = Math.PI/2;
				}
			else{
				animatorChiusura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = 0;
				}
		};
		
		manigliaMesh2Clone.interact = function(){
			if(manigliaMesh2Clone.parent.parent.parent.parent.rotation.y == 0){
				animatorApertura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = Math.PI/2;
				}
			else{
				animatorChiusura.start();
				manigliaMesh2Clone.parent.parent.parent.parent.rotation.y = 0;
				}
		};
		
		return bordoEPorta;
		
	};
	
	function createFinestra(){
		var cube_mesh = createBox(6,5,1,0xaaaaaa,null);
		var cube_bsp = new ThreeBSP( cube_mesh );

		var cube_mesh0 = createBox(5.8, 4.8, 1,0xaaaaaa,null);
		cube_mesh0.position.y = 0;
		var cube_bsp0 = new ThreeBSP( cube_mesh0 );
		
		var subtract_bsp1 = cube_bsp.subtract( cube_bsp0 );
		var result1 = subtract_bsp1.toMesh( new THREE.MeshLambertMaterial({ color: 0xaaaaaa}) );
		result1.geometry.computeVertexNormals();
		result1.position.y = 2.5;
		
		var cube_mesh1 = createBox(2.9,4.8,0.5,0xaaaaaa,null);
		var cube_bsp1 = new ThreeBSP( cube_mesh1 );

		var cube_mesh2 = createBox(2.3, 4.3, 0.5,0xaaaaaa,null);
		cube_mesh2.position.y = 0;
		var cube_bsp2 = new ThreeBSP( cube_mesh2 );
		
		var subtract_bsp2 = cube_bsp1.subtract( cube_bsp2 );
		var result2 = subtract_bsp2.toMesh( new THREE.MeshLambertMaterial({ color: 0xaaaaaa}) );
		result2.geometry.computeVertexNormals();
		result2.position.z = -0.25;
		result2.position.x = -1.45;
		
		var result3 = result2.clone();
		result3.position.set(1.45,0,-0.25);
		
		var internoFinestraMesh1 = createBox(2.3,4.3,0.5,0xABCDEF,null);
		internoFinestraMesh1.position.x = -1.45;
		internoFinestraMesh1.position.z = -0.25;
		internoFinestraMesh1.material.transparent = true;
		internoFinestraMesh1.material.opacity = 0.5;
		
		var internoFinestraMesh2 = internoFinestraMesh1.clone();
		internoFinestraMesh2.position.x = 1.45;
		
		var baseManigliaMesh = createCylinder(0.15,0.1,40,0x696969,null);
		baseManigliaMesh.rotation.x = Math.PI/2;

		var manigliaMesh1 = createCylinder(0.08,0.2,40,0x696969,null);
		manigliaMesh1.position.z = 0.1;
		manigliaMesh1.rotation.x = Math.PI/2;
		
		var manigliaMesh2 = createCylinder(0.08,0.6,40,0x696969,null);
		manigliaMesh2.position.z = 0.2;
		manigliaMesh2.position.x = 0.3;
		manigliaMesh2.rotation.z = Math.PI/2;
		
		var manigliaMesh3 = createSphere(0.08,20,0x696969,null);
		manigliaMesh3.position.z = 0.2;
		manigliaMesh3.position.x = 0.6;
		
		var manigliaMesh4 = createSphere(0.08,20,0x696969,null);
		manigliaMesh4.position.z = 0.2;
		
		var maniglia1 = new THREE.Object3D();
		maniglia1.add(manigliaMesh1);
		maniglia1.add(manigliaMesh2);
		maniglia1.add(manigliaMesh3);
		maniglia1.add(manigliaMesh4);
		maniglia1.add(baseManigliaMesh);
		maniglia1.scale.set(0.7,0.7,0.7);
		maniglia1.position.x = -2.74;
		maniglia1.rotation.z = -Math.PI/2;
		
		var perno1 = new THREE.Object3D();
		perno1.add(result2);
		perno1.add(maniglia1);
		perno1.add(internoFinestraMesh1);
		perno1.position.set(2.9,0,0);
		perno1.position.y = 2.5;
		//perno1.rotation.y = Math.PI/2;
		//scene.add(perno1);
		
		var perno2 = new THREE.Object3D();
		perno2.add(result3);
		perno2.add(internoFinestraMesh2);
		perno2.position.set(-2.9,0,0);
		perno2.position.y = 2.5;
		//perno2.rotation.y = -Math.PI/2;
		//scene.add(perno2);
		
		var finestra = new THREE.Object3D();
		finestra.add(result1);
		finestra.add(perno1);
		finestra.add(perno2);
		finestra.rotation.y = Math.PI;
		//finestra.position.y = 2;
		//scene.add(finestra);
		
		var animatorApertura = null;
		var animatorChiusura = null;
        var duration = 1; // sec
        var loopAnimation = false;
		
		function initAnimazioneAperturaFinestra() {
        animatorApertura = new KF.KeyFrameAnimator();
        animatorApertura.init({ 
          interps:
            [
              {
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:-Math.PI/2},
                  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0}
                ],
                target: maniglia1.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: Math.PI/2,z:0}
                ],
                target: perno1.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: -Math.PI/2,z:0}
                ],
                target: perno2.rotation
              },
            ],
          loop: loopAnimation,
          duration: duration * 1000,
          easing: TWEEN.Easing.Linear.None
        });
      }
	  
	  function initAnimazioneChiusuraFinestra() {
        animatorChiusura = new KF.KeyFrameAnimator();
        animatorChiusura.init({ 
          interps:
            [
              {
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
                  { x : 0 , y: 0,z:-Math.PI/2}
                ],
                target: maniglia1.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: Math.PI/2,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
                ],
                target: perno1.rotation
              },
			  { 
                keys:[0, 0.5, 1], 
                values:[
                  { x : 0 , y: -Math.PI/2,z:0},
				  { x : 0 , y: 0,z:0},
				  { x : 0 , y: 0,z:0},
                ],
                target: perno2.rotation
              },
            ],
          loop: loopAnimation,
          duration: duration * 1000,
          easing: TWEEN.Easing.Linear.None
        });
      }

      initAnimazioneAperturaFinestra();
	  initAnimazioneChiusuraFinestra();
	  
	  manigliaMesh2.interact = function(){
			if(manigliaMesh2.parent.parent.rotation.y == 0){
				animatorApertura.start();
				manigliaMesh2.parent.parent.rotation.y = Math.PI/2;
				}
			else{
				animatorChiusura.start();
				manigliaMesh2.parent.parent.rotation.y = 0;
				}
		};
		
		return finestra;
	}