function creaVideo(){

	var videoTV = new THREE.Object3D();

	var $video = $('#video');
	   $video.hide();
       var video = $video[0];
	   video.pause();
	   
	   texture = new THREE.Texture(video);
       texture.minFilter = THREE.LinearFilter;
       texture.magFilter = THREE.LinearFilter;
       texture.format = THREE.RGBFormat;
       texture.generateMipmaps = false;
	   
	   function createVideo (geom) {
          materialArray = [];
          materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
          materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
          materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
          materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555   }));
          materialArray.push(new THREE.MeshBasicMaterial({ map: texture }));
          materialArray.push(new THREE.MeshBasicMaterial({ color: 0xeeee33  }));
          var faceMaterial = new THREE.MeshFaceMaterial(materialArray);

          // create a multimaterial
          mesh = new THREE.Mesh(geom, faceMaterial);

          return mesh;
        }
		
	    //videoTV;
        pianoVideo = createVideo(new THREE.BoxGeometry(4.7, 2.6, 0.05));
		pianoVideo.rotation.y = Math.PI/2;
        pianoVideo.position.set(2.25,6.05,6);
        //scene.add(videoTV);

		var time = 0;
		
		pianoVideo.interact = function(){
			if(video.currentTime == time){
				pianoVideo.material.materials[4].map = texture;
				video.play();
				}
			else{
				time = video.currentTime;
				video.pause();
				pianoVideo.material.materials[4].map = THREE.ImageUtils.loadTexture("assets/textures/Progetto/Nero.jpg");
				}
		};
		
		videoTV.add(pianoVideo);
		return videoTV;
};