import React from 'react'
import styles from './form.module.css';

export default function form() {
  return (
    <div className='container-fluid'>
        <div className={styles.mainContainerWapper}>

       
        <div className={styles.headingHolder }><h3 className={styles.heading}>Create a product</h3></div>
        <div className='container-fluid'>
        <div className='container-fluid'>
            <form className={styles.formHolder}>
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

            </form>
        </div>
        </div>
        </div>
    </div>
  )
}
