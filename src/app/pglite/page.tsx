"use client";

import { ElectricProvider } from "@/app/ElectricWrapperPGLIte";

export default function Foo() {
  return (
    <ElectricProvider>
      <div>Foo</div>
    </ElectricProvider>
  );
}
