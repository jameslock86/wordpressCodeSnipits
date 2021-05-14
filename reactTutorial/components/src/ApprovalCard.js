import React from 'react'
import faker from 'faker'

import CommentDetail from './CommentDetail'
const ApprovalCard = props => {

    return (
        <div className="ui card">
            <div className="content">yes</div>
            <div className="exra content">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>

        </div>
    )
}
export default ApprovalCard