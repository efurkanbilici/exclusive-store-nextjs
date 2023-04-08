import ErrorLayout from "@/components/errorLayout";

export default function Custom500() {
  return (
    <ErrorLayout
      title="Something went wrong."
      desc="Server error: please try again later."
    />
  );
}
