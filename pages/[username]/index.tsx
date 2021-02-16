import {getUserWithUsername, postToJSON} from '../../lib/firebase';
import UserProfile from '../../components/userProfile';
import PostFeed from '../../components/PostFeed';






export default function UserProfilePage ({user, posts}) {
    return (
        <main>
            <h1>User profile</h1>
            <UserProfile user={user} />
            <PostFeed posts={posts} />
        </main>       
    )
}


