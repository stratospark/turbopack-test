"use client";
import { useEffect, useState } from "react";

import { LIB_VERSION } from "electric-sql/version";
import { insecureAuthToken } from "electric-sql/auth";

import { makeElectricContext } from "electric-sql/react";
import { uniqueTabId } from "electric-sql/util";
import { electrify } from "electric-sql/pglite";
import { PGlite } from "@electric-sql/pglite";
// import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js";

import { Electric, schema } from "@/generated/client";

const { ElectricProvider, useElectric } = makeElectricContext<Electric>();

// We use a global database instance to avoid reinitializing the database
// when the component re-renders under React strict mode.
let db: PGlite;

const { tabId } = uniqueTabId();
const scopedDbName = `idb://basic-${LIB_VERSION}-${tabId}.db`;

const ElectricProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [electric, setElectric] = useState<Electric>();

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const config = {
        // debug: import.meta.env.DEV,
        // url: import.meta.env.ELECTRIC_SERVICE,
        debug: true,
        url: "http://127.0.0.1:5133",
      };

      db ??= new PGlite(scopedDbName, {
        relaxedDurability: true,
      });
      const client = await electrify(db, schema, config);
      const token = insecureAuthToken({ sub: "dummy" });

      await client.connect(token);

      if (!isMounted) {
        return;
      }

      setElectric(client);
    };

    const cleanup = async () => {
      if (electric) {
        await electric.close();
      }
    };

    init();

    return () => {
      cleanup();
      isMounted = false;
    };
  }, []);

  if (electric === undefined) {
    return null;
  }

  return <ElectricProvider db={electric}>{children}</ElectricProvider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ElectricProviderComponent as ElectricProvider, useElectric };
