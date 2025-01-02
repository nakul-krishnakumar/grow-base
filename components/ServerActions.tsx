"use client";

import { Eye, EyeOff, Trash2 } from "lucide-react";
import { client } from "@/sanity/lib/client";

interface StartupActionsProps {
  postId: string;
  isHidden: boolean;
}

const StartupActions = ({ postId, isHidden }: StartupActionsProps) => {
  const handleHidden = async (flag: boolean) => {
    await client.patch(postId).set({ isHidden: flag }).commit();
  };

  return (
    <div className="flex justify-end gap-2">
      <button className="delete-btn">
        Delete
        <Trash2 className="w-4" />
      </button>
      {isHidden ? (
        <button className="show-btn" onClick={() => handleHidden(false)}>
          Show
          <Eye className="w-4" />
        </button>
      ) : (
        <button className="hide-btn" onClick={() => handleHidden(true)}>
          Hide
          <EyeOff className="w-4" />
        </button>
      )}
    </div>
  );
};

export default StartupActions;