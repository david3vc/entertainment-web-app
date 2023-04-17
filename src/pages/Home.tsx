import { useState } from "react";
import { PageLayout } from "../components/page-layout";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import { SearchMultiResponseModel } from "../types";

const Home = () => {
    const [data, setData] = useState<SearchMultiResponseModel>();
    return (
        <PageLayout>
            <>
                <Search setData={setData} />
                <Trending />
                <Recommended data={data} />
            </>
        </PageLayout>
    );
};

export default Home;
