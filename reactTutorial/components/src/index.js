import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

// files from local
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments"> 
             <ApprovalCard>
                <CommentDetail author="james" timeAgo="Time at 3" comment="this is text" image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="bob" timeAgo="Time at 1" comment="this is textss" image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="jae" timeAgo="Time at 2" comment="this is texts" image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    words here !
                </div>
            </ApprovalCard>
        </div>
    )


}


ReactDOM.render(<App/>, document.querySelector('#root'))