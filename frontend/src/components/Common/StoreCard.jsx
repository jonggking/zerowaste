import React from "react"
import StarRate from "./StarRate.jsx"

function StoreCard({...props}) {
    const {favStore}= props
    console.log(favStore)

  return(
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-8">
                <div className="card-body">
                    <div className="row">
                         <h3 className="col text-dark">
                        {"name" in favStore ? favStore.name : "매장 명"}
                        </h3>
                        <h5 className="col text-secondary">
                        {"address_detail" in favStore ? favStore.address_detail : "상세 주소"}
                        </h5>
                        <div className="col"><StarRate star={favStore.star_avg} /></div>
                    </div>
                    <p className="card-text text-secondary">
                    {"description" in favStore ? favStore.description : "설명"}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreCard;
