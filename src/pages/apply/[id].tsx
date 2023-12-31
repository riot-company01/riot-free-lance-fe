import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Apply as _Apply } from "@/components/apply";
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

function Apply() {
  return <_Apply />;
}

export default Apply;
