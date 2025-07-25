"use client";
import {
  CopyIcon,
  Discord,
  GlobalIcon,
  Insta,
  PlusIcon,
  Twiter,
  Youtube,
} from "@/assets/icons";
import {
  Button,
  Heading,
  NestedRouteCaption,
  shortenId,
  Text,
} from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import { CollectionsNested, Created, Owned } from "../SingleNested";
import { ArtistType } from "@/@types/ArtistType";
import { API } from "@/hooks/getEnv";
import { NftType2 } from "@/@types/NftType";
import Link from "next/link";

const SingleArtisContent = ({
  singleArtist,
  ownedList,
  activeCollection,
}: {
  singleArtist: ArtistType;
  ownedList: NftType2[];
  activeCollection?: boolean;
}) => {
  const [active, setActive] = useState<"created" | "owned" | "collections">(
    activeCollection ? "collections" : "created"
  );
  const routeList = [
    {
      id: 1,
      title: "Created",
      count: singleArtist.createdNFTs.length,
      path: "created",
    },
    { id: 2, title: "Owned", count: ownedList.length, path: "owned" },
    {
      id: 3,
      title: "Collections",
      count: singleArtist.collections.length,
      path: "collections",
    },
  ];
  const links = [
    { id: 1, icon: <GlobalIcon />, href: singleArtist.globeAccLink },
    { id: 2, icon: <Discord />, href: singleArtist.discordAccLink },
    { id: 3, icon: <Youtube />, href: singleArtist.youtubeAccLink },
    { id: 4, icon: <Twiter />, href: singleArtist.twitterAccLink },
    { id: 5, icon: <Insta />, href: singleArtist.instagramAccLink },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/single-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[320px] "
      ></div>
      <div className="containers">
        <Image
          className="w-[120px] mt-[-60px] h-[120px] mb-[40px]"
          src={`${API}/file/${singleArtist.image}`}
          alt="Artist img"
          width={120}
          height={120}
          priority
        />
        <div className="!mb-[40px] flex justify-between">
          <div>
            <Heading classList="!text-[51px] !mb-[30px]" tag="h1">
              {singleArtist.username}
            </Heading>
            <div className="flex items-center gap-[20px] !mb-[30px]">
              <div className="w-[156px]">
                <strong className="text-[28px] leading-[140%] text-white">
                  250k+
                </strong>
                <Text classList="!text-[22px]">Volume</Text>
              </div>
              <div className="w-[156px]">
                <strong className="text-[28px] leading-[140%] text-white">
                  50k+
                </strong>
                <Text classList="!text-[22px]">NFTs Sold</Text>
              </div>
              <div className="w-[156px]">
                <strong className="text-[28px] leading-[140%] text-white">
                  300k+
                </strong>
                <Text classList="!text-[22px]">Followers</Text>
              </div>
            </div>
            <Text classList="!text-[22px] !text-[#858584] !mb-[10px]">Bio</Text>
            <Text classList="!text-[22px] !text-white !mb-[30px]">
              {singleArtist.bio}
            </Text>
            <div>
              <Text classList="!text-[22px] !text-[#858584]">Links</Text>
              <div className="flex gap-[10px] mt-[10px]">
                {links.map((item, index) => (
                  <Link
                    target="_blank"
                    className="hover:scale-[1.2] duration-300"
                    key={index}
                    href={`https://${item.href}`}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] self-start">
            <Button
              onClick={() => navigator.clipboard.writeText(singleArtist.id)}
              variant="filled"
              type="button"
              icon={<CopyIcon />}
              iconPostion="left"
              title={shortenId(singleArtist.id)}
            />
            <Button
              variant="outlined"
              type="button"
              icon={<PlusIcon />}
              iconPostion="left"
              title={"Follow"}
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <NestedRouteCaption
            setPeriod={setActive}
            period={active}
            routeList={routeList}
          />
        </div>
      </div>
      <div className="py-[80px] bg-[#3B3B3B]">
        <div className="containers">
          {active == "created" ? <Created singleArtist={singleArtist} /> : ""}
          {active == "owned" ? <Owned ownedList={ownedList} /> : ""}
          {active == "collections" ? (
            <CollectionsNested singleArtist={singleArtist} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SingleArtisContent;
