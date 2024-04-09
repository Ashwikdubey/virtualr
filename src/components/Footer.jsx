import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h5 className="text- font-medium mb-3">Resources</h5>
          <ul>
            {resourcesLinks.map((elem, index) => (
              <li key={index} className="mb-2">
                <a href={elem.href} className="text-neutral-600 text-sm ">
                  {elem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text- font-medium mb-3">Platform</h5>
          <ul>
            {platformLinks.map((elem, index) => (
              <li key={index} className="mb-2">
                <a href={elem.href} className="text-neutral-600 text-sm ">
                  {elem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text- font-medium mb-3">Community</h5>
          <ul>
            {communityLinks.map((elem, index) => (
              <li key={index} className="mb-2">
                <a href={elem.href} className="text-neutral-600 text-sm ">
                  {elem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
