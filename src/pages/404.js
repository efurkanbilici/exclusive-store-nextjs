import ErrorLayout from "@/components/errorLayout";

export default function Custom404() {
  return (
    <ErrorLayout
      title="There is no such page :/"
      desc="The page may have expired or never existed."
    />
  );
}
