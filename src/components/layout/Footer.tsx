import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const general = await getTranslations("General");

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <h2 className="text-2xl font-bold">
              {general("brand")}
            </h2>

            <p className="mt-2 text-sm text-neutral-400">
              Al-Hilal Building Materials Factory
            </p>
          </div>

          <p className="text-sm text-neutral-400">
            © 2026 Al-Hilal. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}