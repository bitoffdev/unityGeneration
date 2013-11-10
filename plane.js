function createPlane(width, height, orientation){
	/*Divide width and height by two to get to distance from the plane's centerpoint to edge*/
	var halfW = width/2;
	var halfH = height/2;
	/*Define a Mesh() Object variable*/
	var meshObj : Mesh = new Mesh();
	/*Check if plane should be vertical of horizontal*/
	if (orientation=="vertical"){
		/*Define the vertices of the Mesh*/
		meshObj.vertices = [Vector3(-halfW, -halfH, 0), Vector3(halfW, -halfH, 0), Vector3(halfW, halfH, 0), Vector3(-halfW, halfH, 0)];
	} else{
		/*Define the vertices of the Mesh*/
		meshObj.vertices = [Vector3(-halfW, 0, -halfH), Vector3(halfW, 0, -halfH), Vector3(halfW, 0, halfH), Vector3(-halfW, 0, halfH)];
	}
	/*Assign the base texture coordinates of the mesh.*/
	meshObj.uv = [Vector2 (0, 0), Vector2 (0, 1), Vector2(1, 1), Vector2 (1, 0)];
	/*Connect the vertices into two triangles that form a rectangular plane*/
	meshObj.triangles = [0, 1, 2, 0, 2, 3];
	/*Recalculate the normals of the mesh from the triangles and vertices.*/
	meshObj.RecalculateNormals();
	/*Define a variable as a new gameobject with a MeshRenderer, MeshFilter, and MeshCollider attached to it.*/
	/*Name the game object "plane"*/
	var obj : GameObject = new GameObject("plane", MeshRenderer, MeshFilter, MeshCollider);
	/*Attach the new mesh to the game object's mesh filter*/
	obj.GetComponent(MeshFilter).mesh = meshObj;
	/*Return the created plane*/
	return obj;
}
