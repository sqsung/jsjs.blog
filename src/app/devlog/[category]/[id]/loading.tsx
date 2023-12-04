import { MainContents } from "@/components/common";
import { EmptyBlogMessage } from "@/components/devlog";
import PostHeaderSkeleton from "@/components/devlog/PostHeaderSkeleton";
import { CircularProgress } from "@mui/material";

export default function PostLoading() {
  return (
    <MainContents>
      <div className="flex h-full w-full flex-col content-center items-center gap-2 p-3 sm:gap-10 sm:p-10 lg:w-[60%]">
        <div className="w-full">
          <PostHeaderSkeleton />
        </div>
        <EmptyBlogMessage icon={<CircularProgress />} />
      </div>
    </MainContents>
  );
}
