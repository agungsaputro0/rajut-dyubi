import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import NeverMissAPost from "../molecules/NeverMissAPost";
import BlogContent from "../molecules/BlogContent";
import FeaturedPosts from "../molecules/FeaturedPost";
import BlogCatalog from "../molecules/BlogCatalog";

const Blog = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <BlogContent />
                <FeaturedPosts />
                <BlogCatalog />
                <NeverMissAPost />
            </LoginTemplate>
        </AuthShell>
    )
}

export default Blog;