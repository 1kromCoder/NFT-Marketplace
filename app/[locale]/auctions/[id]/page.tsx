import { SingleAuctionContent } from "@/modules";
import React from "react";

const SingleAuctionPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <SingleAuctionContent />;
};

export default SingleAuctionPage;
