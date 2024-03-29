interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen w-full flex-col gap-0 sm:gap-5">
      {children}
    </div>
  );
}
