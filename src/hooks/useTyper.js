import { useEffect, useState } from "react";

// Types and deletes each word in the list, one after another.
export default function useTyper(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1100);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 40 : 85
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}
