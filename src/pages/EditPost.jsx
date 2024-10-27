import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../components";


function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug)
            .then((post) => {
                if(post) {
                    console.log(post);
                    setPost(post);
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate]);

    return (
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    )
}

export default EditPost;
