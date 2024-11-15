
function Contacts(){
    return(
        <div className="flex p-4">
            <a href="https://github.com/LychellePham" className="p-4 ">
                <img className="h-8 fill-my-blue hover:scale-110 hover:fill-blue-500 transition-colors" src="./src/assets/github-icon.svg"/>
                
            </a>

            <a href="https://www.linkedin.com/in/lychelle-pham-4b70332b9/" className="p-4">
                <img className="h-8 fill-my-blue hover:scale-110 hover:fill-blue-500 transition-colors" src="./src/assets/linkedin-square-icon.svg"/>
            </a>


        </div>
    );
}

export default Contacts;