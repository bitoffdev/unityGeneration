function createMaterial(color, shade){
	/*Check if shader exists*/
    if (!Shader.Find(shade)){
    	/*Default to Diffuse if the shader does not exist*/
    	shade = "Diffuse";
    }
    /*Create a new material with the shader*/
    var mat = new Material(Shader.Find(shade));
    /*Set the material's color*/
    mat.color = color;
    /*Return the created material*/
    return mat;
}
