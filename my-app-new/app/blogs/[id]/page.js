export default function BlogPage({params}){
    const {id} = params;
    return(
        <div>
            the blog id is: {id}
        </div>
    )
}