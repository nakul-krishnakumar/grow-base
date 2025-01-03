'use server';

import { writeClient } from "@/sanity/lib/write-client";

const toggleVisibility = async ( postId: string, flag: boolean ) => {
    try {       
        await writeClient.patch(postId).set({ isHidden: flag }).commit();

        return { success: true };
    } catch(error) {
        return { success: false, error };
    }

}

export default toggleVisibility;