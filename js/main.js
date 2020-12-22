// author: max wiesner
// personal website portfolio

var courseObjects = [];
var workObjects = [];

var alignState =
{
        courseView: [],
        courseMainView: [],
        mainView: [],
        workView: [],
        workMainView: []
};

var controls, camera, scene, cssRenderer, root, root2;
var educationToggle = false;
var workToggle = false;

init();



function init() {

    cssRenderer = createCssRenderer();
    document.body.appendChild(cssRenderer.domElement);
    root = new THREE.Object3D();
    root2 = new THREE.Object3D();
    
    mouse = new THREE.Vector2();
    scene = new THREE.Scene();
    scene.add(root);
    scene.add(root2);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000);
    camera.position.set(0, 100, 3000);

    controls = new THREE.TrackballControls(camera, cssRenderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    populateContentArrays();
    initViewCoordinates();
    initTwirlingCoordinates();

    transform(courseObjects.concat(workObjects), alignState.mainView, 500);
    
    document.getElementById('education').addEventListener('click', function(x) {
        if (educationToggle) {
            transform(courseObjects, alignState.courseMainView, 1000);

            educationToggle = false;
        } else {
            transform(courseObjects, alignState.courseView, 1000);
            educationToggle = true;
        }
    }, false);
    
    document.getElementById('work').addEventListener('click', function(x) {
        if (educationToggle) {
            transform(workObjects, alignState.workMainView, 1000);
            workToggle = false;
        } else {
            transform(workObjects, alignState.workView, 1000);
            workToggle = true;
        }
    }, false);
    
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    
    animate();
}

function initTwirlingCoordinates() {

    var vector = new THREE.Vector3();
    var courseLength = courseArray.length;
    var workLength = workObjects.length;
    var totalLength = courseLength + workLength;

    for (var i = 0; i < totalLength; i += 1) {

        var obj = new THREE.Object3D();
        var courseFormula = 2 * Math.PI *  i  / courseLength;
        var workFormula = 2 * Math.PI * i  / workLength;

        if (i < courseLength) {
            obj.position.x = ( 900 * Math.cos(courseFormula) );
            obj.position.y = ( 900 * Math.sin(courseFormula) );
            obj.position.z = 0;
        } else {
            obj.position.x = ( 900 * Math.cos(workFormula) );
            obj.position.y = 0;
            obj.position.z = ( 900 * Math.sin(workFormula) );
        }

        vector.copy( obj.position ).multiplyScalar( 2 );
        obj.lookAt(vector);
        alignState.mainView[i] = obj;
    }
}

function initViewCoordinates() {

    // courses and education 
    for (var i = 0; i < courseArray.length; i += 1) {

        var educCoord = new THREE.Object3D();
        educCoord.position.x = courseArray[i].position[0] * 385;
        educCoord.position.y = ( courseArray[i].position[1] ) * 155;
        educCoord.position.z = 3000;
   
        alignState.courseView[i] = educCoord;
    }
    // work history
    for (var i = 0; i < workArray.length; i += 1) {

        var workContentCoord = new THREE.Object3D();
        var workHeaderCoord = new THREE.Object3D();

        workContentCoord.position.x = workArray[i].contentPos[0] * 385;
        workContentCoord.position.y = workArray[i].contentPos[1] * 385;
        workContentCoord.position.z = 3000;
        
        workHeaderCoord.position.x = workArray[i].headerPos[0] * 385;
        workHeaderCoord.position.y = workArray[i].headerPos[1] * 385;
        workHeaderCoord.position.z = 3000;

        alignState.workView[i * 2] = workHeaderCoord;
        alignState.workView[i * 2 + 1] = workContentCoord;
    }
}


function populateContentArrays() {

    // courses and education 
    for (var i = 0; i < courseArray.length; i += 1) {

        var courseDiv = document.createElement('div');
        courseDiv.className = 'element';

        courseDiv.innerHTML = '<div class="header">' +
            courseArray[i].type + ' ' + courseArray[i].number +
            '</div>' +
            '<div>' +
            '<h5 class="name">' + courseArray[i].name + '</h5>' +
            '<p class="details">' + courseArray[i].description + '</p>'
            '</div>';

        var courseObj = new THREE.CSS3DObject(courseDiv);
        // scene.add(courseObj);
        root.add(courseObj);
        courseObjects[i] = courseObj;
    }

    // work history
    for (var i = 0; i < workArray.length; i += 1) {

        var workDiv = document.createElement('div');
        workDiv.className = 'work-element';

        var workHeaderDiv = document.createElement('div');
        workHeaderDiv.className = 'work-header-element';

        var tools = '';
        for (var j = 0; j < workArray[i].tools.length; j += 1) {
            tools += '<li>' + workArray[i].tools[j] + '</li>';
        }
    
        workHeaderDiv.innerHTML = '<div class="header">' +
            '<h5 class="name">' + workArray[i].title + '</h5>' + 
            workArray[i].timeline + '<div>';

        workDiv.innerHTML = '<div class="header">' + '<h5 class="name">' + 
            workArray[i].timeline + '</h5>' + '<p class="details">' + 
            workArray[i].description + '</p>' + '<ol class="work-tools">' + 
            tools + '</ol>' + '</div>';

        var workObj = new THREE.CSS3DObject(workDiv);
        var workObj2 = new THREE.CSS3DObject(workHeaderDiv);

        root2.add(workObj);
        root2.add(workObj2);

        workObjects[i * 2] = workObj;
        workObjects[i * 2 + 1] = workObj2; 
    }
}


function transform(start, end, duration) {
    TWEEN.removeAll();
    for (var i = 0; i < start.length; i++) {

        var object = start[i];
        var target = end[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, 
                Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, 
                Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
}

function createCssRenderer() {

    var cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.top = 0;

    return cssRenderer;
}


function render() {
    
    cssRenderer.render(scene, camera);
}


function animate() {
    
    const time = Date.now() * 0.0004;

    if (!educationToggle) {
        root.rotation.x = time;
        root.rotation.y = time * 0.6;

        root2.rotation.x = time * 0.6;
        root2.rotation.y = time;
    }

    scene.updateMatrixWorld();
    controls.update();
    TWEEN.update();
    render();
    requestAnimationFrame(animate);
}


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function onDocumentMouseMove(event) {

    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}