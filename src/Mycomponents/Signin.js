import React from 'react'

export default function Signin(props) {
   
    var updatename = (e) => {
         props.takenname(e.target.value);
        // props.takenname("ho");

    }
    // const helo=()=>{
    //     console.log("hii")
    // }

    return (
        <div >
            <div className="card container-xxl my-5 py-5 offset-md-4" style={{ width: "30rem" }} >
                <p className="text-center fw-bold fs-3">LOGIN FORM</p>
                <div className="card-body">
                    <form className="row g-3 " >
                        <div className="input-group input-group-md mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm-1">Name</span>
                            <input type="text" className="form-control" onChange={updatename} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-md mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm-2">Phone number</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-md mb-3">
                            <span htmlFor="inputEmail4" className="input-group-text">Email</span>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="input-group input-group-md mb-3">
                            <span htmlFor="inputPassword4" className="input-group-text">Password</span>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>

                        <div className="col-12">
                            <button type="button"  onClick={props.componentdisplay} className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
