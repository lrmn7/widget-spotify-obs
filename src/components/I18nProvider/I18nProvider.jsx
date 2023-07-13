import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import messages from "../../i18n/translations";

const Layout = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useLocalStorage("locale", "id");
  const [locale, setLocale] = useState(selectedLocale);
  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={messages[locale]}
      onError={() => {}}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ cursor: "pointer", marginRight: 16 }}
          src="/indonesia.svg"
          onClick={() => setLocale("id")}
          width={40}
          alt="id-ID"
        />
        <img
          style={{ cursor: "pointer" }}
          src="/united-states.svg"
          onClick={() => setLocale("en")}
          width={40}
          alt="en-US"
        />
      </div>
      {children}
    </IntlProvider>
  );
};

export default Layout;
