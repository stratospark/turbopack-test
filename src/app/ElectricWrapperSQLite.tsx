"use client";

// wrapper.tsx
import React, { ReactNode, useEffect, useState } from "react";
import { insecureAuthToken } from "electric-sql/auth";
import { makeElectricContext } from "electric-sql/react";
import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite";
import { Electric, schema } from "@/generated/client";

export const { ElectricProvider, useElectric } =
  makeElectricContext<Electric>();

export const ElectricWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [electric, setElectric] = useState<Electric>();

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const config = {
        debug: true,
        url: process.env.NEXT_PUBLIC_ELECTRIC_SYNC_URL,
      };
      const conn = await ElectricDatabase.init("electric.db");
      const electric = await electrify(conn, schema, config);
      const token = insecureAuthToken({ sub: "dummy" });
      await electric.connect(token);

      if (!isMounted) {
        return;
      }

      setElectric(electric);
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);

  if (electric === undefined) {
    return null;
  }

  return <ElectricProvider db={electric}>{children}</ElectricProvider>;
};
