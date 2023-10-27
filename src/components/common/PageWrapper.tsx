interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex h-full w-full justify-center gap-5 px-5 py-7">
      {children}
    </div>
  );
}
