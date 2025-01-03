"use server"

import { writeClient } from "@/sanity/lib/write-client";

const deleteStartup = async (startupId: string) => {
    await writeClient.delete(startupId);
}

export default deleteStartup;