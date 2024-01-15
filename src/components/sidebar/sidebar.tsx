import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getFolders, getUserSubscriptionStatus } from "@/lib/supabase/queries";
import { error } from "console";
import { redirect } from "next/navigation";
interface SidebarProps {
  params: { workspaceId: string };
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = async ({ params, className }) => {
  const supabase = createServerComponentClient({ cookies });
  //user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  //subsccr
  const { data: subscriptionData, error: subscriptionError } =
    await getUserSubscriptionStatus(user.id);
  //folders
  const { data: foldersData, error: foldersError } = await getFolders(
    params.workspaceId
  );

  //error
  if (subscriptionError || foldersError) redirect("/dashboard");

  return <div>Sidebar</div>;
};

export default Sidebar;
