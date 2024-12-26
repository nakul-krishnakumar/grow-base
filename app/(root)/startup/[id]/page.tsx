import { StartupCardType } from "../../page";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

const StartupPage = async ({ params } : { params: Promise<{ id: string }>}) => {
    const id = (await params).id;


    console.log({ id })
    const post: StartupCardType[] = await client.fetch(STARTUP_BY_ID_QUERY, { id }); 

    if (!post) return notFound();
  return (
    <>

    </>
  )
}

export default StartupPage;