 

 import styles from './Imgesholder.module.css';
//  import perosn from './image/perosn3';
//  import proson2 from './image/proson2';

 function Imgesholder(){
    return(
        <>
           <h3>Hover over the box below:</h3>
  <ul className={styles.contendholder}>
  <li className={styles.one}>
    <div className={styles.flipbox}>
      <div className={styles.flipboxinner}>
        <div className={styles.flipboxfront}>
        <img src="./Componets/image/perosn3.png"/>
       <div> <p>Name:Preson Name</p></div>
        </div>
        
        <div className={styles.flipboxback}>
          <p>Address: something-16,nepal</p>
          <p>eduction:master </p>
        </div>
      </div>
    </div>
  </li>  
  <li className={styles.one}>
  <div className={styles.flipbox}>
      <div className={styles.flipboxinner}>
        <div className={styles.flipboxfront}>
       
       <div> <p>Name:Preson Name</p></div>
        </div>
        
        <div className={styles.flipboxback}>
          <p>Address: something-16,nepal</p>
          <p>eduction:master </p>
        </div>
      </div>
    </div>
  </li>
 
   
</ul> 
        </>
    )
 }
 export default Imgesholder;