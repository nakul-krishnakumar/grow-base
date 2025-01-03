import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { formatView } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

const View = async ({ id } : { id: string}) => {
    const { views: totalViews, isHidden } : {views: number, isHidden: boolean} = await client.withConfig({ useCdn: false}).fetch(STARTUP_VIEWS_QUERY, { id });

    // after is used to run the command inside it after sending a response to client
    // mainly used for logging and analytics
    after( async () => {
        if (!isHidden) {
            await writeClient
                .patch(id)
                .set({  views: totalViews + 1})
                .commit();
        }
    });


  return (
    <div className="view-container">
        <div className="absolute -top-2 -right-2">
            <Ping isHidden={isHidden} />
        </div>
        
        { isHidden ? (
            <p className="hidden-view-text">
                <span className="font-black">{formatView(totalViews)} : {totalViews ? totalViews : 0}</span>
            </p>
        ) : (
            <p className="view-text">
                <span className="font-black">{formatView(totalViews)} : {totalViews ? totalViews : 0}</span>
            </p>
        )}
    </div>
  )
}

export default View;