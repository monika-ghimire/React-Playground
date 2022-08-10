import SideNav from "./SideNav";
import Imgesholder from "./Imgesholder";

function Container() {

  function onclickproprs()
  {
    alert("you  click on home")
  }
  return (
    <>
      <div className="container text-center">
        <div className="row ">
          <div className="col">
            <SideNav head="here proprs pass" Contact="here props Contact" propFunction={onclickproprs}/>
            
          </div>
          
          <div className="col">
            <Imgesholder />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Container;
