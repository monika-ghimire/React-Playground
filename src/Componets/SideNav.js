 
 import styles from './sidenav.module.css';
 const handleKeyUp = (event) => {
   let list=[]
   list.push(event.key)
   let show=document.getElementById('show')
   show.innerText=(list);
   console.log(list)
 }
 function SideNav(props){
    function recivePropsFunction()
    {
       props.propFunction()
    }
    return(
        <>
         <div className={styles.sidebar}>
  <button className={styles.active} href="#home" onClick={recivePropsFunction}>Home</button>
  <button href="#news" onClick={recivePropsFunction }>{props.head}</button>
  <a href="#contact">{props.Contact}</a>
  <input type="text"   onKeyUp={handleKeyUp}/>
   </div>
   <div id="show">{}</div>
        </>
    )
 }
 export default SideNav;