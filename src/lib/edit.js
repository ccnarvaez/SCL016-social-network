const edit = () =>{
    const editTemplate = /*html*/
    `
    
        <div id="ex1" class="modal">
            <div>
                <input type= "text" placeholder= "edita tu publicacion">
                <div>
                    <button type= "button" class= "btn btn-success btn-sm"></button>
                </div>
            </div>
            <div>
                <!--<p><a href="#ex1" rel="modal:open">Open Modal</a></p> Esto va en showmessage-->
                <a href="#" rel="modal:close">Close</a>
            </div>
        </div>
        
    ` 
return editTemplate
}

export default edit;