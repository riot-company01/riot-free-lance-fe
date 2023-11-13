import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Profile } from "@/components/user/profile";
import { initializeApollo, addApolloState } from "@/lib/apollo/client";

export const getServerSideProps = withPageAuthRequired({
  // @ts-ignore
  async getServerSideProps() {
    const client = initializeApollo({});
    const documentProps = addApolloState(client, {
      props: {},
    });
    return {
      props: documentProps.props,
    };
  },
});

function UserProfile() {
  return <Profile />;
}

export default UserProfile;
