import React from 'react'
import Comment from './Comment'

// For demo data we use an array of object.
const commentsData = [
    {
        name: "Ved",
        text: " What are you afraid of?? ",
        replies: []
    },
    {
        name: "Ved",
        text: " Who's there? ",
        replies: [
            {
                name: "Ved",
                text: " Why So Serious ",
                replies: []
            },
            {
                name: "Ved",
                text: " I'm Vengeance ",
                replies: [
                    {
                        name: "Ved",
                        text: " It's not me, it's You. ",
                        replies: []
                    },
                    {
                        name: "Ved",
                        text: " HIHIHIHHIHIHIHIHIHIH ",
                        replies: [
                            {
                                name: "Ved",
                                text: " HAHAHAHHAHAHAHAHHAHAHA ",
                                replies: [
                                    {
                                        name: "Ved",
                                        text: " AAAAAAAAAAAAAAAAAAAAAAAAAAA ",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Ved",
        text: " Tara Tara Tara ",
        replies: []
    },
    {
        name: "Ved",
        text: " Yes. It's Me ",
        replies: []
    },
    
]
const CommentList = ({comments}) => {
    //Don't use indexes as keys
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
        
    ));
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer

// <Comment data={commentsData[0]}/>