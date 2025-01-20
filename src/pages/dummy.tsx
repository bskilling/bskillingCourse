import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
// interface IDummyProps {
//   query: unknown;
//   param: unknown;
// }
function Dummy() {
  const route = useRouter();
  console.log(route.query);
  return <div>dummy</div>;
}
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log(JSON.stringify(context.query));
//   return {
//     props: {
//       query: context.query || {},
//       param: context.params || {},
//     },
//   };
// }

export default Dummy;
