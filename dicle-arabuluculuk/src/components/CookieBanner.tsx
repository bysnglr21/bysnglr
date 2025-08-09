"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dac_cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = window.localStorage.getItem(STORAGE_KEY);
    setVisible(consent !== "accepted");
  }, []);

  if (!visible) return null;

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container mb-4">
        <div className="card p-4 shadow-lg">
          <p className="text-sm">
            Deneyiminizi iyileştirmek için yalnızca gerekli çerezleri kullanıyoruz. Detaylar için {" "}
            <a className="underline" href="/gizlilik">gizlilik politikamızı</a> ve {" "}
            <a className="underline" href="/cerezler">çerez politikasını</a> inceleyin.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="btn btn-primary" onClick={accept}>Kabul Et</button>
            <button className="btn" onClick={reject}>Reddet</button>
          </div>
        </div>
      </div>
    </div>
  );
}