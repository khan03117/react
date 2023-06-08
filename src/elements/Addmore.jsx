import React from 'react'

function Addmore(props) {
    const removeHandler = () => {
        let arr = props.multicount;
        arr.pop();
        props.setMulticount([...arr])
    }
    return (
        <>
            {
                (props.showbutton == true && props.multicount.length < 4) ? (<div className='col-md-4'>
                    <div className="w-100 h-100 d-flex align-items-center justify-content-between">
                        <button className="btn btn-outline-primary" onClick={() => props.setMulticount([...props.multicount, parseInt(props.multicount.length) + 1])}>
                            + Add More City
                            </button>
                        <div className={(props.multicount.length > 1) ? ('ps-2 border-start') : ('d-none')}>
                            <button onClick={removeHandler}  className="btn shadow-none rounded-circle btn-close  ">
                               
                            </button>

                        </div>
                    </div>
                </div>) : (

                    <div className={`${(props.showbutton == true) ? ('col-md-4') : ('d-none')} `}>
                        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                            <button onClick={removeHandler} className="btn shadow-none rounded-circle btn-close">
                                
                            </button>

                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Addmore