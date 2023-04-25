import LoadingTrending from "./LoadingTrending";
import LoadingList from "./LoadingList";
import PageLayoutLoading from "./PageLayoutLoading";

const PageLoading = () => {
    return (
        <PageLayoutLoading>
            <>
                <LoadingTrending />
                <LoadingList />
            </>
        </PageLayoutLoading>
    );
};

export default PageLoading;
