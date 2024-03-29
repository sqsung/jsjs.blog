import { formatCategoryForUI, getPostsByCategory } from "../../../../lib/posts";
import { BlogList } from "@/components/devlog";
import { Pagination } from "@/components/common";
import { MainContents, Divider } from "@/components/common";

interface CategoryPageProps {
  params: {
    category: string;
    page: number;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { totalPages, categorizedPosts, totalPosts } = await getPostsByCategory(
    params.category,
    params.page,
  );

  return (
    <MainContents>
      <div className="flex w-full flex-col gap-5 sm:px-[10%] md:px-[20%]">
        <div className="flex max-w-[1150px] flex-col px-5 py-5 sm:mb-5 sm:px-0">
          <p className="title-text text-[30px] font-bold">
            {formatCategoryForUI(params.category)}
          </p>
          <p className="subtle-text text-[18px]">
            A total of {totalPosts} post{totalPosts > 1 ? "s" : ""}
          </p>
          <Divider />
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-10">
          <BlogList blogs={categorizedPosts} isOnMain={false} />
          <Pagination
            pagesCount={totalPages}
            category={params.category}
            page={params.page}
          />
        </div>
      </div>
    </MainContents>
  );
}
