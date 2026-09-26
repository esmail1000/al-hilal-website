type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export default function PagePlaceholder({
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-bold">{title}</h1>

      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
    </section>
  );
}