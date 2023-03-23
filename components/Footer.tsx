import React from "react";

import { footerList1, footerList2, footerList3 } from "../utils/constants";

const Footer = () => {
  const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
    <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
      {items.map((item) => (
        <p
          key={item}
          className="text-gray-400 text-sm hover:underline cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );

  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <p className="text-gray-400 text-sm mt-5">2023 Chobby TikTik</p>
    </div>
  );
};

export default Footer;
