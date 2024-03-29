"use client";

import { useRef } from "react";
import useScript from "../../../lib/comments";

export default function Comments() {
  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "photon-dark",
    repo: "sqsung/jsjs.blog",
    issueTerm: "pathname",
    ref: comment,
  });

  return <div className="w-full">{<div ref={comment} />}</div>;
}
