"use client";

import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../atom/modalAtom";

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Comments Modal {open && <h1>The Modal is Open</h1>}</h1>
    </div>
  );
}
