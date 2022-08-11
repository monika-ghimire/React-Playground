import React from 'react'
import styles from './form.module.css';

export default function form() {
   

const submitForm=(event)=>{
    event.preventDefault();
    let product=event.target;
    var newproduct={
        product_name:product[0].value,
        product_family:product[1].value,
        product_from_inventory:product[2].value,
        Year_product_release:product[3].value,
        Type_of_product:product[4].value,
        Dimensions_the_product:product[5].value,
        Image_of_product :product[5].value
    }
    console.log(newproduct);


}


  return (
    <div className='container-fluid'>
        <div className={styles.mainContainerWapper}>
        <div className={styles.headingHolder }><h3 className={styles.heading}>Create a product</h3></div>
        <div className='container-fluid'>
        <div className='container-fluid'>
            <form className={styles.formHolder} onSubmit={submitForm}>
                <div className={styles.formBoxHolder}> <p className={styles.heading}>product name</p>
                    <input className={styles.inputHolder} placeholder='pixel 6 plus'/>
                </div>
                <div className={styles.formBoxHolder }> <p className={styles.heading}>product family name</p>
                    <select className={styles.inputHolder}  aria-label="Default select example">
                          <option selected>pixel 6 plus</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                    </select>
                </div>
                <div className={styles.margin}>
                    <p className={styles.heading}>select product from inventory</p>
                    <button type="button" class="btn btn-primary">select</button>
                </div>
                <div className={styles.formBoxHolder}> <p className={styles.heading}> Year product release</p>
                    <input className={styles.inputHolder} placeholder='Enter the year the productrelease here'/>
                </div>
                <div className={styles.formBoxHolder }> <p className={styles.heading}> Type of product </p>
                    <select className={styles.inputHolder}  aria-label="Default select example">
                          <option selected>Choose the type of product</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                    </select>
                </div>
                <div className={styles.margin}>
                    <p className={styles.heading}>Dimensions of the product(mm)</p>
                   <div className='row'>
                    <div className='col'>     
                        <input className={styles.inputHolder2} placeholder='0  mm'/>Length
                    </div>
                    <div className='col'>
                    <input className={styles.inputHolder2} placeholder='0  mm'/>Width
                    </div>
                    <div className='col'>
                    <input className={styles.inputHolder2} placeholder='0  mm'/>Height
                    </div>
                   </div>
                </div>
                <div className={styles.formBoxHolder}> <p className={styles.heading}>Image of product (Visual)</p>
                  <div>File_name_of_image.png</div>
                  <div class="custom-file">
                  <input type="file" className="custom-file-input" id="customFile"/>
                  <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
                </div>
            <input type="submit" ></input>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}
